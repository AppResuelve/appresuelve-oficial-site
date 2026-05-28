import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { company } from '../data/productos'
import { ThemeToggle } from './ThemeToggle'

function Navbar() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const isActive = (path) =>
    location.pathname === path
      ? 'bg-gradient-to-r from-cyan-400/15 to-blue-600/15 text-[--color-text-primary]'
      : 'text-[--color-text-secondary]'

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'border-b border-[--color-border] bg-[--color-bg-base]/75 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-20 flex items-center justify-between">
            {/* LOGO */}
            <Link to="/" className="group flex items-center gap-4">
              <img
                src="/logo-appresuelve.png"
                alt="AppResuelve"
                className="h-10 w-auto object-contain"
              />

              <div className="hidden sm:block">
                <p className="text-lg font-black tracking-tight text-[--color-text-primary]">
                  {company.name}
                </p>

                <p className="text-xs text-[--color-text-secondary]">Presencia digital rápida</p>
              </div>
            </Link>

            {/* DESKTOP */}
            <div className="hidden md:flex items-center gap-3">
              <div className="flex items-center gap-1 rounded-2xl border border-[--color-border] bg-[--color-bg-card]/70 backdrop-blur-xl px-2 py-2">
                <Link
                  to="/"
                  className={`p-2 rounded-xl transition-all hover:bg-[--color-bg-elevated] ${isActive('/')}`}
                  aria-label="Inicio"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </Link>

                <Link
                  to="/servicios"
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all hover:bg-[--color-bg-elevated] ${isActive(
                    '/servicios'
                  )}`}
                >
                  Servicios
                </Link>

                <Link
                  to="/productos"
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all hover:bg-[--color-bg-elevated] ${isActive(
                    '/productos'
                  )}`}
                >
                  Productos
                </Link>

                <Link
                  to="/contacto"
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all hover:bg-[--color-bg-elevated] ${isActive(
                    '/contacto'
                  )}`}
                >
                  Contacto
                </Link>
              </div>

              <ThemeToggle />

              <Link
                to="/contacto"
                className="ml-2 inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-600 text-[--color-text-primary] font-semibold outline-4 outline-cyan-300/60 shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_8px_20px_rgba(59,130,246,0.35)] hover:-translate-y-0.5 transition-all duration-200"
              >
                Empezar
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
            </div>

            {/* MOBILE BTN */}
            <div className="md:hidden flex items-center gap-3">
              <Link
                to="/servicios"
                className="px-4 py-2 rounded-xl text-sm font-semibold text-[--color-text-secondary] hover:text-[--color-text-primary] transition-colors"
              >
                Servicios
              </Link>

              <button
                className="relative w-11 h-11 rounded-2xl border border-[--color-border] bg-[--color-bg-card]/70 backdrop-blur-xl flex items-center justify-center text-[--color-text-primary]"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Abrir menú"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-[60] md:hidden transition-all duration-300 ${
          menuOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        {/* overlay */}
        <div
          className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
            menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setMenuOpen(false)}
        />

        {/* panel */}
        <div
          className={`absolute top-0 right-0 h-full w-[85%] max-w-sm bg-[--color-bg-card]/95 backdrop-blur-2xl border-l border-[--color-border] flex flex-col transition-transform duration-300 ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between p-6">
            <div>
              <p className="text-xl font-black text-[--color-text-primary]">{company.name}</p>

              <p className="text-sm text-[--color-text-secondary] mt-1">
                Presencia digital moderna
              </p>
            </div>

            <button
              onClick={() => setMenuOpen(false)}
              className="w-10 h-10 rounded-xl border border-[--color-border] flex items-center justify-center"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 flex flex-col gap-2">
            <Link
              to="/"
              className={`px-5 py-4 rounded-2xl text-base font-semibold transition-all ${
                location.pathname === '/'
                  ? 'bg-gradient-to-r from-cyan-400/15 to-blue-600/15 text-[--color-text-primary]'
                  : 'text-[--color-text-secondary]'
              }`}
            >
              Inicio
            </Link>

            <Link
              to="/servicios"
              className={`px-5 py-4 rounded-2xl text-base font-semibold transition-all ${
                location.pathname === '/servicios'
                  ? 'bg-gradient-to-r from-cyan-400/15 to-blue-600/15 text-[--color-text-primary]'
                  : 'text-[--color-text-secondary]'
              }`}
            >
              Servicios
            </Link>

            <Link
              to="/productos"
              className={`px-5 py-4 rounded-2xl text-base font-semibold transition-all ${
                location.pathname === '/productos'
                  ? 'bg-gradient-to-r from-cyan-400/15 to-blue-600/15 text-[--color-text-primary]'
                  : 'text-[--color-text-secondary]'
              }`}
            >
              Productos
            </Link>

            <Link
              to="/contacto"
              className={`px-5 py-4 rounded-2xl text-base font-semibold transition-all ${
                location.pathname === '/contacto'
                  ? 'bg-gradient-to-r from-cyan-400/15 to-blue-600/15 text-[--color-text-primary]'
                  : 'text-[--color-text-secondary]'
              }`}
            >
              Contacto
            </Link>

            <ThemeToggle mobile />
          </div>

          {/* CTA */}
          <div className="px-6 py-6">
            <div className="rounded-[2rem] p-[1px] bg-gradient-to-br from-cyan-400 to-blue-600">
              <div className="rounded-[2rem] bg-[--color-bg-card] p-6">
                <p className="text-lg font-bold text-[--color-text-primary]">¿Necesitás una web?</p>

                <p className="mt-2 text-sm leading-relaxed text-[--color-text-secondary]">
                  Creamos páginas profesionales para negocios reales.
                </p>

                <Link
                  to="/contacto"
                  className="mt-5 inline-flex w-full items-center justify-center px-5 py-4 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-600 text-[--color-text-primary] font-semibold outline-4 outline-cyan-300/60 shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_8px_20px_rgba(59,130,246,0.35)] hover:-translate-y-0.5 transition-all duration-200"
                >
                  Hablar ahora
                </Link>
              </div>
            </div>
          </div>

          {/* footer */}
          <div className="shrink-0 px-6 py-4 border-t border-[--color-border]">
            <p className="text-xs text-center text-[--color-text-muted]">
              © {new Date().getFullYear()} {company.name}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
