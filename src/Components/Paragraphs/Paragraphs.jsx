import PropTypes from 'prop-types'
import Markdown from 'react-markdown'
import SiteLink from '../SiteLink/SiteLink'

// Markdown links follow the same rules as buttons (see SiteLink).
function MarkdownLink ({href, children}) {
  return <SiteLink href={href}>{children}</SiteLink>
}

MarkdownLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node,
}

const components = { a: MarkdownLink }

// Renders a list of Markdown paragraphs from the content files.
function Paragraphs ({body}) {
  return body.map((paragraph, i) => (
    <Markdown key={i} components={components}>{paragraph}</Markdown>
  ))
}

Paragraphs.propTypes = {
  body: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Paragraphs;
