import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import {
  ArrowLeft,
  ArrowRight,
  Check,
  Code2,
  ExternalLink,
  GitBranchIcon,
  Layers3,
  Lightbulb,
  Target,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import { cn } from "@/lib/utils";
import { getProjectBySlug, projects } from "@/data/projects";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const project = getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  const path = `/projects/${project.slug}`;

  return {
    title: project.title,
    description: project.shortDescription,
    keywords: project.technologies,

    alternates: {
      canonical: path,
    },

    openGraph: {
      type: "article",
      title: project.title,
      description: project.shortDescription,
      url: path,
      images: [
        {
          url: project.image,
          alt: project.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.shortDescription,
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;

  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const index = projects.findIndex(
    (item) => item.slug === slug
  );

  const next =
    projects[(index + 1) % projects.length];

  return (
    <main className="pb-32 pt-28">
      <div className="mx-auto max-w-6xl px-6">

        {/* =========================================================
            BACK TO PROJECTS
        ========================================================= */}

        <Link
          href="/projects"
          className="group inline-flex items-center gap-2 text-sm text-white/50 transition hover:text-white"
        >
          <ArrowLeft className="size-4 transition group-hover:-translate-x-1" />

          All projects
        </Link>

        {/* =========================================================
            HERO
        ========================================================= */}

        <header className="mt-12">

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-3 text-sm uppercase tracking-[0.25em] text-violet-400">
            <span>{project.number}</span>

            <span className="text-white/20">
              •
            </span>

            <span>{project.category}</span>

            <span className="text-white/20">
              •
            </span>

            <span>{project.year}</span>
          </div>

          {/* Title */}
          <h1 className="mt-5 max-w-5xl text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            {project.title}
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/50 sm:text-xl">
            {project.description}
          </p>

          {/* Actions */}
          <div className="mt-9 flex flex-wrap gap-3">

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  buttonVariants({
                    size: "lg",
                  }),
                  "rounded-full bg-white px-6 text-black hover:bg-violet-100"
                )}
              >
                <ExternalLink className="mr-2 size-4" />

                Live demo
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  buttonVariants({
                    variant: "outline",
                    size: "lg",
                  }),
                  "rounded-full border-white/15 bg-transparent px-6 text-white hover:bg-white/5"
                )}
              >
                <GitBranchIcon className="mr-2 size-4" />

                Source code
              </a>
            )}
          </div>
        </header>

        {/* =========================================================
            PROJECT IMAGE
        ========================================================= */}

        {project.image && (
          <div className="group relative mt-14 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02]">

            {/* Glow */}
            <div className="pointer-events-none absolute -inset-10 bg-violet-500/10 opacity-0 blur-3xl transition duration-700 group-hover:opacity-100" />

            <img
              src={project.image}
              alt={project.title}
              className="relative aspect-video w-full object-cover transition duration-700 group-hover:scale-[1.02]"
            />
          </div>
        )}

        {/* =========================================================
            OVERVIEW
        ========================================================= */}

        <section className="mt-20">

          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">

            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-violet-400">
                Overview
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Building with purpose.
              </h2>
            </div>

            <div className="space-y-5 text-lg leading-8 text-white/50">

              <p>
                {project.description}
              </p>

              <p>
                The project focuses on combining a clean user
                experience with practical functionality,
                reusable components, maintainable architecture,
                and a foundation that can grow with future
                requirements.
              </p>

            </div>
          </div>

        </section>

        {/* =========================================================
            PROJECT INFORMATION
        ========================================================= */}

        <section className="mt-12">

          <div className="grid gap-4 sm:grid-cols-3">

            {[
              {
                label: "Role",
                value: project.role,
              },
              {
                label: "Duration",
                value: project.duration,
              },
              {
                label: "Category",
                value: project.category,
              },
            ]
              .filter((item) => item.value)
              .map((item) => (
                <Card
                  key={item.label}
                  className="border-white/10 bg-white/[0.02] text-white transition duration-300 hover:border-violet-400/20 hover:bg-white/[0.04]"
                >
                  <CardContent className="p-6">

                    <p className="text-xs uppercase tracking-widest text-white/30">
                      {item.label}
                    </p>

                    <p className="mt-2 font-medium">
                      {item.value}
                    </p>

                  </CardContent>
                </Card>
              ))}

          </div>

        </section>

        <Separator className="my-16 bg-white/10" />

        {/* =========================================================
            TECH STACK
        ========================================================= */}

        <section>

          <div className="flex items-center gap-3">

            <div className="flex size-10 items-center justify-center rounded-xl bg-violet-400/10">
              <Code2 className="size-5 text-violet-400" />
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/30">
                Technologies
              </p>

              <h2 className="mt-1 text-xl font-semibold">
                Tech stack
              </h2>
            </div>

          </div>

          <div className="mt-6 flex flex-wrap gap-3">

            {project.technologies.map((technology) => (
              <Badge
                key={technology}
                variant="outline"
                className="border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/80 transition hover:border-violet-400/40 hover:bg-violet-400/5"
              >
                {technology}
              </Badge>
            ))}

          </div>

        </section>

        {/* =========================================================
            FEATURES + CHALLENGES
        ========================================================= */}

        <div className="mt-16 grid gap-6 md:grid-cols-2">

          {/* Features */}
          {project.features &&
            project.features.length > 0 && (
              <Card className="border-white/10 bg-white/[0.02] text-white transition duration-300 hover:border-violet-400/20">

                <CardHeader>

                  <div className="mb-3 flex size-10 items-center justify-center rounded-xl bg-violet-400/10">
                    <Layers3 className="size-5 text-violet-400" />
                  </div>

                  <CardTitle>
                    Key features
                  </CardTitle>

                </CardHeader>

                <CardContent>

                  <ul className="space-y-4 text-white/60">

                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex gap-3"
                      >
                        <Check className="mt-1 size-4 shrink-0 text-violet-400" />

                        <span>
                          {feature}
                        </span>
                      </li>
                    ))}

                  </ul>

                </CardContent>

              </Card>
            )}

          {/* Challenges */}
          {project.challenges &&
            project.challenges.length > 0 && (
              <Card className="border-white/10 bg-white/[0.02] text-white transition duration-300 hover:border-violet-400/20">

                <CardHeader>

                  <div className="mb-3 flex size-10 items-center justify-center rounded-xl bg-violet-400/10">
                    <Lightbulb className="size-5 text-violet-400" />
                  </div>

                  <CardTitle>
                    Challenges
                  </CardTitle>

                </CardHeader>

                <CardContent>

                  <ul className="space-y-4 text-white/60">

                    {project.challenges.map((challenge) => (
                      <li
                        key={challenge}
                        className="flex gap-3"
                      >
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-violet-400" />

                        <span>
                          {challenge}
                        </span>
                      </li>
                    ))}

                  </ul>

                </CardContent>

              </Card>
            )}

        </div>

        {/* =========================================================
            APPROACH
        ========================================================= */}

        <section className="mt-20">

          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">

            <div>

              <div className="flex items-center gap-3">

                <div className="flex size-10 items-center justify-center rounded-xl bg-violet-400/10">
                  <Target className="size-5 text-violet-400" />
                </div>

                <p className="text-sm uppercase tracking-[0.3em] text-violet-400">
                  Approach
                </p>

              </div>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                From idea to implementation.
              </h2>

              <p className="mt-4 max-w-md leading-7 text-white/40">
                A practical development process focused on
                understanding the problem, building the right
                solution, and continuously improving the result.
              </p>

            </div>

            <div className="grid gap-4 sm:grid-cols-3">

              {[
                {
                  number: "01",
                  title: "Understand",
                  text: "Identify the problem, users, requirements, and expected outcome.",
                },
                {
                  number: "02",
                  title: "Build",
                  text: "Design the structure and implement reusable, maintainable features.",
                },
                {
                  number: "03",
                  title: "Improve",
                  text: "Test the experience, fix issues, and refine the implementation.",
                },
              ].map((step) => (
                <Card
                  key={step.number}
                  className="border-white/10 bg-white/[0.02] text-white"
                >
                  <CardContent className="p-6">

                    <span className="font-mono text-sm text-violet-400">
                      {step.number}
                    </span>

                    <h3 className="mt-4 font-semibold">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-white/40">
                      {step.text}
                    </p>

                  </CardContent>
                </Card>
              ))}

            </div>

          </div>

        </section>

        {/* =========================================================
            OUTCOMES
        ========================================================= */}

        {project.outcomes &&
          project.outcomes.length > 0 && (
            <section className="mt-20">

              <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">

                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-violet-400">
                    Outcomes
                  </p>

                  <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                    What this project achieved.
                  </h2>

                  <p className="mt-4 max-w-md leading-7 text-white/40">
                    The main results and improvements delivered
                    through the project.
                  </p>
                </div>

                <div>

                  <ul className="space-y-5">

                    {project.outcomes.map((outcome) => (
                      <li
                        key={outcome}
                        className="group flex gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition duration-300 hover:border-violet-400/30 hover:bg-violet-400/[0.03]"
                      >
                        <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-violet-400/10">
                          <Check className="size-4 text-violet-400" />
                        </div>

                        <span className="leading-7 text-white/60">
                          {outcome}
                        </span>
                      </li>
                    ))}

                  </ul>

                </div>

              </div>

            </section>
          )}

        {/* =========================================================
            PROJECT SUMMARY
        ========================================================= */}

        <Separator className="my-16 bg-white/10" />

        <section>

          <p className="text-xs uppercase tracking-[0.3em] text-white/30">
            Project summary
          </p>

          <div className="mt-6 grid gap-8 sm:grid-cols-3">

            <div>
              <p className="text-xs uppercase tracking-widest text-white/30">
                Category
              </p>

              <p className="mt-2 font-medium">
                {project.category}
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-white/30">
                Year
              </p>

              <p className="mt-2 font-medium">
                {project.year}
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-white/30">
                Technologies
              </p>

              <p className="mt-2 font-medium">
                {project.technologies.length} technologies
              </p>
            </div>

          </div>

        </section>

        {/* =========================================================
            NEXT PROJECT
        ========================================================= */}

        <Separator className="my-16 bg-white/10" />

        <section>

          <p className="text-xs uppercase tracking-[0.3em] text-white/30">
            Continue exploring
          </p>

          <Link
            href={`/projects/${next.slug}`}
            className="group mt-5 flex items-center justify-between overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-6 transition duration-300 hover:border-violet-400/40 hover:bg-violet-400/[0.03] sm:p-8"
          >

            <div>

              <p className="text-sm text-white/40">
                Next project
              </p>

              <p className="mt-2 text-2xl font-semibold sm:text-3xl">
                {next.title}
              </p>

              <p className="mt-2 max-w-xl text-sm leading-6 text-white/40">
                {next.shortDescription}
              </p>

            </div>

            <div className="ml-6 flex size-12 shrink-0 items-center justify-center rounded-full border border-white/10 transition duration-300 group-hover:border-violet-400/40 group-hover:bg-violet-400/10">
              <ArrowRight className="size-5 text-white/50 transition group-hover:translate-x-1 group-hover:text-violet-400" />
            </div>

          </Link>

        </section>

        {/* =========================================================
            BACK LINK
        ========================================================= */}

        <div className="mt-10 text-center">

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-white/40 transition hover:text-white"
          >
            <ArrowLeft className="size-4" />

            View all projects
          </Link>

        </div>

      </div>
    </main>
  );
}
