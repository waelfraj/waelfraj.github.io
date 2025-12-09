import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import { projects } from "@/data/projects";

const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Projet non trouvé</h1>
          <p className="text-muted-foreground mb-8">Ce projet n'existe pas ou a été supprimé.</p>
          <Button variant="default" asChild>
            <Link to="/#projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour aux projets
            </Link>
          </Button>
        </div>
      </div>
    );
  }

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

  const projectIndex = projects.findIndex((p) => p.id === id);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-20">
        {/* Hero section */}
        <section className="relative section-padding">
          <AnimatedBackground variant="hero" />
          
          <div className="container-custom">
            {/* Back button */}
            <Link 
              to="/#projects"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Retour aux projets</span>
            </Link>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Content */}
              <div>
                <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
                  Projet
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                  {project.name}
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {project.description}
                </p>

                {/* Meta info */}
                <div className="flex flex-wrap gap-6 mb-8">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <User className="h-4 w-4 text-primary" />
                    <span>Wael Fraj</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>2024</span>
                  </div>
                </div>

                {/* Stack */}
                <div className="mb-8">
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                    Technologies utilisées
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap gap-4">
                  <Button variant="hero" size="lg" asChild>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      Voir le projet
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="hero-outline" size="lg" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code source
                    </a>
                  </Button>
                </div>
              </div>

              {/* Project image */}
              <div className={`aspect-video rounded-2xl bg-gradient-to-br ${getProjectGradient(projectIndex)} flex items-center justify-center shadow-medium overflow-hidden`}>
                <div className="text-[120px] font-bold text-primary/20">
                  {project.name.charAt(0)}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project details section */}
        <section className="relative section-padding bg-card">
          <AnimatedBackground variant="subtle" />
          
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8">
                À propos du projet
              </h2>
              
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>
                
                <h3 className="text-xl font-bold text-foreground mt-12 mb-4">
                  Objectifs
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Développer une solution scalable et maintenable</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Assurer une expérience utilisateur fluide et intuitive</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Implémenter les meilleures pratiques de développement</span>
                  </li>
                </ul>

                <h3 className="text-xl font-bold text-foreground mt-12 mb-4">
                  Résultats
                </h3>
                <div className="grid sm:grid-cols-3 gap-6 mt-6">
                  <div className="p-6 bg-background rounded-xl border border-border text-center">
                    <div className="text-3xl font-bold gradient-text mb-2">+50%</div>
                    <div className="text-sm text-muted-foreground">Performance</div>
                  </div>
                  <div className="p-6 bg-background rounded-xl border border-border text-center">
                    <div className="text-3xl font-bold gradient-text mb-2">100%</div>
                    <div className="text-sm text-muted-foreground">Responsive</div>
                  </div>
                  <div className="p-6 bg-background rounded-xl border border-border text-center">
                    <div className="text-3xl font-bold gradient-text mb-2">A+</div>
                    <div className="text-sm text-muted-foreground">Lighthouse</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Other projects */}
        <section className="relative section-padding">
          <AnimatedBackground variant="default" />
          
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
              Autres projets
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {projects
                .filter((p) => p.id !== id)
                .slice(0, 3)
                .map((otherProject, index) => (
                  <Link
                    key={otherProject.id}
                    to={`/projects/${otherProject.id}`}
                    className="group bg-card rounded-2xl border border-border overflow-hidden card-hover"
                  >
                    <div className={`h-32 bg-gradient-to-br ${getProjectGradient(index)} flex items-center justify-center`}>
                      <div className="text-4xl font-bold text-primary/20 group-hover:text-primary/30 transition-colors">
                        {otherProject.name.charAt(0)}
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                        {otherProject.name}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-1 mt-1">
                        {otherProject.stack.join(", ")}
                      </p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetails;
