import './Header.css'
import { Link } from 'react-router-dom';

function Header () {

  return (
    <div className='header'><Link to="/"><img src="../public/formisfakelogo.png" alt="" /></Link></div>
  );
}

export default Header;