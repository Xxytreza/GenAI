"use client";

import { motion } from "framer-motion";
import NeonCard from "@/components/NeonCard";
import GlitchText from "@/components/GlitchText";

export default function Slide12Evaluation() {
  return (
    <div className="relative flex-1 flex flex-col p-8 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-6"
      >
        <GlitchText text="Évaluation du Modèle" className="text-5xl mb-2" />
        <p className="text-neon-primary/60 text-xl">
          Comment mesurer la qualité des images générées ?
        </p>
      </motion.div>

      <div className="flex-1 min-h-0 grid grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-col gap-6"
        >
          <NeonCard className="flex-1">
            <h3 className="text-2xl font-bold text-neon-primary mb-4">
              Le Défi de l'Évaluation
            </h3>
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                Difficile d'évaluer objectivement la <span className="text-neon-primary font-semibold">qualité</span> des images générées
              </p>
              <div className="space-y-3">
                <div className="bg-neon-secondary/10 p-3 rounded border border-neon-secondary/30">
                  <div className="text-sm text-gray-400 mb-1">Approches existantes :</div>
                  <div className="text-gray-300 text-sm">• FID Score (complexe)</div>
                  <div className="text-gray-300 text-sm">• Inception Score (nécessite gros modèle)</div>
                  <div className="text-gray-300 text-sm">• Évaluation humaine (subjective)</div>
                </div>
              </div>
            </div>
          </NeonCard>

          <NeonCard className="flex-1">
            <h3 className="text-2xl font-bold text-neon-primary mb-4">
              Notre Solution
            </h3>
            <div className="space-y-3">
              <div className="bg-neon-primary/10 p-4 rounded border border-neon-primary/30">
                <p className="text-neon-primary font-semibold text-lg mb-2">
                  Classifieur MNIST
                </p>
                <p className="text-gray-300 text-sm">
                  Entraîner un CNN simple sur MNIST réel, puis l'utiliser pour évaluer les images générées
                </p>
              </div>
              <div className="text-center p-3 bg-neon-accent/10 rounded">
                <div className="text-neon-accent font-bold">Précision sur données réelles</div>
                <div className="text-3xl font-mono text-neon-accent">98.5%</div>
              </div>
            </div>
          </NeonCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-col gap-6"
        >
          <NeonCard className="flex-1">
            <h3 className="text-2xl font-bold text-neon-secondary mb-4">
              Architecture du Classifieur
            </h3>
            <div className="space-y-3">
              <div className="bg-neon-secondary/10 p-3 rounded border border-neon-secondary/30">
                <div className="text-sm text-gray-400 mb-1">Couche 1 :</div>
                <div className="text-gray-300 font-mono text-sm">Conv2d(1→32) + ReLU + MaxPool</div>
              </div>
              <div className="bg-neon-secondary/10 p-3 rounded border border-neon-secondary/30">
                <div className="text-sm text-gray-400 mb-1">Couche 2 :</div>
                <div className="text-gray-300 font-mono text-sm">Conv2d(32→64) + ReLU + MaxPool</div>
              </div>
              <div className="bg-neon-secondary/10 p-3 rounded border border-neon-secondary/30">
                <div className="text-sm text-gray-400 mb-1">Fully Connected :</div>
                <div className="text-gray-300 font-mono text-sm">Linear(3136→128→10)</div>
              </div>
              <div className="bg-neon-accent/10 p-3 rounded border border-neon-accent/30">
                <div className="text-sm text-gray-400 mb-1">Régularisation :</div>
                <div className="text-gray-300 font-mono text-sm">Dropout(0.5)</div>
              </div>
            </div>
          </NeonCard>

          <NeonCard className="flex-1">
            <h3 className="text-2xl font-bold text-neon-accent mb-4">
              Métriques Calculées
            </h3>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <span className="text-neon-primary text-lg font-bold">1.</span>
                <div className="flex-1">
                  <div className="text-neon-primary font-semibold">Confidence Score</div>
                  <div className="text-gray-400 text-sm">Probabilité moyenne de la classe prédite</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-neon-primary text-lg font-bold">2.</span>
                <div className="flex-1">
                  <div className="text-neon-primary font-semibold">High Confidence Ratio</div>
                  <div className="text-gray-400 text-sm">% d'images avec confiance {">"}90%</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-neon-primary text-lg font-bold">3.</span>
                <div className="flex-1">
                  <div className="text-neon-primary font-semibold">Distribution Uniformity</div>
                  <div className="text-gray-400 text-sm">Équilibre entre les 10 classes</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-neon-primary text-lg font-bold">4.</span>
                <div className="flex-1">
                  <div className="text-neon-primary font-semibold">Quality Score</div>
                  <div className="text-gray-400 text-sm">Moyenne des 3 métriques précédentes</div>
                </div>
              </div>
            </div>
          </NeonCard>
        </motion.div>
      </div>
    </div>
  );
}
