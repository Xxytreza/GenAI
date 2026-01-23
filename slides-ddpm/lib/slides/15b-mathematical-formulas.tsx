"use client";

import { motion } from "framer-motion";
import NeonCard from "@/components/NeonCard";

export default function Slide15bMathematicalFormulas() {
  return (
    <div className="relative flex-1 flex flex-col p-8 overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        className="relative z-10 text-5xl font-display font-bold text-neon-primary mb-3"
      >
        Prédiction Mathématique
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="relative z-10 text-xl text-neon-muted mb-8"
      >
        Ce que le modèle prédit à chaque étape
      </motion.p>

      <div className="relative z-10 flex-1 grid grid-cols-2 gap-8 min-h-0">
        {/* Left Column */}
        <div className="space-y-6 flex flex-col min-h-0">
          <NeonCard delay={0.4} glow="cyan" className="flex-1 min-h-0 flex flex-col">
            <h3 className="text-neon-primary font-display font-bold mb-4 text-2xl">
              Le modèle prédit ε_θ
            </h3>
            <div className="flex-1 flex flex-col justify-center space-y-4 text-neon-text pb-4">
              <div className="bg-neon-bg/50 p-4 rounded border border-neon-primary/30">
                <p className="text-neon-muted text-sm mb-3">Le réseau neuronal prédit le bruit :</p>
                <div className="text-center font-mono text-2xl text-neon-primary">
                  ε̂ = ε<sub className="text-lg">θ</sub>(x<sub className="text-lg">t</sub>, t)
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-neon-primary text-2xl">•</span>
                  <div>
                    <p className="text-lg"><span className="text-neon-primary font-bold">x<sub>t</sub></span> : image bruitée à l'étape t</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-neon-primary text-2xl">•</span>
                  <div>
                    <p className="text-lg"><span className="text-neon-primary font-bold">t</span> : timestep (embedding sinusoïdal)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-neon-primary text-2xl">•</span>
                  <div>
                    <p className="text-lg"><span className="text-neon-primary font-bold">ε̂</span> : bruit prédit par le modèle</p>
                  </div>
                </div>
              </div>
            </div>
          </NeonCard>

          <NeonCard delay={0.8} glow="magenta" className="flex-1 min-h-0 flex flex-col">
            <h3 className="text-neon-secondary font-display font-bold mb-4 text-xl">
              Objectif d'entraînement
            </h3>
            <div className="flex-1 flex flex-col justify-center space-y-3 text-neon-text pb-4">
              <div className="bg-neon-secondary/10 p-4 rounded border border-neon-secondary/30">
                <p className="text-neon-muted text-sm mb-3">Loss MSE sur le bruit :</p>
                <div className="text-center font-mono text-xl text-neon-secondary">
                  L = ||ε - ε<sub className="text-base">θ</sub>(x<sub className="text-base">t</sub>, t)||<sup>2</sup>
                </div>
              </div>
              <p className="text-base leading-relaxed">
                On minimise la distance entre le <span className="text-neon-secondary font-bold">bruit ajouté (ε)</span> et le{" "}
                <span className="text-neon-secondary font-bold">bruit prédit (ε̂)</span>
              </p>
            </div>
          </NeonCard>
        </div>

        {/* Right Column */}
        <div className="space-y-6 flex flex-col min-h-0">
          <NeonCard delay={1.2} glow="violet" className="flex-1 min-h-0 flex flex-col">
            <h3 className="text-neon-accent font-display font-bold mb-4 text-2xl">
              Formule de x<sub>t-1</sub>
            </h3>
            <div className="flex-1 flex flex-col justify-center space-y-4 text-neon-text pb-4">
              <div className="bg-neon-accent/10 p-5 rounded border border-neon-accent/30">
                <p className="text-neon-muted text-sm mb-3">Reverse sampling (sampling step) :</p>
                <div className="text-center font-mono text-lg text-neon-accent leading-relaxed">
                  x<sub className="text-base">t-1</sub> = <span className="text-neon-primary">α<sub className="text-sm">t</sub></span> · (x<sub className="text-base">t</sub> - <span className="text-neon-secondary">β<sub className="text-sm">t</sub></span> · ε̂) + <span className="text-purple-400">σ<sub className="text-sm">t</sub></span> · z
                </div>
              </div>

              <div className="space-y-3 text-sm">
                <div className="bg-neon-primary/10 p-3 rounded">
                  <p className="text-neon-primary font-bold">α<sub>t</sub>, β<sub>t</sub></p>
                  <p className="text-neon-muted">Coefficients du schedule (précalculés)</p>
                </div>
                <div className="bg-neon-secondary/10 p-3 rounded">
                  <p className="text-neon-secondary font-bold">ε̂ = ε<sub>θ</sub>(x<sub>t</sub>, t)</p>
                  <p className="text-neon-muted">Bruit prédit par le U-Net</p>
                </div>
                <div className="bg-purple-500/10 p-3 rounded">
                  <p className="text-purple-400 font-bold">z ~ N(0, I)</p>
                  <p className="text-neon-muted">Bruit gaussien (sauf pour t=1)</p>
                </div>
              </div>
            </div>
          </NeonCard>

          <NeonCard delay={1.6} glow="cyan" className="flex-1 min-h-0 flex flex-col">
            <h3 className="text-neon-primary font-display font-bold mb-4 text-xl">
              Processus complet
            </h3>
            <div className="flex-1 flex flex-col justify-center space-y-3 text-neon-text pb-4">
              <div className="flex items-center justify-between p-3 bg-neon-bg/50 rounded">
                <span className="text-base">1. Bruit pur x<sub>T</sub> ~ N(0, I)</span>
              </div>
              <div className="flex items-center justify-center text-neon-primary text-xl">
                ↓
              </div>
              <div className="flex items-center justify-between p-3 bg-neon-bg/50 rounded">
                <span className="text-base">2. Pour t = T → 1</span>
              </div>
              <div className="flex items-center justify-center text-neon-primary text-xl">
                ↓
              </div>
              <div className="p-3 bg-neon-accent/20 rounded border border-neon-accent/40">
                <span className="text-base font-bold text-neon-accent">3. Calcul x<sub>t-1</sub> avec formule</span>
              </div>
              <div className="flex items-center justify-center text-neon-primary text-xl">
                ↓
              </div>
              <div className="flex items-center justify-between p-3 bg-neon-bg/50 rounded">
                <span className="text-base">4. Image finale x<sub>0</sub> 🎉</span>
              </div>
            </div>
          </NeonCard>
        </div>
      </div>
    </div>
  );
}
