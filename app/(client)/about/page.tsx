"use client"

import Reveal from "@/components/portfolio/Reveal"
import { useLanguage } from "@/components/language-provider"
import PageHeader from "@/components/portfolio/PageHeader"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const focus = [
  {
    title: "Frontend",
    text: "Responsive, accessible interfaces with Vue, Nuxt, React and Next.js.",
  },
  {
    title: "Backend",
    text: "APIs and business logic with Spring Boot, Java and Node.js.",
  },
  {
    title: "Data & Deployment",
    text: "MySQL databases, Docker-based environments, Git workflows and application deployment.",
  },
]

const principles = [
  {
    number: "01",
    title: "Understand the problem",
    text: "Before writing code, I try to understand the users, requirements, workflow, and the actual problem the software needs to solve.",
  },
  {
    number: "02",
    title: "Keep it practical",
    text: "I prefer solutions that are simple to understand, maintain, and extend rather than adding unnecessary complexity.",
  },
  {
    number: "03",
    title: "Build with purpose",
    text: "Every feature should have a reason to exist and should contribute to a better user or business experience.",
  },
  {
    number: "04",
    title: "Keep learning",
    text: "Technology changes quickly, so I continuously experiment with new tools, frameworks, patterns, and development practices.",
  },
]

const experience = [
  {
    year: "Now",
    title: "Developer & Problem Solver",
    text: "Building modern web applications, business systems, CMS platforms, APIs, and digital products.",
  },
  {
    year: "Focus",
    title: "Full-Stack Development",
    text: "Working across frontend interfaces, backend services, databases, authentication, APIs, and deployment.",
  },
  {
    year: "Learning",
    title: "Continuous Improvement",
    text: "Exploring better architecture, UI/UX, performance, DevOps practices, and scalable application design.",
  },
]

const technologies = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Vue",
  "Nuxt",
  "React",
  "Next.js",
  "Node.js",
  "Java",
  "Spring Boot",
  "Tailwind CSS",
  "MySQL",
  "Docker",
  "Git",
]

