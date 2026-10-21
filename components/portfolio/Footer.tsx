"use client"
import Link from "next/link"
import { ArrowUp, Mail } from "lucide-react"
import { site } from "@/data/site"
import { useLanguage } from "@/components/language-provider"

export default function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-fg/10" role="contentinfo">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <img src="/logo200x200.png" alt="" width={36} height={36} className="w-9" />
              <span className="text-lg font-bold tracking-tight">{site.full_name}</span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-6 text-fg/50">
              {t("Building modern web applications, business systems, CMS platforms, APIs, and digital products.")}
            </p>

            <a
              href={`mailto:${site.email}`}
              className="mt-6 inline-flex items-center gap-2 text-sm text-fg/60 transition hover:text-brand"
            >
              <Mail className="size-4" />
              {site.email}
            </a>
          </div>

          {/* Navigation */}
          <nav aria-label={t("Footer navigation")}>
            <p className="text-xs uppercase tracking-[0.25em] text-fg/40">{t("Navigate")}</p>
            <ul className="mt-5 space-y-3 text-sm">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-fg/50 transition hover:text-fg">
                    {t(item.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Socials */}
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-fg/40">{t("Connect")}</p>
            <ul className="mt-5 space-y-3 text-sm">
              {site.socials.map((s) => {
                const external = s.href.startsWith("http")
                return (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      {...(external ? { target: "_blank", rel: "noopener noreferrer me" } : {})}
                      className="text-fg/50 transition hover:text-fg"
                    >
                      {t(s.label)}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-4 border-t border-fg/10 pt-6 text-sm text-fg/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.full_name}. {t("All rights reserved.")}
          </p>

          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: "smooth" })
            }}
            className="group inline-flex items-center gap-2 transition hover:text-fg"
          >
            {t("Back to top")}
            <ArrowUp className="size-4 transition group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
