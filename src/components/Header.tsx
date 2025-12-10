import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: isHomePage ? "#about" : "/#about", label: "À propos" },
    { href: isHomePage ? "#skills" : "/#skills", label: "Compétences" },
    { href: isHomePage ? "#projects" : "/#projects", label: "Projets" },
    { href: isHomePage ? "#services" : "/#services", label: "Services" },
    { href: isHomePage ? "#contact" : "/#contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "glass-effect shadow-medium border-b border-border/50 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <Link 
          to="/" 
          className="group relative text-2xl font-extrabold gradient-cyber bg-clip-text text-transparent hover:scale-110 transition-transform duration-300"
        >
          <span className="relative z-10">WF</span>
          <span className="absolute inset-0 bg-primary/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative px-4 py-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-all duration-300 rounded-lg hover:bg-primary/5"
            >
              <span className="relative z-10">{link.label}</span>
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button 
            variant="default" 
            size="sm" 
            className="group"
            asChild
          >
            <a href={isHomePage ? "#contact" : "/#contact"}>
              Contactez-moi
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-3">
          <button
            className="relative p-2.5 rounded-lg hover:bg-primary/10 transition-colors duration-300 group"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-foreground group-hover:text-primary transition-colors" />
            ) : (
              <Menu className="h-6 w-6 text-foreground group-hover:text-primary transition-colors" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass-effect shadow-large border-b border-border/50 animate-fade-up backdrop-blur-xl">
          <nav className="container-custom py-8 flex flex-col gap-2">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative px-4 py-3 text-base font-semibold text-foreground hover:text-primary transition-all duration-300 rounded-lg hover:bg-primary/10 animate-fade-up"
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="relative z-10">{link.label}</span>
                <span className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-accent scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center rounded-r" />
              </a>
            ))}
            <Button 
              variant="default" 
              className="mt-4"
              asChild
            >
              <a href={isHomePage ? "#contact" : "/#contact"} onClick={() => setIsMobileMenuOpen(false)}>
                Contactez-moi
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
