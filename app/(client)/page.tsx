"use client";

import Link from "next/link";
import { useLanguage } from "@/components/language-provider"
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import { projects } from "@/data/projects";
import { site } from "@/data/site";
import { motion, useMotionValue, useSpring } from "motion/react";
import {
  SiNextdotjs,
  SiReact,
  SiNuxt,
  SiVuedotjs,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiSpringboot,
  SiTailwindcss,
  SiMysql,
  SiGit,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import type { ReactNode } from "react";
import type { Variants } from "motion/react";

const MotionLink = motion.create(Link);

/**
 * Shared reveal animation
 *
 * Explicitly typed as Variants so Motion's transition/ease
 * types are correctly inferred by TypeScript.
 */
const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/**
 * Stagger animation for groups of children.
 */
const staggerContainer: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

/**
 * Reveal
 *
 * Reusable scroll-based reveal animation.
 */
function Reveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.15,
      }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Magnetic button
 *
 * Moves slightly toward the mouse cursor.
 */
function MagneticButton({
  children,
  href,
  primary = false,
}: {
  children: ReactNode;
  href: string;
  primary?: boolean;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, {
    stiffness: 300,
    damping: 20,
  });

  const springY = useSpring(y, {
    stiffness: 300,
    damping: 20,
  });

  function handleMouseMove(event: React.MouseEvent<HTMLAnchorElement>) {
    const rect = event.currentTarget.getBoundingClientRect();

    const mouseX = event.clientX - rect.left - rect.width / 2;

    const mouseY = event.clientY - rect.top - rect.height / 2;

    x.set(mouseX * 0.15);
    y.set(mouseY * 0.15);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }



  return (
    <MotionLink
      href={href}
      style={{
        x: springX,
        y: springY,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileTap={{
        scale: 0.96,
      }}
      className={[
        "inline-flex items-center justify-center rounded-full px-6 py-3 font-medium",
        "transition-colors duration-300",
        primary
          ? "bg-btn text-btn-fg hover:bg-btn/85"
          : "border border-fg/15 text-fg hover:border-fg/40 hover:bg-fg/5",
      ].join(" ")}
    >
      {children}
    </MotionLink>
  );
}

export default function Page() {
  const { t } = useLanguage()
  const technologies = [
    { name: "Next.js", icon: SiNextdotjs, color: "var(--strong)" },
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Nuxt", icon: SiNuxt, color: "#00DC82" },
    { name: "Vue", icon: SiVuedotjs, color: "#42B883" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
    { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
    { name: "Java", icon: FaJava, color: "#ED8B00" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    { name: "Git", icon: SiGit, color: "#F05032" },
  ];
  return (
    <main className="overflow-hidden">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative flex min-h-screen items-center overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 -z-10">
          {/* Main glow */}
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.18, 0.28, 0.18],
              x: [0, 40, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-brand/20 blur-[120px]"
          />

          {/* Secondary glow */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.08, 0.16, 0.08],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[100px]"
          />

          {/* Grid */}
          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(100,116,139,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(100,116,139,.8) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        <div className="mx-auto grid w-full max-w-7xl gap-16 px-6 py-32 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          {/* =====================================================
              HERO CONTENT
          ===================================================== */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Availability */}
            <motion.div
              variants={fadeUp}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-fg/10 bg-fg/5 px-4 py-2 text-sm text-fg/60"
            >
              <motion.span
                animate={{
                  opacity: [1, 0.4, 1],
                  scale: [1, 0.85, 1],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                }}
                className="h-2 w-2 rounded-full bg-teal"
              />{t("Available for opportunities")}</motion.div>

            {/* Eyebrow */}
            <motion.p
              variants={fadeUp}
              className="mb-10 text-sm font-medium uppercase tracking-[0.3em] text-brand"
            >
              {t("Developer & Problem Solver")}
            </motion.p>

            {/* Heading */}
            <motion.h1
              variants={fadeUp}
              className="hero-title max-w-4xl font-bold tracking-tight"
            >
              {t("Turning Ideas")}
              <motion.span
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="block bg-gradient-to-r from-strong via-brand to-brand bg-clip-text text-transparent"
              >
                {t("Into Digital Reality.")}
              </motion.span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="mt-8 max-w-2xl text-lg leading-8 text-fg/50"
            >{t("I'm a developer focused on building modern web applications, business systems, and digital products that solve real-world problems.")}</motion.p>

            {/* CTA buttons */}
            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-wrap gap-4"
            >
              <MagneticButton href="/projects" primary>{t("View my work")}</MagneticButton>

              <MagneticButton href="/contact">{t("Contact me")}</MagneticButton>
            </motion.div>

            {/* Social links */}
            <motion.div
              variants={fadeUp}
              className="mt-12 flex items-center gap-6 text-sm text-fg/40"
            >
              {site.socials.map((social) => (
                <motion.a
                  key={t(social.label)}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{
                    y: -3,
                    color: "var(--strong)",
                  }}
                >
                  {t(social.label)}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* =====================================================
              CODE CARD
          ===================================================== */}
          <motion.div
            initial={{
              opacity: 0,
              x: 80,
              rotateY: 15,
            }}
            animate={{
              opacity: 1,
              x: 0,
              rotateY: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
              y: -8,
              rotateY: -2,
              rotateX: 2,
            }}
            style={{
              perspective: 1000,
            }}
            className="relative hidden lg:block"
          >
            {/* Card glow */}
            <motion.div
              animate={{
                opacity: [0.2, 0.35, 0.2],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -inset-6 rounded-3xl bg-brand/10 blur-3xl"
            />


            {/* Code window */}
            <div
              className="
    relative overflow-hidden rounded-2xl
    border border-border
    bg-card text-card-foreground
    shadow-xl
    transition-colors duration-300
  "
            >
              {/* Window header */}
              <div className="flex items-center gap-2 border-b border-border px-5 py-4">
                <span className="h-3 w-3 rounded-full bg-red-400/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                <span className="h-3 w-3 rounded-full bg-teal/80" />

                <span className="ml-3 text-xs text-muted-foreground">
                  portfolio.tsx
                </span>
              </div>

              {/* Code */}
              <pre className="overflow-x-auto p-6 text-sm leading-7">
                <code>
                  <span className="text-brand font-semibold">const</span>{" "}
                  <span className="text-blue-500 dark:text-blue-300">developer</span> = {"{"}
                  {"\n"}
                  {"  "}name:{" "}
                  <span className="text-teal">"Ra Bunthoeun"</span>,{"\n"}
                  {"  "}role:{" "}
                  <span className="text-teal">"{t("Developer")}"</span>,{"\n"}
                  {"  "}focus: [{"\n"}
                  {"    "}
                  <span className="text-teal">"{t("Web Development")}"</span>,
                  {"\n"}
                  {"    "}
                  <span className="text-teal">"{t("Business Systems")}"</span>,
                  {"\n"}
                  {"    "}
                  <span className="text-teal">"{t("UI/UX Design")}"</span>,
                  {"\n"}
                  {"  "}],{"\n"}
                  {"  "}stack: [{"\n"}
                  {"    "}
                  <span className="text-teal">"Nuxt"</span>,{"\n"}
                  {"    "}
                  <span className="text-teal">"React"</span>,{"\n"}
                  {"    "}
                  <span className="text-teal">"Node.js"</span>,{"\n"}
                  {"    "}
                  <span className="text-teal">"Spring Boot"</span>,{"\n"}
                  {"  "}],{"\n"}
                  {"  "}coffee:{" "}
                  <span className="text-orange-600 dark:text-orange-300">true</span>,
                  {"\n"}
                  {"}"};
                </code>
              </pre>

              {/* Footer */}
              <div className="flex items-center justify-between border-t border-border px-5 py-3 text-xs text-muted-foreground">
                <span>{t("Building digital experiences")}</span>
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-teal" />
                  TypeScript
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            SCROLL INDICATOR
        ===================================================== */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.5,
          }}
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs text-fg/30 md:flex"
        >
          <span>{t("Scroll to explore")}</span>

          <motion.div
            animate={{
              scaleY: [0.4, 1, 0.4],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
            }}
            className="h-10 w-px origin-top bg-gradient-to-b from-fg/60 to-transparent"
          />
        </motion.div>
      </section>

      {/* =========================================================
    ABOUT
========================================================= */}
      <section className="border-t border-fg/10 py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.3em] text-brand">{t("About me")}</p>

            <div className="mt-6 grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">{t("Turning ideas into")}<span className="block text-fg/30">{t("useful digital products.")}</span>
              </h2>

              <div className="max-w-2xl">
                <p className="text-lg leading-8 text-fg/50">{t("I'm Ra Bunthoeun, a developer focused on building modern web applications, business systems, and digital experiences.")}</p>

                <p className="mt-6 text-lg leading-8 text-fg/40">{t("I enjoy solving real-world problems with clean interfaces, reliable APIs, scalable architecture, and thoughtful user experiences.")}</p>

                <div className="mt-8">
                  <MagneticButton href="/about">{t("More about me →")}</MagneticButton>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =========================================================
    WHAT I BUILD
========================================================= */}
      <section className="border-t border-fg/10 py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-brand">{t("What I build")}</p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">{t("Digital products that solve real problems.")}</h2>

            <p className="mt-6 text-lg leading-8 text-fg/40">{t("From business platforms to modern websites, I focus on building software that is practical, maintainable, and easy to use.")}</p>
          </Reveal>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-fg/10 bg-fg/10 md:grid-cols-2"
          >
            {[
              {
                number: "01",
                title: "Web Applications",
                description:
                  "Modern responsive applications with intuitive interfaces and smooth user experiences.",
                tags: ["Next.js", "Nuxt", "React"],
              },
              {
                number: "02",
                title: "Business Systems",
                description:
                  "Internal tools, dashboards, workflows, and systems designed around real business processes.",
                tags: ["Spring Boot", "Node.js", "MySQL"],
              },
              {
                number: "03",
                title: "CMS & Websites",
                description:
                  "Flexible content-driven websites that allow teams to manage their content without developers.",
                tags: ["Nuxt", "CMS", "SEO"],
              },
              {
                number: "04",
                title: "API & Backend",
                description:
                  "Structured APIs and backend services designed for security, scalability, and maintainability.",
                tags: ["REST API", "JWT", "Database"],
              },
            ].map((item) => (
              <motion.div
                key={item.number}
                variants={fadeUp}
                className="group bg-ink p-8 transition-colors duration-500 hover:bg-fg/[0.04] sm:p-10"
              >
                <div className="flex items-start justify-between">
                  <span className="text-sm text-fg/20">{item.number}</span>

                  <motion.span
                    whileHover={{ x: 5 }}
                    className="text-fg/20 transition group-hover:text-brand"
                  >
                    ↗
                  </motion.span>
                </div>

                <h3 className="mt-16 text-2xl font-semibold">{t(item.title)}</h3>

                <p className="mt-4 leading-7 text-fg/40">
                  {t(item.description)}
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-fg/10 px-3 py-1 text-xs text-fg/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =========================================================
    TECH STACK
========================================================= */}
      <section className="border-t border-fg/10 py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-brand">{t("Technology")}</p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">{t("Tools I use to build.")}</h2>
          </Reveal>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
          >
            {technologies.map(({ name, icon: Icon, color }, index) => (
              <motion.div
                key={name}
                variants={fadeUp}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                }}
                style={
                  {
                    "--tech-color": color,
                  } as React.CSSProperties
                }
                className="
      group
      relative
      overflow-hidden
      rounded-2xl
      border border-fg/10
      bg-fg/[0.02]
      p-6

      transition-all
      duration-500
      ease-out

      hover:border-[var(--tech-color)]/30
      hover:bg-fg/[0.04]

      before:pointer-events-none
      before:absolute
      before:inset-0
      before:-z-0
      before:rounded-2xl
      before:bg-[var(--tech-color)]
      before:opacity-0
      before:blur-3xl
      before:transition-opacity
      before:duration-500
      before:content-['']

      group-hover:before:opacity-[0.08]
    "
              >
                {/* Content */}
                <div className="relative z-10">
                  {/* Top */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-fg/20">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span
                      className="
            text-fg/20
            transition-all
            duration-500
            group-hover:text-[var(--tech-color)]
            group-hover:drop-shadow-[0_0_6px_var(--tech-color)]
          "
                    >
                      ●
                    </span>
                  </div>

                  {/* Logo */}
                  <div
                    className="
          mt-8
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-xl
          border
          border-fg/10
          bg-fg/[0.04]

          transition-all
          duration-500

          group-hover:scale-105
          group-hover:border-[var(--tech-color)]/30
          group-hover:bg-fg/[0.08]
        "
                  >
                    <Icon
                      className="
            h-7
            w-7
            text-fg/50

            transition-all
            duration-500

            group-hover:text-[var(--tech-color)]
            group-hover:drop-shadow-[0_0_10px_var(--tech-color)]
          "
                    />
                  </div>

                  {/* Name */}
                  <h3
                    className="
          mt-5
          text-lg
          font-medium
          text-fg/90
          transition-colors
          duration-300
        "
                  >
                    {name}
                  </h3>

                  {/* Hover line */}
                  <div
                    className="
          mt-4
          h-px
          w-0
          transition-all
          duration-500
          group-hover:w-full
        "
                    style={{
                      backgroundColor: color,
                      boxShadow: `0 0 10px ${color}`,
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =========================================================
    STATS
========================================================= */}
      <section className="border-t border-fg/10 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-px overflow-hidden rounded-2xl border border-fg/10 bg-fg/10 sm:grid-cols-2 lg:grid-cols-4"
          >
            {[
              {
                value: "15+",
                label: "Technologies explored",
              },
              {
                value: "20+",
                label: "Projects & experiments",
              },
              {
                value: "4+",
                label: "Years learning & building",
              },
              {
                value: "∞",
                label: "Problems to solve",
              },
            ].map((stat) => (
              <motion.div
                key={t(stat.label)}
                variants={fadeUp}
                className="bg-ink p-8 sm:p-10"
              >
                <div className="text-4xl font-bold sm:text-5xl">
                  {stat.value}
                </div>

                <p className="mt-3 text-sm text-fg/40">{t(stat.label)}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =========================================================
    PROCESS
========================================================= */}
      <section className="border-t border-fg/10 py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.3em] text-brand">{t("How I work")}</p>

            <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">{t("From idea to something people can use.")}</h2>
          </Reveal>

          <div className="mt-16">
            {[
              {
                number: "01",
                title: "Understand",
                description:
                  "Understand the problem, users, requirements, and expected outcome.",
              },
              {
                number: "02",
                title: "Plan",
                description:
                  "Break the idea into practical features, architecture, and development steps.",
              },
              {
                number: "03",
                title: "Build",
                description:
                  "Develop the interface, backend, database, integrations, and core functionality.",
              },
              {
                number: "04",
                title: "Improve",
                description:
                  "Test, refine, fix issues, improve the experience, and prepare the product for launch.",
              },
            ].map((step, index) => (
              <Reveal
                key={step.number}
                className="group grid gap-6 border-t border-fg/10 py-8 md:grid-cols-[100px_280px_1fr] md:items-center"
              >
                <span className="text-sm text-brand">{step.number}</span>

                <h3 className="text-2xl font-semibold">{t(step.title)}</h3>

                <p className="max-w-xl leading-7 text-fg/40">
                  {t(step.description)}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          FEATURED PROJECTS
      ========================================================= */}
      <section className="border-t border-fg/10 py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mb-16 flex items-end justify-between gap-6">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-brand">{t("Selected work")}</p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">{t("Featured projects")}</h2>
            </div>

            <Link
              href="/projects"
              className="hidden text-fg/50 transition hover:text-fg sm:block"
            >{t("View all →")}</Link>
          </Reveal>

          <ProjectsSection
            items={projects.filter((project) => project.featured)}
          />
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="border-t border-fg/10 py-32">
        <Reveal className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-5xl font-bold tracking-tight sm:text-7xl">{t("Let's build something")}<span className="block text-fg/30">{t("great together.")}</span>
          </h2>

          <div className="mt-10">
            <MagneticButton href="/contact" primary>{t("Get in touch →")}</MagneticButton>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
