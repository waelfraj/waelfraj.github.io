import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create mailto link as fallback
    const subject = encodeURIComponent(`Contact from ${formData.name}`);
    const body = encodeURIComponent(`${formData.message}\n\nFrom: ${formData.email}`);
    const mailtoLink = `mailto:wael.fraj@outlook.fr?subject=${subject}&body=${body}`;

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    window.location.href = mailtoLink;
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });

    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const socialLinks = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      href: 'mailto:wael.fraj@outlook.fr',
      text: 'wael.fraj@outlook.fr',
      color: 'teal',
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: 'GitHub',
      href: 'https://github.com/waelfraj',
      text: 'github.com/waelfraj',
      color: 'teal',
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/wael-fraj',
      text: 'linkedin.com/in/wael-fraj',
      color: 'orange',
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
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const inputVariants = {
    focus: {
      scale: 1.02,
      transition: { duration: 0.2 },
    },
  };

  return (
    <section id="contact" className="section-padding max-w-6xl mx-auto">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={itemVariants} className="mb-16 text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-lightest-slate">
            <span className="text-teal font-mono text-2xl mr-4">{'//'}</span>
            Contact
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-teal to-orange rounded-full mt-4 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate mb-2">
                  Nom
                </label>
                <motion.input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  variants={inputVariants}
                  whileFocus="focus"
                  className="w-full px-4 py-3 bg-navy-light border border-slate/20 rounded-lg text-lightest-slate focus:outline-none focus:border-teal transition-all duration-300"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate mb-2">
                  Email
                </label>
                <motion.input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  variants={inputVariants}
                  whileFocus="focus"
                  className="w-full px-4 py-3 bg-navy-light border border-slate/20 rounded-lg text-lightest-slate focus:outline-none focus:border-teal transition-all duration-300"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate mb-2">
                  Message
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  variants={inputVariants}
                  whileFocus="focus"
                  className="w-full px-4 py-3 bg-navy-light border border-slate/20 rounded-lg text-lightest-slate focus:outline-none focus:border-teal transition-all duration-300 resize-none"
                  placeholder="Votre message..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-4 bg-teal text-navy font-semibold rounded-lg hover:bg-teal-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-teal/20 hover:shadow-teal/40"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Envoyé!
                  </>
                ) : isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-navy border-t-transparent rounded-full animate-spin" />
                    Envoi...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Envoyer
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-lightest-slate">
                Autres moyens de contact
              </h3>
              <p className="text-slate mb-8 leading-relaxed">
                N'hésitez pas à me contacter via email, GitHub ou LinkedIn. 
                Je réponds généralement dans les 24 heures.
              </p>
            </div>

            <div className="space-y-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target={link.href.startsWith('mailto:') ? '_self' : '_blank'}
                  rel={link.href.startsWith('mailto:') ? '' : 'noopener noreferrer'}
                  className="flex items-center gap-4 p-5 bg-navy-light rounded-xl border border-slate/10 hover:border-teal/30 transition-all duration-300 group"
                  whileHover={{ x: 8, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={`${link.color === 'teal' ? 'text-teal' : 'text-orange'} group-hover:scale-110 transition-transform`}>
                    {link.icon}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-slate mb-1">{link.label}</div>
                    <div className="text-lightest-slate font-medium">{link.text}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
