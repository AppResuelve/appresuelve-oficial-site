import { useParams, Link } from 'react-router-dom'
import { products } from '../data/productos'

function ProductoDetalle() {
  const { id } = useParams()
  const product = products.find((p) => p.id === id)

  if (!product) {
    return (
      <div className="min-h-screen pt-24 px-4 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-[--color-text-primary] mb-6">
          Producto no encontrado
        </h1>
        <Link
          to="/productos"
          className="px-6 py-3 bg-[--color-primary] hover:bg-[--color-primary-hover] text-white font-semibold rounded-lg transition-colors"
        >
          Volver a Productos
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <Link
          to="/productos"
          className="inline-flex items-center text-[--color-text-secondary] hover:text-[--color-text-primary] mb-6 transition-colors"
        >
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Volver a Productos
        </Link>
        <h1 className="text-4xl font-bold text-[--color-text-primary] mb-2">{product.name}</h1>
        <p className="text-lg text-[--color-text-secondary]">{product.subtitle}</p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div
            className="rounded-xl overflow-hidden border-4"
            style={{ borderColor: product.color }}
          >
            <img src={product.image} alt={product.name} className="w-full aspect-video object-cover" />
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="text-xl font-bold text-[--color-text-primary] mb-4">Descripción</h2>
            <p className="text-[--color-text-secondary] leading-relaxed mb-8">
              {product.fullDescription}
            </p>

            <h3 className="text-lg font-semibold text-[--color-text-primary] mb-4">Tecnologías</h3>
            <div className="flex flex-wrap gap-2">
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-[--color-bg-section] text-[--color-text-secondary] text-sm rounded-full border border-[--color-border]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-[--color-bg-card] rounded-xl p-8 border border-[--color-border] mb-16">
          <h2 className="text-2xl font-bold text-[--color-text-primary] mb-6">
            Características Principales
          </h2>
          <ul className="space-y-4">
            {product.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-[--color-text-secondary]"
              >
                <span className="text-[--color-primary] font-bold">✓</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-[--color-primary]/20 to-[--color-accent]/20 rounded-xl p-8 lg:p-12 border border-[--color-border]">
          <h2 className="text-2xl font-bold text-[--color-text-primary] mb-4">
            ¿Te interesó {product.name}?
          </h2>
          <p className="text-[--color-text-secondary] mb-6">
            Hablemos sobre cómo podemos ayudarte
          </p>
          <Link
            to="/contacto"
            className="inline-block px-8 py-4 bg-[--color-text-primary] text-[--color-bg-base] font-bold rounded-lg hover:opacity-90 transition-opacity"
          >
            Contactanos
          </Link>
        </div>
      </section>
    </div>
  )
}

export default ProductoDetalle