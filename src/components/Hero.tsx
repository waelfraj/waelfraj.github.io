import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 to-transparent rounded-full" />
      </div>

      <div className="container-custom text-center pt-20">
        {/* Badge */}
        <div className="animate-fade-up inline-flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2 mb-8 shadow-soft">
          <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
          <span className="text-sm font-medium text-muted-foreground">Disponible pour de nouveaux projets</span>
        </div>

        {/* Main heading */}
        <h1 className="animate-fade-up-delay-1 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
          <span className="block text-foreground">Wael Fraj</span>
          <span className="block gradient-text mt-2">Ingénieur Informatique</span>
        </h1>

        {/* Subtitle */}
        <p className="animate-fade-up-delay-2 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          Développeur Web & Mobile • CEO de{" "}
          <span className="text-accent font-semibold">wemedev</span>
        </p>

        {/* CTA Buttons */}
        <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Button variant="hero" size="xl" asChild>
            <a href="#projects">
              Mes projets
              <ArrowDown className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <Button variant="hero-outline" size="xl" asChild>
            <a href="#contact">Contact</a>
          </Button>
        </div>

        {/* Social links */}
        <div className="animate-fade-up-delay-3 flex items-center justify-center gap-4">
          <a
            href="https://github.com/waelfraj"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-card border border-border hover:border-primary hover:text-primary transition-all duration-300 shadow-soft hover:shadow-medium"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com/in/waelfraj"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-card border border-border hover:border-primary hover:text-primary transition-all duration-300 shadow-soft hover:shadow-medium"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="mailto:contact@waelfraj.com"
            className="p-3 rounded-full bg-card border border-border hover:border-primary hover:text-primary transition-all duration-300 shadow-soft hover:shadow-medium"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
