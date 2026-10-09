import { useLang } from '../i18n/LangContext'
import { links } from '../data/links'
import { useReveal } from '../hooks/useReveal'
import { GitHubIcon, LinkedInIcon, YouTubeIcon } from './icons'
import styles from './Contact.module.css'

export default function Contact() {
  const { t } = useLang()
  const ref = useReveal<HTMLDivElement>()

  const socials = [
    { href: links.youtube, label: 'YouTube', icon: <YouTubeIcon /> },
    { href: links.github, label: 'GitHub', icon: <GitHubIcon /> },
    { href: links.linkedin, label: 'LinkedIn', icon: <LinkedInIcon /> },
  ]

  return (
    <section id="contact" className={styles.section}>
      <div className="container">
        <div className={styles.rule} aria-hidden="true" />
        <div ref={ref} className={styles.center}>
          <p className={`kicker reveal`} style={{ '--i': 0 } as React.CSSProperties}>
            {t.contact.kicker}
          </p>
          <h2 className={styles.title}>
            <span className="reveal" style={{ '--i': 1 } as React.CSSProperties}>
              {t.contact.titleA}
            </span>
            <span className="reveal" style={{ '--i': 2 } as React.CSSProperties}>
              <em className="signal-em">{t.contact.titleB}</em>
            </span>
          </h2>
          <p className={`${styles.lead} reveal`} style={{ '--i': 3 } as React.CSSProperties}>
            {t.contact.lead}
          </p>
          <p className={`${styles.emailWrap} reveal`} style={{ '--i': 4 } as React.CSSProperties}>
            <a className={styles.email} href={`mailto:${links.email}`}>
              {links.email}
            </a>
          </p>
          <div className={`${styles.socials} reveal`} style={{ '--i': 5 } as React.CSSProperties}>
            <span className={`kicker ${styles.socialsLabel}`}>{t.contact.socialsLabel}</span>
            {socials.map((s) => (
              <a
                key={s.label}
                className={styles.social}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
