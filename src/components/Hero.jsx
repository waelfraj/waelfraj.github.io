import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, ChevronDown } from 'lucide-react';
import BackgroundEffects from './BackgroundEffects';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Effects */}
      <BackgroundEffects variant="hero" />

      {/* Gradient overlay - reduced opacity to show shapes */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/60 to-navy-light/30" style={{ zIndex: 1 }} />

      <motion.div
        className="relative z-10 max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <motion.p
            className="text-teal font-mono text-sm sm:text-base mb-6 tracking-wider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Bonjour, je suis
          </motion.p>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-6 text-lightest-slate leading-tight"
          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
        >
          <span className="block">Wael Fraj</span>
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 text-slate leading-relaxed"
        >
          Software Engineer
          <span className="block mt-2">
            <span className="text-teal">Web & Mobile</span>
            <span className="text-slate mx-3">•</span>
            <span className="text-orange">CEO of wemedev</span>
          </span>
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl md:text-2xl text-slate mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Je crée des solutions digitales modernes et performantes pour startups et entreprises.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href="#projects"
            className="group relative px-8 py-4 bg-teal text-navy font-semibold rounded-lg overflow-hidden transition-all duration-300 flex items-center gap-2 shadow-lg shadow-teal/20 hover:shadow-teal/40"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <span className="relative z-10">Mes projets</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            <motion.div
              className="absolute inset-0 bg-teal-light"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>

          <motion.a
            href="#contact"
            className="group px-8 py-4 border-2 border-slate/30 text-slate font-semibold rounded-lg hover:border-teal hover:text-teal transition-all duration-300 flex items-center gap-2 backdrop-blur-sm bg-navy-light/30"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>Contact</span>
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-3"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <span className="text-slate text-sm font-mono tracking-wider">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 text-teal" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
