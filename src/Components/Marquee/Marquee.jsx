import { useLayoutEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import './Marquee.css'

// A ticker strip laid along the bottom edge of an angled section, rotated to
// match its cut. The text scrolls slowly on a loop, pauses on hover, and sits
// still (wrapping onto more lines) for visitors who prefer reduced motion.
function Marquee ({title, items}) {
  const stripRef = useRef(null)
  const leftProbe = useRef(null)
  const rightProbe = useRef(null)

  // The cut's slope depends on the section's width, so measure it (the probes
  // are sized to the cut depths in CSS) and set the angle and length to match.
  useLayoutEffect(() => {
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
  }, [])

  // One run of the text; it repeats so the loop never shows a gap.
  const group = (hidden) => (
    <p className="marquee-group" aria-hidden={hidden || undefined}>
      <strong className="marquee-title">{title}</strong>
      {items.map((item, i) => (
        <span key={i} className="marquee-item">{item}</span>
      ))}
    </p>
  )

  return (
    <aside className="marquee" aria-label={title} ref={stripRef}>
      <span className="marquee-probe marquee-probe--left" ref={leftProbe} />
      <span className="marquee-probe marquee-probe--right" ref={rightProbe} />
      <div className="marquee-track">
        {group(false)}
        {group(true)}
        {group(true)}
        {group(true)}
      </div>
    </aside>
  )
}

Marquee.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Marquee
