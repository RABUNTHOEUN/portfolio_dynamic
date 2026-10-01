import { pageMetadata } from "@/lib/seo"
import PageHeader from "@/components/portfolio/PageHeader"
import ProjectsSection from "@/components/portfolio/ProjectsSection"

export const metadata = pageMetadata("Projects", "Web applications and business systems I've designed and built.", "/projects")

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 pb-32">
      <PageHeader eyebrow="Selected work" title="Projects">
        Web applications and business systems I&apos;ve designed and built.
      </PageHeader>
      <ProjectsSection />
    </main>
  )
}
