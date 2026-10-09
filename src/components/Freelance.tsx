import Section from './Section'
import { useLang } from '../i18n/LangContext'
import { scrollToId } from '../lib/scroll'
import styles from './Freelance.module.css'

const stack = ['TypeScript', 'React', 'Node.js', 'Python', 'Git & CI']

export default function Freelance() {
  const { t } = useLang()

  return (
    <Section id="freelance" kicker={t.freelance.kicker} title={t.freelance.title} lead={t.freelance.lead}>
      <div className={styles.services}>
        {t.freelance.services.map((service, i) => (
          <div key={service.name} className={styles.service}>
            <span className={styles.num}>0{i + 1}</span>
            <h3 className={styles.serviceName}>{service.name}</h3>
            <p className={styles.serviceText}>{service.text}</p>
          </div>
        ))}
      </div>

      <div className={styles.stackRow}>
        <span className={`kicker ${styles.stackLabel}`}>{t.freelance.stackLabel}</span>
        <div className={styles.chips}>
          {stack.map((s) => (
            <span key={s} className={styles.chip}>
              {s}
            </span>
          ))}
        </div>
      </div>

      <div className={styles.ctaRow}>
        <p className={styles.availability}>
          <span className={styles.dot} aria-hidden="true" />
          {t.freelance.availability}
        </p>
        <button className="btn btn-primary" onClick={() => scrollToId('contact')}>
          {t.freelance.cta}
        </button>
      </div>
    </Section>
  )
}
