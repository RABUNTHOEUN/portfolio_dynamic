export type SkillLevel = "Learning" | "Comfortable" | "Working";

export type Skill = {
  name: string;
  /**
   * Simple Icons slug.
   * https://simpleicons.org
   * Omit for a fallback icon.
   */
  icon?: string;
  /**
   * Hex color without #.
   * Omit to use the default brand color.
   */
  color?: string;
  /**
   * Current learning / working level.
   */
  level?: SkillLevel;
};

export type NavItem = {
  label: string;
  href: string;
};

export type Social = {
  label: string;
  href: string;
};

export type SkillGroup = {
  title: string;
  description: string;
  items: Skill[];
};

export type LearningItem = {
  name: string;
  icon?: string;
  color?: string;
  description: string;
};

export type SiteConfig = {
  first_name: string;
  last_name: string;
  full_name: string;
  role: string;
  url: string;
  description: string;
  email: string;
  nav: NavItem[];
  socials: Social[];
  skillGroups: SkillGroup[];
  learning: LearningItem[];
};

export const site: SiteConfig = {
  first_name: "Ra",
  last_name: "Bunthoeun",
  full_name: "Ra Bunthoeun",

  role: "Developer",

  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",

  description:
    "Portfolio of Ra Bunthoeun — a developer building modern web applications and business systems with Nuxt, React, Next.js and Spring Boot.",

  email: "rabunthoeun7777@gmail.com",

  nav: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Skills",
      href: "/skills",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ],

  socials: [
    {
      label: "GitHub",
      href: "https://github.com/RABUNTHOEUN",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/rabunthoeun",
    },
    {
      label: "YouTube",
      href: "https://youtube.com/@rabunthoeun",
    },
    {
      label: "Mobile Phone",
      href: "tel:+855977196216",
    },
    {
      label: "Telegram",
      href: "https://t.me/Ra_bunthoeun",
    },
  ],

  skillGroups: [
    {
      title: "Frontend",
      description: "Interfaces that feel fast, responsive, and easy to use.",

      items: [
        {
          name: "HTML",
          icon: "html5",
          level: "Working",
        },
        {
          name: "CSS",
          icon: "css3",
          level: "Working",
        },
        {
          name: "JavaScript",
          icon: "javascript",
          level: "Working",
        },
        {
          name: "Vue",
          icon: "vuedotjs",
          level: "Working",
        },
        {
          name: "Nuxt",
          icon: "nuxt",
          level: "Working",
        },
        {
          name: "React",
          icon: "react",
          level: "Comfortable",
        },
        {
          name: "Next.js",
          icon: "nextdotjs",
          color: "ffffff",
          level: "Comfortable",
        },
        {
          name: "Tailwind CSS",
          icon: "tailwindcss",
          level: "Working",
        },
        {
          name: "Pinia",
          icon: "pinia",
          level: "Working",
        },
      ],
    },

    {
      title: "Backend",
      description:
        "APIs, authentication, business logic, and application services.",

      items: [
        {
          name: "Node.js",
          icon: "nodedotjs",
          level: "Comfortable",
        },
        {
          name: "Java",
          icon: "openjdk",
          level: "Working",
        },
        {
          name: "Spring Boot",
          icon: "springboot",
          level: "Working",
        },
        {
          name: "REST API",
          level: "Working",
        },
      ],
    },

    {
      title: "Data & Tools",
      description:
        "Databases, containers, version control, and development tools.",

      items: [
        {
          name: "MySQL",
          icon: "mysql",
          level: "Working",
        },
        {
          name: "Docker",
          icon: "docker",
          level: "Comfortable",
        },
        {
          name: "Git",
          icon: "git",
          level: "Working",
        },
      ],
    },
  ],

  learning: [
    {
      name: "TypeScript",
      icon: "typescript",
      description:
        "Improving type-safe development across frontend and backend projects.",
    },
    {
      name: "React / Next.js",
      icon: "nextdotjs",
      color: "ffffff",
      description:
        "Building more production-ready applications with the React ecosystem.",
    },
    {
      name: "System Design",
      icon: "diagramsdotnet",
      description:
        "Learning how to design maintainable and scalable application architectures.",
    },
    {
      name: "DevOps",
      icon: "docker",
      description:
        "Improving deployment, containers, CI/CD, and production workflows.",
    },
  ],
};
