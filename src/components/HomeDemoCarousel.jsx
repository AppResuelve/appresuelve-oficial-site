export const examples = [
  {
    id: 'como-era-antes',
    name: 'Como Era Antes',
    logo: 'https://res.cloudinary.com/dpqsnv9bu/image/upload/v1770054473/hotel-como-era-antes-3eros/b49scfc0adjgey3tc0wu.png',
    pcImage:
      'https://res.cloudinary.com/dfun5vbsf/image/upload/v1780701013/Macbook-Air-comoeraantes.vercel.app_ozqlu0.png',
    mobileImage:
      'https://res.cloudinary.com/dfun5vbsf/image/upload/v1780701014/iPhone-13-PRO-comoeraantes.vercel.app_cpt6ad.png',
    span1: 'transmite',
    span2: 'una experiencia única',
    stats: [
      { value: '48hs', label: 'promedio' },
      { value: 'UX', label: 'experiencia de usuario' },
      { value: 'Auto', label: 'resuelve dudas' },
    ],
  },
  {
    id: 'corporate-dental',
    name: 'CorporateDental',
    logo: 'https://res.cloudinary.com/dfun5vbsf/image/upload/v1780679888/corporate-dental_vsqich.png',
    pcImage:
      'https://res.cloudinary.com/dfun5vbsf/image/upload/v1780701129/Macbook-Air-localhost_e1dx8p.png',
    mobileImage:
      'https://res.cloudinary.com/dfun5vbsf/image/upload/v1780701126/iPhone-13-PRO-localhost_3_hedqat.png',
    span1: 'es profesionalismo',
    span2: 'y seriedad',
    stats: [
      { value: '48hs', label: 'promedio' },
      { value: '24/7', label: 'servicios y turnos' },
      { value: 'Simple', label: 'administración' },
    ],
  },
  {
    id: 'carshine',
    name: 'CarShine',
    logo: 'https://res.cloudinary.com/dfun5vbsf/image/upload/v1780325560/carShine_300_x_100_px_xhhjgu.png',
    pcImage:
      'https://res.cloudinary.com/dfun5vbsf/image/upload/v1780701204/Macbook-Air-website-corporate.vercel.app_3_tyzrg5.png',
    mobileImage:
      'https://res.cloudinary.com/dfun5vbsf/image/upload/v1780701204/iPhone-13-PRO-website-corporate.vercel.app_3_itr6jy.png',
    span1: 'comercializa',
    span2: 'y recibe pedidos',
    stats: [
      { value: '48hs', label: 'promedio' },
      { value: 'WSP', label: 'pedidos al WhatsApp' },
      { value: '100%', label: 'personalizable' },
    ],
  },
  {
    id: 'aquamarine',
    name: 'AquaMarina',
    logo: 'https://res.cloudinary.com/dfun5vbsf/image/upload/v1780322898/aqua_300_x_150_px_vrmdvy.png',
    pcImage:
      'https://res.cloudinary.com/dfun5vbsf/image/upload/v1780701275/Macbook-Air-acuamare.vercel.app_3_eguaru.png',
    mobileImage:
      'https://res.cloudinary.com/dfun5vbsf/image/upload/v1780701274/iPhone-13-PRO-acuamare.vercel.app_3_kqbvc4.png',
    span1: 'al alcance',
    span2: 'de tus clientes',
    stats: [
      { value: '48hs', label: 'promedio' },
      { value: 'WSP', label: 'pedidos al WhatsApp' },
      { value: 'Cliente', label: 'enfocada en el cliente' },
    ],
  },
]

function HomeDemoCarousel({ slides, activeIndex }) {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex-1 relative">
        {slides.map((slide, idx) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-500 ${
              idx === activeIndex ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Notebook */}
              <img
                src={slide.pcImage}
                alt={`${slide.name} PC`}
                className="
      absolute
      bottom-0
      -translate-y-[30%]
      md:-translate-y-[20%]
      h-auto
      min-w-[500px]
      md:w-[620px]
      object-contain
    "
              />

              {/* Teléfono */}
              <img
                src={slide.mobileImage}
                alt={`${slide.name} Mobile`}
                className="
      absolute
      z-20
      bottom-[40px]
      left-1/2
      translate-y-[10%]
      h-auto
      w-[220px]
      md:w-[220px]
      lg:w-[350px]
      object-contain
    "
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HomeDemoCarousel
