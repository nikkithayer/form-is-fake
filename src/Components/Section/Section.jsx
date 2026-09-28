import Button from '../Button/Button'
import './Section.css'
import PropTypes from 'prop-types'

function Section({ProjectInfo}) {
  const {title, description, image, imageAlt, link, linkText, buttonFunction} = ProjectInfo

  function Content (currentContent) {
    return currentContent.map((paragraph, i) => <p key={i}>{paragraph}</p>);
  }

  return (
    <>
      <div className="section">
        <div className="holder container">
        {image && <img src={image} alt={imageAlt} />}
        <div className="content">
            <h2 className="title">{title}</h2>
            {Content(description)}
            {linkText && <Button link={link} linkText={linkText} buttonFunction={buttonFunction} />}
          </div>
        </div>
      </div>
    </>
  )
}

Section.propTypes = {
  ProjectInfo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.arrayOf(PropTypes.string).isRequired,
    image: PropTypes.string,
    imageAlt: PropTypes.string,
    link: PropTypes.string,
    linkText: PropTypes.string,
    buttonFunction: PropTypes.oneOf(['route', 'scroll']),
  }).isRequired,
}

export default Section