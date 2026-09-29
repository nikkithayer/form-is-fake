import { useLayoutEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import './Marquee.css'

// A ticker strip inside a section: laid along the section's angled bottom
// edge and rotated to match its cut, flat along its top, or inline in the
// page flow, stretched edge to edge. The text scrolls
// slowly on a loop, pauses on hover, and sits still (wrapping onto more lines)
// for visitors who prefer reduced motion.
function Marquee ({title, items, edge = 'bottom', decorative = false, className}) {
  const stripRef = useRef(null)
  const leftProbe = useRef(null)
  const rightProbe = useRef(null)

  // The cut's slope depends on the section's width, so measure it (the probes
  // are sized to the cut depths in CSS) and set the angle and length to match.
  useLayoutEffect(() => {
    if (edge !== 'bottom') return
    const strip = stripRef.current
    const section = strip.parentElement
    const fit = () => {
      const width = section.clientWidth
      const drop = rightProbe.current.offsetWidth - leftProbe.current.offsetWidth
      strip.style.setProperty('--marquee-angle', `${Math.atan2(drop, width)}rad`)
      strip.style.setProperty('--marquee-length', `${Math.hypot(width, drop)}px`)
    }
    fit()
    const observer = new ResizeObserver(fit)
    observer.observe(section)
    return () => observer.disconnect()
  }, [edge])

  // One run of the text; it repeats so the loop never shows a gap.
  const group = (hidden) => (
    <p className="marquee-group" aria-hidden={hidden || undefined}>
      {title && <strong className="marquee-title">{title}</strong>}
      {items.map((item, i) => (
        <span key={i} className="marquee-item">{item}</span>
      ))}
    </p>
  )

  const classes = ['marquee', edge !== 'bottom' && `marquee--${edge}`, className].filter(Boolean).join(' ')
  // Decorative strips (repeating a heading the section already has) are hidden
  // from screen readers; others are a labelled aside, read once.
  const Strip = decorative ? 'div' : 'aside'
  const a11y = decorative ? { 'aria-hidden': true } : { 'aria-label': title }

  return (
    <Strip className={classes} ref={stripRef} {...a11y}>
      {edge === 'bottom' && (
        <>
          <span className="marquee-probe marquee-probe--left" ref={leftProbe} />
          <span className="marquee-probe marquee-probe--right" ref={rightProbe} />
        </>
      )}
      <div className="marquee-track">
        {group(false)}
        {group(true)}
        {group(true)}
        {group(true)}
      </div>
    </Strip>
  )
}

Marquee.propTypes = {
  // Bold lead-in before the items, e.g. "Overheard at Iron City".
  title: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  // "bottom" follows the section's angled cut; "top" runs flat along the
  // top; "inline" sits in the page flow where it's placed.
  edge: PropTypes.oneOf(['bottom', 'top', 'inline']),
  // Hide from screen readers when it only repeats a heading.
  decorative: PropTypes.bool,
  className: PropTypes.string,
}

export default Marquee
