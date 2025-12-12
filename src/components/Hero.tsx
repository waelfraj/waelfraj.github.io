import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedBackground from "@/components/AnimatedBackground";
import waelPhoto from "@/assets/images/wael.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AnimatedBackground variant="hero" />
      
      {/* Additional gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/40 pointer-events-none" />

      <div className="container-custom pt-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side - Content */}
          <div className="text-center lg:text-left">
            {/* Badge - Style moderne */}
            <div className="animate-fade-up inline-flex items-center gap-2.5 glass-effect rounded-full px-6 py-3 mb-10 shadow-glow-primary hover:shadow-neon-blue transition-all duration-500 border border-primary/20">
              <span className="relative w-2.5 h-2.5">
                <span className="absolute inset-0 bg-primary rounded-full animate-ping opacity-75" />
                <span className="absolute inset-0 bg-primary rounded-full shadow-glow-cyan" />
              </span>
              <span className="text-sm font-semibold text-foreground tracking-wide">Disponible pour de nouveaux projets</span>
            </div>

            {/* Main heading - Style cyber */}
            <h1 className="animate-fade-up-delay-1 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 leading-tight">
              <span className="block text-foreground mb-2">Wael Fraj</span>
              <span className="block gradient-cyber mt-3 bg-clip-text text-transparent">
                Ingénieur Informatique
              </span>
            </h1>

            {/* Subtitle - Style épuré */}
            <p className="animate-fade-up-delay-2 text-xl sm:text-2xl text-muted-foreground mb-12 leading-relaxed">
              Développeur Full-Stack • Architecte Logiciel •{" "}
              <span className="text-accent font-bold relative">
                CEO de wemedev
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-accent to-transparent opacity-50" />
              </span>
            </p>

            {/* CTA Buttons - Style moderne */}
            <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row items-center lg:items-start gap-6 mb-12">
              <Button 
                variant="hero" 
                size="xl" 
                className="group relative overflow-hidden"
                asChild
              >
                <a href="#projects" className="relative z-10 flex items-center">
                  <span className="relative z-10">Découvrir mes projets</span>
                  <ArrowDown className="ml-2 h-5 w-5 relative z-10 group-hover:translate-y-1 transition-transform" />
                </a>
              </Button>
              <Button 
                variant="hero-outline" 
                size="xl"
                className="group"
                asChild
              >
                <a href="#contact" className="relative z-10">Me contacter</a>
              </Button>
            </div>

            {/* Social links - Style moderne */}
            <div className="animate-fade-up-delay-3 flex items-center justify-center lg:justify-start gap-6">
          <a
            href="https://github.com/waelfraj"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-5 rounded-2xl glass-effect border border-primary/30 hover:border-primary hover:text-primary hover:bg-primary/10 transition-all duration-500 shadow-soft hover:shadow-neon-blue hover:scale-110"
            aria-label="GitHub"
          >
            <Github className="h-6 w-6 relative z-10" />
            <span className="absolute inset-0 bg-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <a
            href="https://linkedin.com/in/waelfraj"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-5 rounded-2xl glass-effect border border-primary/30 hover:border-primary hover:text-primary hover:bg-primary/10 transition-all duration-500 shadow-soft hover:shadow-neon-blue hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6 relative z-10" />
            <span className="absolute inset-0 bg-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <a
            href="mailto:contact@waelfraj.com"
            className="group relative p-5 rounded-2xl glass-effect border border-accent/30 hover:border-accent hover:text-accent hover:bg-accent/10 transition-all duration-500 shadow-soft hover:shadow-neon-orange hover:scale-110"
            aria-label="Email"
          >
            <Mail className="h-6 w-6 relative z-10" />
            <span className="absolute inset-0 bg-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>
          </div>

          {/* Right side - Photo */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative group">
              {/* Glow effect behind photo - Optimized */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-full blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-300" style={{ willChange: 'opacity', transform: 'translateZ(0)' }} />
              
              {/* Photo container */}
              <div className="relative z-10">
                {/* Border gradient - Optimized */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/60 via-accent/60 to-primary/60 rounded-full opacity-60 blur-sm group-hover:opacity-80 transition-opacity duration-300" />
                
                {/* Photo */}
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/50 shadow-glow-primary group-hover:shadow-glow-primary/80 transition-transform duration-300 group-hover:scale-105" style={{ willChange: 'transform', transform: 'translateZ(0)' }}>
                  <img 
                    src={waelPhoto} 
                    alt="Wael Fraj" 
                    className="w-full h-full object-cover"
                    loading="eager"
                    decoding="async"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                {/* Reduced floating elements for performance */}
                <div className="absolute -top-4 -right-4 w-12 h-12 border border-primary/25 rounded-lg rotate-12 opacity-50" style={{ willChange: 'transform', transform: 'translateZ(0)' }} />
                <div className="absolute -bottom-4 -left-4 w-10 h-10 border border-accent/25 rounded-full opacity-50" style={{ willChange: 'transform', transform: 'translateZ(0)' }} />
              </div>
            </div>
          </div>
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
