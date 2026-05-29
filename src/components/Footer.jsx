import { Link } from 'react-router-dom'
import { company } from '../data/productos'

function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[--color-border] bg-[--color-bg-section]">
      {/* background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-[-120px] bottom-[-120px] w-[320px] h-[320px] rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute right-[-120px] top-[-120px] w-[320px] h-[320px] rounded-full bg-blue-600/10 blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage:
              'linear-gradient(to right, var(--color-border) 1px, transparent 1px), linear-gradient(to bottom, var(--color-border) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* top section */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-14">
          {/* brand */}
          <div>
            <Link to="/" className="inline-flex items-center gap-4 group">
              <img
                src="/logo-appresuelve.png"
                alt="AppResuelve"
                className="h-14 w-auto object-contain"
              />

              <div>
                <h3 className="text-2xl font-black tracking-tight text-[--color-text-primary]">
                  {company.name}
                </h3>

                <p className="text-sm text-[--color-text-secondary] mt-1">
                  Presencia digital rápida y moderna
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-md text-[--color-text-secondary] leading-relaxed">
              Ayudamos negocios reales a verse profesionales en internet mediante sitios web
              rápidos, modernos y listos para convertir visitas en clientes.
            </p>

            {/* mini badges */}
            <div className="flex flex-wrap gap-3 mt-8">
              {['Entrega rápida', 'Diseño responsive', 'WhatsApp integrado'].map((item) => (
                <div
                  key={item}
                  className="px-4 py-2 rounded-full border border-[--color-border] bg-[--color-bg-card]/60 backdrop-blur-xl text-sm text-[--color-text-secondary]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* navigation */}
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-500 mb-6">
              Navegación
            </p>

            <div className="flex flex-col gap-4">
              <Link
                to="/"
                className="text-[--color-text-secondary] hover:text-[--color-text-primary] transition-colors"
              >
                Inicio
              </Link>

              <Link
                to="/productos"
                className="text-[--color-text-secondary] hover:text-[--color-text-primary] transition-colors"
              >
                Productos
              </Link>

              <Link
                to="/contacto"
                className="text-[--color-text-secondary] hover:text-[--color-text-primary] transition-colors"
              >
                Contacto
              </Link>
            </div>
          </div>

          {/* contact */}
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-500 mb-6">
              Contacto
            </p>

            <div className="flex flex-col gap-5">
              <div>
                <p className="text-xs uppercase tracking-wide text-[--color-text-muted] mb-1">
                  Email
                </p>

                <a
                  href={`mailto:${company.email}`}
                  className="text-[--color-text-secondary] hover:text-[--color-text-primary] transition-colors"
                >
                  {company.email}
                </a>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wide text-[--color-text-muted] mb-1">
                  Teléfono
                </p>

                <a
                  href={`tel:${company.phone}`}
                  className="text-[--color-text-secondary] hover:text-[--color-text-primary] transition-colors"
                >
                  {company.phone}
                </a>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wide text-[--color-text-muted] mb-1">
                  Ubicación
                </p>

                <p className="text-[--color-text-secondary]">{company.location}</p>
              </div>
            </div>
          </div>

          {/* cta */}
          <div>
            <div className="relative rounded-[2rem] overflow-hidden p-[1px] shadow-[0_20px_60px_rgba(59,130,246,0.2)]">
              <div className="absolute  inset-0 bg-gradient-to-br from-cyan-400/20 via-transparent to-blue-600/20" />

              <div className="rounded-[2rem] bg-[--color-bg-card] p-8">
                <div className="absolute top-0 left-0 w-20 h-20 rounded-2xl text-5xl opacity-60">
                  🚀
                </div>
                <div className="absolute bottom-10 right-3 w-20 h-20 rounded-2xl text-6xl">🚀</div>

                <h4 className="mt-6 text-2xl font-black text-[--color-text-primary] leading-tight">
                  ¿Tu negocio todavía no tiene web?
                </h4>

                <p className="mt-4 text-[--color-text-secondary] leading-relaxed">
                  Podemos dejarlo online esta misma semana.
                </p>

                <Link
                  to="/contacto"
                  className="mt-8 inline-flex w-full items-center justify-center px-6 py-4 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-600 text-[--color-text-primary] font-semibold outline-4 outline-cyan-300/60 shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_8px_20px_rgba(59,130,246,0.35)] hover:-translate-y-0.5 transition-all duration-200"
                >
                  Empezar ahora
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[--color-border] to-transparent my-14" />

        {/* bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-[--color-text-muted] text-center md:text-left">
            © {new Date().getFullYear()} {company.name}. Todos los derechos reservados.
          </p>

          <div className="flex items-center gap-6">
            <a
              href={company.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[--color-text-secondary] hover:text-cyan-500 transition-colors"
            >
              Instagram
            </a>

            <a
              href={company.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[--color-text-secondary] hover:text-cyan-500 transition-colors"
            >
              LinkedIn
            </a>

            <a
              href={company.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[--color-text-secondary] hover:text-cyan-500 transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
