"use client";

import { Button } from "@/components/ui/button";
import { particlesOptions } from "@/lib/particlesOptions";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { TypeAnimation } from "react-type-animation";

export function Home() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(() => particlesOptions, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center">
      {init && (
        <Particles id="tsparticles" options={options} className="absolute inset-0 w-full h-full z-10" />
      )}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center z-20"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Gustavo de Almeida Carvalho</h1>
        <h2 className="text-2xl md:text-3xl text-muted-foreground mb-4">
          <TypeAnimation
            sequence={[
              "Frontend Developer",
              2000,
              "React Specialist",
              2000,
              "UI/UX Enthusiast",
              2000,
              "Problem Solver",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Number.POSITIVE_INFINITY}
          />
        </h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Building intuitive, fast, and accessible web experiences with precision and creativity. Let’s create
          something remarkable together!
        </p>
        <div className="flex justify-center space-x-4 mb-8">
          <Button asChild variant="default">
            <a href="#projects">
              View Projects <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>
        <div className="flex justify-center space-x-4">
          {["React", "Next.js", "TypeScript", "Tailwind"].map((skill) => (
            <motion.span
              key={skill}
              className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
