import Section from './Section'
import YtFacade from './YtFacade'
import { tracks } from '../data/tracks'
import { links } from '../data/links'
import { useLang } from '../i18n/LangContext'
import styles from './Music.module.css'

export default function Music() {
  const { t } = useLang()

  return (
    <Section id="musique" kicker={t.music.kicker} title={t.music.title} lead={t.music.lead}>
      <div className={styles.grid}>
        {tracks.map((track) => (
          <article key={track.id} className={styles.card}>
            <YtFacade id={track.id} title={track.title} />
            <div className={styles.meta}>
              <h3 className={styles.trackTitle}>{track.title}</h3>
              <span className={styles.tag}>{track.tag}</span>
            </div>
          </article>
        ))}
      </div>

      <p className={styles.handmade}>{t.music.handmade}</p>

      <p className={styles.alsoOn}>
        <span className="kicker">{t.music.alsoOn}</span>
        <a
          className={styles.platform}
          href={links.youtube}
          target="_blank"
          rel="noopener noreferrer"
        >
          YouTube
        </a>
        {links.spotify && (
          <a
            className={styles.platform}
            href={links.spotify}
            target="_blank"
            rel="noopener noreferrer"
          >
            Spotify
          </a>
        )}
        {links.appleMusic && (
          <a
            className={styles.platform}
            href={links.appleMusic}
            target="_blank"
            rel="noopener noreferrer"
          >
            Apple Music
          </a>
        )}
      </p>
    </Section>
  )
}
