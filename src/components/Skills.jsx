import React from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, Layers, TestTube } from 'lucide-react';
import BackgroundEffects from './BackgroundEffects';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Web Development',
      color: 'teal',
      skills: ['React', 'Laravel', 'Node.js', 'Symfony'],
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Mobile Development',
      color: 'orange',
      skills: ['Flutter', 'React Native'],
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: 'Architecture',
      color: 'teal',
      skills: ['Clean Architecture', 'REST APIs'],
    },
    {
      icon: <TestTube className="w-8 h-8" />,
      title: 'QA & Testing',
      color: 'orange',
      skills: ['Testing', 'QA'],
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

  const skillItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <section id="skills" className="section-padding max-w-6xl mx-auto relative overflow-hidden">
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
            Compétences
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-teal to-orange rounded-full mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative bg-navy-light p-8 rounded-xl border border-slate/10 hover:border-teal/30 transition-all duration-300 overflow-hidden"
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Gradient accent */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${
                  category.color === 'teal'
                    ? 'from-teal to-teal-light'
                    : 'from-orange to-orange-light'
                }`}
              />

              {/* Background gradient on hover */}
              <motion.div
                className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${
                  category.color === 'teal' ? 'bg-teal' : 'bg-orange'
                }`}
              />

              <div className="relative z-10">
                <div
                  className={`mb-6 ${
                    category.color === 'teal' ? 'text-teal' : 'text-orange'
                  }`}
                >
                  {category.icon}
                </div>

                <h3 className="text-2xl font-semibold mb-6 text-lightest-slate group-hover:text-teal transition-colors">
                  {category.title}
                </h3>

                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.li
                      key={skill}
                      variants={skillItemVariants}
                      className="flex items-center gap-3 text-slate group-hover:text-lightest-slate transition-colors"
                    >
                      <span
                        className={`font-mono text-lg ${
                          category.color === 'teal' ? 'text-teal' : 'text-orange'
                        }`}
                      >
                        ▹
                      </span>
                      <span className="text-lg">{skill}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
