import PropTypes from 'prop-types'

// Shapes of the content objects in this folder, shared by the components that render them.

export const ctaShape = PropTypes.shape({
  label: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
})

// A project, used for both home page sections and project columns.
export const projectPropTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  body: PropTypes.arrayOf(PropTypes.string).isRequired,
  image: PropTypes.string,
  imageAlt: PropTypes.string,
  cta: ctaShape,
  theme: PropTypes.oneOf(['light', 'blue', 'dark']),
}
