import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

function MockCarousel({ sites }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sites.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [sites.length])

  const current = sites[currentIndex]

  return (
    <div className="relative h-full w-full overflow-hidden">
      <AnimatePresence mode="sync">
        <motion.img
          key={currentIndex}
          src={current.image}
          alt={current.title}
          className="absolute inset-0 h-full w-full object-cover select-none pointer-events-none"
          initial={{ x: '100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: '-100%', opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        />
      </AnimatePresence>
    </div>
  )
}

export default MockCarousel