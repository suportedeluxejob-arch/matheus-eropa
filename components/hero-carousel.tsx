"use client"

import React, { useCallback, useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { SITE_CONFIG } from "@/app/lib/site-config"

export function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })])
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setPrevBtnEnabled(emblaApi.canScrollPrev())
    setNextBtnEnabled(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)
  }, [emblaApi, onSelect])

  return (
    <div className="relative group w-full mb-8">
      <div className="overflow-hidden rounded-[2.5rem] border border-white/10 glass-card shadow-2xl" ref={emblaRef}>
        <div className="flex">
          {SITE_CONFIG.banners.map((banner) => (
            <div className="relative flex-[0_0_100%] min-w-0" key={banner.id}>
              <Link href={banner.link}>
                <div className="relative w-full aspect-[21/9] sm:aspect-[21/8] md:aspect-[21/7] lg:aspect-[3/1] overflow-hidden bg-black/40">
                  <img
                    src={banner.image}
                    alt={banner.alt}
                    className="w-full h-full object-contain transition-transform duration-700 hover:scale-105"
                  />
                  {/* Subtle Gradient Overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary hover:border-primary shadow-xl z-10"
        onClick={scrollPrev}
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        className="absolute right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary hover:border-primary shadow-xl z-10"
        onClick={scrollNext}
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {SITE_CONFIG.banners.map((_, index) => (
          <button
            key={index}
            className={`h-1.5 transition-all duration-300 rounded-full ${index === selectedIndex ? "w-8 bg-primary shadow-[0_0_10px_rgba(var(--primary),0.5)]" : "w-2 bg-white/20 hover:bg-white/40"
              }`}
            onClick={() => emblaApi?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  )
}
