import { useState, useEffect, useRef } from 'react'
import { ArrowRight, Check, Store, ShoppingCart, Settings, Smartphone } from 'lucide-react'

// ─── ALIAS DE ÍCONOS LUCIDE ──────────────────────────────────────────────────────
const IconArrow = ArrowRight
const IconCheck = Check
const IconShop = Store
const IconCart = ShoppingCart
const IconGear = Settings
const IconPhone = Smartphone

// ─── VIDEO MOCKUP ─────────────────────────────────────────────────────────────
const MOCKUP_VIDEO =
  'https://res.cloudinary.com/dfun5vbsf/video/upload/v1781891644/para_landing_page_de_cart_whatsapp_obnmcs.mp4'

const SLIDE_TEXTS = [
  'Vista del cliente en el catálogo',
  'Pedido llegando a tu WhatsApp',
  'Panel de administración',
]
const WSP_NUMBER = '543834971799'
const WSP_MSG = encodeURIComponent('Hola! Me interesa el plan de Catálogo con WhatsApp 🛒')
const WSP_URL = `https://wa.me/${WSP_NUMBER}?text=${WSP_MSG}`

// ─── ÍCONOS ───────────────────────────────────────────────────────────────────
function IconWhatsApp({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

// ─── PHONE MOCKUP CON VIDEO ───────────────────────────────────────────────────
function PhoneMockup() {
  const [slideIdx, setSlideIdx] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIdx((prev) => (prev + 1) % SLIDE_TEXTS.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative w-full flex flex-col items-center">
      <video
        src={MOCKUP_VIDEO}
        className="w-full max-w-[320px] bg-black rounded-[60px]  pr-2.5 pb-3 shadow-[30px_40px_50px_-10px_rgba(0,0,0,0.8)]"
        autoPlay
        loop
        playsInline
        muted
      />
      <p
        key={slideIdx}
        className="mt-4 text-sm text-[--color-text-muted] text-center animate-fade-up"
      >
        {SLIDE_TEXTS[slideIdx]}
      </p>
    </div>
  )
}

// ─── SECCIÓN FEATURES ─────────────────────────────────────────────────────────
const features = [
  {
    Icon: IconPhone,
    title: 'Todos compran por celular',
    desc: 'Tus clientes y tus futuros clientes usan el celular para comprar, o al menos para saber que vendes.',
  },
  {
    Icon: IconCart,
    title: 'Catálogo completo',
    desc: 'Productos con fotos, precios y categorías. Tus clientes navegan y eligen como en una tienda real.',
  },
  {
    Icon: IconWhatsApp,
    title: 'Pedidos por WhatsApp',
    desc: 'El cliente arma el carrito y con un clic te manda el pedido completo. Sin apps ni comisiones.',
  },
  {
    Icon: IconGear,
    title: 'Panel de admin simple',
    desc: 'Cargás productos, cambiás precios y ponés ofertas vos mismo. No necesitás saber de tecnología.',
  },
]

// ─── CARD DE PRECIO ────────────────────────────────────────────────────────────
const includes = [
  'Dominio propio (tunegocio.com.ar)',
  'Sitio completo: home, catálogo, servicios y contacto',
  'Carrito de compras con pedido directo a WhatsApp',
  'Panel de admin para cargar y editar productos',
  'Actualizá precios y ofertas cuando quieras',
  'Diseño responsive (celular, tablet y PC)',
  'Sin comisiones por venta',
]

const handleWspClick = () => {
  if (typeof fbq !== 'undefined') {
    // eslint-disable-next-line no-undef
    fbq('trackCustom', 'ClickWhatsApp')
  }
}

// ─── COMPONENTE PRINCIPAL ──────────────────────────────────────────────────────
function CatalogoWhatsApp() {
  const [showBanner, setShowBanner] = useState(false)
  const prevScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      const scrollingUp = currentY < prevScrollY.current
      setShowBanner(scrollingUp || currentY < 10)
      prevScrollY.current = currentY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
    return () => {
      document.documentElement.style.scrollBehavior = ''
    }
  }, [])

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* ── TOP BANNER ─────────────────────────────────────────── */}
      <div
        className={`fixed top-1 left-1 right-1 z-50 bg-[#0c2d4e] rounded-lg text-white text-center py-4 px-4 text-sm font-semibold transition-transform duration-300 ${
          showBanner ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        Este es un servicio personalizado, tomamos pedidos hasta el 30/6
      </div>

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
            <h1 className="text-5xl sm:text-6xl lg:text-[4.2rem] font-black leading-[0.95] tracking-tight text-[--color-text-primary]">
              Tu catálogo online.
              <span className="block mt-2 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                Los pedidos,
              </span>
              <span className="block mt-1">
                directo a tu{' '}
                <span style={{ color: '#25D366', textShadow: '0 0 8px rgba(0,0,0,0.4)' }}>
                  WhatsApp
                </span>
                .
              </span>
            </h1>

            <p className="mt-8 text-lg sm:text-xl leading-relaxed text-[--color-text-secondary] max-w-lg">
              Mostrá todos tus productos con fotos, precios y ofertas. Tus clientes eligen y te
              escriben solos. Sin apps complicadas, sin comisiones.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={WSP_URL}
                onClick={handleWspClick}
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
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400/10 to-blue-600/10 border border-[--color-border] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <f.Icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-[--color-text-primary] mb-2">{f.title}</h3>
                <p className="text-sm text-[--color-text-secondary] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING + FAQ ──────────────────────────────────────── */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 border-b border-[--color-border]">
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
            <div className="h-full rounded-[calc(2rem-1.5px)] bg-[--color-bg-card] p-8 md:p-10 flex flex-col">
              <p className="text-lg font-bold uppercase tracking-wide text-[#0c2d4e] mb-2">
                Catálogo con pedidos WhatsApp
              </p>

              {/* Precio */}
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-2xl font-semibold text-[--color-text-muted]">$</span>
                <span className="text-6xl font-black text-[--color-text-primary] tracking-tight leading-none">
                  20.000
                </span>
                <span className="text-lg text-[--color-text-muted] ml-1">/ mes</span>
              </div>

              {/* Lista de incluidos */}
              <ul className="flex flex-col gap-3 mb-10 text-left">
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
                onClick={handleWspClick}
              >
                <IconWhatsApp className="w-5 h-5" />
                Consultar por WhatsApp
                <IconArrow className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </div>

        {/* FAQ estilo WhatsApp */}
        <div className="max-w-3xl mx-auto mt-32">
          <p className="text-xs font-bold tracking-[0.15em] uppercase text-cyan-500 mb-4 text-center">
            FAQ
          </p>

          <h2 className="text-4xl sm:text-5xl font-black leading-[1.05] text-[--color-text-primary] text-center mb-16">
            Las dudas más comunes
          </h2>

          <div className="flex flex-col gap-8 mt-16">
            {[
              {
                q: 'Tengo muchos productos 😅',
                a: 'No hay problema. Podés cargarlos todos de una sola vez usando la importación masiva.',
              },
              {
                q: 'No entiendo cómo funciona el panel',
                a: 'Te acompaño durante el primer mes para que aprendas a usar todo sin complicaciones.',
              },
              {
                q: 'Vendo por mayor y por menor',
                a: 'Podés configurar precios mayoristas, cantidades mínimas y reglas distintas para cada producto.',
              },
              {
                q: 'Quiero hacer cambios más adelante',
                a: 'El plan incluye dos cambios por mes realizados personalmente por mí.',
              },
            ].map((item) => (
              <div key={item.q} className="flex flex-col gap-3">
                {/* Cliente */}
                <div className="flex justify-start">
                  <div className="max-w-[85%] rounded-[1.5rem] rounded-bl-md px-5 py-4 bg-[--color-bg-card] border border-[--color-border] shadow-sm">
                    <p className="text-sm text-[--color-text-primary] font-medium">{item.q}</p>
                  </div>
                </div>

                {/* Vos */}
                <div className="flex justify-end">
                  <div className="max-w-[85%] rounded-[1.5rem] rounded-br-md px-5 py-4 bg-gradient-to-r from-cyan-400 to-blue-600 text-white shadow-lg">
                    <p className="text-sm leading-relaxed">{item.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ────────────────────────────────────────── */}
      <section className="relative h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
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
            <span style={{ color: '#25D366', textShadow: '0 0 8px rgba(0,0,0,0.4)' }}>
              WhatsApp
            </span>{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              hoy mismo.
            </span>
          </h2>

          <p className="mt-7 text-xl text-[--color-text-secondary] leading-relaxed">
            Catálogo online, panel de admin y pedidos directos a tu WhatsApp. Todo por $20.000/mes.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-12">
            <a
              href={WSP_URL}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-600 text-[--color-text-primary] font-semibold text-lg shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_12px_40px_rgba(6,182,212,0.35)] hover:-translate-y-0.5 transition-all duration-200"
              onClick={handleWspClick}
            >
              <IconWhatsApp className="w-5 h-5" />
              Hablar ahora
              <IconArrow className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
            </a>

            <a
              href="#sobre-mi"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl border border-[--color-border] bg-[--color-bg-card]/70 hover:bg-[--color-bg-elevated] hover:border-[--color-border-hover] backdrop-blur-xl font-semibold text-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              ¿Quién me entrega esto?
            </a>
          </div>
        </div>
      </section>

      {/* ── SOBRE MÍ ──────────────────────────────────────────── */}
      <section
        id="sobre-mi"
        className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[--color-bg-section] border-t border-[--color-border]"
      >
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <h2 className="text-4xl sm:text-5xl font-black text-[--color-text-primary] leading-[1.1]">
            Soy Tomas, y sí,
            <br />
            no soy una empresa gigante.
          </h2>

          <p className="mt-6 text-lg text-center text-[--color-text-secondary] leading-relaxed max-w-2xl ">
            Soy un desarrollador independiente con más de 3 años de experiencia y he creado
            soluciones más grandes y complejas que esta.
          </p>

          {/* Videos */}
          <div className="relative flex items-center justify-center mt-12 mb-12 max-w-2xl mx-auto">
            <video
              src="https://res.cloudinary.com/dfun5vbsf/video/upload/v1780802134/Vidoe_Landing_Page_Catalog-Whatsapp_vqkorx.mp4"
              className="w-[45%] rounded-2xl shadow-lg z-10 pointer-events-none"
              autoPlay
              playsInline
              muted
              loop
            />
            <video
              src="https://res.cloudinary.com/dfun5vbsf/video/upload/v1780802034/Video_Landing_Catalog-Whatsapp_nyt8pj.mp4"
              className="w-[45%] rounded-2xl shadow-lg -ml-8 mt-6 z-20 pointer-events-none"
              autoPlay
              playsInline
              muted
              loop
            />
          </div>
          <div className="max-w-2xl mx-auto">
            <p className="mt-10 text-lg text-center text-[--color-text-secondary] leading-relaxed ">
              Pero <strong>hoy mi objetivo es ayudar a los que recién empiezan</strong> en este
              mundo digital, es por eso que estoy acompañando a los negocios que quieran algo simple
              y fácil de usar brindando esta solución.
            </p>
          </div>

          <p className="mt-8 text-xl text-center font-bold text-[--color-text-primary]">
            Si te interesa, te espero en WhatsApp
          </p>

          <div className="mt-6">
            <a
              href={WSP_URL}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-600 text-[--color-text-primary] font-semibold text-lg shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_12px_40px_rgba(6,182,212,0.35)] hover:-translate-y-0.5 transition-all duration-200"
              onClick={handleWspClick}
            >
              <IconWhatsApp className="w-5 h-5" />
              Hablar ahora
              <IconArrow className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CatalogoWhatsApp
