import { useState, useEffect, useCallback, useRef } from 'react'

const examples = [
  {
    id: 'aquamarine',
    name: 'AquaMarina',
    description: 'Muebles de jardín, piscinas y accesorios para exterior',
    pcVideo:
      'https://res.cloudinary.com/dfun5vbsf/video/upload/v1780507843/aquamarepcdemo_qv4xwp.mp4',
    mobileVideo:
      'https://res.cloudinary.com/dfun5vbsf/video/upload/v1780507841/aquamaremobiledemo_b0so0o.mp4',
    features: ['Catálogo con carrito', 'Pedidos por WhatsApp', 'Diseño responsive'],
  },
  {
    id: 'carshine',
    name: 'CarShine',
    description: 'Lubricantes, aceites y productos de limpieza automotor',
    pcVideo:
      'https://res.cloudinary.com/dfun5vbsf/video/upload/v1780507911/carshinepcdemo_aqbqx6.mp4',
    mobileVideo:
      'https://res.cloudinary.com/dfun5vbsf/video/upload/v1780507911/carshine_video_demo_vew7ja.mp4',
    features: ['Catálogo con carrito', 'Pedidos por WhatsApp', 'Banners interactivos'],
  },
  {
    id: 'casarepostera',
    name: 'Casa Repostera',
    description: 'Ingredientes y decoraciones para repostería profesional',
    pcVideo:
      'https://res.cloudinary.com/dfun5vbsf/video/upload/v1780507765/casareposterapcdemo_dshnr1.mp4',
    mobileVideo:
      'https://res.cloudinary.com/dfun5vbsf/video/upload/v1780507762/casareposteramobiledemo_fpb8r3.mp4',
    features: ['Catálogo con carrito', 'Pedidos por WhatsApp', 'Precios mayoristas'],
  },
]

const DEMO_CYCLE_MS = 6000

function ServiceCarousel() {
  const [demoIdx, setDemoIdx] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const videoRefs = useRef({})
  const timerRef = useRef(null)

  useEffect(() => {
    timerRef.current = setInterval(() => {
      if (!isPaused) {
        setIsTransitioning(true)
        setTimeout(() => {
          setDemoIdx((prev) => (prev + 1) % examples.length)
          setTimeout(() => {
            setIsTransitioning(false)
          }, 500)
        }, 500)
      }
    }, DEMO_CYCLE_MS)

    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [isPaused])

  useEffect(() => {
    const currentVideo = videoRefs.current[demoIdx]
    if (currentVideo) {
      currentVideo.currentTime = 0
      if (!isPaused) {
        currentVideo.play().catch(() => {})
      }
    }
  }, [demoIdx, isPaused])

  useEffect(() => {
    Object.values(videoRefs.current).forEach((video) => {
      if (video) {
        if (isPaused) {
          video.pause()
        } else if (!video.paused && video.readyState > 0) {
          video.play().catch(() => {})
        }
      }
    })
  }, [isPaused])

  const handlePauseToggle = useCallback(() => {
    setIsPaused((prev) => !prev)
  }, [])

  const goToDemo = useCallback(
    (demoIndex) => {
      if (demoIndex === demoIdx) return
      setIsTransitioning(true)
      setTimeout(() => {
        setDemoIdx(demoIndex)
        setTimeout(() => {
          setIsTransitioning(false)
        }, 500)
      }, 500)
    },
    [demoIdx]
  )

  const nextDemo = useCallback(() => {
    const next = (demoIdx + 1) % examples.length
    goToDemo(next)
  }, [demoIdx, goToDemo])

  const prevDemo = useCallback(() => {
    const prev = (demoIdx - 1 + examples.length) % examples.length
    goToDemo(prev)
  }, [demoIdx, goToDemo])

  return (
    <div className="w-full pb-16">
      <div className="relative flex items-center gap-6">
        <button
          onClick={prevDemo}
          className="hidden md:flex shrink-0 w-12 h-12 rounded-2xl border border-[--color-border] bg-[--color-bg-card] items-center justify-center text-[--color-text-primary] hover:bg-[--color-bg-elevated] transition-colors cursor-pointer"
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

        <div className="flex-1 relative min-h-[700px] md:min-h-[580px]">
          {examples.map((example, idx) => (
            <div
              key={example.id}
              className={`absolute inset-0 grid md:grid-cols-[1fr_1.3fr] transition-opacity duration-500 ${
                idx === demoIdx ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <div className="p-6 md:p-8 flex flex-col justify-center order-2 md:order-1">
                <p className="text-xs md:text-sm uppercase tracking-[0.15em] text-cyan-500 font-bold mb-2 md:mb-3">
                  Demo {idx + 1} de {examples.length}
                </p>

                <h3 className="text-xl md:text-3xl font-black text-[--color-text-primary]">
                  {example.name}
                </h3>

                <p className="mt-3 text-sm md:text-base text-[--color-text-secondary] leading-relaxed">
                  {example.description}
                </p>

                <ul className="mt-4 md:mt-6 space-y-2 md:space-y-3">
                  {example.features.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-sm text-[--color-text-secondary]"
                    >
                      <div className="w-5 h-5 md:w-6 md:h-6 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-[--color-text-primary] text-xs font-bold shrink-0">
                        ✓
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative flex items-center justify-centerorder-1 md:order-2">
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="w-full max-w-[90vw] md:max-w-[55vw] rounded-2xl border-2 border-white shadow-2xl shadow-black/20 overflow-hidden">
                    <video
                      ref={(el) => (videoRefs.current[idx] = el)}
                      src={example.pcVideo}
                      muted
                      loop={false}
                      playsInline
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[35vw] md:w-[260px] rounded-[1.25rem] border-2 border-white shadow-2xl shadow-black/30 overflow-hidden">
                    <video
                      ref={(el) => (videoRefs.current[`${idx}-mobile`] = el)}
                      src={example.mobileVideo}
                      muted
                      loop={false}
                      playsInline
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={nextDemo}
          className="hidden md:flex shrink-0 w-12 h-12 rounded-2xl border border-[--color-border] bg-[--color-bg-card] items-center justify-center text-[--color-text-primary] hover:bg-[--color-bg-elevated] transition-colors cursor-pointer"
          aria-label="Siguiente"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div className="flex justify-center">
        <button
          onClick={handlePauseToggle}
          className="px-6 py-3 rounded-2xl border border-[--color-border] bg-[--color-bg-card] text-sm font-semibold text-[--color-text-primary] hover:bg-[--color-bg-elevated] transition-all cursor-pointer"
        >
          {isPaused ? (
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              Reproducir
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
              </svg>
              Pausar
            </span>
          )}
        </button>
      </div>
    </div>
  )
}

export default ServiceCarousel
