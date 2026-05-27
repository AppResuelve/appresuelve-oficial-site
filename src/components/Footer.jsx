import { Link } from 'react-router-dom'
import { company } from '../data/productos'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h3>AppResuelve</h3>
          <p>{company.tagline}</p>
          <p className="footer-description">{company.description}</p>
        </div>

        <div className="footer-links">
          <h4>Navegación</h4>
          <Link to="/">Inicio</Link>
          <Link to="/productos">Productos</Link>
          <Link to="/contacto">Contacto</Link>
        </div>

        <div className="footer-contact">
          <h4>Contacto</h4>
          <p>{company.email}</p>
          <p>{company.phone}</p>
          <p>{company.location}</p>
        </div>

        <div className="footer-social">
          <h4>Seguinos</h4>
          <div className="social-links">
            <a href={company.social.instagram} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a href={company.social.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href={company.social.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} {company.name}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}

export default Footer
