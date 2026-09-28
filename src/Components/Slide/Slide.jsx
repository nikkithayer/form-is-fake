import Button from '../Button/Button'
import Paragraphs from '../Paragraphs/Paragraphs'
import { projectPropTypes } from '../../content/propTypes'
import './Slide.css'
import './slides.css'

// One full-height project slide. The `layout` from home.js arranges the art
// and text; the `slide--{id}` class lets slides.css give each slide its own
// artwork, colors, and motion. Slides without an image are always text-only.
function Slide ({id, title, subtitle, body, image, imageAlt, photos, cta, layout = 'art-left'}) {
  const arrangement = image ? layout : 'text-only'

  return (
    <section id={id} className={`slide slide--${id}`}>
      <div className={`slide-inner slide-inner--${arrangement} container`}>
        {image && (
          <div className="slide-art">
            <img src={image} alt={imageAlt} />
          </div>
        )}
        <div className="slide-text">
          <h3 className="title">{title}</h3>
          {subtitle && <p className="subtitle">{subtitle}</p>}
          <Paragraphs body={body} />
          {cta && <Button {...cta} />}
        </div>
      </div>
      {photos?.length > 0 && (
        <ul className="slide-photos container">
          {photos.map((photo) => (
            <li key={photo.src}><img src={photo.src} alt={photo.alt} /></li>
          ))}
        </ul>
      )}
    </section>
  )
}

Slide.propTypes = projectPropTypes

export default Slide
