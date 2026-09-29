import Button from '../Button/Button'
import Paragraphs from '../Paragraphs/Paragraphs'
import Marquee from '../Marquee/Marquee'
import { projectPropTypes } from '../../content/propTypes'
import AngledSection from '../AngledSection/AngledSection'
import './Section.css'
import './sections.css'

// One project section. The `layout` from home.js arranges the art
// and text; the `section--{id}` class lets sections.css give each section its own
// artwork, colors, and motion. Sections without an image are always text-only.
function Section ({id, title, subtitle, body, image, imageAlt, photos, cta, marquee, layout = 'art-left'}) {
  const arrangement = image ? layout : 'text-only'

  return (
    <AngledSection id={id} className={`section section--${id}`}>
      <div className={`section-inner section-inner--${arrangement} container`}>
        {image && (
          <div className="section-art">
            <img src={image} alt={imageAlt} />
          </div>
        )}
        <div className="section-text">
          <h3 className="title">{title}</h3>
          {subtitle && <p className="subtitle">{subtitle}</p>}
          <Paragraphs body={body} />
          {cta && <Button {...cta} />}
        </div>
      </div>
      {photos?.length > 0 && (
        <ul className="section-photos container">
          {photos.map((photo) => (
            <li key={photo.src}><img src={photo.src} alt={photo.alt} /></li>
          ))}
        </ul>
      )}
      {marquee && <Marquee {...marquee} />}
    </AngledSection>
  )
}

Section.propTypes = projectPropTypes

export default Section
