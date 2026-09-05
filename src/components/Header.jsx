import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { X, Plus } from 'lucide-react'
import './Header.css'

const navItems = [
  { label: '首页', path: '/home' },
  { label: '关于我', path: '/about' },
  { label: '生活', path: '/life' },
  { label: '作品', path: '/works' },
  { label: '联系我', path: '/contact' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const currentIndex = navItems.findIndex(n => location.pathname.startsWith(n.path))
  const pageNum = currentIndex >= 0 ? String(currentIndex + 1).padStart(2, '0') : '01'

  return (
    <>
      <header className="site-header">
        <div className="header-logo">
          <NavLink to="/home" className="logo-text">LAMB</NavLink>
          <span className="header-subtitle">STUDIO ARCHIVE</span>
        </div>

        {/* Desktop Nav */}
        <nav className="header-nav" aria-label="主导航">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `nav-link ${isActive ? 'nav-link--active' : ''}`}
            >
              <span className="nav-link-inner">
                <span className="nav-link-text">{item.label}</span>
                <span className="nav-link-red">{item.label}</span>
              </span>
            </NavLink>
          ))}
        </nav>

        {/* Page Index + Menu Button */}
        <div className="header-right">
          <span className="page-index text-red label-index">{pageNum} / 05</span>
          <button
            className="menu-btn"
            onClick={() => setMenuOpen(true)}
            aria-label="打开菜单"
          >
            <Plus size={20} strokeWidth={2.5} />
            <span className="label-index">MENU</span>
          </button>
        </div>
      </header>

      {/* Mobile Full-Screen Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <button
            className="mobile-menu-close"
            onClick={() => setMenuOpen(false)}
            aria-label="关闭菜单"
          >
            <X size={28} strokeWidth={2.5} />
          </button>
          <nav className="mobile-menu-nav">
            {navItems.map((item, i) => (
              <NavLink
                key={item.path}
                to={item.path}
                className="mobile-nav-link"
                onClick={() => setMenuOpen(false)}
              >
                <span className="mobile-nav-index text-red">{String(i + 1).padStart(2, '0')}.</span>
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="mobile-menu-footer caption-micro">
            © 2026 LAMB — STUDIO SIGNAL
          </div>
        </div>
      )}
    </>
  )
}
