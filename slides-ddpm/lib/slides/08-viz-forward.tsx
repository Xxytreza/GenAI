"use client";

import { motion } from "framer-motion";
import NeonCard from "@/components/NeonCard";
import Image from "next/image";

export default function Slide08VizForward() {
  return (
    <div className="relative flex-1 flex flex-col p-8 overflow-hidden">

      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        className="relative z-10 text-7xl font-display font-bold text-neon-primary mb-4"
      >
        Visualisation Forward
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="relative z-10 text-2xl text-neon-muted mb-8"
      >
        Processus de bruitage progressif sur 6 échantillons MNIST
      </motion.p>

      <div className="relative z-10 flex-1 flex flex-col justify-center min-h-0">
        <NeonCard delay={0.3} glow="cyan" className="p-6 flex-1 min-h-0 flex flex-col">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative w-full h-full"
          >
            <Image
              src="/forward.png"
              alt="Forward Noising Process"
              fill
              className="object-contain"
              priority
            />
          </motion.div>
        </NeonCard>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-6 flex justify-center items-center gap-4"
        >
          <div className="flex items-center gap-2">
            <div className="w-8 h-2 bg-gradient-to-r from-neon-bg to-neon-primary/50 rounded" />
            <span className="text-neon-muted text-sm">Image nette</span>
          </div>
          <span className="text-neon-muted">→</span>
          <div className="flex items-center gap-2">
            <div className="w-8 h-2 bg-gradient-to-r from-neon-primary/50 to-neon-accent/50 rounded" />
            <span className="text-neon-muted text-sm">Bruit pur</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
