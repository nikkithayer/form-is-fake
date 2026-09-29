import PropTypes from 'prop-types'
import { angleStyle } from './angle'
import './AngledSection.css'

// A page section with a slanted, cut-paper bottom edge that overlaps the next
// section. Every one gets its own angle automatically (worked out from its
// id); see AngledSection.css for setting one by hand and for colors/spacing.
function AngledSection ({id, className, children}) {
  return (
    <section id={id} className={className ? `angled ${className}` : 'angled'} style={angleStyle(id)}>
      {children}
    </section>
  )
}

AngledSection.propTypes = {
  // Also the section's link target (#id) and the source of its default angle.
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
}

export default AngledSection
