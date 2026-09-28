import { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import './TVStatic.css'

// Animated TV static that fills its parent (the parent needs `position: relative`).
// `pixelSize` sets the grain; above 1 it's drawn at lower resolution and
// scaled up with crisp pixels. It pauses while off-screen or in a hidden tab, and
// shows one still frame for visitors who prefer reduced motion.
function TVStatic ({pixelSize = 1, fps = 18, brightness = 0.25, contrast = 0.15}) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let image, pixels
    let frame = null
    let onScreen = false
    // A different starting point per instance, so header and footer never match.
    let seed = (Math.random() * 4294967296) | 0
    // Grains vary evenly around the average gray, `contrast` wide in total.
    const spread = 255 * contrast
    const lowest = Math.max(0, 255 * brightness - spread / 2)
    const range = Math.min(255 - lowest, spread)
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')

    // mulberry32: fast, and good enough that the noise never shows patterns.
    const random = () => {
      seed = (seed + 0x6d2b79f5) | 0
      let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296
    }

    const draw = () => {
      for (let i = 0; i < pixels.length; i++) {
        const level = (lowest + random() * range) | 0
        pixels[i] = 0xff000000 | (level << 16) | (level << 8) | level // opaque gray (ABGR)
      }
      ctx.putImageData(image, 0, 0)
    }

    const resize = () => {
      const width = Math.max(1, Math.ceil(canvas.clientWidth / pixelSize))
      const height = Math.max(1, Math.ceil(canvas.clientHeight / pixelSize))
      if (width === canvas.width && height === canvas.height && image) return
      canvas.width = width
      canvas.height = height
      image = ctx.createImageData(width, height)
      pixels = new Uint32Array(image.data.buffer)
      draw()
    }

    // Draw on every Nth screen refresh (every 3rd at 60Hz, 7th at 120Hz) rather
    // than by elapsed time: timestamps wobble a little in some browsers, and
    // time-based checks then skip a beat now and then, which reads as a stutter.
    let refreshMs = 1000 / 60
    let lastTime = null
    let ticks = 0
    const tick = (time) => {
      frame = requestAnimationFrame(tick)
      if (lastTime !== null) {
        const delta = time - lastTime
        if (delta > 0 && delta < 100) refreshMs += (delta - refreshMs) * 0.1 // learn the refresh rate
      }
      lastTime = time
      const every = Math.max(1, Math.round(1000 / fps / refreshMs))
      if (++ticks % every === 0) draw()
    }

    const update = () => {
      const shouldRun = onScreen && !document.hidden && !motion.matches
      if (shouldRun && frame === null) frame = requestAnimationFrame(tick)
      if (!shouldRun && frame !== null) {
        cancelAnimationFrame(frame)
        frame = null
        lastTime = null // don't count the paused time as one long refresh
      }
    }

    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(canvas)
    const visibility = new IntersectionObserver(([entry]) => {
      onScreen = entry.isIntersecting
      update()
    })
    visibility.observe(canvas)
    document.addEventListener('visibilitychange', update)
    motion.addEventListener('change', update)
    resize()

    return () => {
      if (frame !== null) cancelAnimationFrame(frame)
      resizeObserver.disconnect()
      visibility.disconnect()
      document.removeEventListener('visibilitychange', update)
      motion.removeEventListener('change', update)
    }
  }, [pixelSize, fps, brightness, contrast])

  return (
    <div className="tv-static" aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  )
}

TVStatic.propTypes = {
  // Size of each grain of static in screen pixels.
  pixelSize: PropTypes.number,
  // Frames per second; static doesn't need 60.
  fps: PropTypes.number,
  // Average gray, from 0 (black) to 1 (white). Keep it low behind text.
  brightness: PropTypes.number,
  // How much grains vary from that average, from 0 (flat gray) to 1 (black to white).
  contrast: PropTypes.number,
}

export default TVStatic
