"use client"
import { motion } from "motion/react"
import Reveal from "@/components/portfolio/Reveal"
import PageHeader from "@/components/portfolio/PageHeader"
import SkillCard from "@/components/portfolio/SkillCard"
import SkillsMarquee from "@/components/portfolio/SkillsMarquee"
import { site } from "@/data/site"

export default function SkillsPage() {
  const all = site.skillGroups.flatMap((g) => g.items)

  return (
    <main className="pb-32">
      <div className="mx-auto max-w-6xl px-6">
        <PageHeader eyebrow="Toolkit" title="Skills & technologies">
          The tools I use to design, build and ship — {all.length} and counting.
        </PageHeader>
      </div>

      <Reveal><SkillsMarquee skills={all} /></Reveal>

      <div className="mx-auto mt-24 max-w-6xl space-y-24 px-6">
        {site.skillGroups.map((group, gi) => (
          <section key={group.title} className="grid gap-8 lg:grid-cols-[280px_1fr]">
            <Reveal x={-30} className="lg:sticky lg:top-28 lg:self-start">
              <p className="font-mono text-sm text-violet-400">0{gi + 1}</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight">{group.title}</h2>
              <p className="mt-3 text-white/50">{group.description}</p>
              <p className="mt-4 text-xs uppercase tracking-widest text-white/30">{group.items.length} technologies</p>
            </Reveal>

            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
              transition={{ staggerChildren: 0.07 }}
              className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3"
            >
              {group.items.map((skill) => <SkillCard key={skill.name} skill={skill} />)}
            </motion.div>
          </section>
        ))}
      </div>
    </main>
  )
}
