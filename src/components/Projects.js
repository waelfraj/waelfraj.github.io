import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import BackgroundEffects from './BackgroundEffects';

const Projects = () => {
  const projects = [
    {
      name: 'E-Commerce Platform',
      description: 'Plateforme e-commerce complète avec gestion d\'inventaire en temps réel, intégration de paiement et tableau de bord administrateur.',
      techStack: 'React, Node.js, PostgreSQL, Stripe API, AWS',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop',
      link: 'https://github.com/waelfraj/ecommerce-platform',
      demoLink: 'https://ecommerce-demo.wemedev.com',
    },
    {
      name: 'Mobile Banking App',
      description: 'Application bancaire mobile sécurisée avec authentification biométrique, historique des transactions et notifications en temps réel.',
      techStack: 'React Native, TypeScript, Firebase, Node.js, MongoDB',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=400&fit=crop',
      link: 'https://github.com/waelfraj/banking-app',
      demoLink: null,
    },
    {
      name: 'Task Management System',
      description: 'Plateforme de gestion de tâches collaborative avec mises à jour en temps réel, collaboration d\'équipe et tableau de bord analytique.',
      techStack: 'Next.js, TypeScript, Socket.io, PostgreSQL, Tailwind CSS',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=400&fit=crop',
      link: 'https://github.com/waelfraj/task-manager',
      demoLink: 'https://tasks.wemedev.com',
    },
    {
      name: 'AI-Powered Analytics Dashboard',
      description: 'Tableau de bord d\'intelligence d\'affaires avec insights basés sur l\'IA, visualisation de données et analyses prédictives.',
      techStack: 'React, Python, TensorFlow, D3.js, FastAPI',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
      link: 'https://github.com/waelfraj/analytics-dashboard',
      demoLink: null,
    },
    {
      name: 'Real Estate Platform',
      description: 'Plateforme immobilière complète avec listes de propriétés, visites virtuelles et calculateur hypothécaire.',
      techStack: 'Next.js, TypeScript, Prisma, PostgreSQL, Mapbox API',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=400&fit=crop',
      link: 'https://github.com/waelfraj/real-estate-platform',
      demoLink: 'https://realestate.wemedev.com',
    },
    {
      name: 'Healthcare Management System',
      description: 'Système de gestion de santé conforme HIPAA pour dossiers patients, rendez-vous et télémédecine.',
      techStack: 'React, Node.js, MongoDB, WebRTC, AWS',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=400&fit=crop',
      link: 'https://github.com/waelfraj/healthcare-system',
      demoLink: null,
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
    hidden: { opacity: 0, y: 50, scale: 0.95 },
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
    <section id="projects" className="section-padding max-w-7xl mx-auto relative overflow-hidden">
      <BackgroundEffects variant="grid" />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div className="mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-lightest-slate">
            <span className="text-teal font-mono text-2xl mr-4">{'//'}</span>
            Projets
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-teal to-orange rounded-full mt-4" />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group bg-navy-light rounded-xl border border-slate/10 hover:border-teal/30 overflow-hidden transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-teal/10"
              whileHover={{ y: -12 }}
            >
              {project.image && (
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-light via-transparent to-transparent" />
                </div>
              )}

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-lightest-slate group-hover:text-teal transition-colors">
                  {project.name}
                </h3>

                <p className="text-slate mb-4 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {project.techStack && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.split(',').map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-navy text-teal text-xs font-mono rounded-md border border-teal/20"
                      >
                        {tech.trim()}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex gap-4 pt-2">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-slate hover:text-teal transition-colors text-sm group/link"
                    >
                      <Github className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
                      Code
                    </a>
                  )}
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-slate hover:text-teal transition-colors text-sm group/link"
                    >
                      <ExternalLink className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;

