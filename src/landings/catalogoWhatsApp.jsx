import { useState, useEffect, useRef } from 'react'

// ─── DATOS DEL CARRUSEL ────────────────────────────────────────────────────────
const slides = [
  {
    label: 'Vista del cliente en el catálogo',
    content: 'catalog',
  },
  {
    label: 'Panel de administración',
    content: 'admin',
  },
  {
    label: 'Pedido llegando a tu WhatsApp',
    content: 'whatsapp',
  },
]

const SLIDE_MS = 4000
const WSP_NUMBER = '543834971799'
const WSP_MSG = encodeURIComponent('Hola! Me interesa el plan de Catálogo con WhatsApp 🛒')
const WSP_URL = `https://wa.me/${WSP_NUMBER}?text=${WSP_MSG}`

// ─── ÍCONOS ───────────────────────────────────────────────────────────────────
function IconArrow({ className = 'w-4 h-4' }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  )
}

function IconCheck() {
  return (
    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  )
}

function IconWhatsApp({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

function IconShop({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 9l1.5-4.5A1.5 1.5 0 016 3h12a1.5 1.5 0 011.5 1.5L21 9M3 9v10.5A1.5 1.5 0 004.5 21h15a1.5 1.5 0 001.5-1.5V9M3 9h18M9 21V9" />
    </svg>
  )
}

// ─── SLIDES DEL PHONE MOCKUP ──────────────────────────────────────────────────

function SlideCatalog() {
  return (
    <div className="flex flex-col animate-fade-up">
      {/* Header tienda */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-700 p-4">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-xl">
            🛍️
          </div>
          <div>
            <p className="text-white font-bold text-sm leading-tight">Despensa Don Roberto</p>
            <p className="text-white/70 text-xs">⭐ Pedidos por WhatsApp</p>
          </div>
        </div>
        <div className="bg-white/15 rounded-lg px-3 py-2 text-white/70 text-xs flex items-center gap-2">
          🔍 Buscar productos...
        </div>
      </div>

      {/* Grilla de productos */}
      <div className="grid grid-cols-2 gap-2 p-3 bg-white flex-1">
        {[
          { emoji: '🍞', bg: 'bg-yellow-50', name: 'Pan lactal', price: '$950', offer: false },
          { emoji: '🥛', bg: 'bg-green-50', name: 'Leche entera', price: '$1.200', offer: false },
          { emoji: '🍅', bg: 'bg-red-50', name: 'Tomate x kg', price: '$700 🔥', offer: true },
          { emoji: '🧃', bg: 'bg-sky-50', name: 'Jugo Tang x3', price: '$1.500', offer: false },
        ].map((p) => (
          <div key={p.name} className="rounded-xl overflow-hidden border border-slate-100">
            <div className={`h-16 ${p.bg} flex items-center justify-center text-3xl`}>
              {p.emoji}
            </div>
            <div className="p-2">
              <p className="text-xs font-semibold text-slate-800 leading-tight">{p.name}</p>
              <p
                className={`text-xs font-bold mt-0.5 ${p.offer ? 'text-green-600' : 'text-cyan-600'}`}
              >
                {p.price}
              </p>
              <button className="w-full mt-1.5 py-1 rounded-md bg-cyan-600 text-white text-[10px] font-bold">
                + Agregar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function SlideAdmin() {
  return (
    <div className="flex flex-col animate-fade-up bg-slate-50 flex-1">
      {/* Barra de admin */}
      <div className="bg-slate-800 px-4 py-3 flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
        <span className="ml-2 text-slate-400 text-xs font-medium">⚙️ Panel de administración</span>
      </div>

      {/* Cuerpo */}
      <div className="p-4 flex flex-col gap-3">
        <span className="inline-block px-2 py-0.5 rounded-full bg-green-100 text-green-700 text-[10px] font-bold">
          ✅ Producto guardado
        </span>

        <div>
          <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400 mb-1">
            Nombre
          </p>
          <div className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-700 font-medium">
            Aceite girasol 900ml
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div>
            <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400 mb-1">
              Precio
            </p>
            <div className="bg-white border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-700 font-medium">
              $2.100
            </div>
          </div>
          <div>
            <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400 mb-1">
              Oferta
            </p>
            <div className="bg-white border border-slate-200 rounded-lg px-3 py-2 text-xs text-green-600 font-bold">
              $1.800 🔥
            </div>
          </div>
        </div>

        <div>
          <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400 mb-1">
            Categoría
          </p>
          <div className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-700 font-medium">
            Almacén
          </div>
        </div>

        <button className="w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-bold mt-1 shadow-[0_4px_14px_rgba(6,182,212,0.35)]">
          Guardar cambios
        </button>
      </div>
    </div>
  )
}

function SlideWhatsApp() {
  return (
    <div className="flex flex-col animate-fade-up">
      {/* Header WhatsApp */}
      <div className="bg-[#075e54] px-4 py-3 flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-base">
          🛍️
        </div>
        <div>
          <p className="text-white font-semibold text-sm leading-tight">Despensa Don Roberto</p>
          <p className="text-white/70 text-[10px]">en línea</p>
        </div>
      </div>

      {/* Chat */}
      <div className="flex-1 bg-[#ece5dd] p-3 flex flex-col gap-2.5 min-h-[300px]">
        {/* Mensaje entrante — saludo */}
        <div className="bg-white rounded-[0_12px_12px_12px] px-3 py-2 max-w-[85%] shadow-sm">
          <p className="text-xs text-slate-800 leading-relaxed">¡Hola! Quiero hacer un pedido 👋</p>
          <p className="text-[9px] text-slate-400 text-right mt-1">10:32</p>
        </div>

        {/* Mensaje entrante — pedido */}
        <div className="bg-white rounded-[0_12px_12px_12px] px-3 py-2 max-w-[90%] shadow-sm">
          <p className="text-xs text-slate-800 leading-relaxed">
            🛒 <span className="font-bold">Mi pedido:</span>
            <br />
            • Pan lactal x2 — $1.900
            <br />
            • Leche entera x3 — $3.600
            <br />
            • Tomate x1kg — $700
            <br />
            <br />
            <span className="font-bold">Total: $6.200</span>
          </p>
          <p className="text-[9px] text-slate-400 text-right mt-1">10:32</p>
        </div>

        {/* Mensaje saliente */}
        <div className="bg-[#dcf8c6] rounded-[12px_0_12px_12px] px-3 py-2 max-w-[85%] self-end shadow-sm">
          <p className="text-xs text-slate-800 leading-relaxed">
            ¡Perfecto! Ya te confirmo el horario de entrega 🚀
          </p>
          <p className="text-[9px] text-slate-400 text-right mt-1">10:34 ✓✓</p>
        </div>
      </div>
    </div>
  )
}

// ─── PHONE MOCKUP CON CARRUSEL ─────────────────────────────────────────────────
function PhoneMockup() {
  const [idx, setIdx] = useState(0)
  const timerRef = useRef(null)

  const goSlide = (n) => {
    setIdx(n)
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => setIdx((p) => (p + 1) % slides.length), SLIDE_MS)
  }

  useEffect(() => {
    timerRef.current = setInterval(() => setIdx((p) => (p + 1) % slides.length), SLIDE_MS)
    return () => clearInterval(timerRef.current)
  }, [])

  return (
    <div className="relative w-full flex flex-col items-center">
      {/* Frame del teléfono */}
      <div className="w-[270px] rounded-[36px] border-2 border-white/10 bg-[#0a0f18] shadow-[0_32px_80px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.05),inset_0_1px_0_rgba(255,255,255,0.08)] overflow-hidden">
        {/* Notch */}
        <div className="h-7 bg-[#0a0f18] flex items-center justify-center">
          <div className="w-20 h-2.5 rounded-full bg-[#1a2133]" />
        </div>

        {/* Pantalla */}
        <div className="bg-white min-h-[480px] overflow-hidden flex flex-col">
          {idx === 0 && <SlideCatalog />}
          {idx === 1 && <SlideAdmin />}
          {idx === 2 && <SlideWhatsApp />}
        </div>
      </div>

      {/* Dots */}
      <div className="flex items-center justify-center gap-2 mt-5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goSlide(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === idx ? 'w-5 bg-cyan-400' : 'w-1.5 bg-white/20'
            }`}
          />
        ))}
      </div>

      {/* Label */}
      <p key={idx} className="mt-3 text-xs text-[--color-text-muted] text-center animate-fade-up">
        {slides[idx].label}
      </p>
    </div>
  )
}

// ─── SECCIÓN FEATURES ─────────────────────────────────────────────────────────
const features = [
  {
    icon: '🛒',
    title: 'Catálogo completo',
    desc: 'Productos con fotos, precios y categorías. Tus clientes navegan y eligen como en una tienda real.',
  },
  {
    icon: '💬',
    title: 'Pedidos por WhatsApp',
    desc: 'El cliente arma el carrito y con un clic te manda el pedido completo. Sin apps ni comisiones.',
  },
  {
    icon: '⚙️',
    title: 'Panel de admin simple',
    desc: 'Cargás productos, cambiás precios y ponés ofertas vos mismo. No necesitás saber de tecnología.',
  },
  {
    icon: '📱',
    title: 'Diseño responsive',
    desc: 'Funciona perfecto en celular, tablet y PC. Tus clientes compran desde donde quieran.',
  },
]

// ─── CARD DE PRECIO ────────────────────────────────────────────────────────────
const includes = [
  'Sitio completo: home, catálogo, servicios y contacto',
  'Carrito de compras con pedido directo a WhatsApp',
  'Panel de admin para cargar y editar productos',
  'Actualizá precios y ofertas cuando quieras',
  'Diseño responsive (celular, tablet y PC)',
  'Sin comisiones por venta',
]

// ─── COMPONENTE PRINCIPAL ──────────────────────────────────────────────────────
function CatalogoWhatsApp() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-28 px-4 sm:px-6 lg:px-8">
        {/* Background atmosphere */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-180px] left-[-100px] w-[500px] h-[500px] rounded-full blur-[120px] opacity-15 bg-cyan-400" />
          <div className="absolute top-[40%] right-[-150px] w-[450px] h-[450px] rounded-full blur-[120px] opacity-10 bg-blue-500" />
          <div className="absolute bottom-0 left-[30%] w-[300px] h-[300px] rounded-full blur-[80px] opacity-[0.08] bg-sky-300" />
          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                'radial-gradient(circle, var(--color-text-muted) 1px, transparent 1px)',
              backgroundSize: '28px 28px',
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT — copy */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-400/10">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-xs font-bold tracking-widest uppercase text-cyan-400">
                Plan mensual disponible
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-[4.2rem] font-black leading-[0.95] tracking-tight text-[--color-text-primary]">
              Tu catálogo online.
              <span className="block mt-2 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                Los pedidos,
              </span>
              <span className="block mt-1">directo a tu WhatsApp.</span>
            </h1>

            <p className="mt-8 text-lg sm:text-xl leading-relaxed text-[--color-text-secondary] max-w-lg">
              Mostrá todos tus productos con fotos, precios y ofertas. Tus clientes eligen y te
              escriben solos. Sin apps complicadas, sin comisiones.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={WSP_URL}
                target="_blank"
                rel="noreferrer"
                className="group relative inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-600 text-[--color-text-primary] font-semibold shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_10px_25px_rgba(6,182,212,0.35)] hover:-translate-y-0.5 transition-all duration-200"
              >
                <IconWhatsApp className="w-5 h-5" />
                Quiero mi catálogo
                <IconArrow className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </a>

              <a
                href="#como-funciona"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl border border-[--color-border] bg-[--color-bg-card]/80 hover:bg-[--color-bg-elevated] hover:border-[--color-border-hover] backdrop-blur-xl text-[--color-text-primary] font-semibold hover:-translate-y-0.5 transition-all duration-200"
              >
                Ver cómo funciona
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 mt-14">
              {[
                { value: '$25K', label: 'por mes, sin sorpresas' },
                { value: '0%', label: 'comisión por venta' },
                { value: '24/7', label: 'tu catálogo activo' },
              ].map((s) => (
                <div
                  key={s.value}
                  className="rounded-2xl border border-[--color-border] bg-[--color-bg-card]/70 backdrop-blur-xl p-4 md:p-5 hover:border-cyan-500/30 hover:bg-[--color-bg-elevated] transition-all duration-200"
                >
                  <p className="text-3xl font-black text-[--color-text-primary] tracking-tight">
                    {s.value}
                  </p>
                  <p className="mt-1.5 text-xs font-medium text-[--color-text-muted] uppercase tracking-wide min-h-8">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — phone mockup */}
          <div className="relative w-full flex items-center justify-center lg:h-[700px]">
            <PhoneMockup />
          </div>
        </div>
      </section>

      {/* ── FEATURES ─────────────────────────────────────────── */}
      <section
        id="como-funciona"
        className="py-24 px-4 sm:px-6 lg:px-8 bg-[--color-bg-section] border-y border-[--color-border]"
      >
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xs font-bold tracking-[0.15em] uppercase text-cyan-500 mb-4">
              ¿Cómo funciona?
            </p>
            <h2 className="text-4xl sm:text-5xl font-black leading-[1.05] text-[--color-text-primary]">
              Todo lo que necesitás para vender más, sin complicarte
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-16">
            {features.map((f) => (
              <div
                key={f.title}
                className="group relative rounded-3xl border border-[--color-border] bg-[--color-bg-card] p-7 hover:-translate-y-1.5 hover:border-cyan-500/30 hover:shadow-[0_20px_40px_rgba(6,182,212,0.08)] transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400/10 to-blue-600/10 border border-[--color-border] flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {f.icon}
                </div>
                <h3 className="text-lg font-bold text-[--color-text-primary] mb-2">{f.title}</h3>
                <p className="text-sm text-[--color-text-secondary] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ──────────────────────────────────────────── */}
      <section className="py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xs font-bold tracking-[0.15em] uppercase text-cyan-500 mb-4">Precio</p>
          <h2 className="text-4xl sm:text-5xl font-black text-[--color-text-primary] leading-tight mb-16">
            Sin sorpresas.
            <br />
            Sin comisiones.
          </h2>

          {/* Icon flow: tienda → WhatsApp */}
          <div className="flex items-center justify-center gap-6 mb-6">
            <IconShop className="w-10 h-10 text-cyan-400" />
            <IconArrow className="w-8 h-8 text-cyan-400" />
            <IconWhatsApp className="w-10 h-10 text-[#25D366]" />
          </div>

          {/* Card destacada */}
          <div className="max-w-lg mx-auto relative rounded-[2rem] p-[1.5px] bg-gradient-to-br from-cyan-400 via-sky-400 to-blue-600 shadow-[0_24px_80px_rgba(6,182,212,0.25)]">
            <div className="h-full rounded-[calc(2rem-1.5px)] bg-[--color-bg-card] p-10 flex flex-col">

              <p className="text-lg font-bold uppercase tracking-wide text-[#0c2d4e] mb-2">
                Catálogo con pedidos WhatsApp
              </p>

              {/* Precio */}
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-2xl font-semibold text-[--color-text-muted]">$</span>
                <span className="text-6xl font-black text-[--color-text-primary] tracking-tight leading-none">
                  25.000
                </span>
                <span className="text-lg text-[--color-text-muted] ml-1">/ mes</span>
              </div>

              {/* Lista de incluidos */}
              <ul className="flex flex-col gap-3 mb-10">
                {includes.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-[--color-text-secondary]"
                  >
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-[#0c2d4e]/10 border border-[#0c2d4e]/30 flex items-center justify-center shrink-0 text-[#0c2d4e]">
                      <IconCheck />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={WSP_URL}
                target="_blank"
                rel="noreferrer"
                className="group w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-600 text-[--color-text-primary] font-semibold text-base shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_8px_20px_rgba(6,182,212,0.3)] hover:-translate-y-0.5 transition-all duration-200"
              >
                <IconWhatsApp className="w-5 h-5" />
                Consultar por WhatsApp
                <IconArrow className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ────────────────────────────────────────── */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background — igual al Home */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/8 via-transparent to-blue-600/8" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-cyan-400/10 to-blue-600/10 blur-[80px] rounded-full" />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-[--color-border] opacity-30 pointer-events-none" />
        <svg
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] opacity-10 pointer-events-none"
          fill="#25D366"
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>

        <div className="relative max-w-3xl mx-auto text-center">
          <p className="text-xs font-bold tracking-[0.15em] uppercase text-cyan-500 mb-6">
            Empezá esta semana
          </p>
          <h2 className="text-5xl sm:text-6xl font-black text-[--color-text-primary] leading-[1.0] tracking-tight">
            Tu negocio puede recibir pedidos por{' '}
            <span style={{ color: '#25D366', textShadow: '0 0 8px rgba(0,0,0,0.4)' }}>WhatsApp</span>{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              hoy mismo.
            </span>
          </h2>

          <p className="mt-7 text-xl text-[--color-text-secondary] leading-relaxed">
            Catálogo online, panel de admin y pedidos directos a tu WhatsApp. Todo por $25.000/mes.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-12">
            <a
              href={WSP_URL}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-600 text-[--color-text-primary] font-semibold text-lg shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_12px_40px_rgba(6,182,212,0.35)] hover:-translate-y-0.5 transition-all duration-200"
            >
              <IconWhatsApp className="w-5 h-5" />
              Hablar ahora
              <IconArrow className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
            </a>

            <a
              href="https://appresuelve.site"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl border border-[--color-border] bg-[--color-bg-card]/70 hover:bg-[--color-bg-elevated] hover:border-[--color-border-hover] backdrop-blur-xl font-semibold text-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              Ver el sitio completo
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CatalogoWhatsApp
