import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

// One link for all content: "/page" routes within the site, "#id" smooth-scrolls
// to that element on the page, and anything else opens in a new tab.
function SiteLink ({href, className, children}) {

  if (href.startsWith('/')) {
    return <Link className={className} to={href}>{children}</Link>
  }

  if (href.startsWith('#')) {
    const scrollToTarget = (e) => {
      const target = document.getElementById(href.slice(1))
      if (!target) return
      e.preventDefault()
      target.scrollIntoView({ behavior: 'smooth' })
    }
    return <a className={className} href={href} onClick={scrollToTarget}>{children}</a>
  }

  return <a className={className} href={href} target="_blank" rel="noopener noreferrer">{children}</a>
}

SiteLink.propTypes = {
  href: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
}

export default SiteLink;
