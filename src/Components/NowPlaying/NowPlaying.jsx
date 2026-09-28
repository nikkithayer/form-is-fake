import PropTypes from 'prop-types'
import Button from '../Button/Button'
import { currentShows, formatDay, formatRun } from './showDates'
import { ctaShape, showShape } from '../../content/propTypes'
import './NowPlaying.css'

function Show ({show, upcomingLabel, ticketLabel}) {
  return (
    <article className="show">
      {show.image && <img className="show-image" src={show.image} alt={show.imageAlt ?? ''} />}
      <div className="show-info">
        {show.status === 'upcoming' && (
          <p className="show-status">
            {upcomingLabel}{show.start !== show.end && ` · Opens ${formatDay(show.start)}`}
          </p>
        )}
        <h3 className="title">{show.title}</h3>
        <p className="subtitle show-details">
          {[formatRun(show.start, show.end), show.time, show.price].filter(Boolean).join(' · ')}
        </p>
        {show.blurb && <p>{show.blurb}</p>}
        <Button label={ticketLabel} href={show.ticketUrl} />
      </div>
    </article>
  )
}

Show.propTypes = {
  show: showShape.isRequired,
  upcomingLabel: PropTypes.string.isRequired,
  ticketLabel: PropTypes.string.isRequired,
}

// The top of the page: shows that haven't closed yet, or a nudge to the
// newsletter when there are none. Closed shows drop off on their own.
function NowPlaying ({shows, title, upcomingLabel, ticketLabel, empty}) {
  const showing = currentShows(shows)

  return (
    <section id="now-playing" className="now-playing">
      <div className="container">
        <h2 className="now-playing-label">{title}</h2>
        {showing.length > 0 ? (
          showing.map((show) => (
            <Show key={show.ticketUrl} show={show} upcomingLabel={upcomingLabel} ticketLabel={ticketLabel} />
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
    </section>
  )
}

NowPlaying.propTypes = {
  shows: PropTypes.arrayOf(showShape).isRequired,
  title: PropTypes.string.isRequired,
  upcomingLabel: PropTypes.string.isRequired,
  ticketLabel: PropTypes.string.isRequired,
  empty: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    cta: ctaShape.isRequired,
  }).isRequired,
}

export default NowPlaying
