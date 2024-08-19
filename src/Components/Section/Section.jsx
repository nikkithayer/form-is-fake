import Button from '../Button/Button'
import './Section.css'

function Section({ProjectInfo}) {
  const {title, description, image, link, linkText} = ProjectInfo
  const buttonInfo = {link, linkText}
  
  function Content (currentContent) {
    return currentContent.map((paragraph) => <p>{paragraph}</p>);
  }

  return (
    <>
      <div className="section">
        <div className="holder">
        {image && <img src={image} />}
        <div className="content">
            <h1>{title}</h1>
            {Content(description)}
            <Button buttonInfo={buttonInfo} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Section