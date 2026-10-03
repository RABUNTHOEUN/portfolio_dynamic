import { pageMetadata } from "@/lib/seo"
import Reveal from "@/components/portfolio/Reveal"
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

export const metadata = pageMetadata(
  "About",
  "Who I am, what I do, and how I approach building software.",
  "/about",
)

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 pb-32">

      {/* =====================================================
          HEADER
      ===================================================== */}
      <PageHeader
        eyebrow="About me"
        title="Turning ideas into useful products."
      />

      {/* =====================================================
          INTRODUCTION
      ===================================================== */}
      <section className="mt-16">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.7fr] lg:items-start">

          <div className="space-y-6 text-lg leading-8 text-white/50">
            <Reveal>
              <p>
                I&apos;m Ra Bunthoeun, a developer who enjoys turning
                ideas, requirements, and real-world problems into
                useful digital products.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <p>
                My work spans frontend development, backend systems,
                APIs, databases, CMS platforms, and deployment. I enjoy
                working across the stack because understanding the
                complete system helps me build better solutions.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <p>
                I&apos;m especially interested in software that helps
                businesses work more efficiently — from websites and
                content platforms to internal tools and business
                applications.
              </p>
            </Reveal>
          </div>

          {/* Developer card */}
          <Reveal delay={0.15}>
            <Card className="border-white/10 bg-white/[0.02] text-white">
              <CardHeader>
                <CardTitle className="text-lg">
                  Developer profile
                </CardTitle>
              </CardHeader>

              <CardContent>
                <div className="space-y-5 text-sm">
                  <div className="flex justify-between gap-6 border-b border-white/10 pb-4">
                    <span className="text-white/30">Role</span>
                    <span>Developer</span>
                  </div>

                  <div className="flex justify-between gap-6 border-b border-white/10 pb-4">
                    <span className="text-white/30">Focus</span>
                    <span>Web & Business Systems</span>
                  </div>

                  <div className="flex justify-between gap-6 border-b border-white/10 pb-4">
                    <span className="text-white/30">Frontend</span>
                    <span>Nuxt / React / Next.js</span>
                  </div>

                  <div className="flex justify-between gap-6 border-b border-white/10 pb-4">
                    <span className="text-white/30">Backend</span>
                    <span>Spring Boot / Node.js</span>
                  </div>

                  <div className="flex justify-between gap-6">
                    <span className="text-white/30">Database</span>
                    <span>MySQL</span>
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
          <p className="text-sm uppercase tracking-[0.3em] text-violet-400">
            What I do
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Building across the stack.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/40">
            I work across different parts of a product, from the
            interface users interact with to the backend systems that
            power it.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {focus.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.12}>
              <Card className="group h-full border-white/10 bg-white/[0.02] text-white transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/30 hover:bg-white/[0.04]">
                <CardHeader>
                  <div className="mb-4 text-sm text-violet-400">
                    0{index + 1}
                  </div>

                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>

                <CardContent className="leading-7 text-white/50">
                  {item.text}
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
          <p className="text-sm uppercase tracking-[0.3em] text-violet-400">
            Experience
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Always building, always learning.
          </h2>
        </Reveal>

        <div className="mt-12">
          {experience.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.1}>
              <div className="grid gap-6 border-t border-white/10 py-8 md:grid-cols-[120px_240px_1fr]">
                <span className="text-sm text-violet-400">
                  {item.year}
                </span>

                <h3 className="text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="max-w-2xl leading-7 text-white/40">
                  {item.text}
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
          <p className="text-sm uppercase tracking-[0.3em] text-violet-400">
            How I think
          </p>

          <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            My approach to building software.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2">
          {principles.map((item) => (
            <Reveal key={item.number}>
              <div className="h-full bg-[#0b0b0b] p-8 transition-colors duration-300 hover:bg-white/[0.04] sm:p-10">
                <span className="text-sm text-violet-400">
                  {item.number}
                </span>

                <h3 className="mt-8 text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-white/40">
                  {item.text}
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
          <p className="text-sm uppercase tracking-[0.3em] text-violet-400">
            Technology
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Tools I&apos;m comfortable building with.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/40">
            My toolkit continues to evolve, but these are some of the
            technologies I use and explore across my projects.
          </p>
        </Reveal>

        <div className="mt-12 flex flex-wrap gap-3">
          {technologies.map((technology, index) => (
            <Reveal key={technology} delay={index * 0.03}>
              <span className="inline-flex rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 text-sm text-white/60 transition-colors hover:border-violet-400/30 hover:text-white">
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
          <Card className="overflow-hidden border-white/10 bg-gradient-to-br from-violet-500/[0.08] via-white/[0.02] to-transparent text-white">
            <CardContent className="p-8 sm:p-12">
              <p className="text-sm uppercase tracking-[0.3em] text-violet-400">
                Currently learning
              </p>

              <h2 className="mt-5 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
                Going deeper, not just wider.
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/50">
                I&apos;m continuing to improve my understanding of
                architecture, application performance, UI/UX,
                deployment, and building software that can grow with
                real-world requirements.
              </p>

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
                    className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/50"
                  >
                    {item}
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
          <div className="border-y border-white/10 py-16 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-violet-400">
              Beyond the code
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
              I enjoy learning, experimenting, and turning ideas into
              things that actually work.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/40">
              For me, development is not only about writing code.
              It&apos;s about understanding people, solving problems,
              learning from mistakes, and continuously improving the
              way products are built.
            </p>
          </div>
        </Reveal>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="mt-32">
        <Reveal>
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 text-center sm:p-12 lg:p-16">
            <p className="text-sm uppercase tracking-[0.3em] text-violet-400">
              Let&apos;s work together
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
              Have an idea worth building?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/40">
              Whether it&apos;s a website, business application, or
              something completely new, I&apos;d love to hear about it.
            </p>

            <div className="mt-10">
              <a
                href="/contact"
                className="inline-flex rounded-full bg-white px-6 py-3 font-medium text-black transition hover:bg-violet-100"
              >
                Start a conversation →
              </a>
            </div>
          </div>
        </Reveal>
      </section>

    </main>
  )
}
