import './Header.css'
import { Link } from 'react-router-dom';
import SiteLink from '../SiteLink/SiteLink'
import TVStatic from '../TVStatic/TVStatic'
import { tagline } from '../../content/home'

const navLinks = [
  { label: 'Now Playing', href: '#now-playing' },
  { label: 'Projects', href: '#projects' },
  // Stands in for "About", with its own tilted label look.
  { ...tagline, className: 'header-tagline' },
  { label: 'Newsletter', href: '#signup' },
]

function Header () {

  return (
    <header className='header'>
      <TVStatic />
      <Link to="/"><img src="/formisfakelogo.png" alt="Form is Fake home" /></Link>
      <nav aria-label="Main">
        <ul className="header-nav">
          {navLinks.map((link) => (
            <li key={link.href}><SiteLink className={link.className} href={link.href}>{link.label}</SiteLink></li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
