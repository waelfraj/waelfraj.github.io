import React from "react";
import { motion } from "framer-motion";
import FadeInSection from "./FadeInSection";

const Credits = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FadeInSection>
      <footer 
        id="credits" 
        className="relative py-24 px-[15%] lg:px-[10%] md:px-6 text-center border-t"
        style={{ borderColor: 'rgba(136, 146, 176, 0.1)' }}
      >
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent opacity-50 pointer-events-none"></div>
        
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.p 
            className="text-lg mb-3"
            style={{ 
              color: 'var(--slate)',
              fontFamily: 'var(--font-body)',
            }}
          >
            Designed & Built by{" "}
            <span 
              className="text-teal font-semibold hover:text-teal-light transition-colors cursor-pointer"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Wael Fraj
            </span>
          </motion.p>
          <motion.p 
            className="text-sm font-mono"
            style={{ color: 'var(--slate)' }}
          >
            © {currentYear} wemedev. All rights reserved.
          </motion.p>
          
          {/* Decorative elements */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <div className="w-12 h-px" style={{ backgroundColor: 'var(--lightest-navy)' }}></div>
            <div 
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: 'var(--teal)' }}
            ></div>
            <div className="w-12 h-px" style={{ backgroundColor: 'var(--lightest-navy)' }}></div>
          </div>
        </motion.div>
      </footer>
    </FadeInSection>
  );
};

export default Credits;
