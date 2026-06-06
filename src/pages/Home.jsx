import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { products } from '../data/productos'
import HomeDemoCarousel, { examples } from '../components/HomeDemoCarousel'

const DEMO_CYCLE_MS = 6000

function Home() {
  const [demoIdx, setDemoIdx] = useState(0)
  const timerRef = useRef(null)

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setDemoIdx((prev) => (prev + 1) % examples.length)
    }, DEMO_CYCLE_MS)
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [])

  return (
    <div className="min-h-screen ">
      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-28 px-4 sm:px-6 lg:px-8">
        {/* Background atmosphere */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-180px] left-[-100px] w-[500px] h-[500px] rounded-full blur-[120px] opacity-15 bg-cyan-400" />
          <div className="absolute top-[40%] right-[-150px] w-[450px] h-[450px] rounded-full blur-[120px] opacity-10 bg-blue-500" />
          <div className="absolute bottom-0 left-[30%] w-[300px] h-[300px] rounded-full blur-[80px] opacity-8 bg-sky-300" />

          {/* Subtle dot grid */}
          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                'radial-gradient(circle, var(--color-text-muted) 1px, transparent 1px)',
              backgroundSize: '28px 28px',
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT ─ copy */}
          <div>
            <h1 className="text-5xl sm:text-6xl lg:text-[4.5rem] font-black leading-[0.92] tracking-tight text-[--color-text-primary]">
              Tu negocio{' '}
              <span key={demoIdx + '-prefix'} className="whitespace-nowrap animate-fade-up">
                {examples[demoIdx].prefixSpan}
              </span>
              <span
                key={demoIdx + '-span1'}
                className={`block mt-1 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent whitespace-nowrap animate-fade-up ${demoIdx === 2 ? 'max-[390px]:text-4xl' : ''}`}
              >
                {examples[demoIdx].span1}
              </span>
              <span
                key={demoIdx + '-span2'}
                className="block mt-1 whitespace-nowrap animate-fade-up-delayed"
              >
                {examples[demoIdx].span2}
              </span>
            </h1>

            <p className="hidden md:block mt-8 text-lg sm:text-xl leading-relaxed text-[--color-text-secondary] max-w-lg">
              Creamos espacios digitales que acompañan tu negocio/marca fisica, mejoramos tu
              visibilidad y como entienden tus clientes lo que ofreces al mercado.
            </p>

            {/* CTAs — desktop */}
            <div className="mt-10 hidden lg:flex flex-wrap gap-4">
              <Link
                to="/contacto"
                className="group relative inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-600 text-[--color-text-primary] font-semibold  outline-4 outline-cyan-300/60  shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_10px_25px_rgba(6,182,212,0.35)] hover:-translate-y-0.5 transition-all duration-200"
              >
                Quiero mi web
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>

              <Link
                to="/servicios#ejemplos"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl border border-[--color-border] bg-[--color-bg-card]/80 hover:bg-[--color-bg-elevated] hover:border-[--color-border-hover] backdrop-blur-xl text-[--color-text-primary] font-semibold hover:-translate-y-0.5 transition-all duration-200"
              >
                Ver ejemplos
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 mt-14">
              {examples[demoIdx].stats.map((stat) => (
                <div
                  key={stat.value}
                  className="rounded-2xl border border-[--color-border] bg-[--color-bg-card]/70 backdrop-blur-xl p-4 md:p-5 hover:border-cyan-500/30 hover:bg-[--color-bg-elevated] transition-all duration-200"
                >
                  <p className="text-3xl font-black text-[--color-text-primary] tracking-tight">
                    {stat.value}
                  </p>
                  <p className="mt-1.5 text-xs font-medium text-[--color-text-muted] uppercase tracking-wide min-h-8">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT ─ demo carousel */}
          <div className="relative w-full h-[420px] lg:h-[700px]">
            <HomeDemoCarousel slides={examples} activeIndex={demoIdx} />
          </div>

          {/* CTAs — mobile */}
          <div className="mt-10 flex flex-col lg:hidden gap-3">
            <Link
              to="/contacto"
              className="w-full justify-center group relative inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-600 text-[--color-text-primary] font-semibold  outline-4 outline-cyan-300/60  shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_10px_25px_rgba(6,182,212,0.35)] hover:-translate-y-0.5 transition-all duration-200"
            >
              Quiero mi web
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>

            <Link
              to="/servicios#ejemplos"
              className="w-full justify-center inline-flex items-center gap-2 px-7 py-4 rounded-2xl border border-[--color-border] bg-[--color-bg-card]/80 hover:bg-[--color-bg-elevated] hover:border-[--color-border-hover] backdrop-blur-xl text-[--color-text-primary] font-semibold hover:-translate-y-0.5 transition-all duration-200"
            >
              Ver ejemplos
            </Link>
          </div>
        </div>
      </section>

      {/* ─── BENEFITS ─────────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[--color-bg-section] border-y border-[--color-border]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <p className="text-xs font-bold tracking-[0.15em] uppercase text-cyan-500 mb-4">
              Solución simple
            </p>
            <h2 className="text-4xl sm:text-5xl font-black leading-[1.05] text-[--color-text-primary]">
              Todo lo que tu negocio necesita para verse profesional
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-16">
            {[
              {
                icon: '🌎',
                title: 'Presencia online',
                desc: 'Tu negocio visible en Google y accesible 24/7 desde cualquier dispositivo.',
              },
              {
                icon: '💬',
                title: 'WhatsApp integrado',
                desc: 'Clientes contactándote directamente desde tu web con un solo clic.',
              },
              {
                icon: '⚡',
                title: 'Carga rápida',
                desc: 'Sitios optimizados para máxima velocidad y mejor posición en Google.',
              },
              {
                icon: '📱',
                title: 'Diseño responsive',
                desc: 'Perfecta en celulares, tablets y PC. Sin importar el dispositivo.',
              },
            ].map((item, i) => (
              <div
                key={item.title}
                className="group relative rounded-3xl border border-[--color-border] bg-[--color-bg-card] p-7 hover:-translate-y-1.5 hover:border-cyan-500/30 hover:shadow-[0_20px_40px_rgba(6,182,212,0.08)] transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400/10 to-blue-600/10 border border-[--color-border] flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-[--color-text-primary] mb-2">{item.title}</h3>
                <p className="text-sm text-[--color-text-secondary] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─────────────────────────────────────────── */}
      <section className="py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-bold tracking-[0.15em] uppercase text-cyan-500 mb-4">
            Servicios
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-[--color-text-primary] leading-tight">
            Soluciones pensadas para negocios reales
          </h2>
          <p className="mt-5 text-[--color-text-secondary] text-lg max-w-2xl">
            Desde páginas simples hasta catálogos con pedidos por WhatsApp.
          </p>

          <div className="grid lg:grid-cols-3 gap-6 mt-16">
            {/* Card 1: Landing Page */}
            <div className="group rounded-[2rem] border border-[--color-border] bg-[--color-bg-card] p-8 hover:border-cyan-500/30 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(6,182,212,0.08)] transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400/10 to-blue-600/10 border border-[--color-border] flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                🎯
              </div>
              <p className="text-xs font-bold uppercase tracking-wide text-cyan-500 mb-3">
                Objetivo: convertir rápido
              </p>
              <h3 className="text-2xl font-black text-[--color-text-primary] mb-4">Landing Page</h3>
              <p className="text-[--color-text-secondary] leading-relaxed mb-8">
                Ideal para mostrar tu negocio, servicios y contacto en una sola página profesional.
              </p>
              <ul className="space-y-2 mb-8">
                {['WhatsApp', 'Maps', 'Responsive', 'Redes'].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-[--color-text-secondary]"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/servicios#sitio-web"
                className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-500 hover:text-cyan-400 transition-colors"
              >
                Ver servicio
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
            </div>

            {/* Card 2: Catálogo WhatsApp - Destacada */}
            <div className="relative rounded-[2rem] p-[1.5px] bg-gradient-to-br from-cyan-400 via-sky-400 to-blue-600 shadow-[0_24px_80px_rgba(6,182,212,0.25)] lg:row-span-1">
              <div className="h-full rounded-[calc(2rem-1.5px)] bg-[--color-bg-card] p-8 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-blue-600/20 flex items-center justify-center text-2xl">
                    🛒
                  </div>
                  <span className="px-3 py-1 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-600/20 border border-cyan-400/30 text-[--color-bg-base] text-xs font-bold">
                    Más pedido
                  </span>
                </div>
                <p className="text-xs font-bold uppercase tracking-wide text-[--color-bg-base] mb-3">
                  Objetivo: vender mucho más
                </p>
                <h3 className="text-2xl font-black text-[--color-text-primary] mb-4">
                  Catálogo con pedidos WhatsApp
                </h3>
                <p className="text-[--color-text-secondary] leading-relaxed mb-6 flex-1">
                  Mostrá productos y recibí pedidos sin necesidad de ecommerce complejo.
                </p>
                <div className="p-4 rounded-2xl bg-[--color-bg-base]/10 border border-[--color-bg-base]/20 mb-6">
                  <p className="text-sm font-bold text-[--color-bg-base]">Vende mucho más</p>
                  <p className="text-xs text-[--color-text-secondary] mt-1">
                    El cliente entiende: vendo, recibo pedidos, más simple.
                  </p>
                </div>
                <Link
                  to="/servicios#sitio-web"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 text-[--color-text-primary] font-semibold text-sm outline-4 outline-cyan-300/60 shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_8px_20px_rgba(6,182,212,0.3)] hover:-translate-y-0.5 transition-all duration-200"
                >
                  Ver servicio
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Card 3: Sitio Web Completo */}
            <div className="group rounded-[2rem] border border-[--color-border] bg-[--color-bg-card] p-8 hover:border-cyan-500/30 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(6,182,212,0.08)] transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400/10 to-blue-600/10 border border-[--color-border] flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                🌐
              </div>
              <p className="text-xs font-bold uppercase tracking-wide text-cyan-500 mb-3">
                Objetivo: más presencia
              </p>
              <h3 className="text-2xl font-black text-[--color-text-primary] mb-4">
                Sitio Web Completo
              </h3>
              <p className="text-[--color-text-secondary] leading-relaxed mb-8">
                Multipágina, secciones personalizadas y más presencia online para tu marca.
              </p>
              <ul className="space-y-2 mb-8">
                {['Multipágina', 'Secciones custom', 'Más presencia'].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-[--color-text-secondary]"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/servicios#sitio-web"
                className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-500 hover:text-cyan-400 transition-colors"
              >
                Ver servicio
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PRODUCTS ─────────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[--color-bg-section] border-y border-[--color-border]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <p className="text-xs font-bold tracking-[0.15em] uppercase text-cyan-500 mb-4">
                Productos Propios
              </p>
              <h2 className="text-4xl font-black text-[--color-text-primary]">
                Soluciones creadas por AppResuelve
              </h2>
            </div>
            {/* <Link
              to="/productos"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[--color-text-secondary] hover:text-[--color-text-primary] transition-colors"
            >
              Ver todos
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </Link> */}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="group rounded-[1.75rem] overflow-hidden border border-[--color-border] bg-[--color-bg-card] hover:-translate-y-1.5 hover:border-cyan-500/20 hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden bg-[--color-bg-section]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-7">
                  <h3 className="text-xl font-bold text-[--color-text-primary] mb-1.5">
                    {product.name}
                  </h3>
                  <p className="text-sm text-[--color-text-secondary] mb-6">{product.subtitle}</p>

                  <Link
                    to="/productos"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-500 hover:text-cyan-400 transition-colors"
                  >
                    Ver más
                    <svg
                      className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA FINAL ────────────────────────────────────────── */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/8 via-transparent to-blue-600/8" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-cyan-400/10 to-blue-600/10 blur-[80px] rounded-full" />
        </div>

        {/* Decorative circles - inner hard rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-[--color-border] opacity-30 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-[--color-border] opacity-20 pointer-events-none" />

        {/* Outer hard rings - getting closer together as they go outward */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-[--color-border] opacity-15 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[720px] rounded-full border border-[--color-border] opacity-12 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[735px] h-[735px] rounded-full border border-[--color-border] opacity-10 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[745px] h-[745px] rounded-full border border-[--color-border] opacity-8 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[752px] h-[752px] rounded-full border border-[--color-border] opacity-6 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[758px] h-[758px] rounded-full border border-[--color-border] opacity-5 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[763px] h-[763px] rounded-full border border-[--color-border] opacity-4 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[767px] h-[767px] rounded-full border border-[--color-border] opacity-3 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[770px] h-[770px] rounded-full border border-[--color-border] opacity-2 pointer-events-none" />

        {/* Gradient blobs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] rounded-full bg-gradient-to-r from-cyan-400/5 to-blue-600/5 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] rounded-full bg-gradient-to-r from-cyan-400/8 to-blue-600/8 pointer-events-none" />
        <div className="absolute top-[15%] left-[10%] w-[120px] h-[120px] rounded-full bg-cyan-400/10 blur-3xl pointer-events-none" />
        <div className="absolute top-[20%] right-[12%] w-[100px] h-[100px] rounded-full bg-blue-500/12 blur-3xl pointer-events-none" />
        <div className="absolute bottom-[18%] left-[15%] w-[90px] h-[90px] rounded-full bg-cyan-400/15 blur-3xl pointer-events-none" />
        <div className="absolute bottom-[12%] right-[8%] w-[130px] h-[130px] rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />
        <div className="absolute top-[30%] left-[5%] w-[60px] h-[60px] rounded-full bg-cyan-400/8 blur-2xl pointer-events-none" />
        <div className="absolute top-[35%] right-[5%] w-[70px] h-[70px] rounded-full bg-blue-500/10 blur-2xl pointer-events-none" />
        <div className="absolute bottom-[30%] left-[8%] w-[55px] h-[55px] rounded-full bg-cyan-400/12 blur-2xl pointer-events-none" />
        <div className="absolute bottom-[25%] right-[15%] w-[65px] h-[65px] rounded-full bg-blue-600/8 blur-2xl pointer-events-none" />
        <div className="absolute top-[8%] left-[35%] w-[80px] h-[80px] rounded-full bg-cyan-400/6 blur-3xl pointer-events-none" />
        <div className="absolute bottom-[8%] right-[30%] w-[75px] h-[75px] rounded-full bg-blue-600/7 blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-[3%] -translate-y-1/2 w-[50px] h-[50px] rounded-full bg-cyan-400/10 blur-2xl pointer-events-none" />
        <div className="absolute top-1/2 right-[3%] -translate-y-1/2 w-[45px] h-[45px] rounded-full bg-blue-500/12 blur-2xl pointer-events-none" />
        <div className="absolute top-[45%] left-[5%] w-[35px] h-[35px] rounded-full bg-cyan-400/8 blur-xl pointer-events-none" />
        <div className="absolute top-[55%] right-[8%] w-[40px] h-[40px] rounded-full bg-blue-600/10 blur-xl pointer-events-none" />

        <div className="relative max-w-3xl mx-auto text-center">
          <p className="text-xs font-bold tracking-[0.15em] uppercase text-cyan-500 mb-6">
            Empezá hoy
          </p>
          <h2 className="text-5xl sm:text-6xl font-black text-[--color-text-primary] leading-[1.0] tracking-tight text-center">
            Tu negocio puede verse mucho más profesional{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              esta semana
            </span>
          </h2>

          <p className="mt-7 text-xl text-[--color-text-secondary] leading-relaxed text-center">
            Te ayudamos a tener una presencia online moderna, rápida y lista para convertir visitas
            en clientes.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-12">
            <Link
              to="/contacto"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-600 text-[--color-text-primary] font-semibold text-lg outline-4 outline-cyan-300/60 shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_12px_40px_rgba(6,182,212,0.35)] hover:-translate-y-0.5 transition-all duration-200"
            >
              Hablar ahora
              <svg
                className="w-5 h-5 transition-transform group-hover:translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>

            <Link
              to="/servicios#ejemplos"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl border border-[--color-border] bg-[--color-bg-card]/70 hover:bg-[--color-bg-elevated] hover:border-[--color-border-hover] backdrop-blur-xl font-semibold text-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              Ver trabajos
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
