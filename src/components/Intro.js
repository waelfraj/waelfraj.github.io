import React from "react";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { motion } from "framer-motion";
import FadeInSection from "./FadeInSection";
import FractalTree from "./FractalTree";

const Intro = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
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

  const scrollVariants = {
    animate: {
      y: [0, 10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section 
      id="intro" 
      className="relative min-h-screen flex flex-col items-start justify-center px-[15%] lg:px-[10%] md:px-6 pt-[10%] md:pt-20 md:items-center overflow-hidden"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 opacity-50 pointer-events-none" style={{ background: 'linear-gradient(to bottom right, var(--navy), var(--navy), var(--dark-navy))' }}></div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-teal/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-orange/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <FractalTree />
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-5xl"
      >
        {/* Greeting */}
        <motion.div variants={itemVariants} className="mb-6">
          <p className="text-teal font-mono text-sm md:text-xs tracking-wider mb-4">
            Hi, my name is
          </p>
        </motion.div>

        {/* Main heading */}
        <motion.div variants={itemVariants} className="mb-4">
          <Typist avgTypingDelay={100} cursor={{ show: true, blink: true, element: "|" }}>
            <h1 
              className="text-7xl md:text-5xl font-bold leading-tight mb-4"
              style={{ 
                color: 'var(--lightest-slate)',
                fontFamily: 'var(--font-display)',
                letterSpacing: '-0.02em'
              }}
            >
              <span className="block">Wael Fraj.</span>
            </h1>
          </Typist>
        </motion.div>

        {/* Subheading */}
        <motion.div variants={itemVariants} className="mb-6">
          <h2 
            className="text-6xl md:text-4xl font-bold leading-tight mb-3"
            style={{ 
              color: 'var(--slate)',
              fontFamily: 'var(--font-display)',
              letterSpacing: '-0.01em'
            }}
          >
            I build modern digital products.
          </h2>
          <div className="flex items-center gap-2 text-slate font-mono text-sm md:text-xs">
            <LocationOnIcon style={{ fontSize: 16 }} />
            <span>Tunisia</span>
            <span className="mx-2">•</span>
            <span>Open to freelance & full-time opportunities</span>
          </div>
        </motion.div>

        {/* Description */}
        <FadeInSection>
          <motion.div variants={itemVariants} className="mb-12 max-w-2xl">
            <p 
              className="text-xl md:text-lg leading-relaxed"
              style={{ color: 'var(--slate)' }}
            >
              I'm a <span className="text-teal font-semibold">Software Engineer</span> specializing in 
              Web & Mobile development, and the{" "}
              <span className="text-orange font-semibold">CEO & Founder of wemedev</span>. 
              I craft scalable solutions that combine clean code, performance, and exceptional user experiences.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants} 
            className="flex flex-wrap gap-4 mb-16"
          >
            <motion.a
              href="#projects"
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-teal/10 border-2 border-teal rounded-lg text-teal font-semibold text-lg transition-all duration-300 overflow-hidden"
              whileHover={{ scale: 1.02, borderColor: '#5eead4' }}
              whileTap={{ scale: 0.98 }}
              aria-label="View my projects"
            >
              <span className="relative z-10">View My Work</span>
              <motion.div
                className="absolute inset-0 bg-teal opacity-0 group-hover:opacity-10 transition-opacity"
                initial={false}
              />
            </motion.a>

            <motion.a
              href="mailto:wael.fraj@outlook.fr"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-slate/30 rounded-lg text-slate font-semibold text-lg transition-all duration-300 hover:border-teal hover:text-teal"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              aria-label="Get in touch"
            >
              <EmailRoundedIcon />
              <span>Get In Touch</span>
            </motion.a>
          </motion.div>
        </FadeInSection>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
        variants={scrollVariants}
        animate="animate"
      >
        <span className="text-slate text-sm font-mono">Scroll</span>
        <ArrowDownwardIcon className="text-teal" style={{ fontSize: 24 }} />
      </motion.div>
    </section>
  );
};

export default Intro;
