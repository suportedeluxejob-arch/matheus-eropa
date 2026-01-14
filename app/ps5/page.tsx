"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, Star, Zap } from "lucide-react"
import { Footer } from "@/components/footer"
import { CountdownTimer } from "@/components/countdown-timer"
import { PaymentMethodModal } from "@/components/payment-method-modal"
import { useState } from "react"

export default function PS5Page() {
  const [paymentModal, setPaymentModal] = useState({
    isOpen: false,
    pixLink: "",
    cardLink: "",
    productName: "",
  })

  const openPaymentModal = (pixLink: string, cardLink: string, productName: string) => {
    setPaymentModal({ isOpen: true, pixLink, cardLink, productName })
  }

  const closePaymentModal = () => {
    setPaymentModal({ isOpen: false, pixLink: "", cardLink: "", productName: "" })
  }

  const products = [
    {
      name: "PATCH EAFC 26 + JOGO EAFC 26",
      price: "R$ 99,90",
      originalPrice: "R$ 199,90",
      image: "/eafc26-bundle-promo.png",
      features: [
        "🔥 SUPER PROMOÇÃO - Tempo Limitado",
        "Jogo EA FC 26 completo incluído",
        "Gráficos 4K otimizados",
        "Mídia digital na sua conta",
      ],
      rating: 5.0,
      downloads: "1.5k",
      exclusive: true,
      featured: true,
      isSuperPromo: true,
      hasCountdown: true, // Added countdown flag to EAFC 26 bundle
    },
    {
      name: "EAFC 26 - Times Brasileiros",
      price: "R$ 59,90",
      originalPrice: "R$ 119,90",
      image: "/site-26.png",
      features: [
        "🚀 LANÇAMENTO - Novidade 2026",
        "Times brasileiros licenciados",
        "Gráficos 4K otimizados",
        "Ray Tracing nos estádios",
      ],
      rating: 5.0,
      downloads: "3.2k",
      exclusive: true,
      featured: true,
      isNew: true,
    },
    {
      name: "EAFC 25 - Times Brasileiros Licenciados",
      price: "R$ 49,90",
      originalPrice: "R$ 99,90",
      image: "/eafc25-brasileiros.png",
      features: [
        "Times brasileiros licenciados",
        "Gráficos 4K otimizados",
        "Ray Tracing nos estádios",
        "DualSense integrado",
      ],
      rating: 4.9,
      downloads: "32.1k",
      exclusive: true,
      featured: true,
    },
    {
      name: "PATCH EAFC 25 + JOGO EAFC 25 - TIMES BRASILEIROS",
      price: "R$ 79,90",
      originalPrice: "R$ 159,90",
      image: "/eafc25-bundle.png",
      features: [
        "Jogo EA FC 25 completo incluído",
        "Gráficos 4K otimizados",
        "Patch premium times brasileiros",
        "DualSense integrado",
      ],
      rating: 4.9,
      downloads: "12.3k",
      exclusive: true,
      featured: true,
    },
    {
      name: "EAFC 24 - Times Brasileiros Licenciados",
      price: "R$ 39,90",
      originalPrice: "R$ 79,90",
      image: "/eafc24-brasileiros.png",
      features: [
        "Times brasileiros completos",
        "Upscale 4K no PS5",
        "Carregamento rápido SSD",
        "Haptic Feedback básico",
      ],
      rating: 4.8,
      downloads: "38.7k",
      exclusive: true,
      featured: true,
    },
    {
      name: "PES 2021 VERSÃO 25 + JOGO PES 21 - TIMES BRASILEIROS",
      price: "R$ 59,90",
      originalPrice: "R$ 119,90",
      image: "/pes2021-bundle.png",
      features: [
        "Jogo PES 2021 completo incluído",
        "Upscale 4K no PS5",
        "Carregamento SSD otimizado",
        "Compatibilidade retroativa",
      ],
      rating: 4.7,
      downloads: "22.3k",
      exclusive: false,
      featured: true,
    },
    {
      name: "PES 2021 VERSÃO 25 - TIMES BRASILEIROS",
      price: "R$ 34,90",
      originalPrice: "R$ 69,90",
      image: "/pes2021-patch.png",
      features: [
        "Patch premium versão 2025",
        "Upscale 4K no PS5",
        "Times brasileiros atualizados",
        "Compatível com PES 2021 existente",
      ],
      rating: 4.7,
      downloads: "15.2k",
      exclusive: false,
      featured: true,
    },
    {
      name: "DFL 25 - TIMES BRASILEIROS CELULAR",
      price: "R$ 44,90",
      originalPrice: "R$ 89,90",
      image: "/dfl25-celular.png",
      features: [
        "Times brasileiros atualizados",
        "Jogabilidade mobile otimizada",
        "100% atualizado 2025",
        "Compatível iOS e Android",
      ],
      rating: 4.8,
      downloads: "8.5k",
      exclusive: false,
      featured: true,
    },
  ]

  return (
    <div className="bg-gradient-to-br from-black via-slate-900 to-black min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="mr-4">
              <img src="/playstation-logo.jpg" alt="PlayStation 5" className="h-16 w-auto object-contain rounded-lg" />
            </div>
            <div>
              <Badge className="mb-2 bg-blue-500/20 text-blue-300 border-blue-400/30">PlayStation 5 - Next Gen</Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Patches para
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                  {" "}
                  PlayStation 5
                </span>
              </h1>
            </div>
          </div>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            Experimente a próxima geração de patches com qualidade 4K, Ray Tracing e todas as tecnologias do PS5.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 px-4 bg-black/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Patches Next-Gen para PS5</h2>
            <p className="text-white/70 text-lg">
              Aproveite todo o poder do PlayStation 5 com nossos patches exclusivos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="bg-black/30 border-white/10 backdrop-blur-sm overflow-hidden">
                <div className="relative">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    {product.isSuperPromo && (
                      <Badge className="bg-gradient-to-r from-red-600 to-orange-600 text-white font-bold animate-pulse">
                        🔥 SUPER PROMOÇÃO
                      </Badge>
                    )}
                    {product.isNew && (
                      <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold animate-pulse">
                        🚀 LANÇAMENTO
                      </Badge>
                    )}
                    {product.exclusive && !product.isNew && !product.isSuperPromo && (
                      <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">Exclusivo PS5</Badge>
                    )}
                    <Badge className="bg-cyan-600/90 text-white">{product.downloads} downloads</Badge>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-white text-lg">{product.name}</CardTitle>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-white/80 text-sm">{product.rating}</span>
                    </div>
                  </div>
                  {product.hasCountdown && (
                    <div className="mb-4">
                      <CountdownTimer minutes={5} />
                    </div>
                  )}
                  <div className="text-2xl font-bold text-cyan-400">{product.price}</div>
                  {product.originalPrice && (
                    <div className="text-xl font-bold text-white/70 line-through mb-4">{product.originalPrice}</div>
                  )}
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="text-white/70 text-sm flex items-center">
                        <Zap className="h-4 w-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-2">
                    <Button
                      onClick={() =>
                        openPaymentModal(
                          product.name === "PATCH EAFC 26 + JOGO EAFC 26"
                            ? "https://go.invictuspay.app.br/3p65wtvjht"
                            : product.name === "EAFC 26 - Times Brasileiros"
                              ? "https://go.invictuspay.app.br/qaatnpzass"
                              : product.name === "EAFC 25 - Times Brasileiros Licenciados"
                                ? "https://go.invictuspay.app.br/fuv2ufja8l"
                                : product.name === "PATCH EAFC 25 + JOGO EAFC 25 - TIMES BRASILEIROS"
                                  ? "https://go.invictuspay.app.br/rt0t2uecxd"
                                  : product.name === "EAFC 24 - Times Brasileiros Licenciados"
                                    ? "https://go.invictuspay.app.br/kllijhnfgx"
                                    : product.name === "PES 2021 VERSÃO 25 + JOGO PES 21 - TIMES BRASILEIROS"
                                      ? "https://go.invictuspay.app.br/ovmhlg21rh"
                                      : product.name === "PES 2021 VERSÃO 25 - TIMES BRASILEIROS"
                                        ? "https://go.invictuspay.app.br/qcgqeanwjc"
                                        : "#",
                          product.name === "PATCH EAFC 26 + JOGO EAFC 26"
                            ? "https://pay.cakto.com.br/agtjpxf_638373"
                            : product.name === "EAFC 26 - Times Brasileiros"
                              ? "https://pay.cakto.com.br/5jgfx87_638363"
                              : product.name === "EAFC 25 - Times Brasileiros Licenciados"
                                ? "https://pay.cakto.com.br/39xfxuj_638367"
                                : product.name === "PATCH EAFC 25 + JOGO EAFC 25 - TIMES BRASILEIROS"
                                  ? "https://pay.cakto.com.br/39xfxuj_638367"
                                  : product.name === "EAFC 24 - Times Brasileiros Licenciados"
                                    ? "https://pay.cakto.com.br/337h6fv_638368"
                                    : product.name === "PES 2021 VERSÃO 25 + JOGO PES 21 - TIMES BRASILEIROS"
                                      ? "https://pay.cakto.com.br/3634a38_638395"
                                      : product.name === "PES 2021 VERSÃO 25 - TIMES BRASILEIROS"
                                        ? "https://pay.cakto.com.br/8fekayj_638394"
                                        : "#",
                          product.name,
                        )
                      }
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Comprar Agora
                    </Button>
                    <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 bg-transparent">
                      Ver Mais
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PS5 Specific Features */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Tecnologias Next-Gen</h2>
            <p className="text-white/70 text-lg">Aproveite todos os recursos exclusivos do PlayStation 5</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-black/30 border-white/10 backdrop-blur-sm text-center">
              <CardHeader>
                <div className="text-4xl mb-4">⚡</div>
                <CardTitle className="text-white">SSD Ultra Rápido</CardTitle>
                <CardDescription className="text-white/70">
                  Carregamento instantâneo aproveitando o SSD do PS5
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-black/30 border-white/10 backdrop-blur-sm text-center">
              <CardHeader>
                <div className="text-4xl mb-4">🎨</div>
                <CardTitle className="text-white">Ray Tracing</CardTitle>
                <CardDescription className="text-white/70">
                  Reflexos e iluminação realistas com Ray Tracing nativo
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-black/30 border-white/10 backdrop-blur-sm text-center">
              <CardHeader>
                <div className="text-4xl mb-4">🎮</div>
                <CardTitle className="text-white">DualSense</CardTitle>
                <CardDescription className="text-white/70">
                  Haptic Feedback e gatilhos adaptativos integrados
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <PaymentMethodModal
        isOpen={paymentModal.isOpen}
        onClose={closePaymentModal}
        pixLink={paymentModal.pixLink}
        cardLink={paymentModal.cardLink}
        productName={paymentModal.productName}
      />

      <Footer />
    </div>
  )
}
