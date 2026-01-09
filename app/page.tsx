import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Experience } from "@/components/experience";
import { Home } from "@/components/home";
import { Navigation } from "@/components/navigation";
import { Projects } from "@/components/projects";

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="container mx-auto px-8 md:px-4 py-8">
        <Home />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}
