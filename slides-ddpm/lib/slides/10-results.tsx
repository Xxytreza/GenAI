"use client";

import { motion } from "framer-motion";
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
      <ParticleBackground intensity={80} color="#00f0ff" />

      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        className="relative z-10 text-4xl font-display font-bold text-neon-primary mb-2"
      >
        Résultats
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="relative z-10 text-neon-muted mb-6"
      >
        Métriques d&apos;évaluation sur 1000 échantillons générés
      </motion.p>

      <div className="relative z-10 flex-1 grid grid-cols-2 gap-8">
        <div className="space-y-4">
          <NeonCard delay={0.3} glow="cyan">
            <h3 className="text-neon-primary font-display font-bold mb-6 text-center">
              Métriques de qualité
            </h3>
            
            <div className="space-y-6">
              <div className="text-center">
                <p className="text-neon-muted text-sm uppercase tracking-wide mb-2">
                  Average Confidence Score
                </p>
                <div className="text-5xl font-display font-black text-neon-primary text-glow-cyan">
                  <AnimatedCounter value={0.941} delay={0.5} decimals={3} />
                </div>
                <p className="text-neon-muted text-xs mt-2">vs 0.993 pour données réelles</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-neon-bg/50 rounded-lg border border-neon-primary/20">
                  <p className="text-neon-muted text-xs uppercase">High Conf. Ratio</p>
                  <div className="text-2xl font-display font-bold text-neon-secondary mt-1">
                    <AnimatedCounter value={0.85} delay={0.7} decimals={2} suffix="%" prefix="" />
                  </div>
                  <p className="text-neon-muted text-xs">{">"}90% confidence</p>
                </div>
                <div className="text-center p-4 bg-neon-bg/50 rounded-lg border border-neon-primary/20">
                  <p className="text-neon-muted text-xs uppercase">Uniformity</p>
                  <div className="text-2xl font-display font-bold text-neon-accent mt-1">
                    <AnimatedCounter value={0.72} delay={0.9} decimals={2} />
                  </div>
                  <p className="text-neon-muted text-xs">distribution</p>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 }}
                className="text-center p-4 bg-neon-accent/10 border border-neon-accent/30 rounded-xl"
              >
                <p className="text-neon-muted text-sm">Overall Quality Score</p>
                <div className="text-3xl font-display font-black text-neon-accent text-glow-violet mt-1">
                  <AnimatedCounter value={0.84} delay={1.4} decimals={2} />
                </div>
              </motion.div>
            </div>
          </NeonCard>
        </div>

        <NeonCard delay={0.4} glow="magenta">
          <h3 className="text-neon-secondary font-display font-bold mb-4 text-center">
            Galerie de chiffres générés
          </h3>
          
          <div className="grid grid-cols-4 gap-3">
            {generatedDigits.map((digit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  delay: 0.6 + i * 0.05, 
                  type: "spring",
                  stiffness: 200,
                }}
                whileHover={{ 
                  scale: 1.15, 
                  boxShadow: "0 0 25px rgba(255, 0, 170, 0.6)",
                  zIndex: 10,
                }}
                className="aspect-square bg-neon-bg border border-neon-secondary/30 rounded-lg flex items-center justify-center text-2xl font-bold text-neon-text cursor-pointer relative overflow-hidden"
              >
                {digit}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-neon-secondary/20 to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
            className="text-center text-neon-muted text-xs mt-4"
          >
            💡 Remplacer par les vraies images <code className="text-neon-secondary">generated_samples.png</code>
          </motion.p>
        </NeonCard>
      </div>
    </div>
  );
}
