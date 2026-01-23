export interface SlideConfig {
  id: number;
  title: string;
  subtitle?: string;
  bgIntensity?: number;
  bgColor?: string;
}

export const SLIDES: SlideConfig[] = [
  { id: 1, title: "DDPM", subtitle: "Denoising Diffusion Probabilistic Models", bgIntensity: 150, bgColor: "#00f0ff" },
  { id: 2, title: "Motivation", subtitle: "Pourquoi les modèles génératifs ?", bgIntensity: 60, bgColor: "#8b5cf6" },
  { id: 3, title: "Vue d'ensemble", subtitle: "Forward & Reverse Process", bgIntensity: 80, bgColor: "#00f0ff" },
  { id: 4, title: "Qu'est-ce que DDPM ?", subtitle: "Principes et applications", bgIntensity: 70, bgColor: "#8b5cf6" },
  { id: 5, title: "Pourquoi Probabilistic ?", subtitle: "L'approche stochastique", bgIntensity: 70, bgColor: "#00f0ff" },
  { id: 6, title: "But du Projet", subtitle: "Objectifs et dataset MNIST", bgIntensity: 75, bgColor: "#ff00aa" },
  { id: 7, title: "Forward Process", subtitle: "Ajout de bruit", bgIntensity: 70, bgColor: "#8b5cf6" },
  { id: 8, title: "Visualisation", subtitle: "Forward Noising", bgIntensity: 100, bgColor: "#00f0ff" },
  { id: 9, title: "Animation Forward", subtitle: "Progression du bruit", bgIntensity: 90, bgColor: "#00f0ff" },
  { id: 10, title: "Reverse Process", subtitle: "Débruitage", bgIntensity: 70, bgColor: "#ff00aa" },
  { id: 11, title: "Architecture", subtitle: "U-Net ε_θ(xₜ, t)", bgIntensity: 50, bgColor: "#ff00aa" },
  { id: 12, title: "Entraînement", subtitle: "Comment ça apprend", bgIntensity: 60, bgColor: "#8b5cf6" },
  { id: 13, title: "Visualisation", subtitle: "Reverse Denoising", bgIntensity: 100, bgColor: "#ff00aa" },
  { id: 14, title: "Animation Reverse", subtitle: "Débruitage progressif", bgIntensity: 90, bgColor: "#ff00aa" },
  { id: 15, title: "Évaluation", subtitle: "Mesurer la qualité", bgIntensity: 80, bgColor: "#00f0ff" },
  { id: 16, title: "Prédiction Mathématique", subtitle: "ε_θ(xₜ, t)", bgIntensity: 70, bgColor: "#00f0ff" },
  { id: 17, title: "Formule de Sampling", subtitle: "x_{t-1} et processus", bgIntensity: 70, bgColor: "#8b5cf6" },
  { id: 18, title: "Résultats", subtitle: "Métriques & Galerie", bgIntensity: 80, bgColor: "#ff00aa" },
  { id: 19, title: "Comparaison", subtitle: "Generated vs Real", bgIntensity: 60, bgColor: "#8b5cf6" },
  { id: 20, title: "Merci", bgIntensity: 200, bgColor: "#ff00aa" },
];

export const TOTAL_SLIDES = SLIDES.length;

export const TEAM_MEMBERS = [
  "Marc Guillemot",
  "Rayan Drissi",
  "Emre Ulusoy",
  "Max Nagaishi",
  "Paul Abi-Saad",
];
