import { Link } from 'react-router-dom'
import { products } from '../data/productos'
import './Productos.css'

function Productos() {
  return (
    <div className="productos-page">
      <section className="page-header">
        <div className="header-content">
          <h1>Nuestros Productos</h1>
          <p>Soluciones digitales diseñadas para resolver necesidades reales</p>
        </div>
      </section>

      <section className="products-list">
        <div className="products-container">
          {products.map((product, index) => (
            <div key={product.id} className="product-item">
              <div className="product-number">{String(index + 1).padStart(2, '0')}</div>
              <div className="product-info">
                <h2>{product.name}</h2>
                <p className="product-subtitle">{product.subtitle}</p>
                <p className="product-description">{product.description}</p>
                <div className="product-tags">
                  {product.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="product-visual">
                <img
                  src={product.image}
                  alt={product.name}
                  style={{ borderColor: product.color }}
                />
              </div>
              <Link to={`/productos/${product.id}`} className="product-action">
                Ver Detalle
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="custom-solution">
        <div className="solution-content">
          <h2>¿Necesitás algo personalizado?</h2>
          <p>Desarrollamos soluciones a medida para tu negocio o proyecto.</p>
          <Link to="/contacto" className="btn btn-primary">
            Hablemos
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Productos
