"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import GlitchText from "@/components/GlitchText";

export default function Slide09VizReverse() {
  return (
    <div className="relative flex-1 flex flex-col p-8 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-6"
      >
        <GlitchText text="Visualisation Reverse" className="text-5xl mb-2" />
        <p className="text-neon-secondary/60 text-xl">
          Processus de débruitage : du bruit pur aux chiffres générés
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="flex-1 min-h-0 relative"
      >
        <div className="absolute inset-0 border-2 border-neon-secondary/30 rounded-lg overflow-hidden bg-black/40">
          <Image
            src="/denoising.png"
            alt="Reverse Denoising Process Visualization"
            fill
            style={{ objectFit: "contain" }}
            priority
          />
        </div>
      </motion.div>
    </div>
  );
}
