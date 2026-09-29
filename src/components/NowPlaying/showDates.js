// Date rules for Now Playing. Dates in nowPlaying.json are "YYYY-MM-DD" and
// are read as local days, so a show stays up through the whole of its end date.

function parseDay (day) {
  const [y, m, d] = day.split('-').map(Number)
  return new Date(y, m - 1, d)
}

function startOfToday (now) {
  return new Date(now.getFullYear(), now.getMonth(), now.getDate())
}

const DAY_MS = 24 * 60 * 60 * 1000

function statusOf (show, today, wrappedDays) {
  const end = parseDay(show.end)
  if (end < today) {
    const daysSince = Math.round((today - end) / DAY_MS)
    return daysSince <= wrappedDays ? 'wrapped' : null
  }
  return show.start && parseDay(show.start) > today ? 'upcoming' : 'playing'
}

// Shows to list, each marked 'playing' (open, or no start given), 'upcoming',
// or 'wrapped' (closed within the last `wrappedDays` days). Open and upcoming
// shows come first, soonest-closing first; then wrapped shows, most recent
// first. Anything that closed longer ago is left out.
export function currentShows (shows, now = new Date(), wrappedDays = 0) {
  const today = startOfToday(now)
  const listed = shows
    .map((show) => ({ ...show, status: statusOf(show, today, wrappedDays) }))
    .filter((show) => show.status)
  const byEnd = (a, b) => parseDay(a.end) - parseDay(b.end)
  return [
    ...listed.filter((show) => show.status !== 'wrapped').sort(byEnd),
    ...listed.filter((show) => show.status === 'wrapped').sort((a, b) => byEnd(b, a)),
  ]
}

export function formatDay (day) {
  return parseDay(day).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
}

// "Oct 15 – Nov 22", or "Oct 15" for a single day.
export function formatRun (start, end) {
  if (!start || start === end) return formatDay(end)
  return `${formatDay(start)} – ${formatDay(end)}`
}
