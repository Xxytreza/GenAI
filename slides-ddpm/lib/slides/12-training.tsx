"use client";

import { motion } from "framer-motion";
import ParticleBackground from "@/components/ParticleBackground";
import NeonCard from "@/components/NeonCard";

export default function Slide07Training() {
  const hyperparams = [
    { label: "Epochs", value: "20" },
    { label: "Batch size", value: "128" },
    { label: "Learning rate", value: "2e-4" },
    { label: "Optimizer", value: "Adam" },
    { label: "Loss", value: "MSE" },
  ];

  const lossData = [
    0.0542, 0.0329, 0.0296, 0.0280, 0.0270, 0.0263, 0.0256, 0.0255,
    0.0249, 0.0247, 0.0245, 0.0242, 0.0244, 0.0237, 0.0237, 0.0235,
    0.0235, 0.0232, 0.0228, 0.0231
  ];

  const maxLoss = Math.max(...lossData);
  const minLoss = Math.min(...lossData);

  return (
    <div className="relative flex-1 flex flex-col p-8 overflow-hidden">

      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        className="relative z-10 text-5xl font-display font-bold text-neon-accent mb-3"
      >
        Entraînement
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="relative z-10 text-xl text-neon-muted mb-8"
      >
        Comment le U-Net apprend à prédire le bruit
      </motion.p>

      <div className="relative z-10 flex-1 grid grid-cols-2 gap-8 min-h-0">
        <div className="space-y-6 flex flex-col min-h-0">
          <NeonCard delay={0.3} glow="violet" className="flex-1 min-h-0 flex flex-col">
            <h3 className="text-neon-accent font-display font-bold mb-4">
              Objectif d'entraînement
            </h3>
            <div className="flex-1 flex flex-col justify-center space-y-4 text-neon-text pb-4">
              <p className="text-lg leading-relaxed">
                Le modèle doit apprendre à <span className="text-neon-accent font-bold">deviner le bruit</span> qui a été ajouté à l'image
              </p>
              <div className="space-y-3">
                <div className="p-3 bg-neon-accent/10 rounded">
                  <p className="text-base">
                    <span className="text-neon-accent font-bold">On montre :</span> Image bruitée + Étape
                  </p>
                </div>
                <div className="p-3 bg-neon-accent/10 rounded">
                  <p className="text-base">
                    <span className="text-neon-accent font-bold">Il prédit :</span> Le bruit qu'il pense présent
                  </p>
                </div>
                <div className="p-3 bg-neon-accent/10 rounded">
                  <p className="text-base">
                    <span className="text-neon-accent font-bold">On compare :</span> Bruit réel vs Bruit prédit
                  </p>
                </div>
              </div>
            </div>
          </NeonCard>

          <NeonCard delay={0.7} glow="cyan" className="flex-1 min-h-0 flex flex-col">
            <h3 className="text-neon-primary font-display font-bold mb-4">
              Hyperparamètres
            </h3>
            <div className="flex-1 flex items-center justify-center pb-4">
              <div className="grid grid-cols-2 gap-4 w-full">
                {hyperparams.map((hp, i) => (
                  <motion.div
                    key={hp.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 + i * 0.1 }}
                    className="text-center p-3 bg-neon-bg/50 rounded-lg border border-neon-primary/20"
                  >
                    <p className="text-neon-muted text-xs uppercase">{hp.label}</p>
                    <p className="text-neon-primary font-mono font-bold">{hp.value}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </NeonCard>
        </div>

        <div className="space-y-6 flex flex-col min-h-0">
          <NeonCard delay={0.4} glow="magenta" className="flex-1 min-h-0 flex flex-col">
            <h3 className="text-neon-secondary font-display font-bold mb-4">
              Boucle d'entraînement
            </h3>
            <div className="flex-1 flex flex-col justify-center space-y-4 pb-4">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="flex items-start gap-3"
              >
                <span className="w-8 h-8 rounded-full flex items-center justify-center text-base font-bold bg-neon-primary/20 text-neon-primary flex-shrink-0">
                  1
                </span>
                <p className="text-lg text-neon-text">
                  Prendre une <span className="text-neon-primary font-bold">image claire</span> du dataset MNIST
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="flex items-start gap-3"
              >
                <span className="w-8 h-8 rounded-full flex items-center justify-center text-base font-bold bg-neon-primary/20 text-neon-primary flex-shrink-0">
                  2
                </span>
                <p className="text-lg text-neon-text">
                  Ajouter du <span className="text-neon-primary font-bold">bruit aléatoire</span> (étape t aléatoire)
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.0 }}
                className="flex items-start gap-3"
              >
                <span className="w-8 h-8 rounded-full flex items-center justify-center text-base font-bold bg-neon-secondary/20 text-neon-secondary flex-shrink-0">
                  3
                </span>
                <p className="text-lg text-neon-text">
                  Le U-Net <span className="text-neon-secondary font-bold">prédit le bruit</span>
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 }}
                className="flex items-start gap-3"
              >
                <span className="w-8 h-8 rounded-full flex items-center justify-center text-base font-bold bg-neon-accent/20 text-neon-accent flex-shrink-0">
                  4
                </span>
                <p className="text-lg text-neon-text">
                  Calculer l'<span className="text-neon-accent font-bold">erreur</span> et ajuster le réseau
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4 }}
                className="flex items-start gap-3"
              >
                <span className="w-8 h-8 rounded-full flex items-center justify-center text-base font-bold bg-neon-accent/20 text-neon-accent flex-shrink-0">
                  5
                </span>
                <p className="text-lg text-neon-text">
                  <span className="text-neon-accent font-bold">Répéter</span> avec d'autres images
                </p>
              </motion.div>
            </div>
          </NeonCard>

          <NeonCard delay={1.8} glow="cyan" className="flex-1 min-h-0 flex flex-col p-4">
            <h3 className="text-neon-primary font-display font-bold mb-3 text-sm">
              Évolution de la Loss (MSE)
            </h3>
            <div className="flex-1 flex">
              {/* Y Axis */}
              <div className="flex flex-col justify-between pr-2 text-neon-muted" style={{ fontSize: '9px' }}>
                <span>0.055</span>
                <span>0.045</span>
                <span>0.035</span>
                <span>0.025</span>
              </div>
              
              {/* Graph */}
              <div className="flex-1 relative border-b border-l border-neon-primary/20" style={{ height: '180px' }}>
                <svg className="absolute inset-0 w-full h-full">
                  <motion.path
                    d={`M ${lossData.map((loss, i) => {
                      const x = (i / (lossData.length - 1)) * 100;
                      const y = 100 - ((loss - minLoss) / (maxLoss - minLoss)) * 95;
                      return `${x}% ${y}%`;
                    }).join(' L ')}`}
                    fill="none"
                    stroke="url(#lossGradient)"
                    strokeWidth="3"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 2, duration: 2, ease: "easeInOut" }}
                  />
                  <defs>
                    <linearGradient id="lossGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#00f0ff" />
                      <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                  </defs>
                  
                  {/* Points */}
                  {lossData.map((loss, i) => {
                    const x = (i / (lossData.length - 1)) * 100;
                    const y = 100 - ((loss - minLoss) / (maxLoss - minLoss)) * 95;
                    return (
                      <motion.circle
                        key={i}
                        cx={`${x}%`}
                        cy={`${y}%`}
                        r="3"
                        fill="#00f0ff"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 2 + (i * 0.05), duration: 0.3 }}
                      />
                    );
                  })}
                </svg>
                
                {/* X Axis labels */}
                <div className="absolute -bottom-4 left-0 right-0 flex justify-between text-neon-muted" style={{ fontSize: '8px' }}>
                  <span>1</span>
                  <span>5</span>
                  <span>10</span>
                  <span>15</span>
                  <span>20</span>
                </div>
              </div>
            </div>
            <div className="text-center mt-4">
              <span className="text-neon-primary font-bold text-lg">0.0231</span>
              <span className="text-neon-muted text-xs ml-2">Loss finale</span>
            </div>
          </NeonCard>
        </div>
      </div>
    </div>
  );
}
