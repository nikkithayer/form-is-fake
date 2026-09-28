import Button from '../Button/Button'
import Paragraphs from '../Paragraphs/Paragraphs'
import { projectPropTypes } from '../../content/propTypes'

function Column ({title, subtitle, body, image, imageAlt, cta}) {
  return (
    <div className="column">
      {image && <img src={image} alt={imageAlt} />}
      <h3 className="title">{title}</h3>
      {subtitle && <p className="subtitle year">{subtitle}</p>}
      <Paragraphs body={body} />
      {cta && <Button {...cta} />}
    </div>
  );
}

Column.propTypes = projectPropTypes

export default Column;
