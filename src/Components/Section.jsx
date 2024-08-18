
function Section({ProjectInfo}) {
  const {title, description, image, link, linkText} = ProjectInfo

  return (
    <>
      <div className="section">
        <div className="holder">
          <div className="content">
            <h1>{title}</h1>
            <p>{description}</p>
            <a className="button" href={link}>{linkText}</a>
          </div>
          {image && <img src={image} />}
        </div>
      </div>
    </>
  )
}

export default Section