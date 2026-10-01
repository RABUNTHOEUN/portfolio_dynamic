"use client"

import Link from "next/link"
import ProjectsSection from "@/components/portfolio/ProjectsSection"
import { projects } from "@/data/projects"
import { site } from "@/data/site"
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react"
import type { ReactNode } from "react"


const MotionLink = motion.create(Link)

const fadeUp = {
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
}

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

function Reveal({
  children,
  className = "",
}: {
  children: ReactNode
  className?: string
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
  )
}

function MagneticButton({
  children,
  href,
  primary = false,
}: {
  children: ReactNode
  href: string
  primary?: boolean
}) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springX = useSpring(x, {
    stiffness: 300,
    damping: 20,
  })

  const springY = useSpring(y, {
    stiffness: 300,
    damping: 20,
  })

  function handleMouseMove(
    event: React.MouseEvent<HTMLAnchorElement>
  ) {
    const rect = event.currentTarget.getBoundingClientRect()

    const mouseX = event.clientX - rect.left - rect.width / 2
    const mouseY = event.clientY - rect.top - rect.height / 2

    x.set(mouseX * 0.15)
    y.set(mouseY * 0.15)
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
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
          ? "bg-white text-black hover:bg-violet-100"
          : "border border-white/15 text-white hover:border-white/40 hover:bg-white/5",
      ].join(" ")}
    >
      {children}
    </MotionLink>
  )
}

export default function Page() {
  return (
    <main className="overflow-hidden">

      {/* Hero */}
      <section className="relative flex min-h-screen items-center overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 -z-10">
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
            className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[120px]"
          />

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
                "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        <div className="mx-auto grid w-full max-w-7xl gap-16 px-6 py-32 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          {/* Hero content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={fadeUp}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/60"
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
                className="h-2 w-2 rounded-full bg-green-400"
              />

              Available for opportunities
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-violet-400"
            >
              Developer & Problem Solver
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-8xl"
            >
              I build digital
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
                className="block bg-gradient-to-r from-white via-violet-200 to-violet-500 bg-clip-text text-transparent"
              >
                experiences.
              </motion.span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-8 max-w-2xl text-lg leading-8 text-white/50"
            >
              I'm a developer focused on building modern web applications,
              business systems, and digital products that solve real-world
              problems.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-wrap gap-4"
            >
              <MagneticButton href="/projects" primary>
                View my work
              </MagneticButton>

              <MagneticButton href="/contact">
                Contact me
              </MagneticButton>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-12 flex items-center gap-6 text-sm text-white/40"
            >
              {site.socials.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{
                    y: -3,
                    color: "#ffffff",
                  }}
                >
                  {social.label}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Code card */}
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
              className="absolute -inset-6 rounded-3xl bg-violet-500/10 blur-3xl"
            />

            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#111111] shadow-2xl">
              <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">
                <span className="h-3 w-3 rounded-full bg-red-400/70" />
                <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
                <span className="h-3 w-3 rounded-full bg-green-400/70" />

                <span className="ml-3 text-xs text-white/30">
                  portfolio.tsx
                </span>
              </div>

              <pre className="overflow-x-auto p-6 text-sm leading-7">
                <code>
                  <span className="text-violet-400">const</span>{" "}
                  <span className="text-blue-300">developer</span> = {"{"}
                  {"\n"}
                  {"  "}name:{" "}
                  <span className="text-green-300">
                    "Ra Bunthoeun"
                  </span>
                  ,{"\n"}
                  {"  "}role:{" "}
                  <span className="text-green-300">
                    "Developer"
                  </span>
                  ,{"\n"}
                  {"  "}focus: [{"\n"}
                  {"    "}
                  <span className="text-green-300">
                    "Web Development"
                  </span>
                  ,{"\n"}
                  {"    "}
                  <span className="text-green-300">
                    "Business Systems"
                  </span>
                  ,{"\n"}
                  {"    "}
                  <span className="text-green-300">
                    "UI/UX"
                  </span>
                  ,{"\n"}
                  {"  "}],{"\n"}
                  {"  "}stack: [{"\n"}
                  {"    "}
                  <span className="text-green-300">
                    "Nuxt"
                  </span>
                  ,{"\n"}
                  {"    "}
                  <span className="text-green-300">
                    "React"
                  </span>
                  ,{"\n"}
                  {"    "}
                  <span className="text-green-300">
                    "Node.js"
                  </span>
                  ,{"\n"}
                  {"    "}
                  <span className="text-green-300">
                    "Spring Boot"
                  </span>
                  ,{"\n"}
                  {"  "}],{"\n"}
                  {"  "}coffee:{" "}
                  <span className="text-orange-300">
                    true
                  </span>
                  ,{"\n"}
                  {"}"};
                </code>
              </pre>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
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
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs text-white/30 md:flex"
        >
          <span>Scroll to explore</span>

          <motion.div
            animate={{
              scaleY: [0.4, 1, 0.4],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
            }}
            className="h-10 w-px origin-top bg-gradient-to-b from-white/60 to-transparent"
          />
        </motion.div>
      </section>
      {/* Featured projects */}
      <section className="border-t border-white/10 py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mb-16 flex items-end justify-between gap-6">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-violet-400">Selected work</p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Featured projects</h2>
            </div>
            <Link href="/projects" className="hidden text-white/50 transition hover:text-white sm:block">
              View all →
            </Link>
          </Reveal>
          <ProjectsSection items={projects.filter((p) => p.featured)} />
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 py-32">
        <Reveal className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-5xl font-bold tracking-tight sm:text-7xl">
            Let&apos;s build something
            <span className="block text-white/30">great together.</span>
          </h2>
          <div className="mt-10">
            <MagneticButton href="/contact" primary>Get in touch →</MagneticButton>
          </div>
        </Reveal>
      </section>
    </main>
  )
}
