"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, MessageCircle, CheckCircle2, X, Quote } from "lucide-react"
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
      <section className="py-24 relative overflow-hidden bg-background">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10" />

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 px-4 py-1.5 uppercase tracking-widest text-xs font-bold">
              {t("testimonials.satisfied_customers")}
            </Badge>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">{t("testimonials.title")}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {t("testimonials.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="glass-card group hover:border-primary/50 transition-all duration-500 hover:-translate-y-2">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center border border-primary/20 group-hover:scale-110 transition-transform duration-500">
                        <Quote className="w-5 h-5 text-primary fill-primary/20" />
                      </div>
                      <div>
                        <h3 className="font-bold text-white tracking-wide">{testimonial.name}</h3>
                        <div className="flex items-center gap-0.5">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                    </div>
                    {testimonial.verified && (
                      <div className="bg-emerald-500/10 p-1.5 rounded-full border border-emerald-500/20">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      </div>
                    )}
                  </div>

                  <div
                    className="relative h-64 rounded-xl overflow-hidden cursor-pointer mb-4 ring-1 ring-white/10 group-hover:ring-primary/30 transition-all shadow-2xl"
                    onClick={() => openModal(testimonial)}
                  >
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={`Conversa com ${testimonial.name}`}
                      fill
                      className="object-contain bg-black/40 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                      <span className="text-white text-xs font-bold uppercase tracking-widest">{t("featured.view_details") || "Ver Detalhes"}</span>
                    </div>
                  </div>

                  <Badge className="mt-auto bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border-emerald-500/20 w-fit">
                    <CheckCircle2 className="w-3 h-3 mr-1.5" />
                    {t("testimonials.verified_client")}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-20">
            <div className="inline-flex flex-col md:flex-row items-center bg-white/5 backdrop-blur-xl rounded-2xl md:rounded-full px-8 py-5 border border-white/10 shadow-2xl">
              <div className="flex -space-x-3 mb-4 md:mb-0 md:mr-8 scale-110">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 bg-gradient-to-br from-primary to-blue-600 rounded-full border-2 border-background flex items-center justify-center shadow-lg"
                  >
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                ))}
              </div>
              <div className="text-center md:text-left">
                <p className="font-black text-white text-lg leading-none mb-1">{t("testimonials.satisfied_customers")}</p>
                <p className="text-muted-foreground text-sm font-medium tracking-wide uppercase">{t("testimonials.average_rating")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {selectedImage && selectedTestimonial && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-[100] p-4 animate-in fade-in duration-300"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-4xl glass-card rounded-3xl overflow-hidden shadow-[0_0_80px_-20px_var(--primary)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 z-10 bg-white/10 backdrop-blur-md rounded-full p-2.5 border border-white/10 hover:bg-white/20 transition-all group"
            >
              <X className="w-5 h-5 text-white group-hover:rotate-90 transition-transform duration-300" />
            </button>

            <div className="p-8 border-b border-white/10 bg-white/5">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center border border-primary/20">
                  <Quote className="w-8 h-8 text-primary fill-primary/20" />
                </div>
                <div>
                  <h3 className="font-black text-white text-2xl tracking-tight">{selectedTestimonial.name}</h3>
                  <div className="flex items-center gap-1.5">
                    {[...Array(selectedTestimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <div className="ml-3 flex items-center gap-1.5 text-emerald-400 text-sm font-bold bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/10">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      {t("testimonials.verified_client")}
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-white/80 text-lg leading-relaxed italic">"{selectedTestimonial.comment}"</p>
            </div>

            <div className="relative max-h-[60vh] overflow-auto bg-black/20 p-4">
              <Image
                src={selectedImage || "/placeholder.svg"}
                alt={`Conversa completa com ${selectedTestimonial.name}`}
                width={1200}
                height={1600}
                className="w-full h-auto object-contain rounded-xl"
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
