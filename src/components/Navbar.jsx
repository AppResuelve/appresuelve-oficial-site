import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { company } from '../data/productos'
import './Navbar.css'

function Navbar() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  const isActive = (path) => (location.pathname === path ? 'active' : '')

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-text">{company.name}</span>
        </Link>

        <button
          className={`menu-toggle ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <Link to="/" className={isActive('/')} onClick={() => setMenuOpen(false)}>
            Inicio
          </Link>
          <Link
            to="/productos"
            className={isActive('/productos')}
            onClick={() => setMenuOpen(false)}
          >
            Productos
          </Link>
          <Link to="/contacto" className={isActive('/contacto')} onClick={() => setMenuOpen(false)}>
            Contacto
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
