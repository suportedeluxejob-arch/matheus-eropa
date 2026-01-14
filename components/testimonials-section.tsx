"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, MessageCircle, CheckCircle2, X } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { useLanguage } from "@/app/context/language-context"

export function TestimonialsSection() {
  const { t } = useLanguage()
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [selectedTestimonial, setSelectedTestimonial] = useState<any>(null)

  const testimonials = [
    {
      id: 1,
      name: "Hugo",
      image: "/testimonial-1.jpg",
      rating: 5,
      comment: "Recebi sim, produto chegou certinho! Muito satisfeito com a qualidade do patch.",
      verified: true,
    },
    {
      id: 2,
      name: "Wendel",
      image: "/testimonial-2.jpg",
      rating: 5,
      comment: "Chegou perfeitamente! Suporte excelente, recomendo demais.",
      verified: true,
    },
    {
      id: 3,
      name: "Wesley",
      image: "/testimonial-3.jpg",
      rating: 5,
      comment: "Instalação super fácil com as instruções. Patch funcionando perfeitamente!",
      verified: true,
    },
    {
      id: 4,
      name: "Samuel",
      image: "/testimonial-4.jpg",
      rating: 5,
      comment: "Suporte incrível! Me ajudaram com tudo, muito obrigado pela paciência.",
      verified: true,
    },
  ]

  const openModal = (testimonial: any) => {
    setSelectedImage(testimonial.image)
    setSelectedTestimonial(testimonial)
  }

  const closeModal = () => {
    setSelectedImage(null)
    setSelectedTestimonial(null)
  }

  return (
    <>
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("testimonials.title")}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t("testimonials.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <MessageCircle className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                      <div className="flex items-center">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                        {testimonial.verified && <CheckCircle2 className="w-4 h-4 text-green-500 ml-2" />}
                      </div>
                    </div>
                  </div>

                  <div
                    className="relative h-64 rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => openModal(testimonial)}
                  >
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={`Conversa com ${testimonial.name}`}
                      fill
                      className="object-contain bg-gray-50"
                    />
                  </div>

                  <Badge className="mt-3 bg-green-500 hover:bg-green-600 text-white">
                    <CheckCircle2 className="w-3 h-3 mr-1" />
                    {t("testimonials.verified_client")}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center bg-white rounded-full px-6 py-3 shadow-md">
              <div className="flex -space-x-2 mr-4">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 bg-blue-500 rounded-full border-2 border-white flex items-center justify-center"
                  >
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                ))}
              </div>
              <div className="text-left">
                <p className="font-semibold text-gray-900">{t("testimonials.satisfied_customers")}</p>
                <p className="text-sm text-gray-600">{t("testimonials.average_rating")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {selectedImage && selectedTestimonial && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-5xl max-h-[95vh] bg-white rounded-lg overflow-hidden">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>

            <div className="p-6 bg-white">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <MessageCircle className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">{selectedTestimonial.name}</h3>
                  <div className="flex items-center">
                    {[...Array(selectedTestimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <CheckCircle2 className="w-4 h-4 text-green-500 ml-2" />
                    <span className="text-sm text-green-600 ml-1">{t("testimonials.verified_client")}</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 mb-4 italic">"{selectedTestimonial.comment}"</p>
            </div>

            <div className="relative max-h-[80vh] overflow-auto">
              <Image
                src={selectedImage || "/placeholder.svg"}
                alt={`Conversa completa com ${selectedTestimonial.name}`}
                width={1200}
                height={900}
                className="w-full h-auto object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
