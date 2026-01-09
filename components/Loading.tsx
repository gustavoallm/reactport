"use client";

import { useEffect, useState } from "react";

interface LoadingProps {
  onComplete?: () => void;
}

export function Loading({ onComplete }: LoadingProps) {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);

      const cleanupTimer = setTimeout(() => {
        onComplete?.();
      }, 1000);

      return () => clearTimeout(cleanupTimer);
    }, 100);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      className="fixed inset-0 z-[9999] overflow-hidden text-white"
      style={{
        transform: isAnimating ? "translateY(0)" : "translateY(-105%)",
        transition: "transform 1000ms cubic-bezier(0.65, 0, 0.35, 0.8)",
      }}
    >
      <div className="absolute inset-0 bg-background backdrop-blur-sm" />
      <div className="absolute top-[2rem] md:top-[2rem] left-[2rem] md:left-[5rem] flex items-center space-x-2">
        <img src="/favicon.ico" alt="logo" className="w-8 h-8" />
        <span className="text-xl font-bold">Gustavo A. Carvalho</span>
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
        <div
          className="w-20 h-20 rounded-full bg-white/30"
          style={{
            animation: "breathe 2.5s ease-in-out infinite",
          }}
        />
        <span className="absolute bottom-[6rem] md:bottom-[10rem] left-[2rem] md:left-[5rem] text-lg md:text-2xl font-light tracking-wider">
          Welcome
        </span>
        <span className="absolute bottom-[3rem] md:bottom-[5rem] left-[2rem] md:left-[5rem] text-4xl md:text-6xl font-bold tracking-wider">
          Wait a bit
        </span>
      </div>
    </div>
  );
}
