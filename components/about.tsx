"use client";

import { motion } from "framer-motion";
import { FaAws } from "react-icons/fa";
import {
  SiArgo,
  SiDocker,
  SiFirebase,
  SiFlutter,
  SiGithubactions,
  SiJenkins,
  SiKong,
  SiKubernetes,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiOracle,
  SiPostgresql,
  SiReact,
  SiTypescript,
} from "react-icons/si";
export function About() {
  return (
    <section id="about" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-lg text-muted-foreground mb-8">
          Full-Stack Developer specializing in building and deploying production-grade SaaS, CRM, and
          e-commerce systems. Experienced across React, Next.js, TypeScript, Node.js, NestJS, and Flutter,
          with strong backend, cloud, and infrastructure ownership. Proven delivery of end-to-end systems
          including architecture, CI/CD, containerization, and cloud deployment using AWS, OCI, Docker,
          Kubernetes, and modern DevOps pipelines. Strong grounding in system design, scalable architectures,
          and maintainable codebases.
        </p>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold mb-6">Technical Skills</h2>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {[
              { name: "React", icon: SiReact },
              { name: "Next.js", icon: SiNextdotjs },
              { name: "TypeScript", icon: SiTypescript },
              { name: "Node.js", icon: SiNodedotjs },
              { name: "Nest.js", icon: SiNestjs },
              { name: "Flutter", icon: SiFlutter },
              { name: "Oracle", icon: SiOracle },
              { name: "PostgreSQL", icon: SiPostgresql },
              { name: "MongoDB", icon: SiMongodb },
              { name: "Firebase", icon: SiFirebase },
              { name: "AWS", icon: FaAws },
              { name: "OCI", icon: SiOracle },
              { name: "Docker", icon: SiDocker },
              { name: "Kubernetes", icon: SiKubernetes },
              { name: "Kong", icon: SiKong },
              { name: "Argo", icon: SiArgo },
              { name: "GitHub Actions", icon: SiGithubactions },
              { name: "Jenkins", icon: SiJenkins },
            ].map((skill) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  className="flex flex-col items-center gap-2 group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  title={skill.name}
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
