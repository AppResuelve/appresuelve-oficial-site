import { useState } from 'react'
import { Link } from 'react-router-dom'
import ScheduleCall from '../components/ScheduleCall'
import ServiceCarousel from '../components/ServiceCarousel'

function Servicios() {
  const [activeTab, setActiveTab] = useState('landing')

  const scrollToExamples = (tab) => {
    setActiveTab(tab)

    setTimeout(() => {
      const section = document.getElementById('ejemplos')

      if (section) {
        section.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }
    }, 50)
  }

  return (
    <div className="min-h-screen overflow-hidden">
      {/* HERO + SERVICIOS */}
      <div className="relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[80px] left-[-80px] w-[250px] h-[250px] rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute top-[200px] right-[-60px] w-[200px] h-[200px] rounded-full bg-blue-600/10 blur-3xl" />
          <div className="absolute top-[500px] left-[10%] w-[180px] h-[180px] rounded-full bg-cyan-400/8 blur-2xl" />
          <div className="absolute top-[800px] right-[15%] w-[150px] h-[150px] rounded-full bg-sky-500/8 blur-2xl" />
          <div className="absolute top-[1100px] left-[5%] w-[120px] h-[120px] rounded-full bg-blue-600/10 blur-2xl" />
          <div className="absolute top-[1400px] right-[8%] w-[140px] h-[140px] rounded-full bg-cyan-400/8 blur-2xl" />
        </div>

        {/* HERO */}
        <section className="relative pt-32 pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[--color-border] bg-[--color-bg-card]/70 backdrop-blur-xl text-sm text-[--color-text-secondary] mb-8">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              Sitios modernos para negocios reales
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95] text-[--color-text-primary]">
              Creamos páginas web
              <span className="block bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 bg-clip-text text-transparent">
                rápidas y profesionales
              </span>
            </h1>

            <p className="mt-8 text-xl leading-relaxed text-[--color-text-secondary] max-w-3xl">
              Desde landing pages simples hasta sitios completos con catálogo, carrito de pedidos y
              panel de administración.
            </p>
          </div>
        </section>

        {/* SERVICIOS */}
        <section className="relative max-w-7xl mx-auto mt-24 px-4 sm:px-6 lg:px-8 space-y-10">
          {/* LANDING */}
          <div className="rounded-[2.5rem] border border-[--color-border] bg-[--color-bg-card]/80 backdrop-blur-xl overflow-hidden">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
              {/* LEFT */}
              <div className="p-6 md:p-10 lg:p-14">
                <div className="flex flex-wrap items-center gap-3">
                  <h2 className="text-4xl md:text-5xl font-black text-[--color-text-primary]">
                    Landing Page
                  </h2>

                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[--color-border] bg-[--color-bg-section]/70 text-sm text-[--color-text-secondary]">
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                    Pago único
                  </div>
                </div>

                <p className="mt-4 text-xl text-[--color-text-secondary]">
                  Ideal para empezar rápido
                </p>

                <p className="mt-8 text-lg leading-relaxed text-[--color-text-secondary] max-w-2xl">
                  Una página moderna enfocada en mostrar tu negocio, generar confianza y convertir
                  visitas en contactos.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mt-10">
                  {[
                    'Diseño profesional',
                    'WhatsApp integrado',
                    'Optimizada para celulares',
                    'Formulario de contacto',
                    'SEO básico',
                    'Hosting y dominio inicial',
                  ].map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 rounded-2xl border border-[--color-border] bg-[--color-bg-section]/50 p-4"
                    >
                      <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-white text-sm font-bold shrink-0">
                        ✓
                      </div>

                      <p className="text-sm text-[--color-text-secondary]">{feature}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 mt-10">
                  <Link
                    to="/contacto"
                    className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-600 text-white font-semibold outline-4 outline-cyan-300/60 shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_10px_30px_rgba(59,130,246,0.35)] hover:-translate-y-0.5 transition-all"
                  >
                    Consultar
                  </Link>

                  <button
                    onClick={() => scrollToExamples('landing')}
                    className="px-7 py-4 rounded-2xl border border-[--color-border] bg-[--color-bg-section]/60 text-[--color-text-primary] font-semibold hover:border-cyan-500/40 transition-all"
                  >
                    Ver ejemplos
                  </button>
                </div>
              </div>

              {/* RIGHT */}
              <div className="border-t lg:border-t-0 lg:border-l border-[--color-border] bg-[--color-bg-section]/30">
                <div className="p-6 md:p-10 lg:p-12">
                  <p className="text-sm uppercase tracking-[0.2em] text-cyan-500 font-bold">
                    Planes
                  </p>

                  <h3 className="mt-4 text-3xl font-black text-[--color-text-primary]">
                    Opciones disponibles
                  </h3>

                  <div className="space-y-5 mt-10">
                    {[
                      {
                        name: 'Landing Starter',
                        price: '$30.000',
                        desc: 'Ideal para profesionales y pequeños negocios.',
                      },
                      {
                        name: 'Landing Negocio',
                        price: '$60.000',
                        desc: 'Más secciones, animaciones y enfoque en conversión.',
                      },
                    ].map((plan) => (
                      <div
                        key={plan.name}
                        className="rounded-[2rem] border border-[--color-border] bg-[--color-bg-card]/70 p-5"
                      >
                        <div className="flex items-start justify-between gap-5">
                          <div>
                            <h4 className="text-xl font-bold text-[--color-text-primary]">
                              {plan.name}
                            </h4>

                            <p className="mt-3 text-[--color-text-secondary] leading-relaxed">
                              {plan.desc}
                            </p>
                          </div>

                          <div className="shrink-0 rounded-xl bg-gradient-to-r from-cyan-400/15 to-blue-600/15 px-4 py-2">
                            <div className="text-sm font-bold text-[--color-text-primary]">
                              {plan.price}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SITIO WEB */}
          <div className="relative rounded-[2.5rem] border border-cyan-500/20 bg-[--color-bg-card]/80 backdrop-blur-xl overflow-hidden outline-4 outline-cyan-300/60">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-blue-600/10 pointer-events-none" />

            <div className="relative grid lg:grid-cols-[1.1fr_0.9fr]">
              {/* LEFT */}
              <div className="p-6 md:p-10 lg:p-14">
                <div className="flex flex-wrap items-center gap-3">
                  <h2 className="text-4xl md:text-5xl font-black text-[--color-text-primary]">
                    Sitio Web
                  </h2>

                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[--color-border] bg-[--color-bg-section]/70 text-sm text-[--color-text-secondary]">
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                    Pago único o mensual
                  </div>
                </div>

                <p className="mt-4 text-xl text-[--color-text-secondary]">
                  Más completo y escalable
                </p>

                <p className="mt-8 text-lg leading-relaxed text-[--color-text-secondary] max-w-2xl">
                  Sitios con múltiples páginas, catálogo, carrito de pedidos por WhatsApp y
                  posibilidad de seguir creciendo.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mt-10">
                  {[
                    'Varias páginas',
                    'Catálogo editable',
                    'Carrito por WhatsApp',
                    'Panel simple',
                    'Responsive',
                    'Escalable',
                  ].map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 rounded-2xl border border-[--color-border] bg-[--color-bg-section]/50 p-4"
                    >
                      <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-white text-sm font-bold shrink-0">
                        ✓
                      </div>

                      <p className="text-sm text-[--color-text-secondary]">{feature}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 mt-10">
                  <Link
                    to="/contacto"
                    className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-600 text-white font-semibold outline-4 outline-cyan-300/60 shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_10px_30px_rgba(59,130,246,0.35)] hover:-translate-y-0.5 transition-all"
                  >
                    Consultar
                  </Link>

                  <button
                    onClick={() => scrollToExamples('sitio')}
                    className="px-7 py-4 rounded-2xl border border-[--color-border] bg-[--color-bg-section]/60 text-[--color-text-primary] font-semibold hover:border-cyan-500/40 transition-all"
                  >
                    Ver ejemplos
                  </button>
                </div>
              </div>

              {/* RIGHT */}
              <div className="border-t lg:border-t-0 lg:border-l border-[--color-border] bg-[--color-bg-section]/30">
                <div className="p-6 md:p-10 lg:p-12">
                  <p className="text-sm uppercase tracking-[0.2em] text-cyan-500 font-bold">
                    Planes
                  </p>

                  <h3 className="mt-4 text-3xl font-black text-[--color-text-primary]">
                    Opciones disponibles
                  </h3>

                  <div className="space-y-5 mt-10">
                    {[
                      {
                        name: 'Sitio Starter',
                        price: 'Desde $100.000',
                        desc: 'Sitio completo con varias páginas y catálogo.',
                      },
                      {
                        name: 'Sitio Mensual',
                        price: '$25.000 + mensual',
                        desc: 'Incluye hosting, mantenimiento y cambios simples.',
                      },
                    ].map((plan) => (
                      <div
                        key={plan.name}
                        className="rounded-[2rem] border border-[--color-border] bg-[--color-bg-card]/70 p-5"
                      >
                        <div className="flex items-start justify-between gap-5">
                          <div>
                            <h4 className="text-xl font-bold text-[--color-text-primary]">
                              {plan.name}
                            </h4>

                            <p className="mt-3 text-[--color-text-secondary] leading-relaxed">
                              {plan.desc}
                            </p>
                          </div>

                          <div className="shrink-0 rounded-xl bg-gradient-to-r from-cyan-400/15 to-blue-600/15 px-4 py-2">
                            <div className="text-sm font-bold text-[--color-text-primary]">
                              {plan.price}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CUSTOM */}
        <section className="relative max-w-7xl mx-auto mt-16 px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2.5rem] border border-[--color-border] bg-[--color-bg-card]/80 backdrop-blur-xl overflow-hidden">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
              <div className="p-6 md:p-10 lg:p-14">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[--color-border] bg-[--color-bg-section]/70 text-sm text-[--color-text-secondary]">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  Desarrollo personalizado
                </div>

                <h2 className="mt-6 text-4xl md:text-5xl font-black text-[--color-text-primary] leading-tight">
                  ¿Necesitás algo más específico?
                </h2>

                <p className="mt-8 text-lg leading-relaxed text-[--color-text-secondary] max-w-2xl">
                  También desarrollamos soluciones personalizadas para automatizar procesos y
                  mejorar negocios.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mt-10">
                  {[
                    'Automatizaciones',
                    'Dashboards',
                    'Sistemas internos',
                    'Integraciones',
                    'APIs',
                    'Paneles personalizados',
                  ].map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 rounded-2xl border border-[--color-border] bg-[--color-bg-section]/50 p-4"
                    >
                      <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-white text-sm font-bold shrink-0">
                        ✓
                      </div>

                      <p className="text-sm text-[--color-text-secondary]">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t lg:border-t-0 lg:border-l border-[--color-border] bg-[--color-bg-section]/30">
                <div className="p-6 md:p-10 lg:p-12 h-full flex items-center">
                  <div className="w-full rounded-[2rem] border border-[--color-border] bg-[--color-bg-card]/70 p-6">
                    <h3 className="text-2xl font-black text-[--color-text-primary]">
                      Agendar llamada
                    </h3>

                    <p className="mt-4 text-[--color-text-secondary] leading-relaxed">
                      Contanos tu idea y vemos juntos la mejor forma de desarrollarla.
                    </p>

                    <div className="mt-8">
                      <ScheduleCall />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="border-t border-[--color-border] my-24" />

      {/* EJEMPLOS */}
      <section id="ejemplos" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-[0.15em] uppercase text-cyan-500 mb-4">
            Resultados
          </p>

          <h2 className="text-4xl sm:text-5xl font-black text-[--color-text-primary]">
            Ejemplos de trabajos
          </h2>

          <p className="mt-6 text-lg text-[--color-text-secondary] leading-relaxed">
            Algunos estilos y estructuras que podemos adaptar para tu negocio.
          </p>
        </div>

        {/* TABS */}
        <div className="flex justify-center mt-12">
          <div className="inline-flex p-2 rounded-2xl border border-[--color-border] bg-[--color-bg-card]/70 backdrop-blur-xl">
            <button
              onClick={() => setActiveTab('landing')}
              className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all ${
                activeTab === 'landing'
                  ? 'bg-gradient-to-r from-cyan-400/15 to-blue-600/15 text-[--color-text-primary]'
                  : 'text-[--color-text-secondary] hover:text-[--color-text-primary]'
              }`}
            >
              Landing Pages
            </button>

            <button
              onClick={() => setActiveTab('sitio')}
              className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all ${
                activeTab === 'sitio'
                  ? 'bg-gradient-to-r from-cyan-400/15 to-blue-600/15 text-[--color-text-primary]'
                  : 'text-[--color-text-secondary] hover:text-[--color-text-primary]'
              }`}
            >
              Sitios Web
            </button>
          </div>
        </div>

        <div className="mt-14">
          <ServiceCarousel type={activeTab} />
        </div>
      </section>
      {/* ─── MAINTENIMIENTO ───────────────────────────────────── */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[--color-bg-section] border-y border-[--color-border]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-80px] left-[-80px] w-[250px] h-[250px] rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute bottom-[-80px] right-[-60px] w-[200px] h-[200px] rounded-full bg-blue-600/10 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <p className="text-xs font-bold tracking-[0.15em] uppercase text-cyan-500 mb-4">
              Mantenimiento
            </p>

            <h2 className="text-4xl sm:text-5xl font-black text-[--color-text-primary] leading-tight">
              Tu sitio actualizado y funcionando sin preocuparte por nada
            </h2>

            <p className="mt-6 text-lg text-[--color-text-secondary] leading-relaxed">
              Si elegís modalidad mensual, nosotros nos encargamos del hosting, dominio,
              actualizaciones y cambios simples para que tu negocio siga online siempre.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 mt-16">
            {[
              {
                title: 'Hosting y dominio',
                desc: 'Nos encargamos de mantener tu sitio online y conectado a tu dominio.',
                icon: '🌐',
              },
              {
                title: 'Cambios simples incluidos',
                desc: 'Podés actualizar textos, precios, imágenes o datos sin complicaciones.',
                icon: '✏️',
              },
              {
                title: 'Backups automáticos',
                desc: 'Tu sitio protegido ante errores o problemas inesperados.',
                icon: '💾',
              },
              {
                title: 'Soporte rápido',
                desc: 'Contacto directo para resolver dudas o pequeños ajustes.',
                icon: '⚡',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[1.75rem] border border-[--color-border] bg-[--color-bg-card] p-7 hover:border-cyan-500/20 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400/10 to-blue-600/10 border border-[--color-border] flex items-center justify-center text-3xl mb-6">
                  {item.icon}
                </div>

                <h3 className="text-xl font-bold text-[--color-text-primary] mb-3">{item.title}</h3>

                <p className="text-[--color-text-secondary] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─────────────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs font-bold tracking-[0.15em] uppercase text-cyan-500 mb-4">
              Preguntas frecuentes
            </p>

            <h2 className="text-4xl sm:text-5xl font-black text-[--color-text-primary] leading-tight">
              Respuestas rápidas antes de empezar
            </h2>
          </div>

          <div className="space-y-5">
            {[
              {
                q: '¿Cuánto tarda en estar lista mi web?',
                a: 'La mayoría de los sitios simples se entregan entre 48hs y 72hs una vez recibido el contenido.',
              },
              {
                q: '¿Necesito tener dominio o hosting?',
                a: 'No. Podemos encargarnos de todo para que no tengas que configurar nada.',
              },
              {
                q: '¿Puedo pedir cambios después?',
                a: 'Sí. En modalidad mensual los cambios simples están incluidos.',
              },
              {
                q: '¿La web funciona en celulares?',
                a: 'Sí. Todos los sitios están optimizados para celulares, tablets y computadoras.',
              },
              {
                q: '¿Se puede conectar con WhatsApp?',
                a: 'Sí. Todos los planes incluyen integración directa con WhatsApp.',
              },
              {
                q: '¿Qué necesitás para empezar?',
                a: 'Solo información básica del negocio, imágenes y el contenido que quieras mostrar.',
              },
            ].map((item) => (
              <div
                key={item.q}
                className="rounded-[1.5rem] border border-[--color-border] bg-[--color-bg-card] p-7 hover:border-cyan-500/20 transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-[--color-text-primary] mb-3">{item.q}</h3>

                <p className="text-[--color-text-secondary] leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="max-w-7xl mx-auto mt-0 md:mb-10 px-0 lg:px-8">
        <div className="relative overflow-hidden rounded-none sm:rounded-[3rem] border border-b-0 lg:border-b border-[--color-border]">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-transparent to-blue-600/20" />

          <div className="relative px-0 py-12 lg:px-14 lg:py-20 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[--color-border] bg-[--color-bg-card]/60 backdrop-blur-xl text-sm text-[--color-text-secondary] mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Presupuestos rápidos
            </div>

            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-[--color-text-primary] leading-tight">
              ¿Querés llevar tu negocio al mundo digital?
            </h2>

            <p className="mt-6 text-lg sm:text-xl text-[--color-text-secondary] leading-relaxed max-w-2xl mx-auto">
              Te ayudamos a crear una presencia online moderna, rápida y lista para generar
              clientes.
            </p>

            <Link
              to="/contacto"
              className="inline-flex items-center gap-3 mt-10 px-8 py-5 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-600 text-white font-semibold outline-4 outline-cyan-300/60 shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_10px_30px_rgba(59,130,246,0.35)] hover:-translate-y-0.5 transition-all duration-200"
            >
              Hablar ahora
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Servicios
