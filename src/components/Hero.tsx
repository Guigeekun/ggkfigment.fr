import { useEffect, useMemo, useRef } from 'react'
import { useLang } from '../i18n/LangContext'
import { scrollToId } from '../lib/scroll'
import { useReveal } from '../hooks/useReveal'
import styles from './Hero.module.css'

/** Decorative horizontal waveform: quiet → loud → quiet envelope. */
function Waveform({ flip = false }: { flip?: boolean }) {
  const d = useMemo(() => {
    const w = 1200
    const mid = 40
    let path = `M 0 ${mid}`
    for (let x = 0; x <= w; x += 8) {
      const env = Math.sin((x / w) * Math.PI)
      const wob = Math.sin(x * 0.045) * Math.sin(x * 0.011 + 2)
      const y = mid - wob * 34 * (0.35 + 0.65 * env)
      path += ` L ${x} ${y.toFixed(1)}`
    }
    return path
  }, [])

  return (
    <svg
      className={styles.waveSvg}
      viewBox="0 0 1200 80"
      preserveAspectRatio="none"
      aria-hidden="true"
      style={flip ? { transform: 'scaleY(-1)' } : undefined}
    >
      <path
        d={d}
        pathLength={1}
        fill="none"
        stroke="var(--signal)"
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
        className={styles.wavePath}
      />
    </svg>
  )
}

export default function Hero() {
  const { t } = useLang()
  const contentRef = useReveal<HTMLDivElement>()

  const nebulaRef = useRef<HTMLDivElement>(null)
  const wave1Ref = useRef<HTMLDivElement>(null)
  const wave2Ref = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  // Signature parallax: 4 layers at 0.2× / 0.45× / 0.65× / 1× (text counter-drifts -0.1×).
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let raf = 0
    const update = () => {
      raf = 0
      const y = window.scrollY
      const limit = window.innerHeight * 1.2
      if (y > limit) return
      nebulaRef.current?.style.setProperty('transform', `translate3d(0, ${y * 0.8}px, 0)`)
      wave1Ref.current?.style.setProperty('transform', `translate3d(0, ${y * 0.55}px, 0)`)
      wave2Ref.current?.style.setProperty('transform', `translate3d(0, ${y * 0.35}px, 0)`)
      if (textRef.current) {
        textRef.current.style.transform = `translate3d(0, ${y * -0.1}px, 0)`
        textRef.current.style.opacity = String(Math.max(0, 1 - y / (window.innerHeight * 0.9)))
      }
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    update()
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <section id="hero" className={styles.hero}>
      {/* L0 — nébuleuse Klein */}
      <div className={styles.layer} ref={nebulaRef} aria-hidden="true">
        <div className={styles.nebula} />
        <div className={`${styles.nebula} ${styles.nebula2}`} />
      </div>

      {/* L1 / L2 — lignes d'onde */}
      <div className={`${styles.layer} ${styles.waveA}`} ref={wave1Ref} aria-hidden="true">
        <Waveform />
      </div>
      <div className={`${styles.layer} ${styles.waveB}`} ref={wave2Ref} aria-hidden="true">
        <Waveform flip />
      </div>

      {/* L3 — contenu */}
      <div className={`container ${styles.content}`} ref={contentRef}>
        <div ref={textRef} className={styles.textContent}>
          <p className={`kicker reveal`} style={{ '--i': 0 } as React.CSSProperties}>
            {t.hero.kicker}
          </p>
          <h1 className={styles.title}>
            <span className="reveal" style={{ '--i': 1 } as React.CSSProperties}>
              {t.hero.titleA}
            </span>
            <span className="reveal" style={{ '--i': 2 } as React.CSSProperties}>
              {t.hero.titleB}{' '}
              <em className="signal-em">{t.hero.titleC}</em>
            </span>
          </h1>
          <p className={`${styles.sub} reveal`} style={{ '--i': 3 } as React.CSSProperties}>
            {t.hero.sub}
          </p>
          <div className={`${styles.ctas} reveal`} style={{ '--i': 4 } as React.CSSProperties}>
            <button className="btn btn-primary" onClick={() => scrollToId('contact')}>
              {t.hero.ctaHire}
            </button>
            <button className="btn" onClick={() => scrollToId('musique')}>
              {t.hero.ctaListen}
            </button>
          </div>
        </div>
      </div>

      <div className={styles.scrollHint} aria-hidden="true">
        <span className={styles.scrollLine} />
        <span className="kicker">{t.hero.scroll}</span>
      </div>
    </section>
  )
}
