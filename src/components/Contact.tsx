import { useState } from "react";
import { Send, Mail, Github, Linkedin, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import AnimatedBackground from "@/components/AnimatedBackground";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message envoyé !",
      description: "Merci pour votre message. Je vous répondrai rapidement.",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "contact@waelfraj.com",
      href: "mailto:contact@waelfraj.com",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/waelfraj",
      href: "https://github.com/waelfraj",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/waelfraj",
      href: "https://linkedin.com/in/waelfraj",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Tunisie",
      href: null,
    },
  ];

  return (
    <section id="contact" className="relative section-padding bg-card/50 backdrop-blur-sm border-t border-b border-border/50">
      <AnimatedBackground variant="subtle" />
      
      <div className="container-custom relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-flex items-center gap-2 text-sm font-bold text-primary uppercase tracking-widest mb-6">
            <span className="w-8 h-0.5 bg-gradient-to-r from-primary to-transparent" />
            Contact
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground mb-8 leading-tight">
            Travaillons{" "}
            <span className="gradient-cyber bg-clip-text text-transparent">ensemble</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Vous avez un projet en tête ? N'hésitez pas à me contacter.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-xl font-bold text-foreground mb-6">
              Informations de contact
            </h3>
            
            {contactInfo.map((info, index) => (
              <div 
                key={info.label} 
                className="group flex items-center gap-4 p-4 rounded-xl bg-background/50 border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center shadow-glow-primary group-hover:scale-110 group-hover:shadow-neon-blue transition-all duration-300">
                  <info.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">{info.label}</p>
                  {info.href ? (
                    <a
                      href={info.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-bold text-foreground hover:text-primary transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-base font-bold text-foreground">{info.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* wemedev promo */}
            <div className="mt-8 p-6 bg-background rounded-2xl border border-border">
              <p className="text-sm text-muted-foreground mb-2">
                Pour des projets d'agence, visitez :
              </p>
              <a
                href="https://wemedev.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent font-semibold hover:underline"
              >
                wemedev.com
                <span className="text-lg">→</span>
              </a>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-foreground mb-2"
                >
                  Nom complet
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Votre nom"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="h-12 border-primary/20 focus:border-primary focus:ring-primary/20 transition-all duration-300"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-foreground mb-2"
                >
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="votre@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="h-12 border-primary/20 focus:border-primary focus:ring-primary/20 transition-all duration-300"
                />
              </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-semibold text-foreground mb-2"
                >
                  Sujet
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Sujet de votre message"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="h-12 border-primary/20 focus:border-primary focus:ring-primary/20 transition-all duration-300"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-foreground mb-2"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Décrivez votre projet..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="resize-none border-primary/20 focus:border-primary focus:ring-primary/20 transition-all duration-300"
                />
              </div>

              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full sm:w-auto"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Envoi en cours..."
                ) : (
                  <>
                    Envoyer le message
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
