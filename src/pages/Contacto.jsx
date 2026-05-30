import { useState } from 'react'
import { company } from '../data/productos'

function Contacto() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    setSubmitted(true)

    console.log('Form submitted:', formData)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      {/* HERO */}
      <section className="relative max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[--color-border] bg-[--color-bg-card]/70 backdrop-blur-xl text-sm text-[--color-text-secondary] mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Respondemos rápido
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95] text-[--color-text-primary]">
            Hablemos de tu
            <span className="block bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 bg-clip-text text-transparent">
              próximo proyecto
            </span>
          </h1>

          <p className="mt-8 text-xl leading-relaxed text-[--color-text-secondary] max-w-3xl">
            Si necesitás una página web, automatizar procesos o mejorar la presencia digital de tu
            negocio, podemos ayudarte.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="relative max-w-7xl mx-auto mt-20">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-10 items-start">
          {/* LEFT */}
          <div className="space-y-8">
            {/* info card */}
            <div className="rounded-[2.5rem] border border-[--color-border] bg-[--color-bg-card]/80 backdrop-blur-xl p-8 sm:p-10">
              <h2 className="mt-8 text-3xl font-black tracking-tight text-[--color-text-primary]">
                Soluciones rápidas y modernas
              </h2>

              <p className="mt-5 text-lg leading-relaxed text-[--color-text-secondary]">
                Creamos sitios web y herramientas digitales pensadas para negocios reales. Simples,
                rápidas y enfocadas en generar resultados.
              </p>

              {/* features */}
              <div className="mt-10 space-y-5">
                {[
                  'Páginas web modernas y responsive',
                  'Integración con WhatsApp y redes',
                  'Entrega rápida',
                  'Diseño profesional para tu negocio',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-4">
                    <div className="mt-1 w-5 h-5 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-white text-xs font-bold">
                      ✓
                    </div>

                    <p className="text-[--color-text-secondary]">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* contact cards */}
            <div className="grid sm:grid-cols-2 gap-5">
              <a
                href={`mailto:${company.email}`}
                className="group rounded-[2rem] border border-[--color-border] bg-[--color-bg-card]/70 backdrop-blur-xl p-6 hover:-translate-y-1 transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-cyan-400/10 text-cyan-500 flex items-center justify-center text-2xl">
                  ✉️
                </div>

                <p className="mt-5 text-sm text-[--color-text-muted]">Email</p>

                <p className="mt-1 font-semibold text-[--color-text-primary] break-all">
                  {company.email}
                </p>
              </a>

              <a
                href={`tel:${company.phone}`}
                className="group rounded-[2rem] border border-[--color-border] bg-[--color-bg-card]/70 backdrop-blur-xl p-6 hover:-translate-y-1 transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-600/10 text-blue-500 flex items-center justify-center text-2xl">
                  📞
                </div>

                <p className="mt-5 text-sm text-[--color-text-muted]">Teléfono</p>

                <p className="mt-1 font-semibold text-[--color-text-primary]">{company.phone}</p>
              </a>
            </div>

            {/* social */}
            <div className="rounded-[2rem] border border-[--color-border] bg-[--color-bg-card]/70 backdrop-blur-xl p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-500 font-bold">Redes</p>

              <div className="flex flex-wrap gap-4 mt-6">
                <a
                  href={company.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-2xl border border-[--color-border] hover:border-cyan-500/40 text-[--color-text-secondary] hover:text-[--color-text-primary] transition-all"
                >
                  Instagram
                </a>

                <a
                  href={company.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-2xl border border-[--color-border] hover:border-cyan-500/40 text-[--color-text-secondary] hover:text-[--color-text-primary] transition-all"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-[2.5rem] blur-2xl opacity-10" />

            <div className="relative rounded-[2.5rem] border border-[--color-border] bg-[--color-bg-card]/85 backdrop-blur-2xl p-8 sm:p-10">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-white text-5xl mx-auto shadow-[0_20px_50px_rgba(59,130,246,0.35)]">
                    ✓
                  </div>

                  <h3 className="mt-8 text-4xl font-black tracking-tight text-[--color-text-primary]">
                    ¡Mensaje enviado!
                  </h3>

                  <p className="mt-5 text-lg text-[--color-text-secondary] max-w-md mx-auto leading-relaxed">
                    Gracias por escribirnos. Te responderemos lo antes posible.
                  </p>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-10 px-8 py-4 rounded-2xl border border-[--color-border] hover:border-cyan-500/40 bg-[--color-bg-section]/50 text-[--color-text-primary] font-semibold transition-all"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-10">
                    <p className="text-sm uppercase tracking-[0.2em] text-cyan-500 font-bold">
                      Contacto
                    </p>

                    <h2 className="mt-4 text-4xl font-black tracking-tight text-[--color-text-primary]">
                      Contanos tu idea
                    </h2>

                    <p className="mt-4 text-[--color-text-secondary] leading-relaxed">
                      Cuanto más detalle nos des, mejor podremos ayudarte.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-[--color-text-secondary] mb-3"
                      >
                        Nombre
                      </label>

                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Tu nombre"
                        className="w-full px-5 py-4 rounded-2xl bg-[--color-bg-section]/70 border border-[--color-border] text-[--color-text-primary] placeholder-[--color-text-muted] focus:outline-none focus:border-cyan-500/40 focus:ring-4 focus:ring-cyan-500/10 transition-all"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-[--color-text-secondary] mb-3"
                      >
                        Email
                      </label>

                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="tu@email.com"
                        className="w-full px-5 py-4 rounded-2xl bg-[--color-bg-section]/70 border border-[--color-border] text-[--color-text-primary] placeholder-[--color-text-muted] focus:outline-none focus:border-cyan-500/40 focus:ring-4 focus:ring-cyan-500/10 transition-all"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-semibold text-[--color-text-secondary] mb-3"
                      >
                        Mensaje
                      </label>

                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Contanos qué necesitás, qué problema querés resolver o cómo podemos ayudarte..."
                        rows={6}
                        className="w-full px-5 py-4 rounded-2xl bg-[--color-bg-section]/70 border border-[--color-border] text-[--color-text-primary] placeholder-[--color-text-muted] focus:outline-none focus:border-cyan-500/40 focus:ring-4 focus:ring-cyan-500/10 transition-all resize-none"
                      />

                      <p className="mt-3 text-sm text-[--color-text-muted]">
                        Respondemos normalmente dentro de las próximas horas.
                      </p>
                    </div>

                    <button
                      type="submit"
                      className="group relative w-full overflow-hidden px-8 py-3 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-600 text-[--color-text-primary] font-bold text-lg outline-4 outline-cyan-300/60 shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_10px_30px_rgba(59,130,246,0.35)] hover:-translate-y-0.5 transition-all duration-200"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-3">
                        Enviar mensaje
                        <svg
                          className="w-5 h-5 transition-transform group-hover:translate-x-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </svg>
                      </span>
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contacto
