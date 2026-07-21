const WSP_NUMBER = '543834971799'
const WSP_MSG = encodeURIComponent('Hola! Me interesa el plan de Catálogo con WhatsApp 🛒')
const WSP_URL = `https://wa.me/${WSP_NUMBER}?text=${WSP_MSG}`

function FooterLanding() {
  const year = new Date().getFullYear()

  return (
    <footer className="py-10 px-4 sm:px-6 lg:px-8 border-t border-[--color-border]">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[--color-text-muted]">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-[--color-text-secondary]">AppResuelve</span>
          <span className="opacity-40">·</span>
          <span>Resistencia, Chaco</span>
        </div>

        <div className="flex items-center gap-5">
          <a
            href={WSP_URL}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[--color-text-primary] transition-colors"
          >
            WhatsApp
          </a>
          <a
            href="https://instagram.com/tomascallenius"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[--color-text-primary] transition-colors"
          >
            Instagram
          </a>
        </div>

        <p>© {year} AppResuelve · Tomás — Desarrollador independiente</p>
      </div>
    </footer>
  )
}

export default FooterLanding
