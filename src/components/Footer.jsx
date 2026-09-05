import { NavLink } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="site-footer">
      <span className="footer-copy caption-micro">© 2026 LAMB</span>
      <NavLink to="/home" className="footer-index caption-micro">
        TERMINAL [BOOT] &nbsp;&nbsp; STUDIO INDEX
      </NavLink>
    </footer>
  )
}
