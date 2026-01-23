"use client";

import { motion } from "framer-motion";
import NeonCard from "@/components/NeonCard";

export default function Slide04DDPMExplained() {
  return (
    <div className="relative flex-1 flex flex-col p-8 overflow-hidden">

      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        className="relative z-10 text-5xl font-display font-bold text-neon-primary mb-3"
      >
        Qu'est-ce que DDPM ?
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="relative z-10 text-xl text-neon-muted mb-8"
      >
        Denoising Diffusion Probabilistic Models
      </motion.p>

      <div className="relative z-10 flex-1 grid grid-cols-2 gap-8 min-h-0">
        {/* Left Column */}
        <div className="space-y-6 flex flex-col min-h-0">
          <NeonCard delay={0.4} glow="cyan" className="flex-1 min-h-0 flex flex-col">
            <h3 className="text-neon-primary font-display font-bold mb-4">
              L'acronyme décrypté
            </h3>
            <div className="flex-1 flex flex-col justify-center space-y-4 text-neon-text pb-4">
              <div className="flex items-start gap-3">
                <span className="text-neon-primary text-3xl font-bold">D</span>
                <div>
                  <p className="text-lg font-bold">Denoising</p>
                  <p className="text-sm text-neon-muted">Enlever le bruit</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-neon-primary text-3xl font-bold">D</span>
                <div>
                  <p className="text-lg font-bold">Diffusion</p>
                  <p className="text-sm text-neon-muted">Processus progressif</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-neon-primary text-3xl font-bold">P</span>
                <div>
                  <p className="text-lg font-bold">Probabilistic</p>
                  <p className="text-sm text-neon-muted">Basé sur les probabilités</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-neon-primary text-3xl font-bold">M</span>
                <div>
                  <p className="text-lg font-bold">Models</p>
                  <p className="text-sm text-neon-muted">Modèle d'apprentissage</p>
                </div>
              </div>
            </div>
          </NeonCard>

          <NeonCard delay={0.8} glow="magenta" className="flex-1 min-h-0 flex flex-col">
            <h3 className="text-neon-secondary font-display font-bold mb-4">
              Le principe clé
            </h3>
            <div className="flex-1 flex flex-col justify-center space-y-3 text-neon-text pb-4">
              <p className="text-lg leading-relaxed">
                Si on sait comment le <span className="text-neon-secondary font-bold">bruit est ajouté</span>, 
                on peut apprendre à le <span className="text-neon-secondary font-bold">retirer</span>
              </p>
              <div className="p-4 bg-neon-secondary/10 rounded-lg border border-neon-secondary/30">
                <p className="text-base text-center">
                  Inverser la destruction = Création
                </p>
              </div>
            </div>
          </NeonCard>
        </div>

        {/* Right Column */}
        <div className="space-y-6 flex flex-col min-h-0">
          <NeonCard delay={1.2} glow="violet" className="flex-1 min-h-0 flex flex-col">
            <h3 className="text-neon-accent font-display font-bold mb-4">
              Pourquoi c'est puissant ?
            </h3>
            <div className="flex-1 flex flex-col justify-center space-y-4 pb-4">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4 }}
                className="flex items-start gap-3"
              >
                <span className="text-2xl">✓</span>
                <div>
                  <p className="text-lg text-neon-text font-bold">Stabilité</p>
                  <p className="text-sm text-neon-muted">Pas de mode collapse comme les GANs</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.6 }}
                className="flex items-start gap-3"
              >
                <span className="text-2xl">✓</span>
                <div>
                  <p className="text-lg text-neon-text font-bold">Qualité</p>
                  <p className="text-sm text-neon-muted">Images haute résolution et détaillées</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.8 }}
                className="flex items-start gap-3"
              >
                <span className="text-2xl">✓</span>
                <div>
                  <p className="text-lg text-neon-text font-bold">Contrôle</p>
                  <p className="text-sm text-neon-muted">Processus progressif = meilleur contrôle</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2.0 }}
                className="flex items-start gap-3"
              >
                <span className="text-2xl">✓</span>
                <div>
                  <p className="text-lg text-neon-text font-bold">Diversité</p>
                  <p className="text-sm text-neon-muted">Génère des images variées</p>
                </div>
              </motion.div>
            </div>
          </NeonCard>

          <NeonCard delay={2.2} glow="cyan" className="flex-1 min-h-0 flex flex-col">
            <h3 className="text-neon-primary font-display font-bold mb-4">
              Applications
            </h3>
            <div className="flex-1 flex flex-col justify-center space-y-3 text-neon-text pb-4">
              <div className="flex items-center gap-3 p-2 bg-neon-primary/10 rounded">
                <span className="text-base">Génération d'images (Stable Diffusion)</span>
              </div>
              <div className="flex items-center gap-3 p-2 bg-neon-primary/10 rounded">
                <span className="text-base">Synthèse audio</span>
              </div>
              <div className="flex items-center gap-3 p-2 bg-neon-primary/10 rounded">
                <span className="text-base">Génération de vidéo</span>
              </div>
              <div className="flex items-center gap-3 p-2 bg-neon-primary/10 rounded">
                <span className="text-base">Recherche scientifique</span>
              </div>
            </div>
          </NeonCard>
        </div>
      </div>
    </div>
  );
}
