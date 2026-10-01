export type Skill = {
  name: string;
  /** Simple Icons slug (https://simpleicons.org). Omit for a fallback icon. */
  icon?: string;
  /** Hex without #. Omit to use the brand color. */
  color?: string;
  level?: string;
};

export const site = {
  name: "Ra Bunthoeun",
  role: "Developer",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  description:
    "Portfolio of Ra Bunthoeun — a developer building modern web applications and business systems with Nuxt, React, Next.js and Spring Boot.",
  email: "hello@example.com", // TODO: your real email
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Skills", href: "/skills" },
    { label: "Contact", href: "/contact" },
  ],
  socials: [
    { label: "GitHub", href: "https://github.com/RABUNTHOEUN" },
    { label: "LinkedIn", href: "https://linkedin.com/in/rabunthoeun" },
    { label: "YouTube", href: "https://youtube.com/@rabunthoeun" },
  ],
  skillGroups: [
    {
      title: "Frontend",
      description: "Interfaces that feel fast and look sharp.",
      items: [
        { name: "HTML", icon: "html5" },
        { name: "CSS", icon: "css3" },
        { name: "JavaScript", icon: "javascript" },
        { name: "Vue", icon: "vuedotjs" },
        { name: "Nuxt", icon: "nuxt" },
        { name: "React", icon: "react" },
        { name: "Next.js", icon: "nextdotjs", color: "ffffff" },
        { name: "Tailwind CSS", icon: "tailwindcss" },
        { name: "Pinia", icon: "pinia" },
      ] as Skill[],
    },
    {
      title: "Backend",
      description: "APIs and business logic that scale.",
      items: [
        { name: "Node.js", icon: "nodedotjs" },
        { name: "Java", icon: "openjdk" },
        { name: "Spring Boot", icon: "springboot" },
        { name: "REST API" },
      ] as Skill[],
    },
    {
      title: "Data & Tools",
      description: "Storage, shipping and version control.",
      items: [
        { name: "MySQL", icon: "mysql" },
        { name: "Docker", icon: "docker" },
        { name: "Git", icon: "git" },
      ] as Skill[],
    },
  ],
};
