import { Link } from 'react-router-dom'
import { products, company } from '../data/productos'
import './Home.css'

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            {company.name}
            <span className="hero-tagline">{company.tagline}</span>
          </h1>
          <p className="hero-description">{company.description}</p>
          <div className="hero-buttons">
            <Link to="/productos" className="btn btn-primary">
              Ver Productos
            </Link>
            <Link to="/contacto" className="btn btn-outline">
              Contactanos
            </Link>
          </div>
        </div>
        <div className="hero-visual">
          <div className="code-block">
            <div className="code-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <pre className="code-content">
              <code>{`const solution = {
  ideas: transformToCode(yourIdeas),
  web: buildWith(react, vite),
  mobile: createNative(),
  // ¡Listo!
};`}</code>
            </pre>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="features-container">
          <h2 className="section-title">¿Por qué elegirnos?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Solutions Personalizadas</h3>
              <p>Cada proyecto es único. Desarrollamos a medida para vos y tu negocio.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Tecnología Moderna</h3>
              <p>Usamos las últimas tecnologías para máximo rendimiento y escalabilidad.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>Entrega Rápida</h3>
              <p>Metodologías ágiles para que tu proyecto esté online pronto.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="products-preview">
        <div className="products-container">
          <h2 className="section-title">Nuestros Productos</h2>
          <div className="products-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image" style={{ borderColor: product.color }}>
                  <img src={product.image} alt={product.name} />
                </div>
                <h3>{product.name}</h3>
                <p>{product.subtitle}</p>
                <Link to={`/productos/${product.id}`} className="product-link">
                  Ver más →
                </Link>
              </div>
            ))}
          </div>
          <div className="products-cta">
            <Link to="/productos" className="btn btn-primary">
              Ver todos los productos
            </Link>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="cta-container">
          <h2>¿Tenés una idea?</h2>
          <p>Conversemos sobre tu próximo proyecto digital</p>
          <Link to="/contacto" className="btn btn-primary btn-large">
            Contactanos
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
