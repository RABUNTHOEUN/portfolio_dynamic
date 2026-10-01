"use client"

import Link from "next/link"
import { motion } from "motion/react"
import { ArrowUpRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import type { Project } from "@/data/projects"

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.25 }}>
      <Link href={`/projects/${project.slug}`} className="group block h-full">
        <Card className="h-full gap-5 border-white/10 bg-white/[0.02] text-white transition-colors group-hover:border-violet-400/40">
          <CardHeader>
            <div className="flex items-start justify-between">
              <span className="text-5xl font-bold text-white/10 transition-colors group-hover:text-violet-400/50">
                {project.number}
              </span>
              <ArrowUpRight className="size-5 text-white/30 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-violet-400" />
            </div>
            <p className="text-xs uppercase tracking-widest text-white/40">
              {project.category} · {project.year}
            </p>
            <CardTitle className="text-2xl">{project.title}</CardTitle>
            <CardDescription className="text-white/50">
              {project.shortDescription}
            </CardDescription>
          </CardHeader>
          <CardContent className="mt-auto flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="border-white/15 text-white/60"
              >
                {tech}
              </Badge>
            ))}
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  )
}
