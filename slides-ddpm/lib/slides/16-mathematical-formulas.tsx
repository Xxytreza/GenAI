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

      <div className="relative z-10 flex-1 flex items-center justify-center">
        <div className="grid grid-cols-2 gap-8 max-w-6xl w-full">
          {/* Left Column */}
          <NeonCard delay={0.4} glow="cyan" className="p-8 flex flex-col">
            <h3 className="text-neon-primary font-display font-bold mb-6 text-3xl">
              Le modèle prédit ε_θ
            </h3>
            <div className="flex-1 flex flex-col justify-center space-y-6 text-neon-text">
              <div className="bg-neon-bg/50 p-6 rounded border border-neon-primary/30">
                <p className="text-neon-muted text-base mb-4">Le réseau neuronal prédit le bruit :</p>
                <div className="text-center font-mono text-3xl text-neon-primary">
                  ε̂ = ε<sub className="text-2xl">θ</sub>(x<sub className="text-2xl">t</sub>, t)
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="text-neon-primary text-3xl">•</span>
                  <div>
                    <p className="text-xl"><span className="text-neon-primary font-bold">x<sub>t</sub></span> : image bruitée à l'étape t</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-neon-primary text-3xl">•</span>
                  <div>
                    <p className="text-xl"><span className="text-neon-primary font-bold">t</span> : timestep (embedding sinusoïdal)</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-neon-primary text-3xl">•</span>
                  <div>
                    <p className="text-xl"><span className="text-neon-primary font-bold">ε̂</span> : bruit prédit par le modèle</p>
                  </div>
                </div>
              </div>
            </div>
          </NeonCard>

          {/* Right Column */}
          <NeonCard delay={0.8} glow="magenta" className="p-8 flex flex-col">
            <h3 className="text-neon-secondary font-display font-bold mb-6 text-3xl">
              Objectif d'entraînement
            </h3>
            <div className="flex-1 flex flex-col justify-center space-y-6 text-neon-text">
              <div className="bg-neon-secondary/10 p-6 rounded border border-neon-secondary/30">
                <p className="text-neon-muted text-base mb-4">Loss MSE sur le bruit :</p>
                <div className="text-center font-mono text-2xl text-neon-secondary">
                  L = ||ε - ε<sub className="text-xl">θ</sub>(x<sub className="text-xl">t</sub>, t)||<sup>2</sup>
                </div>
              </div>
              <p className="text-xl leading-relaxed">
                On minimise la distance entre le <span className="text-neon-secondary font-bold">bruit ajouté (ε)</span> et le{" "}
                <span className="text-neon-secondary font-bold">bruit prédit (ε̂)</span>
              </p>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 }}
                className="p-6 bg-neon-accent/10 border border-neon-accent/30 rounded-xl"
              >
                <p className="text-center text-lg text-neon-accent font-bold">
                  Plus le modèle prédit bien le bruit,<br/>
                  mieux il peut le retirer ! ✨
                </p>
              </motion.div>
            </div>
          </NeonCard>
        </div>
      </div>
    </div>
  );
}
