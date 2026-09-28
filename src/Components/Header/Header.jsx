import './Header.css'
import { Link } from 'react-router-dom';

function Header () {

  return (
    <header className='header'><Link to="/"><img src="/formisfakelogo.png" alt="Form is Fake home" /></Link></header>
  );
}

export default Header;
