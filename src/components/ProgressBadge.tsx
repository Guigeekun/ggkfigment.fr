import { useEffect, useState } from 'react'
import styles from './ProgressBadge.module.css'

const IDS = ['hero', 'freelance', 'code', 'musique', 'contact'] as const

/** Fixed bottom-left `01 / 05` counter following the active section. */
export default function ProgressBadge() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(IDS.indexOf(e.target.id as (typeof IDS)[number]))
        }
      },
      { rootMargin: '-45% 0px -45% 0px' },
    )
    for (const id of IDS) {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    }
    return () => io.disconnect()
  }, [])

  const label = `0${active + 1} / 0${IDS.length}`

  return (
    <div className={styles.badge} aria-hidden="true">
      <span key={label} className={styles.num}>
        {label}
      </span>
    </div>
  )
}
