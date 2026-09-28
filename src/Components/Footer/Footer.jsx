import SiteLink from '../SiteLink/SiteLink'
import { instagram } from '../../content/home'
import './Footer.css'

function Footer () {
  return (
    <footer className="footer">
      <div className="container">
        <p>Follow along on Instagram: <SiteLink href={instagram.href}>{instagram.handle}</SiteLink></p>
        <p className="footer-small">© {new Date().getFullYear()} Form is Fake</p>
      </div>
    </footer>
  )
}

export default Footer
