"use client";

import { motion } from "motion/react";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Code2,
  Layers3,
  Terminal,
} from "lucide-react";
import Link from "next/link";

import Reveal from "@/components/portfolio/Reveal";
import PageHeader from "@/components/portfolio/PageHeader";
import SkillCard from "@/components/portfolio/SkillCard";
import SkillsMarquee from "@/components/portfolio/SkillsMarquee";

import { site } from "@/data/site";

export default function SkillsPage() {
  const allSkills = site.skillGroups.flatMap(
    (group) => group.items
  );

  const workingCount = allSkills.filter(
    (skill) => skill.level === "Working"
  ).length;

  const comfortableCount = allSkills.filter(
    (skill) => skill.level === "Comfortable"
  ).length;

  return (
    <main className="pb-32">

      {/* =========================================================
          HEADER
      ========================================================= */}

      <div className="mx-auto max-w-6xl px-6">

        <PageHeader
          eyebrow="Toolkit"
          title="Skills & technologies"
        >
          The tools I use to design, build, and ship modern
          web applications — {allSkills.length} technologies
          and counting.
        </PageHeader>

      </div>

      {/* =========================================================
          SKILLS MARQUEE
      ========================================================= */}

      <Reveal>
        <SkillsMarquee skills={allSkills} />
      </Reveal>

      {/* =========================================================
          QUICK STATS
      ========================================================= */}

      <div className="mx-auto mt-16 max-w-6xl px-6">

        <div className="grid gap-4 sm:grid-cols-3">

          <Reveal delay={0.05}>
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <div className="flex items-center gap-3">

                <div className="flex size-10 items-center justify-center rounded-xl bg-violet-400/10">
                  <Code2 className="size-5 text-violet-400" />
                </div>

                <p className="text-xs uppercase tracking-widest text-white/30">
                  Technologies
                </p>

              </div>

              <p className="mt-5 text-3xl font-bold">
                {allSkills.length}
              </p>

              <p className="mt-1 text-sm text-white/40">
                Across my development toolkit
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <div className="flex items-center gap-3">

                <div className="flex size-10 items-center justify-center rounded-xl bg-violet-400/10">
                  <CheckCircle2 className="size-5 text-violet-400" />
                </div>

                <p className="text-xs uppercase tracking-widest text-white/30">
                  Working with
                </p>

              </div>

              <p className="mt-5 text-3xl font-bold">
                {workingCount}
              </p>

              <p className="mt-1 text-sm text-white/40">
                Technologies currently in use
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <div className="flex items-center gap-3">

                <div className="flex size-10 items-center justify-center rounded-xl bg-violet-400/10">
                  <Layers3 className="size-5 text-violet-400" />
                </div>

                <p className="text-xs uppercase tracking-widest text-white/30">
                  Skill groups
                </p>

              </div>

              <p className="mt-5 text-3xl font-bold">
                {site.skillGroups.length}
              </p>

              <p className="mt-1 text-sm text-white/40">
                Frontend, backend, data & tools
              </p>
            </div>
          </Reveal>

        </div>

      </div>

      {/* =========================================================
          SKILL GROUPS
      ========================================================= */}

      <div className="mx-auto mt-24 max-w-6xl space-y-28 px-6">

        {site.skillGroups.map((group, groupIndex) => (

          <section
            key={group.title}
            className="grid gap-8 lg:grid-cols-[280px_1fr]"
          >

            {/* GROUP INFO */}

            <Reveal
              x={-30}
              className="lg:sticky lg:top-28 lg:self-start"
            >

              <p className="font-mono text-sm text-violet-400">
                {String(groupIndex + 1).padStart(2, "0")}
              </p>

              <h2 className="mt-2 text-3xl font-bold tracking-tight">
                {group.title}
              </h2>

              <p className="mt-3 leading-7 text-white/50">
                {group.description}
              </p>

              <p className="mt-4 text-xs uppercase tracking-widest text-white/30">
                {group.items.length} technologies
              </p>

            </Reveal>

            {/* SKILL CARDS */}

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                staggerChildren: 0.07,
              }}
              className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3"
            >

              {group.items.map((skill) => (
                <SkillCard
                  key={skill.name}
                  skill={skill}
                />
              ))}

            </motion.div>

          </section>

        ))}

      </div>

      {/* =========================================================
          CURRENTLY LEARNING
      ========================================================= */}

      {site.learning && site.learning.length > 0 && (
        <section className="mx-auto mt-32 max-w-6xl px-6">

          <Reveal>

            <div className="grid gap-10 lg:grid-cols-[280px_1fr]">

              {/* INTRO */}

              <div>

                <div className="flex size-10 items-center justify-center rounded-xl bg-violet-400/10">
                  <BookOpen className="size-5 text-violet-400" />
                </div>

                <p className="mt-5 text-sm uppercase tracking-[0.3em] text-violet-400">
                  Learning
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight">
                  Currently learning
                </h2>

                <p className="mt-4 leading-7 text-white/40">
                  Technology keeps changing, so I keep learning,
                  experimenting, and improving through real
                  projects.
                </p>

              </div>

              {/* LEARNING ITEMS */}

              <div className="grid gap-4 sm:grid-cols-2">

                {site.learning.map((item, index) => (

                  <motion.div
                    key={item.name}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.2,
                    }}
                    transition={{
                      delay: index * 0.08,
                      duration: 0.45,
                    }}
                    className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition duration-300 hover:border-violet-400/30 hover:bg-violet-400/[0.03]"
                  >

                    <div className="flex items-start justify-between gap-4">

                      <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.04]">
                        <Terminal className="size-5 text-violet-400" />
                      </div>

                      <span className="rounded-full border border-violet-400/20 bg-violet-400/5 px-2.5 py-1 text-[10px] uppercase tracking-wider text-violet-300">
                        Learning
                      </span>

                    </div>

                    <h3 className="mt-5 font-semibold">
                      {item.name}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-white/40">
                      {item.description}
                    </p>

                  </motion.div>

                ))}

              </div>

            </div>

          </Reveal>

        </section>
      )}

      {/* =========================================================
          HOW I USE MY SKILLS
      ========================================================= */}

      <section className="mx-auto mt-32 max-w-6xl px-6">

        <Reveal>

          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 sm:p-10 lg:p-12">

            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">

              <div>

                <p className="text-sm uppercase tracking-[0.3em] text-violet-400">
                  How I work
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                  Tools are only part of the process.
                </h2>

                <p className="mt-5 leading-7 text-white/40">
                  I focus on using the right technology for the
                  problem instead of trying to use every tool
                  available.
                </p>

              </div>

              <div className="grid gap-4 sm:grid-cols-2">

                {[
                  {
                    title: "Understand",
                    text: "Start with the requirements, users, and actual problem.",
                  },
                  {
                    title: "Structure",
                    text: "Break the application into clear, reusable pieces.",
                  },
                  {
                    title: "Build",
                    text: "Implement features with maintainability and usability in mind.",
                  },
                  {
                    title: "Improve",
                    text: "Test, fix, refactor, and continue learning from the project.",
                  },
                ].map((item, index) => (

                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-black/20 p-5"
                  >

                    <div className="flex items-center gap-3">

                      <span className="font-mono text-xs text-violet-400">
                        0{index + 1}
                      </span>

                      <h3 className="font-semibold">
                        {item.title}
                      </h3>

                    </div>

                    <p className="mt-3 text-sm leading-6 text-white/40">
                      {item.text}
                    </p>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </Reveal>

      </section>

      {/* =========================================================
          CTA
      ========================================================= */}

      <section className="mx-auto mt-32 max-w-6xl px-6">

        <Reveal>

          <div className="relative overflow-hidden rounded-3xl border border-violet-400/20 bg-violet-400/[0.04] p-8 sm:p-12">

            {/* Glow */}

            <div className="pointer-events-none absolute -right-32 -top-32 size-80 rounded-full bg-violet-500/10 blur-3xl" />

            <div className="relative max-w-2xl">

              <p className="text-sm uppercase tracking-[0.3em] text-violet-400">
                Let&apos;s build
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Have a project in mind?
              </h2>

              <p className="mt-4 leading-7 text-white/50">
                I&apos;m interested in building useful websites,
                web applications, and business systems. If you
                have an idea, let&apos;s talk about it.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-violet-100"
              >
                Start a conversation

                <ArrowRight className="size-4 transition group-hover:translate-x-1" />
              </Link>

            </div>

          </div>

        </Reveal>

      </section>

    </main>
  );
}