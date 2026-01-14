"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, Star, Shield, Gamepad2 } from "lucide-react"
import { Footer } from "@/components/footer"
import { CountdownTimer } from "@/components/countdown-timer"
import { PaymentMethodModal } from "@/components/payment-method-modal"
import { useState } from "react"

export default function XboxPage() {
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
        "Smart Delivery incluído",
        "Mídia digital na sua conta",
      ],
      rating: 5.0,
      downloads: "1.3k",
      compatibility: "Series X|S + One",
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
        "Smart Delivery incluído",
        "Quick Resume compatível",
      ],
      rating: 5.0,
      downloads: "2.8k",
      compatibility: "Series X|S + One",
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
        "Smart Delivery incluído",
        "Quick Resume compatível",
        "Auto HDR otimizado",
      ],
      rating: 4.9,
      downloads: "28.7k",
      compatibility: "Series X|S + One",
      featured: true,
    },
    {
      name: "PATCH EAFC 25 + JOGO EAFC 25 - TIMES BRASILEIROS",
      price: "R$ 79,90",
      originalPrice: "R$ 159,90",
      image: "/eafc25-bundle.png",
      features: [
        "Jogo EA FC 25 completo incluído",
        "Smart Delivery compatível",
        "Patch premium times brasileiros",
        "Auto HDR otimizado",
      ],
      rating: 4.9,
      downloads: "12.3k",
      compatibility: "Series X|S + One",
      featured: true,
    },
    {
      name: "EAFC 24 - Times Brasileiros Licenciados",
      price: "R$ 39,90",
      originalPrice: "R$ 79,90",
      image: "/eafc24-brasileiros.png",
      features: ["Times brasileiros completos", "Smart Delivery compatível", "Backward Compatible", "FPS Boost ready"],
      rating: 4.8,
      downloads: "35.2k",
      compatibility: "Series X|S + One",
      featured: true,
    },
    {
      name: "PES 2021 VERSÃO 25 + JOGO PES 21 - TIMES BRASILEIROS",
      price: "R$ 59,90",
      originalPrice: "R$ 119,90",
      image: "/pes2021-bundle.png",
      features: [
        "Jogo PES 2021 completo incluído",
        "Smart Delivery compatível",
        "FPS Boost otimizado",
        "Backward Compatible",
      ],
      rating: 4.7,
      downloads: "20.1k",
      compatibility: "Series X|S + One",
      featured: true,
    },
    {
      name: "PES 2021 VERSÃO 25 - TIMES BRASILEIROS",
      price: "R$ 34,90",
      originalPrice: "R$ 69,90",
      image: "/pes2021-patch.png",
      features: [
        "Patch premium versão 2025",
        "Smart Delivery compatível",
        "Times brasileiros atualizados",
        "Backward Compatible",
      ],
      rating: 4.7,
      downloads: "15.2k",
      compatibility: "Series X|S + One",
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
      compatibility: "iOS + Android",
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
              <img src="/xbox-logo.jpg" alt="Xbox Series X|S" className="h-20 w-auto object-contain" />
            </div>
            <div>
              <Badge className="mb-2 bg-green-600/20 text-green-300 border-green-500/30">
                Xbox Series X|S + Xbox One
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Patches para
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400"> Xbox</span>
              </h1>
            </div>
          </div>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            Patches compatíveis com Xbox Series X|S e Xbox One, aproveitando Smart Delivery e todas as tecnologias Xbox.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 px-4 bg-black/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Patches para Xbox</h2>
            <p className="text-white/70 text-lg">Compatibilidade total com Xbox Series X|S e Xbox One</p>
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
                    <Badge className="bg-green-600/90 text-white">{product.compatibility}</Badge>
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
                        <Shield className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
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
                                        : "",
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
                      className="flex-1 bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Comprar Agora
                    </Button>
                    {/* </CHANGE> */}
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

      {/* Xbox Specific Features */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Vantagens Xbox</h2>
            <p className="text-white/70 text-lg">Aproveite todas as tecnologias exclusivas do ecossistema Xbox</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-black/30 border-white/10 backdrop-blur-sm text-center">
              <CardHeader>
                <Gamepad2 className="h-12 w-12 text-green-400 mx-auto mb-4" />
                <CardTitle className="text-white">Smart Delivery</CardTitle>
                <CardDescription className="text-white/70">
                  Automaticamente otimizado para seu console Xbox
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-black/30 border-white/10 backdrop-blur-sm text-center">
              <CardHeader>
                <div className="text-4xl mb-4">⚡</div>
                <CardTitle className="text-white">Quick Resume</CardTitle>
                <CardDescription className="text-white/70">
                  Retome seus jogos instantaneamente onde parou
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-black/30 border-white/10 backdrop-blur-sm text-center">
              <CardHeader>
                <Shield className="h-12 w-12 text-green-400 mx-auto mb-4" />
                <CardTitle className="text-white">Backward Compatible</CardTitle>
                <CardDescription className="text-white/70">Funciona em Xbox One, Series S e Series X</CardDescription>
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
