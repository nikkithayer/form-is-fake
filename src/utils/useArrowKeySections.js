import { useEffect } from 'react'

// The page's top-level sections, in order: Now Playing, each project, About, signup.
const SECTIONS = 'main section[id]'

// A section counts as "reached" once its top is within this many px.
const TOLERANCE = 8

// How long a smooth scroll takes, roughly; presses during it continue from its target.
const SCROLL_MS = 700

const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Keys typed into these shouldn't move the page.
function isTyping (el) {
  return el?.closest?.('input, textarea, select, [contenteditable=""], [contenteditable="true"]')
}

// ↓ and ↑ jump to the next or previous section. When that section is more than
// a screen away (a tall section), they move one screen instead, so nothing gets skipped.
export function useArrowKeySections () {
  useEffect(() => {
    let pending = null // { y, until } for a smooth scroll still in progress

    const onKeyDown = (e) => {
      if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return
      if (e.defaultPrevented || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return
      if (isTyping(e.target)) return

      const now = performance.now()
      const from = pending && now < pending.until ? pending.y : window.scrollY
      const screen = window.innerHeight * 0.85
      const tops = [...document.querySelectorAll(SECTIONS)]
        .map((el) => el.getBoundingClientRect().top + window.scrollY)

      let target
      if (e.key === 'ArrowDown') {
        const next = tops.find((top) => top > from + TOLERANCE)
        if (next === undefined) return // past the last section: let the browser scroll normally
        target = Math.min(next, from + screen)
      } else {
        const prev = [...tops].reverse().find((top) => top < from - TOLERANCE) ?? 0
        target = Math.max(prev, from - screen)
      }

      e.preventDefault()
      const behavior = reducedMotion() ? 'auto' : 'smooth'
      window.scrollTo({ top: target, behavior })
      pending = behavior === 'smooth' ? { y: target, until: now + SCROLL_MS } : null
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])
}
