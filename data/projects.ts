export type Project = {
  slug: string;
  number: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string;

  technologies: string[];
  category: string;
  year: string;

  featured?: boolean;

  github?: string;
  liveUrl?: string;

  // Project context
  role?: string;
  duration?: string;

  // Case study
  features?: string[];
  challenges?: string[];
  outcomes?: string[];
};

export const projects: Project[] = [
  {
    slug: "business-management-platform",
    number: "01",
    title: "Business Management Platform",

    shortDescription:
      "A modern platform for managing business operations, users, workflows, and reporting.",

    description:
      "A full-stack business management platform designed to simplify daily operations, manage organizational workflows, and provide teams with a centralized workspace.",

    image: "/projects/business-platform.jpg",

    technologies: ["Nuxt", "Vue", "Spring Boot", "Java", "MySQL", "Docker"],

    category: "Web Application",
    year: "2026",

    featured: true,

    role: "Full-Stack Developer",
    duration: "2026",

    github: "https://github.com/RABUNTHOEUN/business-platform",

    liveUrl: "https://thoeun.store",

    features: [
      "Dashboard and analytics",
      "User and role management",
      "Workflow management",
      "REST API integration",
      "Responsive interface",
    ],

    challenges: [
      "Designing a scalable application architecture",
      "Managing complex role-based permissions",
      "Synchronizing frontend and backend state",
    ],

    outcomes: [
      "Centralized business operations into one platform",
      "Improved visibility of workflows and activities",
      "Created a reusable foundation for future features",
    ],
  },

  {
    slug: "school-feedback-system",
    number: "02",
    title: "School Feedback System",

    shortDescription:
      "A feedback and case management platform for schools and organizations.",

    description:
      "A structured feedback platform that allows users to submit feedback, review reports, convert feedback into cases, assign responsible users, and track resolution.",

    image: "/projects/feedback-system.jpg",

    technologies: ["Nuxt", "Vue", "Tailwind CSS", "REST API", "MySQL"],

    category: "Management System",
    year: "2026",

    featured: true,

    role: "Frontend / Full-Stack Developer",
    duration: "2026",

    github: "https://github.com/RABUNTHOEUN/feedback-system",

    features: [
      "Public feedback",
      "Internal feedback",
      "Feedback review",
      "Case management",
      "Assignment workflow",
      "Status history",
    ],

    challenges: [
      "Designing a clear feedback-to-case workflow",
      "Supporting different types of feedback",
      "Managing status transitions and history",
      "Creating a simple experience for different user roles",
    ],

    outcomes: [
      "Structured feedback into a trackable workflow",
      "Connected feedback reports with case management",
      "Made assignment and resolution easier to monitor",
    ],
  },

  {
    slug: "website-builder",
    number: "03",
    title: "Website Builder",

    shortDescription:
      "A dynamic website builder with reusable components and CMS features.",

    description:
      "A configurable website builder that allows administrators to create pages using reusable sections, manage content, and publish dynamic websites.",

    image: "/projects/website-builder.jpg",

    technologies: ["Nuxt", "Vue", "Pinia", "Tailwind CSS", "CMS"],

    category: "CMS",
    year: "2026",

    featured: true,

    role: "Frontend / Full-Stack Developer",
    duration: "2026",

    github: "https://github.com/RABUNTHOEUN/website-builder",

    liveUrl: "https://thoeun.store",

    features: [
      "Dynamic page configuration",
      "Reusable components",
      "CMS management",
      "SEO configuration",
      "Preview mode",
      "Dynamic routing",
      "Content management",
    ],

    challenges: [
      "Building reusable website sections",
      "Managing dynamic page configurations",
      "Keeping shared components consistent",
      "Supporting preview and published content",
      "Handling dynamic routes and SEO metadata",
    ],

    outcomes: [
      "Created a reusable foundation for multiple websites",
      "Reduced repeated development through shared components",
      "Made page creation configurable through CMS data",
    ],
  },

  {
    slug: "event-management-system",
    number: "04",
    title: "Event Management System",

    shortDescription:
      "An event management solution for invitations, guests, tasks, and workflows.",

    description:
      "A full-stack event management platform for organizing events, managing guests, invitations, tasks, payments, and operational workflows.",

    image: "/projects/event-management.jpg",

    technologies: ["Nuxt", "Spring Boot", "Java", "MySQL", "Docker"],

    category: "SaaS",
    year: "2026",

    role: "Full-Stack Developer",
    duration: "2026",

    github: "https://github.com/RABUNTHOEUN/event-management",

    features: [
      "Event management",
      "Guest management",
      "Digital invitations",
      "QR check-in",
      "Task management",
      "Financial tracking",
    ],

    challenges: [
      "Managing multiple event workflows",
      "Designing guest and invitation relationships",
      "Implementing QR-based check-in",
      "Managing task assignments and statuses",
      "Keeping event data organized across different modules",
    ],

    outcomes: [
      "Centralized event operations in one application",
      "Simplified guest and invitation management",
      "Connected event tasks with operational workflows",
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
