"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Fullstack Developer",
    company: "Supermercados Pague Menos",
    period: "Abr 2025 - Present",
    description:
      "Led the development team and continuous evolution of a high-scale mobile and web applications, growing daily active users from 6k to 30k, increasing average session time from 3 to 12 minutes, and scaling APIs to handle 3k requests per second. Delivered major UI, performance, and personalization improvements, built interactive features, and developed web and mobile solutions using React, Vue, Flutter, and Node.js, while managing CI/CD pipelines and cloud infrastructure with Docker and Kubernetes.",
  },
  {
    title: "Freelance Frontend Developer",
    company: "FrontendGus",
    period: "Jun 2023 - Present",
    description:
      "Worked on various client projects, creating responsive and interactive web applications using modern frontend technologies.",
  },
  {
    title: "Full-Stack Developer",
    company: "Automatize Cloud",
    period: "Jan 2023 - Abr 2025",
    description:
      "Developing and maintaining SaaS applications for industrial companies, focusing on frontend development with real-time updates.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-16">
      <h2 className="text-3xl font-bold mb-6">Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>{exp.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">
                  {exp.company} | {exp.period}
                </p>
                <p>{exp.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
