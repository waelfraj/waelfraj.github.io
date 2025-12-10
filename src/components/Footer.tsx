import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-16 border-t border-border/50 bg-card/30 backdrop-blur-sm">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a 
              href="#" 
              className="inline-block text-3xl font-extrabold gradient-cyber bg-clip-text text-transparent hover:scale-110 transition-transform duration-300 mb-3"
            >
              WF
            </a>
            <p className="text-sm text-muted-foreground">
              © {currentYear} Wael Fraj. Tous droits réservés.
            </p>
          </div>

          {/* Made with */}
          <p className="text-sm text-muted-foreground flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10">
            Fait avec <Heart className="h-4 w-4 text-accent fill-accent animate-pulse" /> en Tunisie
          </p>

          {/* Social links */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/waelfraj"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-3 rounded-xl bg-primary/5 border border-primary/10 text-muted-foreground hover:text-primary hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5 relative z-10" />
              <span className="absolute inset-0 bg-primary/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />
            </a>
            <a
              href="https://linkedin.com/in/waelfraj"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-3 rounded-xl bg-primary/5 border border-primary/10 text-muted-foreground hover:text-primary hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5 relative z-10" />
              <span className="absolute inset-0 bg-primary/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />
            </a>
            <a
              href="mailto:contact@waelfraj.com"
              className="group relative p-3 rounded-xl bg-accent/5 border border-accent/10 text-muted-foreground hover:text-accent hover:bg-accent/10 hover:border-accent/30 transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <Mail className="h-5 w-5 relative z-10" />
              <span className="absolute inset-0 bg-accent/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
