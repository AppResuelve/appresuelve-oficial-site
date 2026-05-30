import { Link } from 'react-router-dom'
import { products } from '../data/productos'

function Productos() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* HERO */}
      <section className="relative max-w-7xl mx-auto">
        {/* background */}
        <div className="absolute inset-0  pointer-events-none">
          <div className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute right-[-120px] bottom-[-120px] w-[320px] h-[320px] rounded-full bg-blue-600/10 blur-3xl" />
        </div>

        <div className="relative max-w-4xl">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95] text-[--color-text-primary]">
            Productos propios
            <span className="block bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 bg-clip-text text-transparent">
              sello de AppResuelve
            </span>
          </h1>

          <p className="mt-8 text-xl leading-relaxed text-[--color-text-secondary] max-w-3xl">
            Area de AppResuelve que se dedica a crear herramientas y plataformas completas para
            resolver problemas especificos de cada sector de la industria.
          </p>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="max-w-7xl mx-auto mt-24 space-y-10">
        {products.map((product) => (
          <div
            key={product.id}
            className="group relative rounded-[2.5rem] border border-[--color-border] bg-[--color-bg-card]/80 backdrop-blur-xl"
          >
            <div className="relative grid lg:grid-cols-2 p-2">
              {/* content */}
              <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
                <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[--color-text-primary] leading-tight flex items-center gap-3">
                  {product.logo && (
                    <img src={product.logo} alt="" className="w-10 h-10 object-contain" />
                  )}
                  {product.name}
                </h2>

                <p className="mt-3 text-lg text-[--color-text-secondary]">{product.subtitle}</p>

                <p className="mt-8 text-[--color-text-secondary] leading-relaxed text-base sm:text-lg">
                  {product.description}
                </p>

                {/* tags */}
                <div className="flex flex-wrap gap-3 mt-10">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 rounded-full border border-[--color-border] bg-[--color-bg-section]/70 text-sm text-[--color-text-secondary] backdrop-blur-xl"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* mini stats */}
                <div className="grid grid-cols-2 gap-4 mt-10">
                  <div className="rounded-2xl border border-[--color-border] bg-[--color-bg-section]/50 p-5">
                    <p className="text-sm text-[--color-text-muted]">Tipo</p>

                    <p className="mt-2 font-bold text-[--color-text-primary]">{product.type}</p>
                  </div>

                  <div className="rounded-2xl border border-[--color-border] bg-[--color-bg-section]/50 p-5">
                    <p className="text-sm text-[--color-text-muted]">Estado</p>

                    <p className="mt-2 font-bold text-emerald-500">{product.state}</p>
                  </div>
                </div>
              </div>

              {/* image */}
              <div className="relative min-h-[320px] lg:min-h-full rounded-4xl overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover rounded-4xl transition-transform duration-700"
                />

                {product.id === 'flavourlab' && (
                  <a
                    href="https://flavourlab.pro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-4 right-4 z-20 flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-black/30 backdrop-blur-xl text-white text-sm hover:bg-black/50 transition-colors"
                  >
                    Visitar
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto mt-24">
        <div className="relative rounded-[3rem] overflow-hidden border border-[--color-border]">
          {/* bg */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-transparent to-blue-600/20" />

          <div className="absolute top-[-100px] right-[-100px] w-[260px] h-[260px] rounded-full bg-blue-600/20 blur-3xl" />
          <div className="absolute bottom-[-100px] left-[-100px] w-[260px] h-[260px] rounded-full bg-cyan-400/20 blur-3xl" />

          <div className="relative px-8 py-16 sm:px-14 sm:py-20 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[--color-border] bg-[--color-bg-card]/60 backdrop-blur-xl text-sm text-[--color-text-secondary] mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Soluciones a medida
            </div>

            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-[--color-text-primary] leading-tight text-center">
              ¿Tenés una idea o problema específico?
            </h2>

            <p className="mt-6 text-lg sm:text-xl text-[--color-text-secondary] leading-relaxed text-center">
              También desarrollamos soluciones personalizadas para automatizar procesos, mejorar
              flujos de trabajo y digitalizar negocios.
            </p>

            <Link
              to="/contacto"
              className="inline-flex items-center gap-3 mt-10 px-8 py-5 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-600 text-[--color-text-primary] font-semibold outline-4 outline-cyan-300/60 shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_10px_30px_rgba(59,130,246,0.35)] hover:-translate-y-0.5 transition-all duration-200"
            >
              Hablemos
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Productos
