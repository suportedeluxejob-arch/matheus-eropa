"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, Star, Shield, Zap, Trophy } from "lucide-react"
import { Footer } from "@/components/footer"
import { PaymentMethodModal } from "@/components/payment-method-modal"
import { useState } from "react"
import Link from "next/link"

export default function JogosPage() {
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

  const games = [
    {
      name: "EA SPORTS FC 26",
      price: "R$ 99,90",
      originalPrice: "R$ 199,90",
      image: "/eafc26-bundle-promo.png",
      description: "O mais novo lançamento da franquia EA Sports FC! Jogo completo com mídia digital.",
      features: ["🚀 LANÇAMENTO 2026", "Jogo completo digital", "Todos os modos de jogo", "Mídia digital na sua conta"],
      platforms: ["PS4", "PS5", "Xbox", "PC"],
      rating: 5.0,
      downloads: "850",
      isNew: true,
      pixLink: "https://go.invictuspay.app.br/3p65wtvjht",
      cardLink: "https://pay.cakto.com.br/agtjpxf_638373",
    },
    {
      name: "EA SPORTS FC 25",
      price: "R$ 79,90",
      originalPrice: "R$ 159,90",
      image: "/eafc25-bundle.png",
      description: "EA Sports FC 25 completo com todos os modos e atualizações. Mídia digital garantida.",
      features: ["Jogo completo digital", "Ultimate Team", "Carreira e Volta", "Mídia digital instantânea"],
      platforms: ["PS4", "PS5", "Xbox", "PC"],
      rating: 4.9,
      downloads: "3.2k",
      pixLink: "https://go.invictuspay.app.br/rt0t2uecxd",
      cardLink: "https://pay.cakto.com.br/39xfxuj_638367",
    },
    {
      name: "PES 2021 (eFootball)",
      price: "R$ 59,90",
      originalPrice: "R$ 119,90",
      image: "/pes2021-bundle.png",
      description: "PES 2021 completo, última versão standalone antes do eFootball. Jogo digital completo.",
      features: ["Jogo PES 2021 completo", "Mídia digital", "Todos os modos incluídos", "Compatível com patches"],
      platforms: ["PS4", "PS5", "Xbox", "PC"],
      rating: 4.8,
      downloads: "5.7k",
      pixLink: "https://go.invictuspay.app.br/ovmhlg21rh",
      cardLink: "https://pay.cakto.com.br/3634a38_638395",
    },
  ]

  return (
    <div className="bg-gradient-to-br from-black via-slate-900 to-black min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0">
            🎮 Jogos Digitais
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Jogos de Futebol
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400"> Completos</span>
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            Adquira jogos digitais completos de futebol para todas as plataformas. Mídia digital instantânea e suporte
            garantido.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Badge className="bg-green-600/20 text-green-300 border-green-500/30 px-4 py-2">
              ✓ Mídia Digital Instantânea
            </Badge>
            <Badge className="bg-blue-600/20 text-blue-300 border-blue-500/30 px-4 py-2">✓ Todas as Plataformas</Badge>
            <Badge className="bg-cyan-600/20 text-cyan-300 border-cyan-500/30 px-4 py-2">✓ Suporte Garantido</Badge>
          </div>
        </div>
      </section>

      {/* Games Grid */}
      <section className="py-20 px-4 bg-black/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Jogos Disponíveis</h2>
            <p className="text-white/70 text-lg">Escolha seu jogo favorito e receba acesso instantâneo</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {games.map((game, index) => (
              <Card key={index} className="bg-black/30 border-white/10 backdrop-blur-sm overflow-hidden">
                <div className="relative">
                  <img src={game.image || "/placeholder.svg"} alt={game.name} className="w-full h-56 object-cover" />
                  <div className="absolute top-4 right-4 flex flex-col gap-2">
                    {game.isNew && (
                      <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold animate-pulse">
                        🚀 LANÇAMENTO
                      </Badge>
                    )}
                    <Badge className="bg-purple-600/90 text-white">{game.downloads} vendas</Badge>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-white text-xl">{game.name}</CardTitle>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-white/80 text-sm">{game.rating}</span>
                    </div>
                  </div>
                  <CardDescription className="text-white/70">{game.description}</CardDescription>
                  <div className="flex gap-2 mt-3 flex-wrap">
                    {game.platforms.map((platform, idx) => (
                      <Badge key={idx} variant="outline" className="border-cyan-500/30 text-cyan-300">
                        {platform}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {game.features.map((feature, idx) => (
                      <li key={idx} className="text-white/70 text-sm flex items-center">
                        <Shield className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="text-2xl font-bold text-cyan-400">{game.price}</div>
                    {game.originalPrice && <div className="text-white/60 line-through">{game.originalPrice}</div>}
                  </div>
                  <Button
                    onClick={() => openPaymentModal(game.pixLink, game.cardLink, game.name)}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Comprar Jogo
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Por Que Comprar Jogos Conosco?</h2>
            <p className="text-white/70 text-lg">Vantagens exclusivas na compra de jogos digitais</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-black/30 border-white/10 backdrop-blur-sm text-center">
              <CardHeader>
                <Zap className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
                <CardTitle className="text-white">Entrega Instantânea</CardTitle>
                <CardDescription className="text-white/70">
                  Receba o acesso ao jogo imediatamente após a aprovação do pagamento
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-black/30 border-white/10 backdrop-blur-sm text-center">
              <CardHeader>
                <Shield className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
                <CardTitle className="text-white">100% Seguro</CardTitle>
                <CardDescription className="text-white/70">
                  Mídia digital oficial, sem risco de ban ou problemas com sua conta
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-black/30 border-white/10 backdrop-blur-sm text-center">
              <CardHeader>
                <Trophy className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
                <CardTitle className="text-white">Suporte Total</CardTitle>
                <CardDescription className="text-white/70">
                  Equipe pronta para ajudar com instalação e qualquer dúvida
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Bundles Promotion */}
      <section className="py-20 px-4 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-gradient-to-r from-red-600 to-orange-600 text-white border-0 text-lg px-6 py-2">
            🔥 SUPER OFERTA
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Procurando Pacotes Completos?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Confira nossos bundles de Jogo + Patch com os melhores preços e economize ainda mais!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600"
            >
              <Link href="/">Ver Pacotes Completos</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 bg-transparent"
            >
              <Link href="/demonstracao">Ver Demonstração</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Payment Modal */}
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
