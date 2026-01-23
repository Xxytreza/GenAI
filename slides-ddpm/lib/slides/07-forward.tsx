"use client";

import React from "react";
import NeonCard from "../../components/NeonCard";
import GlitchText from "../../components/GlitchText";
import FormulaBlock from "../../components/FormulaBlock";
import { motion } from "framer-motion";

export default function SlideForward() {
  return (
    <div className="relative flex-1 flex flex-col p-8 overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        className="relative z-10 text-5xl font-display font-bold text-neon-primary mb-3"
      >
        Forward Process
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="relative z-10 text-xl text-neon-muted mb-8"
      >
        Ajout progressif de bruit à l'image
      </motion.p>

      <div className="relative z-10 flex-1 grid grid-cols-2 gap-8 min-h-0">
        {/* Left Column */}
        <div className="space-y-6 flex flex-col min-h-0">
          <NeonCard delay={0.4} glow="cyan" className="flex-1 min-h-0 flex flex-col">
            <h3 className="text-neon-primary font-display font-bold mb-4">
              Processus de diffusion
            </h3>
            <div className="flex-1 flex flex-col justify-center space-y-4 text-neon-text pb-4">
              <div className="flex items-start gap-3">
                <span className="text-neon-primary text-2xl">1.</span>
                <p className="text-lg">On part d'une <span className="text-neon-primary font-bold">image claire</span></p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-neon-primary text-2xl">2.</span>
                <p className="text-lg">On ajoute du <span className="text-neon-primary font-bold">bruit gaussien</span> à chaque étape</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-neon-primary text-2xl">3.</span>
                <p className="text-lg">Après <span className="text-neon-primary font-bold">1000 étapes</span>, on obtient du bruit pur</p>
              </div>
            </div>
          </NeonCard>

          <NeonCard delay={0.8} glow="magenta" className="flex-1 min-h-0 flex flex-col">
            <h3 className="text-neon-secondary font-display font-bold mb-4">
              Formules mathématiques
            </h3>
            <div className="flex-1 flex flex-col justify-center space-y-2 text-neon-text pb-4">
              <div className="flex justify-between items-center">
                <p className="text-sm text-neon-muted">Processus par étape :</p>
                <span className="text-[10px] text-neon-muted/60 italic">ε ~ N(0, I)</span>
              </div>
              <FormulaBlock 
                formula="q(x_t | x_{t-1}) = \mathcal{N}(x_t; \sqrt{1-\beta_t} x_{t-1}, \beta_t I)"
                delay={1.0}
                className="mb-1 [&_.katex]:!text-2xl [&_.katex-display]:!text-2xl"
              />
              <div className="flex justify-between items-center mt-2">
                <p className="text-sm text-neon-muted">
                  <span className="text-neon-secondary font-bold">Trick de reparamétrisation :</span>
                </p>
                <span className="text-[10px] text-neon-muted/60 italic">α̅ₜ = ∏ᵢ₌₁ᵗ αᵢ</span>
              </div>
              <FormulaBlock 
                formula="x_t = \sqrt{\bar{\alpha}_t} x_0 + \sqrt{1-\bar{\alpha}_t} \varepsilon"
                delay={1.2}
                className="[&_.katex]:!text-2xl [&_.katex-display]:!text-2xl"
              />
            </div>
          </NeonCard>
        </div>

        {/* Right Column */}
        <div className="space-y-6 flex flex-col min-h-0">
          <NeonCard delay={1.2} glow="violet" className="flex-1 min-h-0 flex flex-col">
            <h3 className="text-neon-accent font-display font-bold mb-4">
              Schedule de bruit
            </h3>
            <div className="flex-1 flex flex-col justify-center space-y-5 text-neon-text pb-4">
              <div>
                <p className="text-neon-muted text-sm mb-2">Au début (étape 1)</p>
                <p className="text-2xl font-mono text-neon-accent">β = 0.0001</p>
                <p className="text-sm text-neon-muted mt-1">→ Très peu de bruit ajouté</p>
              </div>
              <div>
                <p className="text-neon-muted text-sm mb-2">À la fin (étape 1000)</p>
                <p className="text-2xl font-mono text-neon-accent">β = 0.02</p>
                <p className="text-sm text-neon-muted mt-1">→ Plus de bruit ajouté</p>
              </div>
              <div className="pt-2 border-t border-neon-accent/20">
                <p className="text-base text-neon-text">
                  Le bruit augmente <span className="text-neon-accent font-bold">linéairement</span>
                </p>
              </div>
            </div>
          </NeonCard>

          <NeonCard delay={1.6} glow="cyan" className="flex-1 min-h-0 flex flex-col">
            <h3 className="text-neon-primary font-display font-bold mb-4">
              Résultat
            </h3>
            <div className="flex-1 flex flex-col justify-center space-y-3 text-neon-text pb-4">
              <div className="flex items-center justify-center p-3 bg-neon-primary/10 rounded">
                <span className="text-lg">Image originale</span>
              </div>
              <div className="flex items-center justify-center text-neon-primary text-2xl">
                ↓ + bruit progressif
              </div>
              <div className="flex items-center justify-center p-3 bg-neon-accent/10 rounded">
                <span className="text-lg">Bruit gaussien pur</span>
              </div>
            </div>
          </NeonCard>
        </div>
      </div>
    </div>
  );
}
