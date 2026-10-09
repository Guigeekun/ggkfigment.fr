import Section from './Section'
import { repos, githubProfile } from '../data/repos'
import { useLang } from '../i18n/LangContext'
import styles from './Code.module.css'

export default function Code() {
  const { t, lang } = useLang()

  return (
    <Section id="code" kicker={t.code.kicker} title={t.code.title} lead={t.code.lead}>
      <div className={styles.grid}>
        {repos.map((repo) => (
          <a
            key={repo.name}
            className={styles.card}
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className={styles.name}>{repo.name}</p>
            <p className={styles.desc}>{repo.desc[lang]}</p>
            <div className={styles.chips}>
              <span className={styles.chip}>{repo.lang.toLowerCase()}</span>
              {repo.stars > 0 && (
                <span className={styles.chip}>
                  ★ {repo.stars}
                </span>
              )}
            </div>
          </a>
        ))}
      </div>

      <div className={styles.bottom}>
        <span className={styles.vault}>{t.code.vault}</span>
        <a
          className="btn"
          href={githubProfile}
          target="_blank"
          rel="noopener noreferrer"
        >
          {t.code.more}
        </a>
      </div>
    </Section>
  )
}