export default function AboutPage() {
  const { t } = useLanguage()
  return (
    <main className="mx-auto max-w-6xl px-6 pb-32">

      {/* =====================================================
          HEADER
      ===================================================== */}
      <PageHeader
        eyebrow={t("About me")}
        title={t("Turning ideas into useful products.")}
      />

      {/* =====================================================
          INTRODUCTION
      ===================================================== */}
      <section className="mt-16">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.7fr] lg:items-start">

          <div className="space-y-6 text-lg leading-8 text-fg/50">
            <Reveal>
              <p>{t("I'm Ra Bunthoeun, a developer who enjoys turning ideas, requirements, and real-world problems into useful digital products.")}</p>
            </Reveal>

            <Reveal delay={0.1}>
              <p>{t("My work spans frontend development, backend systems, APIs, databases, CMS platforms, and deployment. I enjoy working across the stack because understanding the complete system helps me build better solutions.")}</p>
            </Reveal>

            <Reveal delay={0.2}>
              <p>{t("I'm especially interested in software that helps businesses work more efficiently — from websites and content platforms to internal tools and business applications.")}</p>
            </Reveal>
          </div>

          {/* Developer card */}
          <Reveal delay={0.15}>
            <Card className="border-fg/10 bg-fg/[0.02] text-fg">
              <CardHeader>
                <CardTitle className="text-lg">{t("Developer profile")}</CardTitle>
              </CardHeader>

              <CardContent>
                <div className="space-y-5 text-sm">
                  <div className="flex justify-between gap-6 border-b border-fg/10 pb-4">
                    <span className="text-fg/30">{t("Role")}</span>
                    <span>{t("Developer")}</span>
                  </div>

                  <div className="flex justify-between gap-6 border-b border-fg/10 pb-4">
                    <span className="text-fg/30">{t("Focus")}</span>
                    <span>{t("Web & Business Systems")}</span>
                  </div>

                  <div className="flex justify-between gap-6 border-b border-fg/10 pb-4">
                    <span className="text-fg/30">{t("Frontend")}</span>
                    <span>{t("Nuxt / React / Next.js")}</span>
                  </div>

                  <div className="flex justify-between gap-6 border-b border-fg/10 pb-4">
                    <span className="text-fg/30">{t("Backend")}</span>
                    <span>{t("Spring Boot / Node.js")}</span>
                  </div>

                  <div className="flex justify-between gap-6">
                    <span className="text-fg/30">{t("Database")}</span>
                    <span>{t("MySQL")}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Reveal>

        </div>
      </section>

      {/* =====================================================
          WHAT I DO
      ===================================================== */}
      <section className="mt-32">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.3em] text-brand">{t("What I do")}</p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">{t("Building across the stack.")}</h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-fg/40">{t("I work across different parts of a product, from the interface users interact with to the backend systems that power it.")}</p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {focus.map((item, index) => (
            <Reveal key={t(item.title)} delay={index * 0.12}>
              <Card className="group h-full border-fg/10 bg-fg/[0.02] text-fg transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:bg-fg/[0.04]">
                <CardHeader>
                  <div className="mb-4 text-sm text-brand">
                    0{index + 1}
                  </div>

                  <CardTitle>{t(item.title)}</CardTitle>
                </CardHeader>

                <CardContent className="leading-7 text-fg/50">
                  {t(item.text)}
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      {/* =====================================================
          EXPERIENCE
      ===================================================== */}
      <section className="mt-32">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.3em] text-brand">{t("Experience")}</p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">{t("Always building, always learning.")}</h2>
        </Reveal>

        <div className="mt-12">
          {experience.map((item, index) => (
            <Reveal key={t(item.title)} delay={index * 0.1}>
              <div className="grid gap-6 border-t border-fg/10 py-8 md:grid-cols-[120px_240px_1fr]">
                <span className="text-sm text-brand">
                  {t(item.year)}
                </span>

                <h3 className="text-xl font-semibold">
                  {t(item.title)}
                </h3>

                <p className="max-w-2xl leading-7 text-fg/40">
                  {t(item.text)}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* =====================================================
          PRINCIPLES
      ===================================================== */}
      <section className="mt-32">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.3em] text-brand">{t("How I think")}</p>

          <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">{t("My approach to building software.")}</h2>
        </Reveal>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-fg/10 bg-fg/10 md:grid-cols-2">
          {principles.map((item) => (
            <Reveal key={item.number}>
              <div className="h-full bg-ink p-8 transition-colors duration-300 hover:bg-fg/[0.04] sm:p-10">
                <span className="text-sm text-brand">
                  {item.number}
                </span>

                <h3 className="mt-8 text-xl font-semibold">
                  {t(item.title)}
                </h3>

                <p className="mt-4 leading-7 text-fg/40">
                  {t(item.text)}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* =====================================================
          TECHNOLOGIES
      ===================================================== */}
      <section className="mt-32">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.3em] text-brand">{t("Technology")}</p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">{t("Tools I'm comfortable building with.")}</h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-fg/40">{t("My toolkit continues to evolve, but these are some of the technologies I use and explore across my projects.")}</p>
        </Reveal>

        <div className="mt-12 flex flex-wrap gap-3">
          {technologies.map((technology, index) => (
            <Reveal key={technology} delay={index * 0.03}>
              <span className="inline-flex rounded-full border border-fg/10 bg-fg/[0.02] px-4 py-2 text-sm text-fg/60 transition-colors hover:border-brand/30 hover:text-fg">
                {technology}
              </span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* =====================================================
          CURRENTLY LEARNING
      ===================================================== */}
      <section className="mt-32">
        <Reveal>
          <Card className="overflow-hidden border-fg/10 bg-gradient-to-br from-brand/[0.12] via-fg/[0.02] to-transparent text-fg">
            <CardContent className="p-8 sm:p-12">
              <p className="text-sm uppercase tracking-[0.3em] text-brand">{t("Currently learning")}</p>

              <h2 className="mt-5 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">{t("Going deeper, not just wider.")}</h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-fg/50">{t("I'm continuing to improve my understanding of architecture, application performance, UI/UX, deployment, and building software that can grow with real-world requirements.")}</p>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "System Design",
                  "Performance",
                  "UI/UX",
                  "DevOps",
                  "Architecture",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-fg/10 px-4 py-2 text-sm text-fg/50"
                  >
                    {t(item)}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </Reveal>
      </section>

      {/* =====================================================
          PERSONAL
      ===================================================== */}
      <section className="mt-32">
        <Reveal>
          <div className="border-y border-fg/10 py-16 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-brand">{t("Beyond the code")}</p>

            <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">{t("I enjoy learning, experimenting, and turning ideas into things that actually work.")}</h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-fg/40">{t("For me, development is not only about writing code. It's about understanding people, solving problems, learning from mistakes, and continuously improving the way products are built.")}</p>
          </div>
        </Reveal>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="mt-32">
        <Reveal>
          <div className="rounded-3xl border border-fg/10 bg-fg/[0.02] p-8 text-center sm:p-12 lg:p-16">
            <p className="text-sm uppercase tracking-[0.3em] text-brand">{t("Let's work together")}</p>

            <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">{t("Have an idea worth building?")}</h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-fg/40">{t("Whether it's a website, business application, or something completely new, I'd love to hear about it.")}</p>

            <div className="mt-10">
              <a
                href="/contact"
                className="inline-flex rounded-full bg-btn px-6 py-3 font-medium text-btn-fg transition hover:bg-btn/85"
              >{t("Start a conversation →")}</a>
            </div>
          </div>
        </Reveal>
      </section>

    </main>
  )
}
