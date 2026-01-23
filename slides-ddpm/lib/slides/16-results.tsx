"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ParticleBackground from "@/components/ParticleBackground";
import NeonCard from "@/components/NeonCard";
import AnimatedCounter from "@/components/AnimatedCounter";

export default function Slide10Results() {
  const generatedDigits = [
    "3", "7", "1", "8", "2", "5", "0", "9",
    "4", "6", "2", "1", "7", "3", "8", "0",
  ];

  return (
    <div className="relative flex-1 flex flex-col p-8 overflow-hidden">

      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        className="relative z-10 text-7xl font-display font-bold text-neon-primary mb-4"
      >
        Résultats
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="relative z-10 text-2xl text-neon-muted mb-8"
      >
        Métriques d&apos;évaluation sur 1000 échantillons générés
      </motion.p>

      <div className="relative z-10 flex-1 grid grid-cols-2 gap-8 min-h-0 overflow-hidden">
        <div className="space-y-4 min-h-0">
          <NeonCard delay={0.3} glow="cyan" className="p-6 h-full flex flex-col">
            <h3 className="text-neon-primary font-display font-bold mb-6 text-center text-xl">
              Métriques de qualité
            </h3>
            
            <div className="space-y-8 flex-1 flex flex-col justify-center">
              <div className="text-center">
                <p className="text-neon-muted text-sm uppercase tracking-wide mb-2">
                  Average Confidence Score
                </p>
                <div className="text-7xl font-display font-black text-neon-primary text-glow-cyan">
                  <AnimatedCounter value={0.941} delay={0.5} decimals={3} />
                </div>
                <p className="text-neon-muted text-sm mt-2 font-mono">vs 0.993 pour données réelles</p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-neon-bg/50 rounded-lg border border-neon-primary/20">
                  <p className="text-neon-muted text-xs uppercase">High Conf. Ratio</p>
                  <div className="text-4xl font-display font-bold text-neon-secondary mt-2">
                    <AnimatedCounter value={0.85} delay={0.7} decimals={2} suffix="%" prefix="" />
                  </div>
                  <p className="text-neon-muted text-xs mt-1">{">"}90% confidence</p>
                </div>
                <div className="text-center p-6 bg-neon-bg/50 rounded-lg border border-neon-primary/20">
                  <p className="text-neon-muted text-xs uppercase">Uniformity</p>
                  <div className="text-4xl font-display font-bold text-neon-accent mt-2">
                    <AnimatedCounter value={0.72} delay={0.9} decimals={2} />
                  </div>
                  <p className="text-neon-muted text-xs mt-1">distribution</p>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 }}
                className="text-center p-6 bg-neon-accent/10 border border-neon-accent/30 rounded-xl"
              >
                <p className="text-neon-muted text-sm uppercase tracking-wide">Overall Quality Score</p>
                <div className="text-5xl font-display font-black text-neon-accent text-glow-violet mt-2">
                  <AnimatedCounter value={0.84} delay={1.4} decimals={2} />
                </div>
              </motion.div>
            </div>
          </NeonCard>
        </div>

        <NeonCard delay={0.4} glow="magenta" className="p-6 h-full flex flex-col min-h-0">
          <h3 className="text-neon-secondary font-display font-bold mb-6 text-center text-xl">
            Galerie de chiffres générés
          </h3>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex-1 min-h-0 border border-neon-secondary/20 rounded overflow-hidden bg-black/20 flex items-center justify-center p-8"
          >
            <img
              src="/generated_samples.png"
              alt="Generated MNIST Samples"
              className="max-w-[80%] max-h-[80%] object-contain"
            />
          </motion.div>
        </NeonCard>
      </div>
    </div>
  );
}
