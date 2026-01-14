"use client"
import { Button } from "@/components/ui/button"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

interface ImageModalProps {
  images: Array<{
    id: number
    title: string
    image: string
    team: string
    player: string
  }>
  currentIndex: number
  isOpen: boolean
  onClose: () => void
  onNext: () => void
  onPrevious: () => void
}

export function ImageModal({ images, currentIndex, isOpen, onClose, onNext, onPrevious }: ImageModalProps) {
  if (!isOpen) return null

  const currentImage = images[currentIndex]

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
      {/* Close Button */}
      <Button
        onClick={onClose}
        variant="ghost"
        size="icon"
        className="absolute top-4 right-4 text-white hover:bg-white/10 z-10"
      >
        <X className="h-6 w-6" />
      </Button>

      {/* Previous Button */}
      <Button
        onClick={onPrevious}
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10 z-10"
        disabled={images.length <= 1}
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>

      {/* Next Button */}
      <Button
        onClick={onNext}
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10 z-10"
        disabled={images.length <= 1}
      >
        <ChevronRight className="h-8 w-8" />
      </Button>

      {/* Image Container */}
      <div className="max-w-4xl max-h-[90vh] w-full h-full flex flex-col items-center justify-center">
        <img
          src={currentImage?.image || "/placeholder.svg"}
          alt={currentImage?.title || "Demonstração"}
          className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
        />

        {/* Image Info */}
        <div className="mt-4 text-center">
          <h3 className="text-2xl font-bold text-white mb-2">{currentImage?.title}</h3>
          <p className="text-white/70">
            {currentIndex + 1} de {images.length} demonstrações
          </p>
        </div>
      </div>

      {/* Click outside to close */}
      <div className="absolute inset-0 -z-10" onClick={onClose} />
    </div>
  )
}
