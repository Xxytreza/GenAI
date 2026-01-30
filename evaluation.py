"""
Simple Evaluation for DDPM Generated MNIST Digits
Uses a classifier to assess quality of generated samples
"""

import torch
import torch.nn as nn
import torch.nn.functional as F
from torch.utils.data import DataLoader
from torchvision import datasets, transforms
import numpy as np
from tqdm import tqdm


class SimpleClassifier(nn.Module):
    """Simple CNN classifier for MNIST"""
    def __init__(self):
        super().__init__()
        self.conv1 = nn.Conv2d(1, 32, 3, padding=1)
        self.conv2 = nn.Conv2d(32, 64, 3, padding=1)
        self.pool = nn.MaxPool2d(2, 2)
        self.fc1 = nn.Linear(64 * 7 * 7, 128)
        self.fc2 = nn.Linear(128, 10)
        self.dropout = nn.Dropout(0.5)
        
    def forward(self, x):
        x = self.pool(F.relu(self.conv1(x)))
        x = self.pool(F.relu(self.conv2(x)))
        x = x.view(-1, 64 * 7 * 7)
        x = F.relu(self.fc1(x))
        x = self.dropout(x)
        x = self.fc2(x)
        return x


def train_classifier(device='cuda', epochs=5):
    """Train a classifier on real MNIST data"""
    print("Training classifier on real MNIST data...")
    
    transform = transforms.Compose([
        transforms.ToTensor(),
        transforms.Normalize((0.5,), (0.5,))
    ])
    
    train_dataset = datasets.MNIST(root='./data', train=True, download=True, transform=transform)
    test_dataset = datasets.MNIST(root='./data', train=False, download=True, transform=transform)
    
    train_loader = DataLoader(train_dataset, batch_size=128, shuffle=True)
    test_loader = DataLoader(test_dataset, batch_size=128, shuffle=False)
    
    classifier = SimpleClassifier().to(device)
    optimizer = torch.optim.Adam(classifier.parameters(), lr=0.001)
    criterion = nn.CrossEntropyLoss()
    
    # Train
    for epoch in range(epochs):
        classifier.train()
        train_loss = 0
        correct = 0
        total = 0
        
        pbar = tqdm(train_loader, desc=f"Epoch {epoch+1}/{epochs}")
        for images, labels in pbar:
            images, labels = images.to(device), labels.to(device)
            
            optimizer.zero_grad()
            outputs = classifier(images)
            loss = criterion(outputs, labels)
            loss.backward()
            optimizer.step()
            
            train_loss += loss.item()
            _, predicted = outputs.max(1)
            total += labels.size(0)
            correct += predicted.eq(labels).sum().item()
            
            pbar.set_postfix({'loss': f'{loss.item():.4f}', 'acc': f'{100.*correct/total:.2f}%'})
        
        train_acc = 100. * correct / total
        print(f"Epoch {epoch+1} - Train Accuracy: {train_acc:.2f}%")
    
    # Test
    classifier.eval()
    correct = 0
    total = 0
    with torch.no_grad():
        for images, labels in test_loader:
            images, labels = images.to(device), labels.to(device)
            outputs = classifier(images)
            _, predicted = outputs.max(1)
            total += labels.size(0)
            correct += predicted.eq(labels).sum().item()
    
    test_acc = 100. * correct / total
    print(f"\nClassifier Test Accuracy: {test_acc:.2f}%")
    
    # Save classifier
    torch.save(classifier.state_dict(), 'mnist_classifier.pth')
    print("Saved classifier to 'mnist_classifier.pth'")
    return classifier


def evaluate_generated_samples(generated_images, classifier, device='cuda'):
    """
    Evaluate generated samples using the trained classifier
    
    Args:
        generated_images: Tensor of generated images [N, 1, 28, 28]
        classifier: Trained classifier model
        device: Device to run on
        
    Returns:
        Dictionary with evaluation metrics
    """
    classifier.eval()
    
    predictions = []
    confidences = []
    
    batch_size = 100
    num_samples = generated_images.shape[0]
    
    with torch.no_grad():
        for i in range(0, num_samples, batch_size):
            batch = generated_images[i:i+batch_size].to(device)
            
            outputs = classifier(batch)
            probs = F.softmax(outputs, dim=1)
            confidence, preds = probs.max(1)
            
            predictions.extend(preds.cpu().numpy())
            confidences.extend(confidence.cpu().numpy())
    
    predictions = np.array(predictions)
    confidences = np.array(confidences)
    
    # 1. Average Confidence Score
    avg_confidence = confidences.mean()
    print(f"\n1. Average Confidence Score: {avg_confidence:.4f}")
    
    # 2. High Confidence Ratio
    high_conf_ratio = (confidences > 0.9).sum() / len(confidences)
    print(f"\n2. High Confidence Ratio (>0.9): {high_conf_ratio:.4f}")
    print(f"   ({high_conf_ratio*100:.1f}% of samples)")
    
    # 3. Class Distribution
    print("\n3. Class Distribution:")
    unique, counts = np.unique(predictions, return_counts=True)
    for digit, count in zip(unique, counts):
        percentage = (count / len(predictions)) * 100
        bar = "█" * int(percentage / 2)
        print(f"   Digit {digit}: {count:4d} ({percentage:5.1f}%) {bar}")
    
    # 4. Distribution Uniformity
    expected_per_class = len(predictions) / 10
    distribution_std = counts.std()
    uniformity_score = 1 - min(1.0, distribution_std / expected_per_class)
    print(f"\n4. Distribution Uniformity: {uniformity_score:.4f}")
    
    # 5. Overall Quality Score
    quality_score = (avg_confidence + high_conf_ratio + uniformity_score) / 3
    print(f"\n5. Overall Quality Score: {quality_score:.4f}")
    
    
    return {
        'avg_confidence': avg_confidence,
        'high_conf_ratio': high_conf_ratio,
        'predictions': predictions,
        'confidences': confidences,
        'quality_score': quality_score,
        'distribution_uniformity': uniformity_score,
        'class_counts': dict(zip(unique, counts))
    }


def compare_with_real_data(classifier, device='cuda', num_samples=1000):
    """Compare classifier performance on real test data as baseline"""
    print("\nEvaluating real test data for comparison...")
    
    transform = transforms.Compose([
        transforms.ToTensor(),
        transforms.Normalize((0.5,), (0.5,))
    ])
    
    test_dataset = datasets.MNIST(root='./data', train=False, download=True, transform=transform)
    test_loader = DataLoader(test_dataset, batch_size=100, shuffle=True)
    
    classifier.eval()
    confidences = []
    correct = 0
    total = 0
    
    with torch.no_grad():
        for images, labels in test_loader:
            if total >= num_samples:
                break
            
            images, labels = images.to(device), labels.to(device)
            outputs = classifier(images)
            probs = F.softmax(outputs, dim=1)
            confidence, preds = probs.max(1)
            
            confidences.extend(confidence.cpu().numpy())
            correct += preds.eq(labels).sum().item()
            total += labels.size(0)
    
    confidences = np.array(confidences[:num_samples])
    accuracy = correct / total
    avg_confidence = confidences.mean()
    
    print(f"\nReal Data Metrics (Baseline):")
    print(f"  Accuracy: {accuracy:.4f}")
    print(f"  Average Confidence: {avg_confidence:.4f}")
    
    return avg_confidence, confidences
