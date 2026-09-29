import PropTypes from 'prop-types'
import Button from '../Button/Button'
import Marquee from '../Marquee/Marquee'
import { currentShows, formatDay, formatRun } from './showDates'
import { ctaShape, showShape } from '../../content/propTypes'
import AngledSection from '../AngledSection/AngledSection'
import './NowPlaying.css'

// The ticker along the top says what's on; a show only gets its own tag
// when it adds something: an upcoming run's opening date, or "Just wrapped"
// on a closed show listed alongside current ones.
function Show ({show, tag, cta}) {
  const wrapped = show.status === 'wrapped'
  // Once a show has wrapped, its time and price no longer matter.
  const details = wrapped ? [formatRun(show.start, show.end)] : [formatRun(show.start, show.end), show.time, show.price]

  return (
    <article className="show">
      {show.image && <img className="show-image" src={show.image} alt={show.imageAlt ?? ''} />}
      <div className="show-info">
        {tag && <p className="show-status">{tag}</p>}
        <h3 className="title">{show.title}</h3>
        <p className="subtitle show-details">
          {details.filter(Boolean).join(' · ')}
        </p>
        {show.blurb && <p>{show.blurb}</p>}
        <Button {...cta} />
      </div>
    </article>
  )
}

Show.propTypes = {
  show: showShape.isRequired,
  tag: PropTypes.string,
  cta: ctaShape.isRequired,
}

// Repeated enough times to fill even very wide screens.
const repeated = (text) => Array(10).fill(text)

// The top of the page: current and upcoming shows, then any that just
// wrapped, or a nudge to the newsletter when there are none. Shows move to
// "Just wrapped" when they close and drop off on their own after that.
function NowPlaying ({shows, title, ticketLabel, wrapped, empty}) {
  const showing = currentShows(shows, new Date(), wrapped.days)
  // The ticker says "Just wrapped" once everything listed has closed.
  const allWrapped = showing.length > 0 && showing.every((show) => show.status === 'wrapped')
  const headline = allWrapped ? wrapped.label : title

  const tagFor = (show) => {
    if (show.status === 'wrapped' && !allWrapped) return wrapped.label
    if (show.status === 'upcoming' && show.start !== show.end) return `Opens ${formatDay(show.start)}`
    return null
  }

  return (
    <AngledSection id="now-playing" className="now-playing">
      {showing.length > 0 && <Marquee edge="top" items={repeated(headline)} decorative className="marquee-label now-playing-marquee" />}
      <div className="container">
        <h2 className="visually-hidden">{title}</h2>
        {showing.length > 0 ? (
          showing.map((show) => (
            <Show
              key={show.ticketUrl}
              show={show}
              tag={tagFor(show)}
              cta={show.status === 'wrapped' ? wrapped.cta : { label: ticketLabel, href: show.ticketUrl }}
            />
          ))
        ) : (
          <div className="show show--empty">
            <div className="show-info">
              <h3 className="title">{empty.title}</h3>
              <p>{empty.body}</p>
              <Button {...empty.cta} />
            </div>
          </div>
        )}
      </div>
    </AngledSection>
  )
}

NowPlaying.propTypes = {
  shows: PropTypes.arrayOf(showShape).isRequired,
  title: PropTypes.string.isRequired,
  ticketLabel: PropTypes.string.isRequired,
  wrapped: PropTypes.shape({
    label: PropTypes.string.isRequired,
    days: PropTypes.number.isRequired,
    cta: ctaShape.isRequired,
  }).isRequired,
  empty: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    cta: ctaShape.isRequired,
  }).isRequired,
}

export default NowPlaying
