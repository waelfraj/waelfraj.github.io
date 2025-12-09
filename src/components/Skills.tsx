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
    <section id="skills" className="relative section-padding">
      <AnimatedBackground variant="default" />
      
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            Compétences
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Expertise{" "}
            <span className="gradient-text">technique</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Un stack technologique moderne pour des solutions performantes et évolutives.
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="group p-8 bg-card rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 card-hover"
            >
              <h3 className={`text-xl font-bold mb-6 ${
                category.color === "accent" ? "text-accent" : "text-primary"
              }`}>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skill}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover-lift ${
                      category.color === "accent"
                        ? "bg-accent/10 text-accent hover:bg-accent/20"
                        : "bg-primary/10 text-primary hover:bg-primary/20"
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
