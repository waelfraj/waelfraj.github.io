import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-navy">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Contact />
      </main>
      <footer className="py-12 px-4 text-center text-slate text-sm border-t border-slate/10 bg-navy-light">
        <p className="mb-2">
          © {new Date().getFullYear()} Wael Fraj. Tous droits réservés.
        </p>
        <p className="text-slate/70 text-xs">
          Conçu et développé avec React & Tailwind CSS
        </p>
      </footer>
    </div>
  );
}

export default App;
