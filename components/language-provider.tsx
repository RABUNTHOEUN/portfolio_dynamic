"use client"

import * as React from "react"
import { km } from "@/data/i18n"

export type Lang = "en" | "km"

type LanguageContextValue = {
  lang: Lang
  setLang: (lang: Lang) => void
  /** Returns the Khmer text when the language is Khmer, otherwise the English source text. */
  t: (text: string) => string
}

const STORAGE_KEY = "lang"

const LanguageContext = React.createContext<LanguageContextValue>({
  lang: "en",
  setLang: () => {},
  t: (text) => text,
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // English is the default; a saved choice is applied after hydration.
  const [lang, setLangState] = React.useState<Lang>("en")

  React.useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved === "km" || saved === "en") {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setLangState(saved)
      }
    } catch {
      /* storage unavailable */
    }
  }, [])

  React.useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const setLang = React.useCallback((next: Lang) => {
    setLangState(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      /* storage unavailable */
    }
  }, [])

  const t = React.useCallback(
    (text: string) => (lang === "km" ? (km[text] ?? text) : text),
    [lang],
  )

  const value = React.useMemo(() => ({ lang, setLang, t }), [lang, setLang, t])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  return React.useContext(LanguageContext)
}
