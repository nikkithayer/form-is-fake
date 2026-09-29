import './Button.css'
import PropTypes from 'prop-types'
import SiteLink from '../SiteLink/SiteLink'

function Button ({label, href}) {
  return <SiteLink className="btn" href={href}>{label}</SiteLink>
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
}

export default Button;
