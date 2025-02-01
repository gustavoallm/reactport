import { Navigation } from "@/components/navigation"
import { Home } from "@/components/home"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { Experience } from "@/components/experience"
import { Contact } from "@/components/contact"

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <Home />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  )
}

