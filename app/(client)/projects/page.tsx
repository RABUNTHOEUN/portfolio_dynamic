"use client"

import PageHeader from "@/components/portfolio/PageHeader"
import { useLanguage } from "@/components/language-provider"
import ProjectsSection from "@/components/portfolio/ProjectsSection"

export default function ProjectsPage() {
  const { t } = useLanguage()
  return (
    <main className="mx-auto max-w-7xl px-6 pb-32">
      <PageHeader eyebrow={t("Selected work")} title={t("Projects")}>{t("Web applications and business systems I've designed and built.")}</PageHeader>
      <ProjectsSection />
    </main>
  )
}
