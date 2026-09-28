import Button from '../Button/Button'
import './Section.css'
import PropTypes from 'prop-types'

function Section({ProjectInfo}) {
  const {title, description, image, link, linkText, buttonFunction} = ProjectInfo

  function Content (currentContent) {
    return currentContent.map((paragraph) => <p>{paragraph}</p>);
  }

  return (
    <>
      <div className="section">
        <div className="holder container">
        {image && <img src={image} />}
        <div className="content">
            <h1>{title}</h1>
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
    link: PropTypes.string,
    linkText: PropTypes.string,
    buttonFunction: PropTypes.oneOf(['route', 'scroll']),
  }).isRequired,
}

export default Section