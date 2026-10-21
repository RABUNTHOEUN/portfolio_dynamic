"use client"
import Link from "next/link"
import { site } from "@/data/site"
import { useLanguage } from "@/components/language-provider"

export default function Footer() {
  const { t } = useLanguage()
  return (
    <footer className="border-t border-fg/10">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-fg/30 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 {site.full_name}. {t("All rights reserved.")}</p>
        <div className="flex flex-wrap gap-6">
          {site.socials.map((s) => (
            <Link key={s.label} href={s.href} target="_blank" rel="noreferrer" className="transition hover:text-fg">
              {t(s.label)}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
