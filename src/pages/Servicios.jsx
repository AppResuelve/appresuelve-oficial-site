import { Link } from 'react-router-dom'

const services = [
  {
    id: 'web',
    badge: 'Pago único o mensual',
    title: 'Sitio Web',
    subtitle: 'Más completo y escalable',
    description:
      'Sitios web más avanzados para negocios que necesitan varias páginas, administración de contenido o funcionalidades específicas.',
    gradient: 'from-cyan-400 to-blue-600',
    features: [
      'Multipágina',
      'Panel o backend opcional',
      'Base de datos',
      'Integraciones',
      'Escalable',
      'Mantenimiento opcional',
    ],
    plans: [
      {
        name: 'Pago Único',
        price: 'Desde $280.000',
        description: 'Desarrollo completo con entrega final y propiedad total del sitio.',
      },
      {
        name: 'Suscripción',
        price: '$60.000/mes',
        description: 'Incluye hosting, mantenimiento y mejoras continuas.',
      },
    ],
  },
  {
    id: 'landing',
    badge: 'Pago único',
    title: 'Landing Page',
    subtitle: 'Ideal para empezar rápido',
    description:
      'Una página enfocada en mostrar tu negocio, generar confianza y convertir visitas en contactos o clientes.',
    gradient: 'from-cyan-400 to-blue-600',
    features: [
      'Diseño moderno y responsive',
      'Botón directo a WhatsApp',
      'Optimizada para celulares',
      'Formulario de contacto',
      'Entrega rápida',
      'Hosting opcional',
    ],
    plans: [
      {
        name: 'Landing Básica',
        price: '$120.000',
        description: 'Perfecta para negocios que necesitan presencia online simple y profesional.',
      },
      {
        name: 'Landing Plus',
        price: '$180.000',
        description: 'Incluye más secciones, animaciones y enfoque en conversión.',
      },
    ],
  },
]

function Servicios() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute bottom-[-120px] right-[-120px] w-[320px] h-[320px] rounded-full bg-blue-600/10 blur-3xl" />
      </div>

      {/* HERO */}
      <section className="relative max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95] text-[--color-text-primary]">
            Sitios y páginas web
            <span className="block bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 bg-clip-text text-transparent">
              rápidos y profesionales
            </span>
          </h1>

          <p className="mt-8 text-xl leading-relaxed text-[--color-text-secondary] max-w-3xl">
            Diseñamos sitios web pensados para negocios reales. Desde una landing simple hasta
            plataformas más completas.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative max-w-7xl mx-auto mt-24 space-y-12">
        {services.map((service) => (
          <div
            key={service.id}
            className={`group relative overflow-hidden rounded-[2.5rem] border border-[--color-border] bg-[--color-bg-card]/80 backdrop-blur-xl ${
              service.id === 'web' ? 'outline-4 outline-cyan-300/60' : ''
            }`}
          >
            {service.id === 'web' && (
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-transparent to-blue-600/20" />
            )}

            <div className="relative grid lg:grid-cols-[1.1fr_0.9fr]">
              {/* LEFT */}
              <div className="p-4 md:p-10 lg:p-14">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
                  <h2 className="order-2 md:order-1 text-4xl md:text-5xl font-black tracking-tight text-[--color-text-primary] leading-tight">
                    {service.title}
                  </h2>
                  <div className="order-1 md:order-2 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[--color-border] bg-[--color-bg-section]/70 text-sm text-[--color-text-secondary]">
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                    {service.badge}
                  </div>
                </div>

                <p className="mt-3 text-xl text-[--color-text-secondary]">{service.subtitle}</p>

                <p className="mt-8 text-lg leading-relaxed text-[--color-text-secondary] max-w-2xl">
                  {service.description}
                </p>

                {/* features */}
                <div className="grid sm:grid-cols-2 gap-4 mt-10">
                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 rounded-2xl border border-[--color-border] bg-[--color-bg-section]/50 p-4"
                    >
                      <div
                        className={`w-8 h-8 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-[--color-text-primary] text-sm font-bold`}
                      >
                        ✓
                      </div>

                      <p className="text-sm text-[--color-text-secondary]">{feature}</p>
                    </div>
                  ))}
                </div>

                {/* buttons */}
                <div className="flex flex-col sm:flex-row gap-3 mt-8">
                  <Link
                    to="/contacto"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-4 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-600 text-[--color-text-primary] font-semibold outline-4 outline-cyan-300/60 shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_10px_30px_rgba(59,130,246,0.35)] hover:-translate-y-0.5 transition-all duration-200"
                  >
                    Consultar
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </Link>

                  <button className="w-full sm:w-auto px-7 py-4 rounded-2xl border border-[--color-border] bg-[--color-bg-section]/60 text-[--color-text-primary] font-semibold hover:border-cyan-500/40 transition-all">
                    Ver ejemplos
                  </button>
                </div>
              </div>

              {/* RIGHT / plans */}
              <div className="relative border-t lg:border-t-0 lg:border-l border-[--color-border] bg-[--color-bg-section]/30">
                <div className="p-4 md:p-8 lg:p-12 h-full flex flex-col justify-center">
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-cyan-500 font-bold">
                      Planes
                    </p>

                    <h3 className="mt-4 text-3xl font-black text-[--color-text-primary]">
                      Opciones disponibles
                    </h3>
                  </div>

                  <div className="space-y-5 mt-10">
                    {service.plans.map((plan) => (
                      <div
                        key={plan.name}
                        className=" rounded-[2rem] border border-[--color-border] bg-[--color-bg-card]/70 backdrop-blur-xl p-4 sm:p-5"
                      >
                        <div className="flex flex-col items-start justify-between gap-4">
                          <div>
                            <h4 className="text-xl font-bold text-[--color-text-primary]">
                              {plan.name}
                            </h4>

                            <p className="mt-3 text-[--color-text-secondary] leading-relaxed">
                              {plan.description}
                            </p>
                          </div>

                          <div className="self-end shrink-0 px-4 py-2 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-600 text-[--color-text-primary] font-bold outline-4 outline-cyan-300/60 shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_8px_20px_rgba(59,130,246,0.25)]">
                            {plan.price}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* note */}
                  <div className="mt-8 rounded-2xl border border-dashed border-[--color-border] p-5">
                    <p className="text-sm leading-relaxed text-[--color-text-secondary]">
                      Los precios pueden variar según funcionalidades, integraciones o complejidad
                      del proyecto.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto mt-24">
        <div className="relative overflow-hidden rounded-[3rem] border border-[--color-border]">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-transparent to-blue-600/20" />

          <div className="relative px-8 py-16 sm:px-14 sm:py-20 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[--color-border] bg-[--color-bg-card]/60 backdrop-blur-xl text-sm text-[--color-text-secondary] mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Presupuestos rápidos
            </div>

            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-[--color-text-primary] leading-tight text-center">
              ¿Querés dejar tu negocio online esta semana?
            </h2>

            <p className="mt-6 text-lg sm:text-xl text-[--color-text-secondary] leading-relaxed text-center">
              Escribinos y te mostramos qué opción se adapta mejor a tu negocio.
            </p>

            <Link
              to="/contacto"
              className="inline-flex items-center gap-3 mt-10 px-8 py-5 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-600 text-[--color-text-primary] font-semibold outline-4 outline-cyan-300/60 shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_10px_30px_rgba(59,130,246,0.35)] hover:-translate-y-0.5 transition-all duration-200"
            >
              Hablar ahora
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

export default Servicios
