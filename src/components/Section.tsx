import type { ReactNode, CSSProperties } from 'react'
import { useReveal } from '../hooks/useReveal'
import styles from './Section.module.css'

interface SectionProps {
  id: string
  kicker: string
  title: string
  lead?: string
  children: ReactNode
}

export default function Section({ id, kicker, title, lead, children }: SectionProps) {
  const headerRef = useReveal<HTMLDivElement>()

  return (
    <section id={id} className={styles.section}>
      <div className="container">
        <div className={styles.rule} aria-hidden="true" />
        <header ref={headerRef} className={styles.header}>
          <p className={`kicker reveal`} style={{ '--i': 0 } as CSSProperties}>
            {kicker}
          </p>
          <h2 className={styles.title}>
            <span className="reveal" style={{ '--i': 1 } as CSSProperties}>
              {title}
            </span>
          </h2>
          {lead && (
            <p className={`${styles.lead} reveal`} style={{ '--i': 2 } as CSSProperties}>
              {lead}
            </p>
          )}
        </header>
        {children}
      </div>
    </section>
  )
}
