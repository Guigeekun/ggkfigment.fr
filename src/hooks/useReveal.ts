import { useEffect, useRef } from 'react'

/**
 * Adds the `revealed` class once the element enters the viewport (15%),
 * driving the `.reveal` transitions defined in base.css. Runs once.
 * Instant under prefers-reduced-motion (handled in CSS too).
 */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          el.classList.add('revealed')
          io.disconnect()
        }
      },
      { threshold: 0.15 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return ref
}
