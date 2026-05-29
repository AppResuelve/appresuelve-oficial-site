import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const examples = [
  {
    name: 'Landing Restaurante',
    video: '/videos/Video Mobile Ejemplos Servicios.mp4',
    items: ['Reservas online', 'Menú interactivo', 'Galería de platos'],
  },
  {
    name: 'Landing Gimnasio',
    video: '/videos/Video Mobile Ejemplos Servicios2.mp4',
    items: ['Horarios en tiempo real', 'Plan de entrenamiento', 'Testimonios'],
  },
  {
    name: 'Landing Barbería',
    video: '/videos/Video Mobile Ejemplos Servicios3.mp4',
    items: ['Booking con mapa', 'Precios claros', 'Galería de trabajos'],
  },
  {
    name: 'Landing Bakery',
    video: '/videos/Video Mobile Ejemplos Servicios4.mp4',
    items: ['Catálogo de productos', 'Carrito de compras', 'Envíos'],
  },
]

function ServiceCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const intervalRef = useRef(null)

  const startInterval = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % examples.length)
    }, 8000)
  }, [])

  useEffect(() => {
    startInterval()
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [startInterval])

  const handleNavigate = useCallback((newIndex) => {
    setCurrentIndex(newIndex)
    if (intervalRef.current) clearInterval(intervalRef.current)
    startInterval()
  }, [startInterval])

  const next = useCallback(() => {
    handleNavigate((currentIndex + 1) % examples.length)
  }, [currentIndex, handleNavigate])

  const prev = useCallback(() => {
    handleNavigate((currentIndex - 1 + examples.length) % examples.length)
  }, [currentIndex, handleNavigate])

  const current = examples[currentIndex]

  return (
    <div className="w-full md:p-8 lg:p-12">
      <div className="relative flex items-center gap-6">
        {/* Flecha izquierda */}
        <button
          onClick={prev}
          className="hidden md:flex shrink-0 w-12 h-12 rounded-2xl border border-[--color-border] bg-[--color-bg-card] items-center justify-center text-[--color-text-primary] hover:bg-[--color-bg-elevated] transition-colors"
          aria-label="Anterior"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Contenido del carousel */}
        <div className="flex-1 relative overflow-hidden rounded-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="grid md:grid-cols-[1fr_1.2fr] gap-0"
            >
              {/* Info a la izquierda */}
              <div className="p-6 md:p-8 flex flex-col justify-center">
                <p className="text-xs md:text-sm uppercase tracking-[0.15em] text-cyan-500 font-bold mb-2 md:mb-3">
                  Ejemplo {currentIndex + 1} de {examples.length}
                </p>
                <h3 className="text-xl md:text-3xl font-black text-[--color-text-primary]">
                  {current.name}
                </h3>
                <ul className="mt-4 md:mt-6 space-y-2 md:space-y-3">
                  {current.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-[--color-text-secondary]">
                      <div className="w-5 h-5 md:w-6 md:h-6 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-[--color-text-primary] text-xs font-bold shrink-0">
                        ✓
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Video a la derecha */}
              <div className="relative max-h-[600px]">
                <video
                  src={current.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Flecha derecha */}
        <button
          onClick={next}
          className="hidden md:flex shrink-0 w-12 h-12 rounded-2xl border border-[--color-border] bg-[--color-bg-card] items-center justify-center text-[--color-text-primary] hover:bg-[--color-bg-elevated] transition-colors"
          aria-label="Siguiente"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {examples.map((_, idx) => (
          <button
            key={idx}
            onClick={() => handleNavigate(idx)}
            className={`h-2 rounded-full transition-all ${
              idx === currentIndex
                ? 'w-8 bg-gradient-to-r from-cyan-400 to-blue-600'
                : 'w-2 bg-[--color-border] hover:bg-[--color-text-muted]'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default ServiceCarousel