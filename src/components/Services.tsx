import {
  Globe,
  Smartphone,
  Server,
  MessageSquare,
  Brain,
  TestTube,
} from "lucide-react";
import AnimatedBackground from "@/components/AnimatedBackground";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Développement Web",
      description:
        "Applications web modernes et performantes avec React, Laravel et Node.js. Sites vitrines, e-commerce, SaaS.",
    },
    {
      icon: Smartphone,
      title: "Développement Mobile",
      description:
        "Applications iOS et Android natives ou cross-platform avec Flutter et React Native.",
    },
    {
      icon: Server,
      title: "Création d'API",
      description:
        "APIs RESTful et GraphQL robustes et sécurisées. Architecture microservices et intégrations.",
    },
    {
      icon: MessageSquare,
      title: "Consulting Technique",
      description:
        "Audit technique, choix d'architecture, accompagnement et formation de vos équipes.",
    },
    {
      icon: Brain,
      title: "Solutions IA",
      description:
        "Intégration d'intelligence artificielle, chatbots, automatisation et machine learning.",
    },
    {
      icon: TestTube,
      title: "QA & Testing",
      description:
        "Tests manuels et automatisés, CI/CD, assurance qualité et optimisation des performances.",
    },
  ];

  return (
    <section id="services" className="relative section-padding bg-background">
      <AnimatedBackground variant="gradient" />
      
      <div className="container-custom relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-flex items-center gap-2 text-sm font-bold text-primary uppercase tracking-widest mb-6">
            <span className="w-8 h-0.5 bg-gradient-to-r from-primary to-transparent" />
            Services
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground mb-8 leading-tight">
            Comment puis-je{" "}
            <span className="gradient-cyber bg-clip-text text-transparent">vous aider?</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Des solutions sur mesure pour transformer vos idées en produits digitaux.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative p-8 glass-effect rounded-2xl border border-border hover:border-primary/50 transition-all duration-500 card-hover overflow-hidden"
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-full transition-all duration-500 group-hover:from-primary/15 group-hover:scale-110" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-accent/5 to-transparent rounded-tr-full transition-all duration-500 group-hover:from-accent/15 group-hover:scale-110 opacity-0 group-hover:opacity-100" />

              {/* Icon */}
              <div className="relative w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mb-8 shadow-glow-primary transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-neon-blue">
                <service.icon className="h-7 w-7 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="relative text-2xl font-extrabold text-foreground mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="relative text-muted-foreground leading-relaxed text-base">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
