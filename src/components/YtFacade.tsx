import { useState } from 'react'
import { PlayIcon } from './icons'
import styles from './YtFacade.module.css'

/**
 * YouTube facade: static thumbnail + homemade play button, the iframe only
 * loads on click (perf + a consistent look, no YouTube chrome).
 */
export default function YtFacade({ id, title }: { id: string; title: string }) {
  const [play, setPlay] = useState(false)

  if (play) {
    return (
      <div className={styles.frame}>
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    )
  }

  return (
    <button className={styles.facade} onClick={() => setPlay(true)} aria-label={`${title} — play`}>
      <img
        src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
        alt=""
        loading="lazy"
        decoding="async"
      />
      <span className={styles.playBtn}>
        <PlayIcon />
      </span>
    </button>
  )
}
