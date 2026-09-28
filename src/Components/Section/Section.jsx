import Button from '../Button/Button'
import Paragraphs from '../Paragraphs/Paragraphs'
import { projectPropTypes } from '../../content/propTypes'
import './Section.css'

function Section({title, body, image, imageAlt, cta, theme = 'light'}) {

  return (
    <div className={`section section--${theme}`}>
      <div className="holder container">
        {image && <img src={image} alt={imageAlt} />}
        <div className="content">
          <h2 className="title">{title}</h2>
          <Paragraphs body={body} />
          {cta && <Button {...cta} />}
        </div>
      </div>
    </div>
  )
}

Section.propTypes = projectPropTypes

export default Section
