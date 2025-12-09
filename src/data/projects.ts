// Projects data structure - ready for Excel/Google Sheets import
// This can be replaced with an API call to fetch from a spreadsheet

export interface Project {
  id: string;
  name: string;
  description: string;
  stack: string[];
  image: string;
  link: string;
}

// Sample projects data - in production, this would be fetched from an API
// that reads from Excel/Google Sheets
export const projects: Project[] = [
  {
    id: "1",
    name: "E-Commerce Platform",
    description: "Plateforme e-commerce complète avec panier, paiement Stripe et dashboard admin. Architecture moderne et scalable.",
    stack: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "/projects/ecommerce.jpg",
    link: "#",
  },
  {
    id: "2",
    name: "Application Mobile Fitness",
    description: "App mobile de suivi fitness avec plans d'entraînement personnalisés, statistiques et synchronisation cloud.",
    stack: ["Flutter", "Firebase", "Dart"],
    image: "/projects/fitness.jpg",
    link: "#",
  },
  {
    id: "3",
    name: "Dashboard Analytics",
    description: "Dashboard temps réel pour visualisation de données avec graphiques interactifs et exports automatisés.",
    stack: ["React", "D3.js", "Node.js", "PostgreSQL"],
    image: "/projects/dashboard.jpg",
    link: "#",
  },
  {
    id: "4",
    name: "API Gateway Microservices",
    description: "Architecture microservices avec API Gateway, authentification JWT et documentation OpenAPI.",
    stack: ["Laravel", "Docker", "Redis", "RabbitMQ"],
    image: "/projects/api.jpg",
    link: "#",
  },
  {
    id: "5",
    name: "Application de Livraison",
    description: "App mobile de livraison avec tracking GPS en temps réel, notifications push et paiement intégré.",
    stack: ["React Native", "Node.js", "MongoDB", "Socket.io"],
    image: "/projects/delivery.jpg",
    link: "#",
  },
  {
    id: "6",
    name: "Plateforme SaaS RH",
    description: "Solution SaaS de gestion RH avec modules recrutement, paie, congés et évaluations.",
    stack: ["React", "Laravel", "MySQL", "AWS"],
    image: "/projects/saas.jpg",
    link: "#",
  },
];

// Function to simulate fetching projects from Excel/Google Sheets
// In production, replace this with actual API call
export async function fetchProjectsFromSpreadsheet(): Promise<Project[]> {
  // Simulated delay
  await new Promise((resolve) => setTimeout(resolve, 100));
  
  // In production, this would be:
  // const response = await fetch('/api/projects');
  // return response.json();
  
  return projects;
}
