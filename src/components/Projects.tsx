import { useState, useEffect } from "react";
import { ExternalLink, FileSpreadsheet } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AnimatedBackground from "@/components/AnimatedBackground";
import { projects, fetchProjectsFromSpreadsheet, type Project } from "@/data/projects";

const Projects = () => {
  const [projectList, setProjectList] = useState<Project[]>(projects);
  const [isLoading, setIsLoading] = useState(false);

  // Simulate fetching from spreadsheet
  useEffect(() => {
    const loadProjects = async () => {
      setIsLoading(true);
      try {
        const data = await fetchProjectsFromSpreadsheet();
        setProjectList(data);
      } catch (error) {
        console.error("Error loading projects:", error);
      } finally {
        setIsLoading(false);
      }
    };
    loadProjects();
  }, []);

  // Project card images - using gradients as placeholders
  const getProjectGradient = (index: number) => {
    const gradients = [
      "from-primary/20 to-accent/20",
      "from-accent/20 to-primary/20",
      "from-primary/30 to-primary/10",
      "from-accent/30 to-accent/10",
      "from-primary/15 to-accent/25",
      "from-accent/15 to-primary/25",
    ];
    return gradients[index % gradients.length];
  };

  return (
    <section id="projects" className="relative section-padding bg-card/50 backdrop-blur-sm border-t border-b border-border/50">
      <AnimatedBackground variant="subtle" />
      
      <div className="container-custom relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-flex items-center gap-2 text-sm font-bold text-primary uppercase tracking-widest mb-6">
            <span className="w-8 h-0.5 bg-gradient-to-r from-primary to-transparent" />
            Portfolio
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground mb-8 leading-tight">
            Projets{" "}
            <span className="gradient-cyber bg-clip-text text-transparent">récents</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Une sélection de projets réalisés pour des clients et startups.
          </p>
          
          {/* Excel sync indicator */}
          <div className="inline-flex items-center gap-2 bg-background border border-border rounded-full px-4 py-2 text-sm text-muted-foreground">
            <FileSpreadsheet className="h-4 w-4 text-primary" />
            <span>Synchronisé avec le fichier de données</span>
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          </div>
        </div>

        {/* Projects grid */}
        {isLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="animate-pulse bg-background rounded-2xl h-96"
              />
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectList.map((project, index) => (
              <article
                key={project.id}
                className="group relative bg-background rounded-2xl border border-border overflow-hidden card-hover glass-effect hover:border-primary/50"
              >
                {/* Project image */}
                <Link to={`/projects/${project.id}`}>
                  <div
                    className={`h-56 bg-gradient-to-br ${getProjectGradient(index)} flex items-center justify-center cursor-pointer relative overflow-hidden group-hover:scale-105 transition-transform duration-500`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="text-7xl font-extrabold text-primary/30 group-hover:text-primary/50 transition-all duration-500 relative z-10">
                      {project.name.charAt(0)}
                    </div>
                  </div>
                </Link>

                {/* Project content */}
                <div className="p-6">
                  <Link to={`/projects/${project.id}`}>
                    <h3 className="text-2xl font-extrabold text-foreground mb-4 group-hover:text-primary transition-colors cursor-pointer">
                      {project.name}
                    </h3>
                  </Link>
                  <p className="text-muted-foreground text-base mb-6 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Stack tags */}
                  <div className="flex flex-wrap gap-2.5 mb-6">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3.5 py-1.5 bg-primary/10 text-primary border border-primary/20 rounded-lg text-xs font-semibold hover:bg-primary/20 hover:border-primary transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary group-hover:shadow-glow-primary transition-all duration-300"
                    asChild
                  >
                    <Link to={`/projects/${project.id}`} className="flex items-center justify-center">
                      Voir le projet
                      <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
