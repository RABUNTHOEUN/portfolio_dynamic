"use client"
import { motion, useMotionTemplate, useMotionValue } from "motion/react"
import SkillIcon from "./SkillIcon"
import type { Skill } from "@/data/site"

export default function SkillCard({ skill }: { skill: Skill }) {
  const mx = useMotionValue(-200)
  const my = useMotionValue(-200)
  const glow = useMotionTemplate`radial-gradient(180px circle at ${mx}px ${my}px, rgba(139,92,246,0.22), transparent 70%)`

  return (
    <motion.div
      variants={{ hidden: { opacity: 0, y: 30, scale: 0.92 }, visible: { opacity: 1, y: 0, scale: 1 } }}
      whileHover={{ y: -6 }}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect()
        mx.set(e.clientX - r.left)
        my.set(e.clientY - r.top)
      }}
      onMouseLeave={() => { mx.set(-200); my.set(-200) }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur transition-colors hover:border-violet-400/40"
    >
      <motion.div style={{ background: glow }} className="pointer-events-none absolute inset-0" />
      <div className="relative flex items-center gap-4">
        <div className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.02] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
          <SkillIcon skill={skill} />
        </div>
        <span className="font-medium text-white/80 transition-colors group-hover:text-white">{skill.name}</span>
      </div>
    </motion.div>
  )
}
