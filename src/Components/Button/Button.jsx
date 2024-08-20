import './Button.css'
import { useNavigate } from 'react-router-dom';
function Button ({buttonInfo}) {

  const navigate = useNavigate()

  const openInNewTab = (url) => {
    console.log(link)
    window.open(link);
  };

  const scrollTo = (e) => {
    e.preventDefault
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
  }

const aboutRedirect = (e) => {
  e.preventDefault
  console.log('triggering')
  return navigate('/about');
}

    const { link, linkText, buttonFunction } = buttonInfo;

    if (buttonFunction === 'route') {
      return (
      <button onClick={aboutRedirect}>{linkText}</button>
    )
    }
    else if (buttonFunction === 'scroll') {
      return (
      <button onClick={scrollTo}>{linkText}</button>
    )
    }
    else return (
      <button onClick={() => openInNewTab({link})}>{linkText}</button>
    );
}

export default Button;