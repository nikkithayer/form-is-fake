/* eslint-env node */
/*
  Adds or updates a show in src/content/nowPlaying.json from a ticket link.

    npm run now-playing <ticket URL>
    npm run now-playing <ticket URL> -- --end 2026-11-22
    npm run now-playing <ticket URL> -- --start 2026-10-15 --end 2026-11-22

  Works with Eventbrite and Luma, and any other ticket page that publishes
  standard schema.org Event data. A ticket page usually describes a single
  performance, so pass --end for a run's closing night (and --start for
  opening night, if the link isn't for the first performance).

  Running it again with the same link updates that show instead of adding a
  duplicate: --start/--end replace its dates, and anything you've already
  filled in by hand (like a rewritten blurb) is kept. Review new entries
  afterward: the blurb and alt text are starting points, not final copy.
*/

import { readFile, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'

const SHOWS_FILE = fileURLToPath(new URL('../src/content/nowPlaying.json', import.meta.url))
const DAY = /^\d{4}-\d{2}-\d{2}$/

function parseArgs (argv) {
  const args = { url: null, start: null, end: null }
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === '--start' || argv[i] === '--end') {
      const value = argv[++i]
      if (!DAY.test(value ?? '')) fail(`${argv[i - 1]} needs a date like 2026-11-22`)
      args[argv[i - 1].slice(2)] = value
    } else if (!args.url) {
      args.url = argv[i]
    }
  }
  if (!args.url) fail('Usage: npm run now-playing <ticket URL> [-- --start YYYY-MM-DD --end YYYY-MM-DD]')
  return args
}

function fail (message) {
  console.error(message)
  process.exit(1)
}

// Every schema.org object in the page's JSON-LD blocks, flattened.
function jsonLdObjects (html) {
  const blocks = html.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)
  const objects = []
  for (const [, text] of blocks) {
    try {
      const data = JSON.parse(text)
      const items = Array.isArray(data) ? data : data['@graph'] ?? [data]
      objects.push(...items)
    } catch {
      // Skip blocks that aren't valid JSON.
    }
  }
  return objects
}

function isEvent (item) {
  const types = [item['@type']].flat()
  return types.some((type) => typeof type === 'string' && type.endsWith('Event'))
}

// The local calendar day from an ISO timestamp like 2026-10-10T14:00:00-07:00.
const dayOf = (timestamp) => timestamp?.slice(0, 10)

// "6 PM" or "6:30 PM", read straight from the timestamp so it stays in the event's own time zone.
function clockOf (timestamp) {
  const match = timestamp?.match(/T(\d{2}):(\d{2})/)
  if (!match) return undefined
  const [hours, minutes] = [Number(match[1]), match[2]]
  const hour12 = hours % 12 || 12
  return { text: minutes === '00' ? `${hour12}` : `${hour12}:${minutes}`, period: hours < 12 ? 'AM' : 'PM' }
}

// "6–10 PM", "11 AM–1 PM", or "8 PM" when there's no end time.
function timeOf (startDate, endDate) {
  const start = clockOf(startDate)
  if (!start) return undefined
  const end = clockOf(endDate)
  if (!end) return `${start.text} ${start.period}`
  if (start.period === end.period) return `${start.text}–${end.text} ${end.period}`
  return `${start.text} ${start.period}–${end.text} ${end.period}`
}

const dollars = (amount) => `$${Number.isInteger(amount) ? amount : amount.toFixed(2)}`

// "$20", "$49.50–$99", or "Free", from a single offer, several ticket tiers, or an AggregateOffer.
function priceOf (offers) {
  const prices = [offers].flat().filter(Boolean)
    .flatMap((offer) => [offer.price, offer.lowPrice, offer.highPrice])
    .filter((price) => price !== undefined && price !== null && price !== '')
    .map(Number)
    .filter((price) => !Number.isNaN(price))
  if (prices.length === 0) return undefined
  const [low, high] = [Math.min(...prices), Math.max(...prices)]
  if (high === 0) return 'Free'
  return low === high ? dollars(low) : `${low === 0 ? 'Free' : dollars(low)}–${dollars(high)}`
}

function firstSentences (text, max = 220) {
  if (!text) return undefined
  const clean = text.replace(/\s+/g, ' ').trim()
  if (clean.length <= max) return clean
  const cut = clean.slice(0, max)
  const lastStop = Math.max(...['. ', '! ', '? '].map((end) => cut.lastIndexOf(end)))
  return lastStop > 60 ? cut.slice(0, lastStop + 1) : `${cut.trimEnd()}…`
}

async function main () {
  const { url, start, end } = parseArgs(process.argv.slice(2))

  const response = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0 (form-is-fake now-playing import)' } })
  if (!response.ok) fail(`Couldn't load ${url} (HTTP ${response.status}).`)
  const event = jsonLdObjects(await response.text()).find(isEvent)
  if (!event) fail(`No event data found at ${url}. Add the show to src/content/nowPlaying.json by hand instead.`)

  const title = event.name?.trim()
  const show = {
    title,
    start: start ?? dayOf(event.startDate),
    end: end ?? dayOf(event.endDate) ?? dayOf(event.startDate),
    time: timeOf(event.startDate, event.endDate),
    price: event.isAccessibleForFree === true ? 'Free' : priceOf(event.offers),
    image: [event.image].flat()[0],
    imageAlt: title && `Poster for ${title}`,
    ticketUrl: url,
    blurb: firstSentences(event.description),
  }
  if (!show.title || !show.end) fail(`The event data at ${url} is missing a title or date. Add the show by hand instead.`)

  const shows = JSON.parse(await readFile(SHOWS_FILE, 'utf8'))
  const existing = shows.findIndex((s) => s.ticketUrl === url)
  if (existing >= 0) {
    // Keep hand edits; only explicit --start/--end override what's there.
    shows[existing] = { ...show, ...shows[existing], ...(start && { start }), ...(end && { end }) }
  } else {
    shows.push(show)
  }
  const saved = shows[existing >= 0 ? existing : shows.length - 1]
  if (saved.start > saved.end) fail(`Start (${saved.start}) is after end (${saved.end}). Check --start/--end.`)

  await writeFile(SHOWS_FILE, `${JSON.stringify(shows, null, 2)}\n`)
  console.log(`${existing >= 0 ? 'Updated' : 'Added'} "${saved.title}" (${saved.start} to ${saved.end}) in src/content/nowPlaying.json:\n`)
  console.log(JSON.stringify(saved, null, 2))
}

main()
