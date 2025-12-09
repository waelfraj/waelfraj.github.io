import { Code2, Smartphone, Building2 } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Web Development",
      description: "React, Laravel, Node.js",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Flutter, React Native",
    },
    {
      icon: Building2,
      title: "CEO wemedev",
      description: "Agence digitale",
    },
  ];

  return (
    <section id="about" className="section-padding bg-card">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
              À propos
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Passionné par la{" "}
              <span className="gradient-text">création digitale</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Ingénieur informatique spécialisé en développement web et mobile
              (React, MERN, Laravel, Flutter, React Native). CEO de{" "}
              <span className="text-accent font-semibold">wemedev</span>, une
              agence digitale qui développe des solutions innovantes pour
              entreprises et startups.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Mon approche combine expertise technique et vision business pour
              transformer vos idées en produits digitaux performants et élégants.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid gap-6">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="group flex items-start gap-5 p-6 bg-background rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 card-hover"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-xl gradient-hero flex items-center justify-center shadow-glow-primary">
                  <item.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
