import './Button.css'

function Button ({buttonInfo}) {
    const { link, linkText } = buttonInfo;

    return (
      <button href={link}>{linkText}</button>
    );
}

export default Button;