"use client";

import { motion } from "framer-motion";
import NeonCard from "@/components/NeonCard";
import GlitchText from "@/components/GlitchText";

export default function Slide06ProjectGoal() {
  return (
    <div className="relative flex-1 flex flex-col p-8 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-4"
      >
        <GlitchText text="But du Projet" className="text-5xl mb-2" />
        <p className="text-neon-primary/60 text-xl">
          Implémenter un DDPM pour générer des chiffres MNIST
        </p>
      </motion.div>

      <div className="flex-1 min-h-0 grid grid-cols-2 gap-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-col gap-4"
        >
          <NeonCard className="flex-1 overflow-auto">
            <h3 className="text-xl font-bold text-neon-primary mb-3">
              Objectif Principal
            </h3>
            <div className="space-y-3">
              <p className="text-gray-300 leading-relaxed text-base">
                DDPM minimal sur MNIST + visualisation des trajectoires de débruitage étape par étape
              </p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-neon-primary text-lg font-bold">1.</span>
                  <div>
                    <div className="text-neon-primary font-semibold text-sm">Processus avant q(x_t|x_t-1)</div>
                    <div className="text-gray-400 text-xs">Implémenter le forward + perte "simple"</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-neon-primary text-lg font-bold">2.</span>
                  <div>
                    <div className="text-neon-primary font-semibold text-sm">U-Net ε_θ(x_t, t)</div>
                    <div className="text-gray-400 text-xs">Construire le réseau pour prédire le bruit</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-neon-primary text-lg font-bold">3.</span>
                  <div>
                    <div className="text-neon-primary font-semibold text-sm">Trajectoires de débruitage</div>
                    <div className="text-gray-400 text-xs">Générer et visualiser le reverse step-by-step</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-neon-primary text-lg font-bold">4.</span>
                  <div>
                    <div className="text-neon-primary font-semibold text-sm">Évaluation simple</div>
                    <div className="text-gray-400 text-xs">Score via classifieur CNN</div>
                  </div>
                </div>
              </div>
            </div>
          </NeonCard>

          <NeonCard className="flex-1 overflow-auto">
            <h3 className="text-xl font-bold text-neon-secondary mb-3">
              Implémentation
            </h3>
            <div className="space-y-2">
              <div className="bg-neon-secondary/10 p-2 rounded border border-neon-secondary/30">
                <div className="text-neon-secondary font-semibold text-sm mb-1">Schedule linéaire</div>
                <div className="text-gray-400 text-xs">β_start=0.0001 → β_end=0.02</div>
              </div>
              <div className="bg-neon-secondary/10 p-2 rounded border border-neon-secondary/30">
                <div className="text-neon-secondary font-semibold text-sm mb-1">1000 timesteps</div>
                <div className="text-gray-400 text-xs">Effet du nombre de pas sur la qualité</div>
              </div>
              <div className="bg-neon-secondary/10 p-2 rounded border border-neon-secondary/30">
                <div className="text-neon-secondary font-semibold text-sm mb-1">PyTorch + U-Net</div>
                <div className="text-gray-400 text-xs">Architecture CNN avec time embedding</div>
              </div>
              <div className="bg-neon-secondary/10 p-2 rounded border border-neon-secondary/30">
                <div className="text-neon-secondary font-semibold text-sm mb-1">Perte MSE simple</div>
                <div className="text-gray-400 text-xs">||ε - ε_θ(x_t, t)||²</div>
              </div>
            </div>
          </NeonCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-col gap-4"
        >
          <NeonCard className="flex-1 overflow-auto">
            <h3 className="text-xl font-bold text-neon-accent mb-3">
              Dataset MNIST
            </h3>
            <div className="space-y-3">
              <p className="text-gray-300 leading-relaxed text-sm">
                Le dataset classique de chiffres manuscrits pour le Machine Learning
              </p>
              <div className="grid grid-cols-2 gap-3">
                <div className="text-center p-3 bg-neon-accent/10 rounded border border-neon-accent/30">
                  <div className="text-2xl font-bold text-neon-accent">60,000</div>
                  <div className="text-gray-400 text-xs">Images d'entraînement</div>
                </div>
                <div className="text-center p-3 bg-neon-accent/10 rounded border border-neon-accent/30">
                  <div className="text-2xl font-bold text-neon-accent">10,000</div>
                  <div className="text-gray-400 text-xs">Images de test</div>
                </div>
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center justify-between p-2 bg-neon-bg/50 rounded">
                  <span className="text-gray-300 text-sm">Résolution</span>
                  <span className="text-neon-accent font-mono">28×28 pixels</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-neon-bg/50 rounded">
                  <span className="text-gray-300 text-sm">Format</span>
                  <span className="text-neon-accent font-mono">Grayscale</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-neon-bg/50 rounded">
                  <span className="text-gray-300 text-sm">Classes</span>
                  <span className="text-neon-accent font-mono">0-9 (10 digits)</span>
                </div>
              </div>
            </div>
          </NeonCard>

          <NeonCard className="flex-1 overflow-auto">
            <h3 className="text-xl font-bold text-neon-primary mb-3">
              Pourquoi MNIST ?
            </h3>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <span className="text-xl">✓</span>
                <div>
                  <div className="text-neon-primary font-semibold text-sm">Simple et rapide</div>
                  <div className="text-gray-400 text-xs">Images petites = entraînement rapide</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-xl">✓</span>
                <div>
                  <div className="text-neon-primary font-semibold text-sm">Benchmark standard</div>
                  <div className="text-gray-400 text-xs">Facile de comparer les résultats</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-xl">✓</span>
                <div>
                  <div className="text-neon-primary font-semibold text-sm">Focus sur le concept</div>
                  <div className="text-gray-400 text-xs">Comprendre DDPM sans complexité inutile</div>
                </div>
              </div>
            </div>
          </NeonCard>
        </motion.div>
      </div>
    </div>
  );
}
