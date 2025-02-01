"use client"

import { motion } from "framer-motion"

export function About() {
  return (
    <section id="about" className="py-16">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-lg text-muted-foreground">
          Full-Stack Developer with experience in React, Next.js, Node.js, TypeScript, and MongoDB. I specialize in
          developing SaaS, CRM, E-commerce platforms, dashboards, and custom systems. My expertise extends to agile
          methodologies, design patterns, and best development practices. I'm constantly seeking opportunities for
          professional growth and eager to take on new technical and leadership challenges in the ever-evolving world of
          web development.
        </p>
      </motion.div>
    </section>
  )
}

