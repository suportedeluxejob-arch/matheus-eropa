"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    id: 1,
    image: "/carousel/patch-eafc25.jpg",
    alt: "PATCH TIMES BRASILEIROS EA FC 25",
  },
  {
    id: 2,
    image: "/carousel/patch-eafc26.jpg",
    alt: "PATCH TIMES BRASILEIROS EA FC 26",
  },
  {
    id: 3,
    image: "/carousel/patch-eafc24.jpg",
    alt: "PATCH TIMES BRASILEIROS EA FC 24",
  },
  {
    id: 4,
    image: "/carousel/jogo-eafc26.jpg",
    alt: "JOGO EAFC 26 + PATCH TIMES BRASILEIROS",
  },
]

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000) // Muda a cada 5 segundos

    return () => clearInterval(interval)
  }, [isAutoPlay])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlay(false)
    setTimeout(() => setIsAutoPlay(true), 10000) // Retoma autoplay após 10s
  }

  const nextSlide = () => {
    goToSlide((currentSlide + 1) % slides.length)
  }

  const prevSlide = () => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length)
  }

  return (
    <div className="relative w-full pt-24 sm:pt-28 overflow-hidden bg-gradient-to-b from-gray-900 via-blue-900 to-cyan-900">
      {/* Carousel Container */}
      <div className="relative w-full h-64 sm:h-96 md:h-[500px] lg:h-[600px] overflow-hidden rounded-none sm:rounded-xl mx-auto group max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Slides */}
        <div className="relative w-full h-full">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-full object-cover rounded-lg sm:rounded-xl"
                onError={(e) => {
                  // Fallback para placeholder se imagem não carregar
                  const target = e.target as HTMLImageElement
                  target.style.backgroundColor = "#1e3a8a"
                }}
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-lg sm:rounded-xl" />
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          onMouseEnter={() => setIsAutoPlay(false)}
          onMouseLeave={() => setIsAutoPlay(true)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 sm:p-3 transition-all duration-300 opacity-0 group-hover:opacity-100"
          aria-label="Slide anterior"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <button
          onClick={nextSlide}
          onMouseEnter={() => setIsAutoPlay(false)}
          onMouseLeave={() => setIsAutoPlay(true)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 sm:p-3 transition-all duration-300 opacity-0 group-hover:opacity-100"
          aria-label="Próximo slide"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2 sm:gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide
                  ? "bg-white w-8 h-3 sm:w-10 sm:h-3"
                  : "bg-white/50 hover:bg-white/70 w-3 h-3 sm:w-3 sm:h-3"
              }`}
              aria-label={`Ir para slide ${index + 1}`}
              aria-current={index === currentSlide ? "true" : "false"}
            />
          ))}
        </div>

        {/* Slide Counter */}
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 bg-black/60 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
          {currentSlide + 1} / {slides.length}
        </div>
      </div>
    </div>
  )
}
