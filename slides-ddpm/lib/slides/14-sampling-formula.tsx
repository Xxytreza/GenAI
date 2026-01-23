"use client";

import { motion } from "framer-motion";
import NeonCard from "@/components/NeonCard";
import FormulaBlock from "@/components/FormulaBlock";

export default function Slide15cSamplingFormula() {
  return (
    <div className="relative flex-1 flex flex-col p-8 overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        className="relative z-10 text-5xl font-display font-bold text-neon-accent mb-3"
      >
        Formule de Sampling
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="relative z-10 text-xl text-neon-muted mb-8"
      >
        Comment calculer x<sub>t-1</sub> à partir de x<sub>t</sub>
      </motion.p>

      <div className="relative z-10 flex-1 flex items-center justify-center">
        <div className="grid grid-cols-2 gap-8 max-w-6xl w-full">
          {/* Left Column */}
          <NeonCard delay={0.4} glow="violet" className="p-8 flex flex-col">
            <h3 className="text-neon-accent font-display font-bold mb-6 text-3xl">
              Formule de x<sub>t-1</sub>
            </h3>
            <div className="flex-1 flex flex-col justify-center space-y-6 text-neon-text">
              <div className="bg-neon-accent/10 p-6 rounded border border-neon-accent/30">
                <p className="text-neon-muted text-base mb-4">Reverse sampling (sampling step) :</p>
                <FormulaBlock 
                  formula="x_{t-1} = \frac{1}{\sqrt{\alpha_t}} \left( x_t - \frac{\beta_t}{\sqrt{1-\bar{\alpha}_t}} \varepsilon_\theta(x_t, t) \right) + \sigma_t z"
                  delay={0.6}
                  className="[&_.katex]:!text-lg [&_.katex-display]:!text-lg"
                />
              </div>

              <div className="space-y-4 text-sm">
                <div className="bg-neon-primary/10 p-4 rounded">
                  <p className="text-neon-primary font-bold text-base">α<sub>t</sub> = 1 - β<sub>t</sub></p>
                  <p className="text-neon-muted">ᾱ<sub>t</sub> = ∏<sub>i=1...t</sub> α<sub>i</sub> (produit cumulé)</p>
                </div>
                <div className="bg-neon-secondary/10 p-4 rounded">
                  <p className="text-neon-secondary font-bold text-base">ε<sub>θ</sub>(x<sub>t</sub>, t)</p>
                  <p className="text-neon-muted">Bruit prédit par le U-Net</p>
                </div>
                <div className="bg-purple-500/10 p-4 rounded">
                  <p className="text-purple-400 font-bold text-base">σ<sub>t</sub> et z ~ N(0, I)</p>
                  <p className="text-neon-muted">Variance et bruit (z=0 pour t=1)</p>
                </div>
              </div>
            </div>
          </NeonCard>

          {/* Right Column */}
          <NeonCard delay={0.8} glow="cyan" className="p-8 flex flex-col">
            <h3 className="text-neon-primary font-display font-bold mb-6 text-3xl">
              Processus complet
            </h3>
            <div className="flex-1 flex flex-col justify-center space-y-4 text-neon-text">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.0 }}
                className="flex items-center justify-between p-4 bg-neon-bg/50 rounded border border-neon-primary/20"
              >
                <span className="text-xl font-bold">1. Bruit pur x<sub>T</sub> ~ N(0, I)</span>
              </motion.div>
              
              <div className="flex items-center justify-center text-neon-primary text-3xl">
                ↓
              </div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 }}
                className="flex items-center justify-between p-4 bg-neon-bg/50 rounded border border-neon-primary/20"
              >
                <span className="text-xl font-bold">2. Pour t = T → 1</span>
              </motion.div>
              
              <div className="flex items-center justify-center text-neon-primary text-3xl">
                ↓
              </div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4 }}
                className="p-5 bg-neon-accent/20 rounded border-2 border-neon-accent/40"
              >
                <span className="text-xl font-bold text-neon-accent block text-center">
                  3. Calcul x<sub>t-1</sub> avec formule
                </span>
                <p className="text-center text-sm text-neon-muted mt-2">
                  (retire le bruit prédit)
                </p>
              </motion.div>
              
              <div className="flex items-center justify-center text-neon-primary text-3xl">
                ↓
              </div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.6 }}
                className="flex items-center justify-between p-4 bg-neon-primary/20 rounded border-2 border-neon-primary/40"
              >
                <span className="text-xl font-bold text-neon-primary">4. Image finale x<sub>0</sub> 🎉</span>
              </motion.div>
            </div>
          </NeonCard>
        </div>
      </div>
    </div>
  );
}
