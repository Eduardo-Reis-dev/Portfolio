"use client"

import { useTranslation } from "react-i18next"

const LANGUAGES = [
  { code: "pt", label: "PT" },
  { code: "en", label: "EN" },
] as const

export function LanguageSwitcher() {
  const { i18n } = useTranslation()

  return (
    <div className="fixed top-4 right-4 z-50 flex gap-1 rounded-full border border-zinc-700 bg-zinc-900/80 p-1 backdrop-blur">
      {LANGUAGES.map(({ code, label }) => {
        const active = i18n.language.startsWith(code)
        return (
          <button
            key={code}
            type="button"
            onClick={() => i18n.changeLanguage(code)}
            aria-pressed={active}
            className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
              active ? "bg-zinc-100 text-zinc-900" : "text-zinc-400 hover:text-zinc-100"
            }`}
          >
            {label}
          </button>
        )
      })}
    </div>
  )
}
