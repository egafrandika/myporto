import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect, useState } from 'react'

interface ProjectCarouselProps {
  images: string[]
  title: string
  accent: string
  gradient: string
}

export function ProjectCarousel({ images, title, accent, gradient }: ProjectCarouselProps) {
  const [index, setIndex] = useState(0)
  const hasMultiple = images.length > 1

  useEffect(() => {
    if (!hasMultiple) return

    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % images.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [hasMultiple, images.length])

  const goTo = (next: number) => {
    setIndex((next + images.length) % images.length)
  }

  if (images.length === 0) {
    return (
      <div className={`relative h-52 overflow-hidden bg-gradient-to-br ${gradient}`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="flex h-16 w-16 items-center justify-center rounded-2xl text-2xl font-bold text-white shadow-lg"
            style={{ backgroundColor: accent }}
          >
            {title.charAt(0)}
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-60" />
      </div>
    )
  }

  return (
    <div className={`relative h-52 overflow-hidden bg-gradient-to-br ${gradient}`}>
      <AnimatePresence mode="wait">
        <motion.img
          key={images[index]}
          src={images[index]}
          alt={`${title} screenshot ${index + 1}`}
          className="absolute inset-0 h-full w-full object-cover object-top"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-surface/80 via-transparent to-transparent" />

      {hasMultiple && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault()
              goTo(index - 1)
            }}
            className="absolute top-1/2 left-2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-border/60 bg-background/70 text-text opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="Previous screenshot"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault()
              goTo(index + 1)
            }}
            className="absolute top-1/2 right-2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-border/60 bg-background/70 text-text opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="Next screenshot"
          >
            <ChevronRight size={16} />
          </button>

          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
            {images.map((image, i) => (
              <button
                key={image}
                type="button"
                onClick={(e) => {
                  e.preventDefault()
                  setIndex(i)
                }}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? 'w-5 bg-primary' : 'w-1.5 bg-text/40 hover:bg-text/70'
                }`}
                aria-label={`Show screenshot ${i + 1}`}
                aria-current={i === index}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
