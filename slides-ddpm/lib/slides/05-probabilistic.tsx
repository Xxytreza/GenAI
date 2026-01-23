"use client";
import { motion } from "framer-motion";
import NeonCard from "@/components/NeonCard";
import GlitchText from "@/components/GlitchText";

export default function Slide05Probabilistic() {
  return (
    <div className="relative flex-1 flex flex-col p-8 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-6"
      >
        <GlitchText text="Pourquoi Probabilistic ?" className="text-5xl mb-2" />
        <p className="text-neon-primary/60 text-xl">
          L'importance de l'approche stochastique
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
              Distributions de Probabilité
            </h3>
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                Au lieu de prédire <span className="text-neon-primary font-semibold">une seule valeur</span>, 
                le modèle prédit <span className="text-neon-primary font-semibold">une distribution</span> de valeurs possibles.
              </p>
              <div className="bg-neon-secondary/10 p-4 rounded border border-neon-secondary/30">
                <div className="text-sm text-gray-400 mb-2">Approche déterministe :</div>
                <div className="text-lg">Bruit → <span className="text-red-400">1 image fixe</span></div>
                <div className="text-sm text-gray-400 mt-3 mb-2">Approche probabiliste :</div>
                <div className="text-lg">Bruit → <span className="text-neon-primary">∞ images possibles</span></div>
              </div>
            </div>
          </NeonCard>

          <NeonCard className="flex-1">
            <h3 className="text-2xl font-bold text-neon-primary mb-4">
              Échantillonnage Stochastique
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              À chaque étape de débruitage, on <span className="text-neon-primary font-semibold">tire au sort</span> dans 
              la distribution prédite. Cela permet de générer des images différentes à partir du même bruit initial.
            </p>
            <div className="flex items-center justify-center gap-3 text-lg">
              <span>Aléa</span>
              <span className="text-neon-primary">→</span>
              <span>Image</span>
              <span className="text-neon-primary">→</span>
              <span>Aléa</span>
              <span className="text-neon-primary">→</span>
              <span>Image</span>
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
            <h3 className="text-2xl font-bold text-neon-primary mb-4">
              Avantages de l'Approche
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex-1">
                  <div className="text-neon-primary font-semibold text-lg">Diversité</div>
                  <div className="text-gray-400">Génération de multiples variations créatives</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-1">
                  <div className="text-neon-primary font-semibold text-lg">Créativité</div>
                  <div className="text-gray-400">Exploration de l'espace des possibles</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-1">
                  <div className="text-neon-primary font-semibold text-lg">Flexibilité</div>
                  <div className="text-gray-400">Adaptation à différents contextes</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-1">
                  <div className="text-neon-primary font-semibold text-lg">Incertitude</div>
                  <div className="text-gray-400">Modélisation de l'incertitude inhérente</div>
                </div>
              </div>
            </div>
          </NeonCard>

          <NeonCard className="flex-1">
            <h3 className="text-2xl font-bold text-neon-primary mb-4">
              En Pratique
            </h3>
            <div className="space-y-3">
              <div className="bg-neon-secondary/10 p-3 rounded border border-neon-secondary/30">
                <div className="text-sm text-gray-400 mb-1">Forward :</div>
                <div className="text-gray-300">Ajout de bruit <span className="text-neon-primary">Gaussien</span> (distribution normale)</div>
              </div>
              <div className="bg-neon-secondary/10 p-3 rounded border border-neon-secondary/30">
                <div className="text-sm text-gray-400 mb-1">Reverse :</div>
                <div className="text-gray-300">Prédiction de la <span className="text-neon-primary">moyenne et variance</span> du bruit</div>
              </div>
              <div className="bg-neon-secondary/10 p-3 rounded border border-neon-secondary/30">
                <div className="text-sm text-gray-400 mb-1">Résultat :</div>
                <div className="text-gray-300">Échantillonnage depuis la distribution prédite</div>
              </div>
            </div>
          </NeonCard>
        </motion.div>
      </div>
    </div>
  );
}
