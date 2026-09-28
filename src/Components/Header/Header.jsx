import './Header.css'
import { Link } from 'react-router-dom';
import SiteLink from '../SiteLink/SiteLink'

const navLinks = [
  { label: 'Now Playing', href: '#now-playing' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Newsletter', href: '#signup' },
]

function Header () {

  return (
    <header className='header'>
      <Link to="/"><img src="/formisfakelogo.png" alt="Form is Fake home" /></Link>
      <nav aria-label="Main">
        <ul className="header-nav">
          {navLinks.map((link) => (
            <li key={link.href}><SiteLink href={link.href}>{link.label}</SiteLink></li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
