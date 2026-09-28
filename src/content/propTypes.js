import PropTypes from 'prop-types'

// Shapes of the content objects in this folder, shared by the components that render them.

export const ctaShape = PropTypes.shape({
  label: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
})

// A project section (see home.js).
export const projectPropTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  body: PropTypes.arrayOf(PropTypes.string).isRequired,
  image: PropTypes.string,
  imageAlt: PropTypes.string,
  photos: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  })),
  cta: ctaShape,
  layout: PropTypes.oneOf(['art-left', 'art-right', 'art-top']),
}

// A show in nowPlaying.json.
export const showShape = PropTypes.shape({
  title: PropTypes.string.isRequired,
  start: PropTypes.string,
  end: PropTypes.string.isRequired,
  time: PropTypes.string,
  price: PropTypes.string,
  image: PropTypes.string,
  imageAlt: PropTypes.string,
  ticketUrl: PropTypes.string.isRequired,
  blurb: PropTypes.string,
})
