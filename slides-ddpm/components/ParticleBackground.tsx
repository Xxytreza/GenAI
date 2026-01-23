"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  baseVx: number;
  baseVy: number;
}

interface ParticleBackgroundProps {
  intensity?: number;
  color?: string;
  warpSpeed?: boolean;
}

export default function ParticleBackground({ 
  intensity = 100, 
  color = "#00f0ff",
  warpSpeed = false
}: ParticleBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number | null>(null);
  const warpFactorRef = useRef(1);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    particlesRef.current = Array.from({ length: intensity }, () => {
      const vx = (Math.random() - 0.5) * 0.5;
      const vy = (Math.random() - 0.5) * 0.5;
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx,
        vy,
        baseVx: vx,
        baseVy: vy,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
      };
    });

    const animate = () => {
      // Transition warp factor
      const targetWarp = warpSpeed ? 20 : 1;
      warpFactorRef.current += (targetWarp - warpFactorRef.current) * 0.1;

      ctx.fillStyle = warpSpeed ? "rgba(10, 10, 15, 0.3)" : "rgba(10, 10, 15, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((p) => {
        p.x += p.baseVx * warpFactorRef.current;
        p.y += p.baseVy * warpFactorRef.current;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        if (warpFactorRef.current > 2) {
          // Draw streaks during warp
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p.x - p.baseVx * warpFactorRef.current * 2, p.y - p.baseVy * warpFactorRef.current * 2);
          ctx.lineWidth = p.size;
        } else {
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        }
        
        const hex = color.replace("#", "");
        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);
        ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${p.opacity})`;
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${p.opacity})`;
        
        if (warpFactorRef.current > 2) ctx.stroke();
        else ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [intensity, color, warpSpeed]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
