import AnimatedBackground from "@/components/AnimatedBackground";

const Skills = () => {
  const skillCategories = [
    {
      title: "Développement Web",
      color: "primary",
      skills: ["React", "Laravel", "Node.js", "Symfony", "TypeScript", "Next.js"],
    },
    {
      title: "Développement Mobile",
      color: "accent",
      skills: ["Flutter", "React Native", "Dart", "iOS", "Android"],
    },
    {
      title: "Architecture",
      color: "primary",
      skills: ["Clean Architecture", "APIs REST", "GraphQL", "Microservices", "Docker"],
    },
    {
      title: "QA & Testing",
      color: "accent",
      skills: ["Postman", "Tests unitaires", "Tests E2E", "CI/CD", "Automatisation"],
    },
  ];

  return (
    <section id="skills" className="relative section-padding bg-background">
      <AnimatedBackground variant="default" />
      
      <div className="container-custom relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-flex items-center gap-2 text-sm font-bold text-primary uppercase tracking-widest mb-6">
            <span className="w-8 h-0.5 bg-gradient-to-r from-primary to-transparent" />
            Compétences
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground mb-8 leading-tight">
            Expertise{" "}
            <span className="gradient-cyber bg-clip-text text-transparent">technique</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Un stack technologique moderne pour des solutions performantes et évolutives.
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="group p-8 glass-effect rounded-2xl border border-border hover:border-primary/50 transition-all duration-500 card-hover"
            >
              <h3 className={`text-2xl font-extrabold mb-8 ${
                category.color === "accent" ? "text-accent" : "text-primary"
              }`}>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skill}
                    className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-500 hover-lift border ${
                      category.color === "accent"
                        ? "bg-accent/20 text-accent border-accent/40 hover:bg-accent/30 hover:border-accent/60 hover:shadow-neon-orange"
                        : "bg-primary/20 text-primary border-primary/40 hover:bg-primary/30 hover:border-primary/60 hover:shadow-neon-blue"
                    }`}
                    style={{
                      animationDelay: `${(categoryIndex * 100) + (skillIndex * 50)}ms`,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
