"use client";

import { motion } from "framer-motion";
import ParticleBackground from "@/components/ParticleBackground";
import NeonCard from "@/components/NeonCard";
import FormulaBlock from "@/components/FormulaBlock";

export default function Slide06Reverse() {
  return (
    <div className="relative flex-1 flex flex-col p-8 overflow-hidden">

      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        className="relative z-10 text-5xl font-display font-bold text-neon-secondary mb-3"
      >
        Reverse Process
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="relative z-10 text-xl text-neon-muted mb-8"
      >
        Comment le U-Net débruite l'image
      </motion.p>

      <div className="relative z-10 flex-1 grid grid-cols-2 gap-8 min-h-0">
        <div className="space-y-6 flex flex-col min-h-0">
          <NeonCard delay={0.4} glow="magenta" className="flex-1 min-h-0 flex flex-col">
            <h3 className="text-neon-secondary font-display font-bold mb-4">
              Rôle du U-Net
            </h3>
            <div className="flex-1 flex flex-col justify-center space-y-4 text-neon-text pb-4">
              <p className="text-lg leading-relaxed">
                Le réseau U-Net <span className="text-neon-secondary font-bold">prédit le bruit</span> présent dans l'image à chaque étape
              </p>
              <div className="p-3 bg-neon-secondary/10 rounded">
                <p className="text-base">
                  <span className="text-neon-secondary font-bold">Entrées :</span> Image bruitée + Numéro d'étape
                </p>
              </div>
              <div className="p-3 bg-neon-secondary/10 rounded">
                <p className="text-base">
                  <span className="text-neon-secondary font-bold">Sortie :</span> Estimation du bruit
                </p>
              </div>
            </div>
          </NeonCard>

          <NeonCard delay={0.8} glow="cyan" className="flex-1 min-h-0 flex flex-col">
            <h3 className="text-neon-primary font-display font-bold mb-4">
              Débruitage progressif
            </h3>
            <div className="flex-1 flex flex-col justify-center space-y-3 text-neon-text pb-4">
              <p className="text-base leading-relaxed">
                On <span className="text-neon-primary font-bold">soustrait le bruit prédit</span> de l'image courante
              </p>
              <div className="flex items-center justify-between p-3 bg-neon-primary/10 rounded">
                <span>Image bruitée</span>
                <span className="text-2xl">−</span>
                <span>Bruit prédit</span>
              </div>
              <div className="text-center text-2xl text-neon-primary">↓</div>
              <div className="p-3 bg-neon-primary/10 rounded text-center">
                <span className="font-bold">Image moins bruitée</span>
              </div>
            </div>
          </NeonCard>
        </div>

        <div className="space-y-6 flex flex-col min-h-0">
          <NeonCard delay={1.2} glow="violet" className="flex-1 min-h-0 flex flex-col">
            <h3 className="text-neon-accent font-display font-bold mb-4">
              Formules mathématiques
            </h3>
            <div className="flex-1 flex flex-col justify-center space-y-3 text-neon-text pb-4">
              <p className="text-sm text-neon-muted mb-2">Processus inverse (débruitage) :</p>
              <FormulaBlock 
                formula="p_\theta(x_{t-1} | x_t) = \mathcal{N}(x_{t-1}; \mu_\theta(x_t, t), \sigma_t^2 I)"
                delay={1.4}
                className="mb-3"
              />
              <p className="text-sm text-neon-muted mb-2">Formule de sampling :</p>
              <FormulaBlock 
                formula="x_{t-1} = \frac{1}{\sqrt{\alpha_t}} \left(x_t - \frac{\beta_t}{\sqrt{1-\bar{\alpha}_t}} \varepsilon_\theta(x_t, t)\right) + \sigma_t z"
                delay={1.6}
              />
              <p className="text-xs text-neon-muted mt-2">
                où ε_θ(xₜ, t) est le bruit prédit par le U-Net
              </p>
            </div>
          </NeonCard>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.4 }}
            className="p-6 bg-neon-secondary/10 border border-neon-secondary/30 rounded-xl"
          >
            <div className="flex items-center justify-between">
              <div className="text-center flex-1">
                <p className="text-lg font-semibold text-neon-secondary">Bruit pur</p>
              </div>
              <div className="text-3xl text-neon-secondary">→</div>
              <div className="text-center flex-1">
                <p className="text-2xl font-mono text-neon-secondary font-bold">1000×</p>
                <p className="text-sm text-neon-muted mt-2">Débruitage</p>
              </div>
              <div className="text-3xl text-neon-secondary">→</div>
              <div className="text-center flex-1">
                <p className="text-lg font-semibold text-neon-secondary">Image claire</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
