"use client";

import { motion } from "framer-motion";
import GlitchText from "@/components/GlitchText";

export default function Slide09VizForwardGif() {
  return (
    <div className="relative flex-1 flex flex-col items-center justify-center p-8 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8 text-center"
      >
        <GlitchText text="Forward Process Animation" className="text-5xl mb-4" />
        <p className="text-neon-primary/60 text-2xl">
          Progression du bruit étape par étape
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="relative max-w-3xl w-full"
      >
        <div className="relative bg-neon-bg/30 backdrop-blur-sm rounded-lg border-2 border-neon-primary/30 p-8 shadow-2xl">
          <img
            src="/forward.gif"
            alt="Forward diffusion process animation"
            className="w-full h-auto rounded"
            style={{ imageRendering: 'pixelated' }}
          />
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-6 text-center"
        >
          <p className="text-gray-300 text-lg">
            De l'image claire au bruit pur en 1000 étapes
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
