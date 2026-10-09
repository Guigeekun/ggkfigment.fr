import { useEffect, useId, useRef, useState } from 'react'
import styles from './WaveThread.module.css'

/** Gentle S-curve weaving down the full height of the page wrapper. */
function buildPath(w: number, h: number): string {
  if (h < 100) return ''
  const step = 380
  const amp = 110
  const cx = w / 2
  let d = `M ${cx} 0`
  let x = cx
  let y = 0
  let dir = 1
  while (y < h) {
    const ny = Math.min(y + step, h)
    const nx = cx + dir * amp * (ny >= h ? 0.5 : 1)
    const my = (y + ny) / 2
    d += ` C ${x} ${my}, ${nx} ${my}, ${nx} ${ny}`
    x = nx
    y = ny
    dir *= -1
  }
  return d
}

/**
 * The page's signature: a thin dashed signal line that draws itself as you
 * scroll, linking the sections. A glowing dot rides the tip.
 */
export default function WaveThread({
  containerRef,
}: {
  containerRef: React.RefObject<HTMLDivElement | null>
}) {
  const [height, setHeight] = useState(0)
  const maskPathRef = useRef<SVGPathElement>(null)
  const dotRef = useRef<SVGCircleElement>(null)
  const maskId = useId()

  // Watch the wrapper's height (content changes with language, fonts, etc.).
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const ro = new ResizeObserver((entries) => {
      setHeight(Math.round(entries[0].contentRect.height))
    })
    ro.observe(el)
    return () => ro.disconnect()
  }, [containerRef])

  // Drive the draw + tip dot from scroll progress.
  useEffect(() => {
    const path = maskPathRef.current
    const dot = dotRef.current
    if (!path || !dot || height === 0) return
    let raf = 0
    const update = () => {
      raf = 0
      const doc = document.documentElement
      const max = doc.scrollHeight - window.innerHeight
      const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0
      path.style.strokeDashoffset = String(1 - p)
      const total = path.getTotalLength()
      if (total > 0) {
        const pt = path.getPointAtLength(p * total)
        dot.setAttribute('cx', pt.x.toFixed(1))
        dot.setAttribute('cy', pt.y.toFixed(1))
        dot.style.opacity = p > 0.005 && p < 0.995 ? '1' : '0'
      }
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    update()
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [height])

  const d = buildPath(1000, height)

  return (
    <svg
      className={styles.thread}
      viewBox={`0 0 1000 ${Math.max(height, 2)}`}
      preserveAspectRatio="none"
      width="100%"
      height={height || 2}
      aria-hidden="true"
    >
      <defs>
        <mask id={maskId} maskUnits="userSpaceOnUse" x="0" y="0" width="1000" height={height}>
          <path
            ref={maskPathRef}
            d={d}
            pathLength={1}
            fill="none"
            stroke="#fff"
            strokeWidth={4}
            strokeDasharray={1}
            strokeDashoffset={1}
          />
        </mask>
      </defs>
      {d && (
        <>
          <path
            d={d}
            fill="none"
            stroke="var(--signal)"
            strokeWidth={1.5}
            strokeDasharray="3 9"
            vectorEffect="non-scaling-stroke"
            opacity={0.55}
            mask={`url(#${maskId})`}
          />
          <circle ref={dotRef} r={3} fill="var(--signal)" className={styles.dot} />
        </>
      )}
    </svg>
  )
}
