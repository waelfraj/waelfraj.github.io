import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

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
      
      {/* Additional background effects */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        {/* Large floating orbs */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "-3s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "-1.5s" }} />
        
        {/* Animated dots pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, hsl(217 91% 60% / 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          animation: 'shimmer 20s linear infinite'
        }} />
        
        {/* Wave effect */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary/5 via-transparent to-transparent opacity-50" />
      </div>
      
      <Header />
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
