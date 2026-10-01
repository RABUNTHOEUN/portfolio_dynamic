"use client"
import { motion } from "motion/react"
import ProjectCard from "./ProjectCard"
import { projects, type Project } from "@/data/projects"

export default function ProjectsSection({ items = projects }: { items?: Project[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {items.map((project, i) => (
        <motion.div key={project.slug}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: (i % 2) * 0.12, ease: [0.22, 1, 0.36, 1] }}>
          <ProjectCard project={project} />
        </motion.div>
      ))}
    </div>
  )
}
