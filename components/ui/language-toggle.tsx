"use client"

import { Check, Languages } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useLanguage, type Lang } from "@/components/language-provider"

const languages: { code: Lang; label: string; short: string }[] = [
  { code: "en", label: "English", short: "EN" },
  { code: "km", label: "ខ្មែរ", short: "ខ្មែរ" },
]

export function LanguageToggle() {
  const { lang, setLang } = useLanguage()
  const current = languages.find((l) => l.code === lang) ?? languages[0]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button
            variant="outline"
            size="sm"
            aria-label="Switch language"
            className="gap-1.5 rounded-full border-fg/15 bg-transparent px-3 text-fg hover:bg-fg/5"
          />
        }
      >
        <Languages className="size-4" />
        <span className="text-xs font-medium">{current.short}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-auto min-w-36">
        {languages.map((l) => (
          <DropdownMenuItem key={l.code} onClick={() => setLang(l.code)} className="justify-between gap-4">
            {l.label}
            {l.code === lang && <Check className="size-4" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
