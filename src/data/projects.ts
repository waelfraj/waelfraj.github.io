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
    name: "E-Commerce Premium",
    description: "Plateforme e-commerce haut de gamme avec système de panier avancé, intégration Stripe/PayPal, dashboard admin complet, gestion multi-vendeurs, système de reviews et recommandations IA. Architecture microservices scalable avec cache Redis et CDN.",
    stack: ["React", "Next.js", "Node.js", "MongoDB", "Stripe", "Redis", "AWS"],
    image: "/projects/ecommerce.jpg",
    link: "#",
  },
  {
    id: "2",
    name: "FitTrack Pro",
    description: "Application mobile de fitness premium avec plans d'entraînement personnalisés par IA, suivi nutritionnel, intégration wearables (Apple Watch, Fitbit), communauté sociale, challenges et statistiques avancées. Synchronisation cloud multi-appareils.",
    stack: ["Flutter", "Firebase", "Dart", "TensorFlow Lite", "HealthKit"],
    image: "/projects/fitness.jpg",
    link: "#",
  },
  {
    id: "3",
    name: "DataViz Enterprise",
    description: "Dashboard analytics temps réel pour entreprises avec visualisations interactives (D3.js, Chart.js), exports PDF/Excel automatisés, alertes intelligentes, prédictions ML, intégration APIs multiples et rapports personnalisables par rôle.",
    stack: ["React", "TypeScript", "D3.js", "Node.js", "PostgreSQL", "Python"],
    image: "/projects/dashboard.jpg",
    link: "#",
  },
  {
    id: "4",
    name: "Cloud API Gateway",
    description: "Architecture microservices enterprise avec API Gateway centralisé, authentification OAuth2/JWT, rate limiting, load balancing, monitoring temps réel, documentation OpenAPI/Swagger automatique, versioning et déploiement CI/CD.",
    stack: ["Laravel", "Docker", "Kubernetes", "Redis", "RabbitMQ", "Nginx"],
    image: "/projects/api.jpg",
    link: "#",
  },
  {
    id: "5",
    name: "QuickDeliver",
    description: "Application de livraison express avec tracking GPS temps réel, notifications push intelligentes, paiement intégré (mobile money, carte), système de rating, optimisation d'itinéraires IA, chat en direct et support multi-langues.",
    stack: ["React Native", "Node.js", "MongoDB", "Socket.io", "Mapbox", "Twilio"],
    image: "/projects/delivery.jpg",
    link: "#",
  },
  {
    id: "6",
    name: "HRM Suite Pro",
    description: "Solution SaaS complète de gestion RH avec modules recrutement (ATS), gestion de paie automatisée, congés et absences, évaluations 360°, formation en ligne, analytics RH, intégration comptabilité et conformité légale multi-pays.",
    stack: ["React", "Laravel", "MySQL", "AWS", "Stripe", "SendGrid"],
    image: "/projects/saas.jpg",
    link: "#",
  },
  {
    id: "7",
    name: "EduLearn Platform",
    description: "Plateforme d'apprentissage en ligne avec cours vidéo HD, quiz interactifs, certificats, forums communautaires, suivi de progression, mode hors-ligne, intégration Zoom pour classes live et marketplace de cours.",
    stack: ["Next.js", "Node.js", "PostgreSQL", "AWS S3", "Stripe", "Zoom API"],
    image: "/projects/elearning.jpg",
    link: "#",
  },
  {
    id: "8",
    name: "FinTech Wallet",
    description: "Application bancaire mobile avec portefeuille digital, virements instantanés, scan QR, historique détaillé, budgets intelligents, notifications de sécurité, authentification biométrique et support crypto-monnaies.",
    stack: ["Flutter", "Node.js", "PostgreSQL", "Stripe", "Plaid API", "Blockchain"],
    image: "/projects/fintech.jpg",
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
