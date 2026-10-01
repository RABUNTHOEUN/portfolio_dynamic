import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { ArrowLeft, ArrowRight, Check, ExternalLink, GitBranchIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { getProjectBySlug, projects } from "@/data/projects"

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) return {}
  const path = `/projects/${project.slug}`
  return {
    title: project.title,
    description: project.shortDescription,
    keywords: project.technologies,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      title: project.title,
      description: project.shortDescription,
      url: path,
      images: [{ url: project.image, alt: project.title }],
    },
    twitter: { card: "summary_large_image", title: project.title, description: project.shortDescription },
  }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) notFound()

  const index = projects.findIndex((p) => p.slug === slug)
  const next = projects[(index + 1) % projects.length]

  return (
    <main className="pb-24 pt-28">
      <div className="mx-auto max-w-5xl px-6">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-white/50 transition hover:text-white"
        >
          <ArrowLeft className="size-4" /> All projects
        </Link>

        <header className="mt-10">
          <p className="text-sm uppercase tracking-[0.3em] text-violet-400">
            {project.number} · {project.category} · {project.year}
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl">
            {project.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/50">
            {project.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.liveUrl && (
              <Button asChild className="rounded-full bg-white text-black hover:bg-violet-100">
                <a href={project.liveUrl} target="_blank" rel="noreferrer">
                  <ExternalLink /> Live demo
                </a>
              </Button>
            )}
            {project.github && (
              <Button asChild variant="outline" className="rounded-full border-white/15 bg-transparent text-white hover:bg-white/5">
                <a href={project.github} target="_blank" rel="noreferrer">
                  <GitBranchIcon /> Source code
                </a>
              </Button>
            )}
          </div>
        </header>

        <Separator className="my-12 bg-white/10" />

        <section>
          <h2 className="mb-4 text-sm uppercase tracking-[0.3em] text-white/40">
            Tech stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="outline" className="border-violet-400/30 px-3 py-1 text-white/80">
                {tech}
              </Badge>
            ))}
          </div>
        </section>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {project.features && (
            <Card className="border-white/10 bg-white/[0.02] text-white">
              <CardHeader>
                <CardTitle>Key features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-white/60">
                  {project.features.map((f) => (
                    <li key={f} className="flex gap-3">
                      <Check className="mt-0.5 size-4 shrink-0 text-violet-400" /> {f}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}

          {project.challenges && (
            <Card className="border-white/10 bg-white/[0.02] text-white">
              <CardHeader>
                <CardTitle>Challenges</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-white/60">
                  {project.challenges.map((c) => (
                    <li key={c} className="flex gap-3">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-violet-400" /> {c}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}
        </div>

        <Separator className="my-12 bg-white/10" />

        <Link
          href={`/projects/${next.slug}`}
          className="group flex items-center justify-between rounded-2xl border border-white/10 p-6 transition hover:border-violet-400/40"
        >
          <div>
            <p className="text-xs uppercase tracking-widest text-white/40">Next project</p>
            <p className="mt-1 text-2xl font-semibold">{next.title}</p>
          </div>
          <ArrowRight className="size-6 text-white/40 transition group-hover:translate-x-1 group-hover:text-violet-400" />
        </Link>
      </div>
    </main>
  )
}
