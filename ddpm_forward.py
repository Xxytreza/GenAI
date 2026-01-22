"""
DDPM Forward Diffusion Process Implementation
Implements q(x_t|x_{t-1}) and the simple loss function
"""

import torch
import torch.nn as nn
import numpy as np
import matplotlib.pyplot as plt
from torchvision import datasets, transforms
from torch.utils.data import DataLoader


class ForwardDiffusion:
    """
    Forward diffusion process for DDPM
    Implements q(x_t|x_0) using the reparameterization trick
    """
    
    def __init__(self, timesteps=1000, beta_start=0.0001, beta_end=0.02, device='cuda'):
        """
        Initialize the forward diffusion process with a linear noise schedule.
        
        Args:
            timesteps: Number of diffusion steps T
            beta_start: Starting value of beta (variance schedule)
            beta_end: Ending value of beta
            device: Device to run on ('cuda' or 'cpu')
        """
        self.timesteps = timesteps
        self.device = device
        
        # Linear beta schedule
        self.betas = torch.linspace(beta_start, beta_end, timesteps).to(device)
        
        # Pre-compute useful values
        self.alphas = 1.0 - self.betas
        self.alphas_cumprod = torch.cumprod(self.alphas, dim=0)
        self.alphas_cumprod_prev = torch.cat([torch.tensor([1.0]).to(device), self.alphas_cumprod[:-1]])
        
        # Useful for sampling q(x_t|x_0)
        self.sqrt_alphas_cumprod = torch.sqrt(self.alphas_cumprod)
        self.sqrt_one_minus_alphas_cumprod = torch.sqrt(1.0 - self.alphas_cumprod)
        
        # For posterior q(x_{t-1}|x_t, x_0)
        self.sqrt_recip_alphas = torch.sqrt(1.0 / self.alphas)
        
    def q_sample(self, x_start, t, noise=None):
        """
        Sample from q(x_t|x_0) using the reparameterization trick.
        
        x_t = sqrt(alpha_bar_t) * x_0 + sqrt(1 - alpha_bar_t) * epsilon
        
        Args:
            x_start: Initial image [batch_size, channels, height, width]
            t: Timestep (can be a batch of timesteps) [batch_size]
            noise: Optional pre-generated noise
            
        Returns:
            Noisy image at timestep t
        """
        if noise is None:
            noise = torch.randn_like(x_start)
        
        # Get the schedule values for timestep t
        sqrt_alphas_cumprod_t = self._extract(self.sqrt_alphas_cumprod, t, x_start.shape)
        sqrt_one_minus_alphas_cumprod_t = self._extract(
            self.sqrt_one_minus_alphas_cumprod, t, x_start.shape
        )
        
        # Apply the forward diffusion formula
        return sqrt_alphas_cumprod_t * x_start + sqrt_one_minus_alphas_cumprod_t * noise
    
    def _extract(self, a, t, x_shape):
        """
        Extract values from array a at indices t and reshape for broadcasting.
        
        Args:
            a: Array to extract from
            t: Timestep indices
            x_shape: Shape to broadcast to
            
        Returns:
            Extracted and reshaped values
        """
        batch_size = t.shape[0]
        out = a.gather(-1, t)
        return out.reshape(batch_size, *((1,) * (len(x_shape) - 1)))


def simple_loss(model, x_start, t, forward_diffusion, noise=None):
    """
    Compute the simple loss function for DDPM (L_simple).
    
    L_simple = E[||epsilon - epsilon_theta(x_t, t)||^2]
    
    The model is trained to predict the noise epsilon that was added to x_0 to get x_t.
    
    Args:
        model: The neural network epsilon_theta(x_t, t)
        x_start: Original images [batch_size, channels, height, width]
        t: Timesteps [batch_size]
        forward_diffusion: ForwardDiffusion instance
        noise: Optional pre-generated noise
        
    Returns:
        MSE loss between predicted and actual noise
    """
    if noise is None:
        noise = torch.randn_like(x_start)
    
    # Get noisy image at timestep t
    x_noisy = forward_diffusion.q_sample(x_start, t, noise)
    
    # Predict the noise
    predicted_noise = model(x_noisy, t)
    
    # Compute MSE loss
    loss = nn.functional.mse_loss(predicted_noise, noise)
    
    return loss


