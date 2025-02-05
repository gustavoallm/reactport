"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "A full-featured e-commerce platform with product management, cart functionality, and secure checkout.",
    image: "/ecommerce.png",
    technologies: ["React", "Redux", "Sass", "Node", "Strapi", "Stripe"],
    github: "",
    demo: "https://www.linkedin.com/posts/gageldev_reactjs-vitejs-ecommerce-activity-7089321261910171648-R6GX?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACSBMi4BVwODlNdmH49pL3B9CCKWPnq348s",
  },
  {
    title: "CRM Dashboard",
    description:
      "A comprehensive CRM dashboard for managing customer relationships, sales pipelines, and analytics.",
    image: "/crm.png",
    technologies: ["React", "TypeScript", "Tailwind", "Nest", "MongoDB"],
    github: "",
    demo: "https://stakem.netlify.app/",
  },
  {
    title: "Industrial MES System",
    description:
      "A industrial monitoring application with real-time machine updates, storage module, reporting features.",
    image: "/industrial.png",
    technologies: ["Javascript", "Jquery", "Bootstrap", "WEGnology"],
    github: "",
    demo: "https://www.loom.com/share/e09ba51f54e0413498d075154bd8bd2d?sid=014fcf6a-05dc-4d23-adcb-c41c00444c1b",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-16">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full flex flex-col">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  disabled={!project.github}
                  className={!project.github ? "opacity-50 cursor-not-allowed" : ""}
                >
                  {project.github ? (
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> GitHub
                    </a>
                  ) : (
                    <span className="flex items-center">
                      <Github className="mr-2 h-4 w-4" /> Private
                    </span>
                  )}
                </Button>
                <Button
                  asChild
                  size="sm"
                  disabled={!project.demo}
                  className={!project.demo ? "opacity-50 cursor-not-allowed" : ""}
                >
                  <a href={project.demo || "#"} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
