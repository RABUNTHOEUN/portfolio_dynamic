"use client"
import { motion, useScroll, useTransform } from "motion/react"
import type { ReactNode } from "react"

export default function PageHeader({
  eyebrow, title, children,
}: { eyebrow: string; title: string; children?: ReactNode }) {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 400], [0, 80])      // parallax
  const opacity = useTransform(scrollY, [0, 350], [1, 0]) // fade on scroll
  return (
    <motion.header style={{ y, opacity }} className="relative pb-16 pt-36">
      <div className="absolute left-1/2 top-10 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-600/15 blur-[110px]" />
      <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        className="text-sm uppercase tracking-[0.3em] text-violet-400">{eyebrow}</motion.p>
      <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mt-4 text-5xl font-bold tracking-tight sm:text-7xl">{title}</motion.h1>
      {children && <div className="mt-6 max-w-2xl text-lg leading-8 text-white/50">{children}</div>}
    </motion.header>
  )
}
