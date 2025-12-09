import {
  Globe,
  Smartphone,
  Server,
  MessageSquare,
  Brain,
  TestTube,
} from "lucide-react";

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
    <section id="services" className="section-padding">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Comment puis-je{" "}
            <span className="gradient-text">vous aider?</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Des solutions sur mesure pour transformer vos idées en produits digitaux.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative p-8 bg-card rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 card-hover overflow-hidden"
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-full transition-all duration-300 group-hover:from-primary/10" />

              {/* Icon */}
              <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center mb-6 shadow-glow-primary transition-transform duration-300 group-hover:scale-110">
                <service.icon className="h-6 w-6 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="relative text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="relative text-muted-foreground leading-relaxed">
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
