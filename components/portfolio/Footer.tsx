import Link from "next/link"
import { site } from "@/data/site"

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-white/30 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 {site.name}. All rights reserved.</p>
        <div className="flex gap-6">
          {site.socials.map((s) => (
            <Link key={s.label} href={s.href} target="_blank" rel="noreferrer" className="transition hover:text-white">
              {s.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
