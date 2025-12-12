import React, { useState, useEffect } from "react";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import { motion } from "framer-motion";

const SidebarNav = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);
  const [activeSection, setActiveSection] = useState("intro");

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["intro", "about", "experience", "services", "projects"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "#intro", label: "Home", id: "intro" },
    { href: "#about", label: "About", id: "about" },
    { href: "#experience", label: "Experience", id: "experience" },
    { href: "#services", label: "Services", id: "services" },
    { href: "#projects", label: "Projects", id: "projects" },
  ];

  const socialLinks = [
    {
      href: "mailto:wael.fraj@outlook.fr",
      icon: <EmailRoundedIcon style={{ fontSize: 20 }} />,
      label: "Email",
    },
    {
      href: "https://github.com/waelfraj",
      icon: <GitHubIcon style={{ fontSize: 19 }} />,
      label: "GitHub",
    },
    {
      href: "https://linkedin.com/in/wael-fraj",
      icon: <LinkedInIcon style={{ fontSize: 21 }} />,
      label: "LinkedIn",
    },
  ];

  return (
    <nav 
      className="sidebar-nav fixed right-0 top-0 h-screen flex flex-col items-center justify-center z-50 px-6"
      style={{ 
        width: '100px',
        pointerEvents: 'none'
      }}
      aria-label="Main navigation"
    >
      {!isMobile && (
        <div 
          className="sidebar-links flex flex-col gap-4"
          style={{ pointerEvents: 'auto' }}
        >
          {links.map((link, i) => {
            const isActive = activeSection === link.id;
            return (
              <motion.a
                key={link.href}
                href={link.href}
                className="relative font-mono text-sm transition-all duration-300 whitespace-nowrap"
                style={{ 
                  color: isActive ? 'var(--teal)' : 'var(--slate)',
                }}
                whileHover={{ x: -8, color: 'var(--teal)' }}
                whileTap={{ scale: 0.95 }}
                aria-label={link.label}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                {isActive && (
                  <motion.span
                    className="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-1 bg-teal rounded-full"
                    layoutId="activeIndicator"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
                <span className="text-teal/50 mr-2">0{i + 1}.</span>
                {link.label}
              </motion.a>
            );
          })}
        </div>
      )}

      {/* Social Links */}
      <div 
        className="sidebar-logos flex flex-col gap-6 mt-auto mb-8"
        style={{ pointerEvents: 'auto' }}
      >
        {socialLinks.map((social, i) => (
          <motion.a
            key={social.href}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group"
            style={{ color: 'var(--slate)' }}
            whileHover={{ scale: 1.2, color: 'var(--teal)', y: -2 }}
            whileTap={{ scale: 0.9 }}
            aria-label={social.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + i * 0.1 }}
          >
            {social.icon}
            <span 
              className="absolute -right-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-mono whitespace-nowrap"
              style={{ color: 'var(--teal)' }}
            >
              {social.label}
            </span>
          </motion.a>
        ))}
      </div>

      {/* Vertical line */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-px"
        style={{ backgroundColor: 'var(--lightest-navy)' }}
        initial={{ height: 0 }}
        animate={{ height: 96 }}
        transition={{ delay: 0.8, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      />
    </nav>
  );
};

export default SidebarNav;
