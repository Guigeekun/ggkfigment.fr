import { useEffect, useRef } from 'react'
import { LangProvider } from './i18n/LangContext'
import { initSmoothScroll } from './lib/scroll'
import Nav from './components/Nav'
import Hero from './components/Hero'
import WaveThread from './components/WaveThread'
import ProgressBadge from './components/ProgressBadge'
import Music from './components/Music'
import Code from './components/Code'
import Freelance from './components/Freelance'
import Contact from './components/Contact'
import Footer from './components/Footer'
import styles from './App.module.css'

const GRAIN_URI =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.6'/%3E%3C/svg%3E\")"

function Site() {
  const pageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    initSmoothScroll()
  }, [])

  return (
    <>
      <a href="#contenu" className="skip">
        Aller au contenu
      </a>

      <div className={styles.grain} style={{ backgroundImage: GRAIN_URI }} aria-hidden="true" />

      <Nav />

      <div className={styles.page} ref={pageRef}>
        <WaveThread containerRef={pageRef} />
        <main id="contenu" className={styles.main}>
          <Hero />
          <Freelance />
          <Code />
          <Music />
          <Contact />
        </main>
        <Footer />
      </div>

      <ProgressBadge />
    </>
  )
}

export default function App() {
  return (
    <LangProvider>
      <Site />
    </LangProvider>
  )
}
