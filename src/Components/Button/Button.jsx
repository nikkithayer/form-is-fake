import './Button.css'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

function Button ({link, linkText, buttonFunction}) {

  const scrollToSignup = () => {
    document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' })
  }

  if (buttonFunction === 'route') {
    return <Link className="btn" to="/about">{linkText}</Link>
  }
  else if (buttonFunction === 'scroll') {
    return <button className="btn" type="button" onClick={scrollToSignup}>{linkText}</button>
  }
  else return (
    <a className="btn" href={link} target="_blank" rel="noopener noreferrer">{linkText}</a>
  );
}

Button.propTypes = {
  link: PropTypes.string,
  linkText: PropTypes.string.isRequired,
  buttonFunction: PropTypes.oneOf(['route', 'scroll']),
}

export default Button;
