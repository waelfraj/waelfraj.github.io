import { Code2, Smartphone, Building2 } from "lucide-react";
import AnimatedBackground from "@/components/AnimatedBackground";

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
    <section id="about" className="relative section-padding bg-card/50 backdrop-blur-sm border-t border-b border-border/50">
      <AnimatedBackground variant="subtle" />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <span className="inline-flex items-center gap-2 text-sm font-bold text-primary uppercase tracking-widest mb-6">
              <span className="w-8 h-0.5 bg-gradient-to-r from-primary to-transparent" />
              À propos
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground mb-8 leading-tight">
              Passionné par la{" "}
              <span className="gradient-cyber bg-clip-text text-transparent">création digitale</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Ingénieur informatique spécialisé en développement web et mobile
              (React, MERN, Laravel, Flutter, React Native). CEO de{" "}
              <span className="text-accent font-bold relative">
                wemedev
                <span className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-gradient-to-r from-accent to-transparent opacity-60" />
              </span>, une
              agence digitale qui développe des solutions innovantes pour
              entreprises et startups.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Mon approche combine expertise technique et vision business pour
              transformer vos idées en produits digitaux performants et élégants.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid gap-6">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="group relative flex items-start gap-5 p-6 glass-effect rounded-2xl border border-border hover:border-primary/50 transition-all duration-500 card-hover overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center shadow-glow-primary transition-all duration-500 group-hover:scale-110 group-hover:shadow-neon-blue group-hover:rotate-3">
                  <item.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
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
