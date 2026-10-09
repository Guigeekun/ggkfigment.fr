import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { dict, type Dict, type Lang } from './dict'

interface LangCtx {
  lang: Lang
  setLang: (l: Lang) => void
  t: Dict
}

const Ctx = createContext<LangCtx>(null!)

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() =>
    localStorage.getItem('lang') === 'en' ? 'en' : 'fr',
  )

  const setLang = (l: Lang) => {
    setLangState(l)
    localStorage.setItem('lang', l)
  }

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  return <Ctx.Provider value={{ lang, setLang, t: dict[lang] }}>{children}</Ctx.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export const useLang = () => useContext(Ctx)
