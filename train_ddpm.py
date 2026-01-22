"""
DDPM Training Script
Complete training pipeline with reverse denoising and generation
"""

import torch
import torch.nn as nn
import torch.optim as optim
from torch.utils.data import DataLoader
from torchvision import datasets, transforms
import matplotlib.pyplot as plt
from tqdm import tqdm
import os

from ddpm_forward import ForwardDiffusion, simple_loss
from unet_model import create_model


def train_epoch(model, dataloader, optimizer, forward_diffusion, device):
    """
    Train the model for one epoch.
    
    Args:
        model: U-Net model
        dataloader: Training data loader
        optimizer: Optimizer
        forward_diffusion: ForwardDiffusion instance
        device: Device to train on
        
    Returns:
        Average loss for the epoch
    """
    model.train()
    total_loss = 0.0
    num_batches = 0
    
    pbar = tqdm(dataloader, desc="Training")
    for batch_idx, (images, _) in enumerate(pbar):
        images = images.to(device)
        batch_size = images.shape[0]
        
        # Sample random timesteps for each image in the batch
        t = torch.randint(0, forward_diffusion.timesteps, (batch_size,), device=device)
        
        # Compute loss
        loss = simple_loss(model, images, t, forward_diffusion)
        
        # Backpropagation
        optimizer.zero_grad()
        loss.backward()
        optimizer.step()
        
        # Track loss
        total_loss += loss.item()
        num_batches += 1
        
        # Update progress bar
        pbar.set_postfix({'loss': f'{loss.item():.4f}'})
    
    avg_loss = total_loss / num_batches
    return avg_loss


@torch.no_grad()
def p_sample(model, x, t, forward_diffusion):
    """
    Sample x_{t-1} from p(x_{t-1}|x_t) - single denoising step
    
    Args:
        model: Trained U-Net
        x: Noisy image at timestep t
        t: Current timestep
        forward_diffusion: ForwardDiffusion instance
        
    Returns:
        Denoised image at timestep t-1
    """
    # Predict noise
    predicted_noise = model(x, t)
    
    # Get schedule values
    alpha = forward_diffusion.alphas[t]
    alpha_bar = forward_diffusion.alphas_cumprod[t]
    alpha_bar_prev = forward_diffusion.alphas_cumprod_prev[t]
    beta = forward_diffusion.betas[t]
    
    # Reshape for broadcasting
    alpha = alpha.view(-1, 1, 1, 1)
    alpha_bar = alpha_bar.view(-1, 1, 1, 1)
    alpha_bar_prev = alpha_bar_prev.view(-1, 1, 1, 1)
    beta = beta.view(-1, 1, 1, 1)
    
    # Compute mean of p(x_{t-1}|x_t)
    mean = (1.0 / torch.sqrt(alpha)) * (x - (beta / torch.sqrt(1.0 - alpha_bar)) * predicted_noise)
    
    if t[0] == 0:
        return mean
    else:
        noise = torch.randn_like(x)
        return mean + torch.sqrt(beta) * noise


@torch.no_grad()
def p_sample_loop(model, shape, forward_diffusion, save_trajectory=False):
    """
    Generate samples by iteratively denoising from pure noise.
    
    Args:
        model: Trained U-Net
        shape: Shape of images to generate [batch_size, channels, height, width]
        forward_diffusion: ForwardDiffusion instance
        save_trajectory: If True, save intermediate steps
        
    Returns:
        Generated images (and trajectory if save_trajectory=True)
    """
    device = next(model.parameters()).device
    
    # Start from pure noise
    x = torch.randn(shape).to(device)
    
    trajectory = [x.cpu()] if save_trajectory else None
    
    # Denoise step by step
    for t_val in tqdm(reversed(range(forward_diffusion.timesteps)), desc="Sampling", total=forward_diffusion.timesteps):
        t = torch.full((shape[0],), t_val, device=device, dtype=torch.long)
        x = p_sample(model, x, t, forward_diffusion)
        
        if save_trajectory and (t_val % 100 == 0 or t_val == 0):
            trajectory.append(x.cpu())
    
    if save_trajectory:
        return x, trajectory
    return x


def visualize_trajectory(trajectory, save_path='denoising_trajectory.png'):
    """Visualize the denoising trajectory."""
    fig, axes = plt.subplots(2, 6, figsize=(18, 6))
    axes = axes.flatten()
    
    for idx in range(min(12, len(trajectory))):
        img = trajectory[idx].squeeze().numpy()
        axes[idx].imshow(img, cmap='gray')
        
        # Calculate timestep
        if idx == 0:
            t_label = 999
        elif idx == len(trajectory) - 1:
            t_label = 0
        else:
            t_label = 1000 - (idx * 100)
        
        axes[idx].set_title(f't = {t_label}')
        axes[idx].axis('off')
    
    plt.suptitle('Reverse Denoising Trajectory: Pure Noise → Generated Digit', fontsize=16)
    plt.tight_layout()
    plt.savefig(save_path, dpi=150, bbox_inches='tight')
    print(f"Saved trajectory to {save_path}")
    plt.close()


def visualize_samples(samples, save_path='generated_samples.png'):
    n_samples = samples.shape[0]
    n_cols = 4
    n_rows = (n_samples + n_cols - 1) // n_cols
    
    fig, axes = plt.subplots(n_rows, n_cols, figsize=(12, 3 * n_rows))
    if n_rows == 1:
        axes = axes.reshape(1, -1)
    axes = axes.flatten()
    
    for idx in range(n_samples):
        img = samples[idx].squeeze().cpu().numpy()
        axes[idx].imshow(img, cmap='gray')
        axes[idx].axis('off')
    
    for idx in range(n_samples, len(axes)):
        axes[idx].axis('off')
    
    plt.suptitle('Generated MNIST Digits from Pure Noise', fontsize=16)
    plt.tight_layout()
    plt.savefig(save_path, dpi=150, bbox_inches='tight')
    print(f"Saved samples to {save_path}")
    plt.close()