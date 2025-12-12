import React from 'react';
import { motion } from 'framer-motion';
import { Code, Briefcase, Target, Award, GraduationCap, Rocket, Users, Zap } from 'lucide-react';
import BackgroundEffects from './BackgroundEffects';

const About = () => {
  const stats = [
    { icon: <Code className="w-5 h-5" />, label: 'Années d\'expérience', value: '5+', color: 'teal' },
    { icon: <Briefcase className="w-5 h-5" />, label: 'Projets livrés', value: '50+', color: 'orange' },
    { icon: <Users className="w-5 h-5" />, label: 'Clients satisfaits', value: '30+', color: 'teal' },
    { icon: <Rocket className="w-5 h-5" />, label: 'Startups aidées', value: '20+', color: 'orange' },
  ];

  const values = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Performance',
      description: 'Code optimisé et applications rapides',
      gradient: 'from-teal to-teal-light',
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Précision',
      description: 'Attention aux détails et qualité irréprochable',
      gradient: 'from-orange to-orange-light',
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Excellence',
      description: 'Standards élevés et résultats exceptionnels',
      gradient: 'from-teal to-teal-light',
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: 'Innovation',
      description: 'Solutions modernes et technologies de pointe',
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
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

  const statVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section id="about" className="section-padding max-w-7xl mx-auto relative overflow-hidden">
      {/* Background Effects */}
      <BackgroundEffects variant="default" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Header */}
        <motion.div className="mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-lightest-slate">
            <span className="text-teal font-mono text-2xl mr-4">{'//'}</span>
            À propos
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-teal to-orange rounded-full mt-4" />
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-16">
          {/* Left Column - Main Text (3 columns) */}
          <motion.div variants={itemVariants} className="lg:col-span-3 space-y-6">
            <div className="bg-navy-light/50 backdrop-blur-sm p-8 rounded-2xl border border-slate/10">
              <div className="space-y-6 text-lg sm:text-xl text-slate leading-relaxed">
                <motion.p variants={itemVariants}>
                  Je suis <span className="text-teal font-semibold text-xl">Wael Fraj</span>, 
                  Software Engineer spécialisé en développement <span className="text-teal font-medium">Web & Mobile</span>, et{' '}
                  <span className="text-orange font-semibold text-xl">CEO & Founder de wemedev</span>, 
                  une agence digitale axée sur la création de solutions innovantes et fiables pour startups et entreprises.
                </motion.p>

                <motion.p variants={itemVariants}>
                  Diplômé en <span className="text-teal font-medium">Génie Informatique</span>, je me concentre sur la création de produits digitaux 
                  modernes et scalables qui privilégient le <span className="text-teal font-medium">code propre</span>, la{' '}
                  <span className="text-teal font-medium">performance</span>, une{' '}
                  <span className="text-teal font-medium">UX exceptionnelle</span> et la{' '}
                  <span className="text-teal font-medium">maintenabilité</span>.
                </motion.p>

                <motion.p variants={itemVariants}>
                  Je travaille principalement avec des <span className="text-orange font-medium">startups</span>,{' '}
                  <span className="text-orange font-medium">PME</span> et{' '}
                  <span className="text-orange font-medium">plateformes digitales</span>, les aidant 
                  à transformer leurs idées en applications robustes et conviviales. Mon approche combine 
                  expertise technique, vision stratégique et attention aux détails pour livrer des solutions 
                  qui dépassent les attentes.
                </motion.p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Stats & Info (2 columns) */}
          <motion.div variants={itemVariants} className="lg:col-span-2 space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={statVariants}
                  className="bg-navy-light p-6 rounded-xl border border-slate/10 hover:border-teal/30 transition-all duration-300 group"
                  whileHover={{ y: -4, scale: 1.02 }}
                >
                  <div className={`text-${stat.color === 'teal' ? 'teal' : 'orange'} mb-3 group-hover:scale-110 transition-transform`}>
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-lightest-slate mb-1">{stat.value}</div>
                  <div className="text-xs text-slate">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Quick Info Card */}
            <div className="bg-gradient-to-br from-navy-light to-navy-lighter p-6 rounded-xl border border-slate/10">
              <h3 className="text-xl font-semibold mb-6 text-lightest-slate flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-teal" />
                Profil
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="text-teal mt-1">
                    <Code className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-lightest-slate font-medium mb-1">Software Engineer</div>
                    <div className="text-slate text-sm">Web & Mobile Development</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-orange mt-1">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-lightest-slate font-medium mb-1">CEO & Founder</div>
                    <div className="text-slate text-sm">wemedev Digital Agency</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-teal mt-1">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-lightest-slate font-medium mb-1">Diplômé</div>
                    <div className="text-slate text-sm">Génie Informatique</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values Grid */}
        <motion.div variants={itemVariants}>
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl sm:text-3xl font-semibold text-lightest-slate">
              Mes valeurs
            </h3>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate/30 to-transparent ml-6" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group relative bg-navy-light p-6 rounded-xl border border-slate/10 hover:border-teal/30 transition-all duration-300 overflow-hidden"
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Gradient accent */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${value.gradient}`} />

                {/* Animated background gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                <div className="relative z-10">
                  <div className="text-teal mb-4 group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-lightest-slate group-hover:text-teal transition-colors">
                    {value.title}
                  </h4>
                  <p className="text-slate text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          variants={itemVariants}
          className="mt-16 relative overflow-hidden rounded-2xl border border-teal/20"
        >
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-teal/10 via-orange/10 to-teal/10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-teal/5 via-transparent to-orange/5" />

          <div className="relative p-8 md:p-12">
            <div className="flex items-start gap-6">
              <div className="text-teal text-5xl md:text-6xl font-mono leading-none">"</div>
              <div className="flex-1">
                <p className="text-xl sm:text-2xl md:text-3xl text-lightest-slate font-medium mb-6 leading-relaxed">
                  En tant que <span className="text-orange font-semibold">CEO de wemedev</span>, je dirige 
                  une équipe dédiée à l'excellence, en veillant à ce que chaque projet respecte les plus hauts 
                  standards de <span className="text-teal font-semibold">qualité</span>, d'<span className="text-teal font-semibold">innovation</span> et de <span className="text-teal font-semibold">satisfaction client</span>.
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-px flex-1 bg-gradient-to-r from-teal to-orange" />
                  <p className="text-slate text-lg font-medium">
                    Transformer vos idées en solutions digitales qui font la différence
                  </p>
                  <div className="h-px flex-1 bg-gradient-to-r from-orange to-teal" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
