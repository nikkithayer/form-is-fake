// Each angled section gets its own default cut, worked out from its name so
// no two sections match and a section keeps its angle when the page is
// reordered. sections.css (or a component's CSS) can override it with
// --cut-left / --cut-right; see styles/angled.css.

const MIN = 24   // shortest side of the cut, px
const MAX = 150  // longest side of the cut, px
const MIN_SLOPE = 50 // sides differ by at least this much, so it reads as an angle

// A small, stable hash (FNV-1a plus a final mix, so similar names still land
// far apart). The same name always gives the same angle.
function hash (text) {
  let h = 2166136261
  for (const char of text) {
    h ^= char.codePointAt(0)
    h = Math.imul(h, 16777619)
  }
  h ^= h >>> 16
  h = Math.imul(h, 0x85ebca6b)
  h ^= h >>> 13
  h = Math.imul(h, 0xc2b2ae35)
  h ^= h >>> 16
  return h >>> 0
}

// Inline style for an angled section named `key` (e.g. its id).
export function angleStyle (key) {
  const h = hash(key)
  const short = MIN + (h % (MAX - MIN - MIN_SLOPE))
  const long = short + MIN_SLOPE + ((h >>> 8) % (MAX - short - MIN_SLOPE + 1))
  const longOnLeft = (h >>> 16) % 2 === 0
  return {
    '--cut-left-auto': `${longOnLeft ? long : short}px`,
    '--cut-right-auto': `${longOnLeft ? short : long}px`,
  }
}
