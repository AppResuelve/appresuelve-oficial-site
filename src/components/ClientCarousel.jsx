import { useState, useEffect, useCallback, useRef } from 'react'
import { MapPin } from 'lucide-react'

const clients = [
  {
    id: 'olipetshop',
    name: 'OliPetShop',
    location: 'Resistencia, Chaco',
    logo: 'https://res.cloudinary.com/dfun5vbsf/image/upload/v1783609473/cat-dog_mtksim.svg',
    logoFilter: 'brightness(0) invert(18%) sepia(100%) saturate(2500%) hue-rotate(-5deg)',
    type: 'image',
    src: 'https://res.cloudinary.com/dfun5vbsf/image/upload/v1783609343/iPhone-14-PRO-MAX-www.olipetshop.com.ar_ee99i4.webp',
  },
  {
    id: 'petalos-serena',
    name: 'Petalos Serena',
    location: 'Mar del Plata, Bs As',
    logo: 'https://res.cloudinary.com/dfun5vbsf/image/upload/v1783609571/logotipo_cueglq.png',
    type: 'image',
    src: 'https://res.cloudinary.com/dfun5vbsf/image/upload/v1783609343/iPhone-14-PRO-MAX-www.petalosserena.com.ar_ba7xe7.webp',
  },
  {
    id: 'feria-descartable',
    name: 'Feria Descartable',
    location: 'Resistencia, Chaco',
    logo: 'https://res.cloudinary.com/dfun5vbsf/image/upload/v1783609396/logotipo_es5s2l.png',
    type: 'video',
    src: 'https://res.cloudinary.com/dfun5vbsf/video/upload/v1783609359/Iphone-13-Pro-Www.Feriadescartable.Com.Ar-Oc-V_N9ox-9-Xk_qt1xti.mp4',
  },
  {
    id: 'creaciones-sasa',
    name: 'Creaciones Sasa',
    location: 'Victoria, Entre Ríos',
    logo: 'https://res.cloudinary.com/dfun5vbsf/image/upload/v1783609421/logotipo-buho_r8ft3j.webp',
    type: 'image',
    src: 'https://res.cloudinary.com/dfun5vbsf/image/upload/v1783638924/iPhone-14-PRO-MAX-www.creacionessasa.com.ar_xzqco5.webp',
  },
]

const CYCLE_MS = 5000

function ClientCarousel() {
  const [activeIdx, setActiveIdx] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const videoRef = useRef(null)

  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % clients.length)
    }, CYCLE_MS)
    return () => clearInterval(timer)
  }, [isPaused])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    if (clients[activeIdx].type === 'video') {
      video.currentTime = 0
      video.play().catch(() => {})
    }
  }, [activeIdx])

  const goTo = useCallback(
    (idx) => {
      if (idx !== activeIdx) setActiveIdx(idx)
    },
    [activeIdx]
  )

  return (
    <div className="w-full pt-12">
      <div className="relative w-full overflow-visible">
        {clients.map((client, idx) => (
          <div
            key={client.id}
            className={`transition-opacity duration-500 ${
              idx === activeIdx
                ? 'opacity-100 relative'
                : 'opacity-0 absolute inset-0 pointer-events-none'
            }`}
          >
            {/* Logo + nombre + ubicación */}
            <div className="flex justify-center items-center gap-3 mb-6 md:mb-8">
              <img
                src={client.logo}
                alt={client.name}
                className="h-8 md:h-10 w-auto object-contain"
                style={client.logoFilter ? { filter: client.logoFilter } : undefined}
              />
              <div className="flex flex-col">
                <span className="text-lg md:text-xl font-bold text-[--color-text-primary]">
                  {client.name}
                </span>
                <span className="flex items-center gap-1 text-xs md:text-sm text-[--color-text-muted]">
                  <MapPin className="w-3 h-3 md:w-3.5 md:h-3.5" />
                  {client.location}
                </span>
              </div>
            </div>

            {/* Visual */}
            <div className="flex justify-center">
              <div className="bg-black rounded-[60px] pr-2.5 pb-3 shadow-[30px_40px_50px_-10px_rgba(0,0,0,0.8)]">
                {client.type === 'video' ? (
                  <video
                    ref={idx === activeIdx ? videoRef : undefined}
                    src={client.src}
                    className="w-full max-h-[620px] rounded-[56px] object-contain"
                    muted
                    loop
                    playsInline
                  />
                ) : (
                  <img
                    src={client.src}
                    alt={client.name}
                    className="w-full max-h-[620px] rounded-[56px] object-contain"
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2.5 mt-8">
        {clients.map((client, idx) => (
          <button
            key={client.id}
            onClick={() => goTo(idx)}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
              idx === activeIdx ? 'bg-cyan-500 scale-120' : 'bg-white/50'
            }`}
            aria-label={`Ver ${client.name}`}
          />
        ))}
      </div>
    </div>
  )
}

export default ClientCarousel
