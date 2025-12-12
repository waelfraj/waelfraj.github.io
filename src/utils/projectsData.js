/**
 * Projects Data Utility
 * 
 * Projects are dynamically loaded from Excel / Google Sheets.
 * 
 * Expected fields:
 * - Project name
 * - Description
 * - Tech stack
 * - Image URL (optional)
 * - Project link (GitHub/demo URL)
 * 
 * To integrate with Excel/Google Sheets:
 * 1. Replace the static data with a fetch call to your API endpoint
 * 2. Or use a library like 'xlsx' to parse Excel files
 * 3. For Google Sheets, use the Google Sheets API or publish as CSV/JSON
 * 
 * Example Google Sheets integration:
 * const SHEET_ID = 'your-sheet-id';
 * const API_KEY = 'your-api-key';
 * const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/Sheet1?key=${API_KEY}`;
 * 
 * Example fetch:
 * export const fetchProjects = async () => {
 *   const response = await fetch(url);
 *   const data = await response.json();
 *   return transformSheetData(data.values);
 * };
 */

// Static projects data - Replace with dynamic loading from Excel/Google Sheets
export const projectsData = {
  "E-Commerce Platform": {
    desc: "A full-stack e-commerce solution with real-time inventory management, payment integration, and admin dashboard.",
    techStack: "React, Node.js, PostgreSQL, Stripe API, AWS",
    link: "https://github.com/waelfraj/ecommerce-platform",
    openLink: "https://ecommerce-demo.wemedev.com",
  },
  "Mobile Banking App": {
    desc: "Secure mobile banking application with biometric authentication, transaction history, and real-time notifications.",
    techStack: "React Native, TypeScript, Firebase, Node.js, MongoDB",
    link: "https://github.com/waelfraj/banking-app",
    openLink: null,
  },
  "Task Management System": {
    desc: "Collaborative task management platform with real-time updates, team collaboration, and analytics dashboard.",
    techStack: "Next.js, TypeScript, Socket.io, PostgreSQL, Tailwind CSS",
    link: "https://github.com/waelfraj/task-manager",
    openLink: "https://tasks.wemedev.com",
  },
  "AI-Powered Analytics Dashboard": {
    desc: "Business intelligence dashboard with AI-driven insights, data visualization, and predictive analytics.",
    techStack: "React, Python, TensorFlow, D3.js, FastAPI",
    link: "https://github.com/waelfraj/analytics-dashboard",
    openLink: null,
  },
  "Real Estate Platform": {
    desc: "Comprehensive real estate platform with property listings, virtual tours, and mortgage calculator.",
    techStack: "Next.js, TypeScript, Prisma, PostgreSQL, Mapbox API",
    link: "https://github.com/waelfraj/real-estate-platform",
    openLink: "https://realestate.wemedev.com",
  },
  "Healthcare Management System": {
    desc: "HIPAA-compliant healthcare management system for patient records, appointments, and telemedicine.",
    techStack: "React, Node.js, MongoDB, WebRTC, AWS",
    link: "https://github.com/waelfraj/healthcare-system",
    openLink: null,
  },
};

// Helper function to transform Google Sheets data format
export const transformSheetData = (rows) => {
  if (!rows || rows.length < 2) return {};
  
  const projects = {};
  
  for (let i = 1; i < rows.length; i++) {
    const row = rows[i];
    if (row[0]) { // Project name
      projects[row[0]] = {
        desc: row[1] || "",
        techStack: row[2] || "",
        link: row[3] || null,
        openLink: row[4] || null,
      };
    }
  }
  
  return projects;
};

