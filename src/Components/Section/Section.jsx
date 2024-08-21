import Button from '../Button/Button'
import './Section.css'

function Section({ProjectInfo}) {
  const {title, description, image, link, linkText, buttonFunction} = ProjectInfo
  var buttonInfo = {link, linkText}
  link && (buttonInfo.link = link)
  linkText && (buttonInfo.linkText = linkText)
  buttonFunction && (buttonInfo.buttonFunction = buttonFunction)
  

  
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
            {linkText && <Button buttonInfo={buttonInfo} />}
          </div>
        </div>
      </div>
    </>
  )
}

export default Section