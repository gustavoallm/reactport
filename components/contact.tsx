"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import type React from "react"; // Added import for React
import { useState } from "react";

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log("Form submitted:", formState);
    // Reset form after submission
    setFormState({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-16">
      <h2 className="text-3xl font-bold mb-6">Contact</h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        <div className="flex items-center flex-wrap flex-col gap-4 justify-start">
          <a
            href="mailto:gustavo_allm@outlook.com"
            className="text-muted-foreground hover:text-primary flex items-center space-x-2 self-start"
          >
            <Mail />
            <span>gustavo_allm@outlook.com</span>
          </a>
          <a
            href="https://www.linkedin.com/in/gageldev/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary flex items-center space-x-2 self-start"
          >
            <Linkedin />
            <span>Linkedin</span>
          </a>

          <a
            href="https://github.com/gustavoallm"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary flex items-center space-x-2 self-start"
          >
            <Github />

            <span>Github</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
