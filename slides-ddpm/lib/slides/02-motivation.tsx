"use client";

import { motion } from "framer-motion";
import NeonCard from "@/components/NeonCard";

export default function Slide02Motivation() {
  const models = [
    { 
      name: "VAEs", 
      year: "2013", 
      desc: "Latent space encoding", 
      icon: "🔮",
      authors: "Kingma & Welling",
      paper: "Auto-Encoding Variational Bayes"
    },
    { 
      name: "GANs", 
      year: "2014", 
      desc: "Adversarial training", 
      icon: "⚔️",
      authors: "Goodfellow et al.",
      paper: "Generative Adversarial Nets"
    },
    { 
      name: "Flow", 
      year: "2015", 
      desc: "Invertible transforms", 
      icon: "🌊",
      authors: "Dinh et al.",
      paper: "NICE / Real NVP"
    },
    { 
      name: "Diffusion", 
      year: "2020", 
      desc: "Denoising process", 
      icon: "✨",
      authors: "Ho, Jain, Abbeel",
      paper: "DDPM (arXiv:2006.11239)"
    },
  ];

  return (
    <div className="relative flex-1 flex flex-col p-8 overflow-hidden">

      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        className="relative z-10 text-7xl font-display font-bold text-neon-primary mb-4"
      >
        Pourquoi les modèles génératifs ?
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="relative z-10 text-2xl text-neon-muted mb-12"
      >
        Évolution des approches de génération d&apos;images
      </motion.p>

      <div className="relative z-10 flex-1 grid grid-cols-4 gap-4 items-stretch min-h-0">
        {models.map((model, i) => (
          <NeonCard 
            key={model.name} 
            delay={0.5 + i * 0.2}
            glow={model.name === "Diffusion" ? "magenta" : "cyan"}
            className={`flex flex-col h-full transition-transform hover:scale-105 duration-300 ${model.name === "Diffusion" ? "ring-2 ring-neon-secondary/50 shadow-lg shadow-neon-secondary/20" : ""}`}
          >
            <div className="text-center flex-1 flex flex-col justify-between py-2">
              <div>
                <motion.div
                  initial={{ scale: 0, rotate: -20 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.8 + i * 0.2, type: "spring", stiffness: 200 }}
                  className="text-4xl mb-3 filter drop-shadow-sm"
                >
                  {model.icon}
                </motion.div>
                <h3 className="text-xl font-display font-black text-neon-text tracking-tight mb-1">
                  {model.name}
                </h3>
                <div className="inline-block px-2 py-0.5 bg-neon-primary/10 rounded border border-neon-primary/20 mb-2">
                  <p className="text-neon-primary text-[10px] font-mono font-bold uppercase tracking-widest">{model.year}</p>
                </div>
                <p className="text-neon-muted text-[11px] leading-tight px-2">{model.desc}</p>
              </div>
              
              <div className="mt-4 pt-3 border-t border-white/5 space-y-1">
                <p className="text-[11px] text-neon-accent font-bold tracking-tight">{model.authors}</p>
                <p className="text-[9px] text-neon-muted italic leading-tight opacity-80 line-clamp-2 px-1">{model.paper}</p>
              </div>
            </div>
          </NeonCard>
        ))}
      </div>

      <div className="relative z-10 mt-8 grid grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5 }}
          className="group relative overflow-hidden p-6 bg-gradient-to-br from-neon-secondary/10 to-transparent border border-neon-secondary/30 rounded-2xl backdrop-blur-md"
        >
          <div className="absolute top-0 left-0 w-1 h-full bg-neon-secondary shadow-[0_0_15px_rgba(139,92,246,0.5)]" />
          <h3 className="text-neon-secondary font-display font-black mb-4 text-xl tracking-tight uppercase">
            Avantages de la diffusion
          </h3>
          <div className="grid grid-cols-1 gap-3">
            {[
              "Stabilité d'entraînement supérieure aux GANs",
              "Qualité d'échantillons haute fidélité",
              "Fondements théoriques probabilistes solides"
            ].map((text, idx) => (
              <div key={idx} className="flex items-center gap-3 group/item">
                <div className="w-1.5 h-1.5 rounded-full bg-neon-primary shadow-[0_0_8px_rgba(0,240,255,0.8)] group-hover/item:scale-150 transition-transform" />
                <span className="text-neon-text text-sm font-medium tracking-wide">{text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.7 }}
          className="group relative overflow-hidden p-6 bg-gradient-to-br from-neon-primary/10 to-transparent border border-neon-primary/30 rounded-2xl backdrop-blur-md"
        >
          <div className="absolute top-0 right-0 w-1 h-full bg-neon-primary shadow-[0_0_15px_rgba(0,240,255,0.5)]" />
          <h3 className="text-neon-primary font-display font-black mb-4 text-xl tracking-tight uppercase">
            Contexte historique
          </h3>
          <div className="space-y-3">
            {[
              { date: "2013-2019", text: "Domination des GANs & VAEs" },
              { date: "2020", text: "DDPM : Le tournant de la diffusion" },
              { date: "2022", text: "Explosion de Stable Diffusion" },
              { date: "2024", text: "Standard de l&apos;industrie créative" }
            ].map((item, idx) => (
              <div key={idx} className="flex items-baseline gap-4">
                <span className="text-neon-primary font-mono font-black text-xs min-w-[70px]">{item.date}</span>
                <span className="text-neon-muted text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
