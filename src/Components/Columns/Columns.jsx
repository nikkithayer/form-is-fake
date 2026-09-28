import PropTypes from 'prop-types'
import Column from '../Column/Column'
import { projectPropTypes } from '../../content/propTypes'
import './Columns.css'

function Columns({title, items}) {
  return (
    <div className="columns-container">
      <h2 className="title">{title}</h2>
      <div className="section-column container">
        {items.map((item) => <Column key={item.title} {...item} />)}
      </div>
    </div>
  )
}

Columns.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape(projectPropTypes)).isRequired,
}

export default Columns
