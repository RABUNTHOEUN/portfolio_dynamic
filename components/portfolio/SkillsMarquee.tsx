"use client"
import { motion } from "motion/react"
import SkillIcon from "./SkillIcon"
import type { Skill } from "@/data/site"

function Row({ skills, reverse = false }: { skills: Skill[]; reverse?: boolean }) {
  const list = [...skills, ...skills]
  return (
    <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
      <motion.div
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: 35, ease: "linear", repeat: Infinity }}
        className="flex shrink-0 gap-4 pr-4"
      >
        {list.map((s, i) => (
          <div key={`${s.name}-${i}`} className="flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] py-2 pl-3 pr-5 text-sm text-white/60">
            <SkillIcon skill={s} size={20} /> {s.name}
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default function SkillsMarquee({ skills }: { skills: Skill[] }) {
  const half = Math.ceil(skills.length / 2)
  return (
    <div className="space-y-4 py-4">
      <Row skills={skills.slice(0, half)} />
      <Row skills={skills.slice(half)} reverse />
    </div>
  )
}
