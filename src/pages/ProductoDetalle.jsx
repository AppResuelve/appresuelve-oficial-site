import { useParams, Link } from 'react-router-dom'
import { products } from '../data/productos'
import './ProductoDetalle.css'

function ProductoDetalle() {
  const { id } = useParams()
  const product = products.find((p) => p.id === id)

  if (!product) {
    return (
      <div className="not-found">
        <h1>Producto no encontrado</h1>
        <Link to="/productos" className="btn btn-primary">
          Volver a Productos
        </Link>
      </div>
    )
  }

  return (
    <div className="producto-detalle">
      <section className="detalle-header">
        <div className="detalle-container">
          <Link to="/productos" className="back-link">
            ← Volver a Productos
          </Link>
          <h1>{product.name}</h1>
          <p className="detalle-subtitle">{product.subtitle}</p>
        </div>
      </section>

      <section className="detalle-content">
        <div className="detalle-container">
          <div className="detalle-main">
            <div className="detalle-image">
              <img src={product.image} alt={product.name} style={{ borderColor: product.color }} />
            </div>

            <div className="detalle-description">
              <h2>Descripción</h2>
              <p>{product.fullDescription}</p>

              <div className="detalle-tags">
                <h3>Tecnologías</h3>
                <div className="tags-list">
                  {product.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="detalle-features">
            <h2>Características Principales</h2>
            <ul className="features-list">
              {product.features.map((feature, index) => (
                <li key={index}>
                  <span className="feature-check">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="detalle-cta">
        <div className="cta-container">
          <h2>¿Te interesó {product.name}?</h2>
          <p>Hablemos sobre cómo podemos ayudarte</p>
          <Link to="/contacto" className="btn btn-primary btn-large">
            Contactanos
          </Link>
        </div>
      </section>
    </div>
  )
}

export default ProductoDetalle
