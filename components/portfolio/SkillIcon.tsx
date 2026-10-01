"use client"
import { useState } from "react"
import { Webhook } from "lucide-react"
import type { Skill } from "@/data/site"

export default function SkillIcon({ skill, size = 28 }: { skill: Skill; size?: number }) {
  const [failed, setFailed] = useState(false)

  if (!skill.icon) return <Webhook style={{ width: size, height: size }} className="text-violet-400" />
  if (failed)
    return <span className="font-bold text-white/70" style={{ fontSize: size * 0.7 }}>{skill.name[0]}</span>

  const src = `https://cdn.simpleicons.org/${skill.icon}${skill.color ? `/${skill.color}` : ""}`
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt={`${skill.name} logo`} width={size} height={size} onError={() => setFailed(true)} loading="lazy" />
}
