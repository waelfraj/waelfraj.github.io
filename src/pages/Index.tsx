import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

// Lazy load components below the fold for better performance
const About = lazy(() => import("@/components/About"));
const Skills = lazy(() => import("@/components/Skills"));
const Projects = lazy(() => import("@/components/Projects"));
const Services = lazy(() => import("@/components/Services"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Global background gradient overlay - Enhanced */}
      <div className="fixed inset-0 bg-gradient-to-b from-background via-background/95 to-card/80 pointer-events-none -z-10" />
      
      {/* Animated grid pattern - Enhanced */}
      <div 
        className="fixed inset-0 opacity-[0.03] pointer-events-none -z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h100v100H0z' fill='none'/%3E%3Cpath d='M0 0l100 100M100 0L0 100' stroke='%23fff' stroke-width='0.5'/%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Additional background effects - Optimized */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        {/* Reduced floating orbs for performance */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/4 rounded-full blur-2xl" style={{ willChange: 'opacity', transform: 'translateZ(0)' }} />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/4 rounded-full blur-2xl" style={{ willChange: 'opacity', transform: 'translateZ(0)' }} />
      </div>
      
      <Header />
      <main className="relative">
        <Hero />
        <Suspense fallback={<div className="min-h-screen" />}>
          <About />
          <Skills />
          <Projects />
          <Services />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
