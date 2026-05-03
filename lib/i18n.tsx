import { createContext, useContext, useState, ReactNode } from 'react'
import { en } from '@/locales/en'
import { de } from '@/locales/de'

export type Lang = 'en' | 'de'

// Collapses literal string types to string so both locale objects satisfy Translations
type Stringify<T> = T extends string ? string : { [K in keyof T]: Stringify<T[K]> }
export type Translations = Stringify<typeof en>

const translations: Record<Lang, Translations> = { en, de }

const LangContext = createContext<{
  lang: Lang
  t: Translations
  setLang: (l: Lang) => void
} | null>(null)

function detectLang(): Lang {
  const stored = localStorage.getItem('lang') as Lang | null
  if (stored === 'en' || stored === 'de') return stored
  return navigator.language.toLowerCase().startsWith('de') ? 'de' : 'en'
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detectLang)

  const setLang = (l: Lang) => {
    localStorage.setItem('lang', l)
    setLangState(l)
  }

  return (
    <LangContext.Provider value={{ lang, t: translations[lang], setLang }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used within LangProvider')
  return ctx
}
