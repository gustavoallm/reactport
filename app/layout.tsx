import { LoadingProvider } from "@/components/loading-provider";
import { ThemeProvider } from "@/components/theme-provider";
import { Inter } from "next/font/google";
import type React from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Gustavo A. Carvalho - Portfolio",
  description:
    "Portfolio of Gustavo de Almeida Carvalho, a Frontend Developer specializing in React, Next.js, and modern web technologies.",
  keywords: [
    "desenvolvimento web",
    "aplicativos móveis",
    "React",
    "Next.js",
    "React Native",
    "SaaS",
    "website personalizado",
    "Site",
    "Comprar site",
    "Desenvolvedor Web",
    "Desenvolvedor Frontend",
    "Desenvolvedor Fullstack",
  ],
  authors: [{ name: "Gustavo de Almeida Carvalho" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title: "Gustavo A. Carvalho - Portfolio",
    description:
      "I develop modern websites, SaaS solutions and custom projects with the most advanced technologies.",
    siteName: "Gustavo A. Carvalho",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className} suppressHydrationWarning={true}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <LoadingProvider>{children}</LoadingProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
