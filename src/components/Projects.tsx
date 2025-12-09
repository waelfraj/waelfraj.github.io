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
    <section id="projects" className="relative section-padding bg-card">
      <AnimatedBackground variant="gradient" />
      
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Projets{" "}
            <span className="gradient-text">récents</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
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
                className="group bg-background rounded-2xl border border-border overflow-hidden card-hover"
              >
                {/* Project image */}
                <Link to={`/projects/${project.id}`}>
                  <div
                    className={`h-48 bg-gradient-to-br ${getProjectGradient(index)} flex items-center justify-center cursor-pointer`}
                  >
                    <div className="text-6xl font-bold text-primary/20 group-hover:text-primary/30 transition-colors">
                      {project.name.charAt(0)}
                    </div>
                  </div>
                </Link>

                {/* Project content */}
                <div className="p-6">
                  <Link to={`/projects/${project.id}`}>
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors cursor-pointer">
                      {project.name}
                    </h3>
                  </Link>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Stack tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all"
                    asChild
                  >
                    <Link to={`/projects/${project.id}`}>
                      Voir le projet
                      <ExternalLink className="ml-2 h-4 w-4" />
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