def visualize_forward_process(forward_diffusion, image, timesteps_to_show=None):
    """
    Visualize the forward noising process at different timesteps.
    
    Args:
        forward_diffusion: ForwardDiffusion instance
        image: Single image tensor [1, channels, height, width]
        timesteps_to_show: List of timesteps to visualize (default: [0, 50, 100, 200, 400, 600, 800, 999])
    """
    if timesteps_to_show is None:
        timesteps_to_show = [0, 50, 100, 200, 400, 600, 800, 999]
    
    fig, axes = plt.subplots(2, 4, figsize=(15, 7))
    axes = axes.flatten()
    
    for idx, t_val in enumerate(timesteps_to_show):
        if t_val == 0:
            # Show original image
            noisy_image = image
        else:
            t = torch.tensor([t_val]).to(forward_diffusion.device)
            noisy_image = forward_diffusion.q_sample(image, t)
        
        # Convert to numpy and move to CPU
        img_np = noisy_image.squeeze().cpu().numpy()
        
        axes[idx].imshow(img_np, cmap='gray')
        axes[idx].set_title(f't = {t_val}')
        axes[idx].axis('off')
    
    plt.tight_layout()
    plt.savefig('forward_noising_process.png', dpi=150, bbox_inches='tight')
    print("Saved visualization to 'forward_noising_process.png'")
    plt.show()


def main():
    """
    Demonstrate the forward diffusion process on MNIST.
    """
    # Set device
    device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
    print(f"Using device: {device}")
    
    # Load MNIST dataset
    transform = transforms.Compose([
        transforms.ToTensor(),
        transforms.Normalize((0.5,), (0.5,))  # Normalize to [-1, 1]
    ])
    
    dataset = datasets.MNIST(root='./data', train=True, download=True, transform=transform)
    
    # Get a single image for visualization
    sample_image, label = dataset[0]
    sample_image = sample_image.unsqueeze(0).to(device)  # Add batch dimension
    
    print(f"Sample image shape: {sample_image.shape}")
    print(f"Label: {label}")
    
    # Initialize forward diffusion
    forward_diffusion = ForwardDiffusion(
        timesteps=1000,
        beta_start=0.0001,
        beta_end=0.02,
        device=device
    )
    
    print(f"\nForward diffusion initialized:")
    print(f"  Timesteps: {forward_diffusion.timesteps}")
    print(f"  Beta range: [{forward_diffusion.betas[0]:.6f}, {forward_diffusion.betas[-1]:.6f}]")
    print(f"  Alpha_bar at t=0: {forward_diffusion.alphas_cumprod[0]:.6f}")
    print(f"  Alpha_bar at t=T: {forward_diffusion.alphas_cumprod[-1]:.6f}")
    
    # Visualize forward process
    print("\nVisualizing forward noising process...")
    visualize_forward_process(forward_diffusion, sample_image)
    
    # Demonstrate sampling at different timesteps
    print("\nDemonstrating q(x_t|x_0) sampling:")
    timesteps = torch.tensor([0, 250, 500, 750, 999]).to(device)
    
    for t in timesteps:
        t_batch = t.unsqueeze(0)
        noisy_image = forward_diffusion.q_sample(sample_image, t_batch)
        noise_level = noisy_image.std().item()
        print(f"  t={t.item():4d}: std={noise_level:.4f}")
    
    print("\n✓ Forward diffusion process implemented successfully!")
    print("\nNext steps:")
    print("  1. Build the U-Net model for epsilon_theta(x_t, t)")
    print("  2. Train the model using the simple_loss function")
    print("  3. Implement the reverse denoising process")


if __name__ == "__main__":
    main()
