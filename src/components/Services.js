import React from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, Network, MessageSquare, Brain, TestTube } from 'lucide-react';
import BackgroundEffects from './BackgroundEffects';

const Services = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Développement Web',
      description: 'Applications web modernes et performantes avec React, Laravel, Node.js et Symfony.',
      gradient: 'from-teal to-teal-light',
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Développement Mobile',
      description: 'Applications mobiles cross-platform avec Flutter et React Native pour iOS et Android.',
      gradient: 'from-orange to-orange-light',
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: 'Création d\'APIs',
      description: 'APIs RESTful robustes et documentées avec architecture scalable et sécurisée.',
      gradient: 'from-teal to-teal-light',
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: 'Consulting Technique',
      description: 'Conseil expert en architecture, choix technologiques et meilleures pratiques.',
      gradient: 'from-orange to-orange-light',
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Solutions IA',
      description: 'Intégration de capacités IA dans vos applications pour des fonctionnalités intelligentes.',
      gradient: 'from-teal to-teal-light',
    },
    {
      icon: <TestTube className="w-8 h-8" />,
      title: 'QA & Testing',
      description: 'Tests complets incluant tests manuels, API testing et assurance qualité.',
      gradient: 'from-orange to-orange-light',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section id="services" className="section-padding max-w-6xl mx-auto relative overflow-hidden">
      <BackgroundEffects variant="default" />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div className="mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-lightest-slate">
            <span className="text-teal font-mono text-2xl mr-4">{'//'}</span>
            Services
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-teal to-orange rounded-full mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative bg-navy-light p-6 rounded-xl border border-slate/10 hover:border-teal/30 transition-all duration-300 overflow-hidden"
              whileHover={{ y: -10, scale: 1.02 }}
            >
              {/* Gradient accent bar */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient}`} />

              {/* Gradient overlay on hover */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              />

              <div className="relative z-10">
                <div className="text-teal mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-lightest-slate group-hover:text-teal transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
