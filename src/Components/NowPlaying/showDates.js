// Date rules for Now Playing. Dates in nowPlaying.json are "YYYY-MM-DD" and
// are read as local days, so a show stays up through the whole of its end date.

function parseDay (day) {
  const [y, m, d] = day.split('-').map(Number)
  return new Date(y, m - 1, d)
}

function startOfToday (now) {
  return new Date(now.getFullYear(), now.getMonth(), now.getDate())
}

// Shows that haven't closed yet, soonest-closing first, each marked
// 'playing' (already open, or no start given) or 'upcoming'.
export function currentShows (shows, now = new Date()) {
  const today = startOfToday(now)
  return shows
    .filter((show) => parseDay(show.end) >= today)
    .map((show) => ({
      ...show,
      status: show.start && parseDay(show.start) > today ? 'upcoming' : 'playing',
    }))
    .sort((a, b) => parseDay(a.end) - parseDay(b.end))
}

export function formatDay (day) {
  return parseDay(day).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
}

// "Oct 15 – Nov 22", or "Oct 15" for a single day.
export function formatRun (start, end) {
  if (!start || start === end) return formatDay(end)
  return `${formatDay(start)} – ${formatDay(end)}`
}
