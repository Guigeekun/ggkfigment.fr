import { useLang } from '../i18n/LangContext'
import { scrollToId, scrollToTop } from '../lib/scroll'
import styles from './Nav.module.css'

export default function Nav() {
  const { lang, setLang, t } = useLang()

  const sections = [
    { id: 'musique', label: t.nav.musique },
    { id: 'code', label: t.nav.code },
    { id: 'freelance', label: t.nav.freelance },
    { id: 'contact', label: t.nav.contact },
  ] as const

  return (
    <nav className={styles.nav}>
      <div className={`container ${styles.inner}`}>
        <button
          className={styles.wordmark}
          onClick={scrollToTop}
          aria-label="figment — retour en haut"
        >
          figment<span className={styles.dot}>.</span>
        </button>

        <div className={styles.links}>
          {sections.map((s) => (
            <button key={s.id} className={styles.link} onClick={() => scrollToId(s.id)}>
              {s.label}
            </button>
          ))}
        </div>

        <div className={styles.lang} role="group" aria-label="Langue / Language">
          <button
            className={lang === 'fr' ? styles.on : styles.off}
            onClick={() => setLang('fr')}
            aria-pressed={lang === 'fr'}
          >
            FR
          </button>
          <span className={styles.sep} aria-hidden="true">
            /
          </span>
          <button
            className={lang === 'en' ? styles.on : styles.off}
            onClick={() => setLang('en')}
            aria-pressed={lang === 'en'}
          >
            EN
          </button>
        </div>
      </div>
    </nav>
  )
}
