"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, Zap, Users, Trophy, Check, Shield, Star } from "lucide-react"
import { Footer } from "@/components/footer"
import { PaymentMethodModal } from "@/components/payment-method-modal"
import { CountdownTimer } from "@/components/countdown-timer"
import { useState } from "react"
import Link from "next/link"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  const [paymentModal, setPaymentModal] = useState({
    isOpen: false,
    pixLink: "",
    cardLink: "",
    productName: "",
  })

  const [selectedLicense, setSelectedLicense] = useState<"secundaria" | "primaria">("secundaria")

  const openPaymentModal = (pixLink: string, cardLink: string, productName: string) => {
    setPaymentModal({ isOpen: true, pixLink, cardLink, productName })
  }

  const closePaymentModal = () => {
    setPaymentModal({ isOpen: false, pixLink: "", cardLink: "", productName: "" })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-cyan-900">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto w-full text-center animate-fade-in">
          <Badge className="mb-4 sm:mb-6 bg-cyan-600/20 text-cyan-300 border-cyan-500/30 inline-block text-sm sm:text-base px-3 sm:px-4 py-2 sm:py-2.5">
            🎮 Patches Completos
          </Badge>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight animate-slide-up">
            Leve sua experiência no
            <span className="block sm:inline text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              {" "}
              futebol virtual{" "}
            </span>
            a outro nível
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-white/80 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed">
            Com o WG Patch Futebol, o patch mais completo e realista do mercado! Times brasileiros clássicos, jogadores
            lendários, ligas licenciadas e instalação remota.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 bg-transparent hover:border-white/40 font-bold h-12 sm:h-14"
            >
              <Link href="/demonstracao">Ver Demonstração</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Escolha Sua Plataforma</h2>
            <p className="text-white/70 text-xl">Patches para todas as plataformas</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "PlayStation 4",
                icon: "🎮",
                color: "from-blue-500 to-blue-600",
                href: "/ps4",
                desc: "PlayStation 4",
              },
              {
                name: "PlayStation 5",
                icon: "🎮",
                color: "from-blue-400 to-blue-500",
                href: "/ps5",
                desc: "PlayStation 5",
              },
              {
                name: "Xbox Series",
                icon: "🎯",
                color: "from-green-500 to-green-600",
                href: "/xbox",
                desc: "Xbox Series",
              },
              {
                name: "PC Gaming",
                icon: "💻",
                color: "from-cyan-500 to-cyan-600",
                href: "/pc",
                desc: "PC Gaming",
              },
            ].map((platform, index) => (
              <Link key={index} href={platform.href}>
                <Card className="bg-black/30 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all cursor-pointer h-full">
                  <CardContent className="p-8 text-center">
                    <div className={`text-4xl mb-4 p-4 rounded-full bg-gradient-to-r ${platform.color} w-fit mx-auto`}>
                      {platform.icon}
                    </div>
                    <h3 className="text-white font-semibold text-lg mb-2">{platform.desc}</h3>
                    <p className="text-white/60 text-sm">Patches otimizados</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-red-600/20 text-red-300 border-red-500/30">🔥 DESTAQUE</Badge>
            <h2 className="text-4xl font-bold text-white mb-4">Produtos em Destaque</h2>
            <p className="text-white/70 text-xl">Os patches mais populares e completos</p>
          </div>

          <div className="mb-12">
            <Card className="relative bg-gradient-to-br from-purple-900/40 via-blue-900/40 to-cyan-900/40 border-2 border-purple-500/50 backdrop-blur-sm overflow-hidden hover:border-purple-400/70 transition-all shadow-2xl shadow-purple-500/20">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-cyan-500/20 to-transparent rounded-full blur-3xl" />

              <div className="relative flex flex-col md:grid md:grid-cols-2 gap-6 p-4 md:p-8">
                <div className="relative w-full max-w-sm mx-auto md:max-w-none aspect-[3/4] overflow-hidden rounded-lg border-2 border-purple-500/30 bg-black">
                  <img
                    src="/images/egs-easportsfc26standardedition-eacanada-s2-1200x1600-effee280c00b9890a0c5249d4b0e5c97.jpg"
                    alt="EA Sports FC 26 - Mídia Digital"
                    className="w-full h-full object-contain rounded-lg"
                  />

                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 md:h-5 md:w-5 fill-yellow-400 text-yellow-400" />
                      <Star className="h-4 w-4 md:h-5 md:w-5 fill-yellow-400 text-yellow-400" />
                      <Star className="h-4 w-4 md:h-5 md:w-5 fill-yellow-400 text-yellow-400" />
                      <Star className="h-4 w-4 md:h-5 md:w-5 fill-yellow-400 text-yellow-400" />
                      <Star className="h-4 w-4 md:h-5 md:w-5 fill-yellow-400 text-yellow-400" />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-4">
                      <Badge className="bg-purple-600/30 text-white border-purple-500/50 text-sm md:text-lg px-3 md:px-4 py-1 md:py-2">
                        EA Sports FC 26
                      </Badge>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 md:h-5 md:w-5 fill-yellow-400 text-yellow-400" />
                        <Star className="h-4 w-4 md:h-5 md:w-5 fill-yellow-400 text-yellow-400" />
                        <Star className="h-4 w-4 md:h-5 md:w-5 fill-yellow-400 text-yellow-400" />
                        <Star className="h-4 w-4 md:h-5 md:w-5 fill-yellow-400 text-yellow-400" />
                        <Star className="h-4 w-4 md:h-5 md:w-5 fill-yellow-400 text-yellow-400" />
                      </div>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                      EA Sports FC 26 - Mídia Digital
                    </h3>

                    <p className="text-white/90 mb-4 md:mb-6 text-base md:text-lg leading-relaxed">
                      Jogo completo digital do EA Sports FC 26 para PS5, PS4 e Xbox. Acesso imediato na sua conta com
                      todos os recursos oficiais e atualizações.
                    </p>

                    <div className="grid grid-cols-2 gap-2 md:gap-3 mb-4 md:mb-6">
                      <div className="flex items-center gap-2 text-cyan-300">
                        <Check className="h-4 w-4 md:h-5 md:w-5 flex-shrink-0" />
                        <span className="text-xs md:text-sm">PS5 | PS4 | Xbox</span>
                      </div>
                      <div className="flex items-center gap-2 text-cyan-300">
                        <Check className="h-4 w-4 md:h-5 md:w-5 flex-shrink-0" />
                        <span className="text-xs md:text-sm">Acesso Imediato</span>
                      </div>
                      <div className="flex items-center gap-2 text-cyan-300">
                        <Check className="h-4 w-4 md:h-5 md:w-5 flex-shrink-0" />
                        <span className="text-xs md:text-sm">Licença Oficial</span>
                      </div>
                      <div className="flex items-center gap-2 text-cyan-300">
                        <Check className="h-4 w-4 md:h-5 md:w-5 flex-shrink-0" />
                        <span className="text-xs md:text-sm">Suporte Total</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="mb-4 md:mb-6 p-3 md:p-4 bg-black/30 rounded-lg border border-purple-500/30">
                      <h4 className="text-white font-semibold mb-2 md:mb-3 text-center text-sm md:text-base">
                        Escolha o Tipo de Licença:
                      </h4>
                      <div className="grid grid-cols-2 gap-2 md:gap-3">
                        <button
                          onClick={() => setSelectedLicense("secundaria")}
                          className={`p-3 md:p-4 rounded-lg border-2 transition-all ${
                            selectedLicense === "secundaria"
                              ? "border-cyan-500 bg-cyan-500/20 shadow-lg shadow-cyan-500/50"
                              : "border-white/20 bg-white/5 hover:border-cyan-500/50"
                          }`}
                        >
                          <div className="text-center">
                            <p className="text-white font-bold text-sm md:text-lg mb-1">Secundária</p>
                            <p className="text-cyan-400 font-bold text-lg md:text-2xl">R$ 29,90</p>
                            <p className="text-white/60 text-[10px] md:text-xs mt-1">Conta compartilhada</p>
                          </div>
                        </button>

                        <button
                          onClick={() => setSelectedLicense("primaria")}
                          className={`p-3 md:p-4 rounded-lg border-2 transition-all ${
                            selectedLicense === "primaria"
                              ? "border-purple-500 bg-purple-500/20 shadow-lg shadow-purple-500/50"
                              : "border-white/20 bg-white/5 hover:border-purple-500/50"
                          }`}
                        >
                          <div className="text-center">
                            <p className="text-white font-bold text-sm md:text-lg mb-1">Primária</p>
                            <p className="text-purple-400 font-bold text-lg md:text-2xl">R$ 74,90</p>
                            <p className="text-white/60 text-[10px] md:text-xs mt-1">Conta exclusiva</p>
                          </div>
                        </button>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-baseline gap-2 md:gap-4 mb-4 md:mb-6">
                      <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                        {selectedLicense === "secundaria" ? "R$ 29,90" : "R$ 74,90"}
                      </div>
                      <div className="text-white/50 line-through text-lg md:text-xl">
                        {selectedLicense === "secundaria" ? "R$ 59,90" : "R$ 149,90"}
                      </div>
                      <Badge className="bg-green-600 text-white text-xs md:text-sm">50% OFF</Badge>
                    </div>

                    <div className="mb-4 md:mb-6 p-3 md:p-4 bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-lg border border-green-500/30">

                    </div>

                    <Button
                      onClick={() =>
                        openPaymentModal(
                          selectedLicense === "secundaria"
                            ? "https://go.invictuspay.app.br/p9z3m78rwl"
                            : "https://go.invictuspay.app.br/ywfgl87azm",
                          "", // Credit card link - to be added
                          `EA Sports FC 26 - Mídia Digital (${selectedLicense === "secundaria" ? "Licença Secundária" : "Licença Primária"})`,
                        )
                      }
                      className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 hover:from-purple-700 hover:via-pink-700 hover:to-cyan-700 text-white font-bold text-base md:text-lg py-4 md:py-6 shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 transition-all"
                    >
                      <Download className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                      <span className="truncate">
                        Comprar Agora - {selectedLicense === "secundaria" ? "Licença Secundária" : "Licença Primária"}
                      </span>
                    </Button>

                    <div className="mt-3 md:mt-4 flex items-center justify-center gap-2 text-purple-300 text-xs md:text-sm">
                      <Shield className="h-3 w-3 md:h-4 md:w-4" />
                      <span>Compra 100% Segura e Garantida</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* EAFC 26 Bundle - SUPER PROMO */}
            <Card className="bg-black/30 border-white/10 backdrop-blur-sm overflow-hidden hover:bg-white/5 transition-all">
              <div className="relative">
                <img
                  src="/eafc26-bundle-promo.png"
                  alt="PATCH EAFC 26 + JOGO EAFC 26"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 left-3">
                  <Badge className="bg-gradient-to-r from-red-600 to-orange-600 text-white font-bold animate-pulse text-lg">
                    🔥 SUPER PROMOÇÃO
                  </Badge>
                </div>
              </div>
              <div className="p-6">
                <Badge className="mb-3 bg-cyan-600/20 text-cyan-300 border-cyan-500/30 w-fit">Pacote Completo</Badge>
                <div className="mb-3">
                  <CountdownTimer hours={0.083} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">PATCH EAFC 26 + JOGO EAFC 26</h3>
                <p className="text-white/70 mb-4">
                  Super promoção! Jogo completo EA FC 26 + patch premium com times brasileiros. Mídia digital na sua
                  conta.
                </p>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="text-2xl font-bold text-cyan-400">R$ 99,90</div>
                  <div className="text-white/60 line-through">R$ 199,90</div>
                </div>
                <Button
                  onClick={() =>
                    openPaymentModal(
                      "https://go.invictuspay.app.br/3p65wtvjht",
                      "https://pay.cakto.com.br/agtjpxf_638373",
                      "PATCH EAFC 26 + JOGO EAFC 26",
                    )
                  }
                  className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Comprar Agora - Super Oferta
                </Button>
              </div>
            </Card>

            {/* EAFC 26 Product - NEW LAUNCH */}
            <Card className="bg-black/30 border-white/10 backdrop-blur-sm overflow-hidden hover:bg-white/5 transition-all">
              <div className="relative">
                <img src="/site-26.png" alt="EAFC 26 - Times Brasileiros" className="w-full h-48 object-cover" />
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold animate-pulse">
                    🚀 LANÇAMENTO
                  </Badge>
                  <Badge className="bg-red-600/90 text-white">50% OFF</Badge>
                </div>
              </div>
              <div className="p-6">
                <Badge className="mb-3 bg-cyan-600/20 text-cyan-300 border-cyan-500/30 w-fit">EA Sports FC 26</Badge>
                <h3 className="text-xl font-bold text-white mb-3">EAFC 26 - Times Brasileiros</h3>
                <p className="text-white/70 mb-4">
                  O mais novo lançamento! Patch completo do EA Sports FC 26 com todos os times brasileiros licenciados.
                </p>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="text-2xl font-bold text-cyan-400">R$ 59,90</div>
                  <div className="text-white/60 line-through">R$ 119,90</div>
                </div>
                <Button
                  onClick={() =>
                    openPaymentModal(
                      "https://go.invictuspay.app.br/qaatnpzass",
                      "https://pay.cakto.com.br/5jgfx87_638363",
                      "EAFC 26 - Times Brasileiros",
                    )
                  }
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Comprar Agora
                </Button>
              </div>
            </Card>

            {/* EAFC 25 Product */}
            <Card className="bg-black/30 border-white/10 backdrop-blur-sm overflow-hidden hover:bg-white/5 transition-all">
              <div className="relative">
                <img
                  src="/eafc25-brasileiros.png"
                  alt="EAFC 25 - Times Brasileiros"
                  className="w-full h-48 object-cover"
                />
                <Badge className="absolute top-3 left-3 bg-red-600/90 text-white">50% OFF</Badge>
              </div>
              <div className="p-6">
                <Badge className="mb-3 bg-cyan-600/20 text-cyan-300 border-cyan-500/30 w-fit">EA Sports FC 25</Badge>
                <h3 className="text-xl font-bold text-white mb-3">EAFC 25 - Times Brasileiros</h3>
                <p className="text-white/70 mb-4">
                  O patch mais completo do EA Sports FC 25 com todos os times brasileiros licenciados.
                </p>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="text-2xl font-bold text-cyan-400">R$ 49,90</div>
                  <div className="text-white/60 line-through">R$ 99,90</div>
                </div>
                <Button
                  onClick={() =>
                    openPaymentModal(
                      "https://go.invictuspay.app.br/fuv2ufja8l",
                      "https://pay.cakto.com.br/39xfxuj_638367",
                      "EAFC 25 - Times Brasileiros",
                    )
                  }
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Comprar Agora
                </Button>
              </div>
            </Card>

            {/* EAFC 25 Bundle */}
            <Card className="bg-black/30 border-white/10 backdrop-blur-sm overflow-hidden hover:bg-white/5 transition-all">
              <div className="relative">
                <img
                  src="/eafc25-bundle.png"
                  alt="PATCH EAFC 25 + JOGO EAFC 25 - Times Brasileiros"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  <Badge className="bg-gold-600/90 text-white">PACOTE</Badge>
                </div>
              </div>
              <div className="p-6">
                <Badge className="mb-3 bg-cyan-600/20 text-cyan-300 border-cyan-500/30 w-fit">Pacote Completo</Badge>
                <h3 className="text-xl font-bold text-white mb-3">PATCH EAFC 25 + JOGO EAFC 25</h3>
                <p className="text-white/70 mb-4">
                  Pacote completo com o jogo EA FC 25 + patch premium com times brasileiros.
                </p>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="text-2xl font-bold text-cyan-400">R$ 79,90</div>
                  <div className="text-white/60 line-through">R$ 159,90</div>
                </div>
                <Button
                  onClick={() =>
                    openPaymentModal(
                      "https://go.invictuspay.app.br/rt0t2uecxd",
                      "https://pay.cakto.com.br/39xfxuj_638367",
                      "PATCH EAFC 25 + JOGO EAFC 25",
                    )
                  }
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Comprar Agora
                </Button>
              </div>
            </Card>

            {/* EAFC 24 */}
            <Card className="bg-black/30 border-white/10 backdrop-blur-sm overflow-hidden hover:bg-white/5 transition-all">
              <div className="relative">
                <img
                  src="/eafc24-brasileiros.png"
                  alt="EAFC 24 - Times Brasileiros"
                  className="w-full h-48 object-cover"
                />
                <Badge className="absolute top-3 left-3 bg-orange-600/90 text-white">50% OFF</Badge>
              </div>
              <div className="p-6">
                <Badge className="mb-3 bg-cyan-600/20 text-cyan-300 border-cyan-500/30 w-fit">EA Sports FC 24</Badge>
                <h3 className="text-xl font-bold text-white mb-3">EAFC 24 - Times Brasileiros</h3>
                <p className="text-white/70 mb-4">
                  A versão clássica do EA Sports FC 24 com todos os times brasileiros.
                </p>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="text-2xl font-bold text-cyan-400">R$ 39,90</div>
                  <div className="text-white/60 line-through">R$ 79,90</div>
                </div>
                <Button
                  onClick={() =>
                    openPaymentModal(
                      "https://go.invictuspay.app.br/kllijhnfgx",
                      "https://pay.cakto.com.br/337h6fv_638368",
                      "EAFC 24 - Times Brasileiros",
                    )
                  }
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Comprar Agora
                </Button>
              </div>
            </Card>

            {/* PES 2021 Bundle */}
            <Card className="bg-black/30 border-white/10 backdrop-blur-sm overflow-hidden hover:bg-white/5 transition-all">
              <div className="relative">
                <img
                  src="/pes2021-bundle.png"
                  alt="PES 2021 Versão 25 - Times Brasileiros"
                  className="w-full h-48 object-cover"
                />
                <Badge className="absolute top-3 left-3 bg-purple-600/90 text-white">50% OFF</Badge>
              </div>
              <div className="p-6">
                <Badge className="mb-3 bg-cyan-600/20 text-cyan-300 border-cyan-500/30 w-fit">eFootball PES 2021</Badge>
                <h3 className="text-xl font-bold text-white mb-3">PES 2021 VERSÃO 25 + JOGO PES 21</h3>
                <p className="text-white/70 mb-4">
                  O bundle completo com o jogo PES 2021 original + patch com todos os times brasileiros.
                </p>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="text-2xl font-bold text-cyan-400">R$ 59,90</div>
                  <div className="text-white/60 line-through">R$ 119,90</div>
                </div>
                <Button
                  onClick={() =>
                    openPaymentModal(
                      "https://go.invictuspay.app.br/ovmhlg21rh",
                      "https://pay.cakto.com.br/3634a38_638395",
                      "PES 2021 VERSÃO 25 + JOGO PES 21",
                    )
                  }
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Comprar Agora
                </Button>
              </div>
            </Card>

            {/* PES 2021 Patch */}
            <Card className="bg-black/30 border-white/10 backdrop-blur-sm overflow-hidden hover:bg-white/5 transition-all">
              <div className="relative">
                <img
                  src="/pes2021-patch.png"
                  alt="PES 2021 Versão 25 - Patch Times Brasileiros"
                  className="w-full h-48 object-cover"
                />
                <Badge className="absolute top-3 left-3 bg-green-600/90 text-white">PATCH</Badge>
              </div>
              <div className="p-6">
                <Badge className="mb-3 bg-cyan-600/20 text-cyan-300 border-cyan-500/30 w-fit">eFootball PES 2021</Badge>
                <h3 className="text-xl font-bold text-white mb-3">PES 2021 VERSÃO 25 - TIMES BRASILEIROS</h3>
                <p className="text-white/70 mb-4">
                  Patch premium com todos os times brasileiros atualizados para 2025.
                </p>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="text-2xl font-bold text-cyan-400">R$ 34,90</div>
                  <div className="text-white/60 line-through">R$ 69,90</div>
                </div>
                <Button
                  onClick={() =>
                    openPaymentModal(
                      "https://go.invictuspay.app.br/qcgqeanwjc",
                      "https://pay.cakto.com.br/8fekayj_638394",
                      "PES 2021 VERSÃO 25 - TIMES BRASILEIROS",
                    )
                  }
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Comprar Agora
                </Button>
              </div>
            </Card>

            {/* DFL 25 Mobile */}
            <Card className="bg-black/30 border-white/10 backdrop-blur-sm overflow-hidden hover:bg-white/5 transition-all">
              <div className="relative">
                <img
                  src="/dfl25-celular.png"
                  alt="DFL 25 - Times Brasileiros Celular"
                  className="w-full h-48 object-cover"
                />
                <Badge className="absolute top-3 left-3 bg-red-600/90 text-white">50% OFF</Badge>
              </div>
              <div className="p-6">
                <Badge className="mb-3 bg-cyan-600/20 text-cyan-300 border-cyan-500/30 w-fit">Mobile Gaming</Badge>
                <h3 className="text-xl font-bold text-white mb-3">DFL 25 - TIMES BRASILEIROS CELULAR</h3>
                <p className="text-white/70 mb-4">
                  Experimente o futebol brasileiro no seu celular com times atualizados.
                </p>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="text-2xl font-bold text-cyan-400">R$ 29,90</div>
                  <div className="text-white/60 line-through">R$ 59,90</div>
                </div>
                <Button
                  onClick={() =>
                    openPaymentModal(
                      "https://pay.cakto.com.br/xa54qtu_638427",
                      "https://pay.cakto.com.br/xa54qtu_638427",
                      "DFL 25 - TIMES BRASILEIROS CELULAR",
                    )
                  }
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Comprar Agora
                </Button>
              </div>
            </Card>

            {/* Remote Installation Service */}
            <Card className="bg-black/30 border-white/10 backdrop-blur-sm overflow-hidden hover:bg-white/5 transition-all">
              <div className="relative">
                <img src="/instalacao-remota.png" alt="Instalação Remota" className="w-full h-48 object-cover" />
                <Badge className="absolute top-3 left-3 bg-blue-600/90 text-white">SERVIÇO</Badge>
              </div>
              <div className="p-6">
                <Badge className="mb-3 bg-cyan-600/20 text-cyan-300 border-cyan-500/30 w-fit">
                  Instalação Profissional
                </Badge>
                <h3 className="text-xl font-bold text-white mb-3">INSTALAÇÃO REMOTA</h3>
                <p className="text-white/70 mb-4">
                  Serviço de instalação remota profissional para FC24, FC25 e PES 2021. Rápido, seguro e sem
                  complicação.
                </p>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="text-2xl font-bold text-cyan-400">R$ 19,90</div>
                </div>
                <Button
                  onClick={() =>
                    openPaymentModal(
                      "https://pay.cakto.com.br/xhxaq8h_638384",
                      "https://pay.cakto.com.br/xhxaq8h_638384",
                      "INSTALAÇÃO REMOTA",
                    )
                  }
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Contratar Serviço
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Por Que Escolher Nossos Patches?</h2>
            <p className="text-white/70 text-xl">Qualidade, confiança e praticidade</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-black/30 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Zap className="h-12 w-12 text-cyan-400" />
                  <div>
                    <CardTitle className="text-white text-xl">Instalação Remota</CardTitle>
                    <CardDescription className="text-white/70">Instalação rápida e sem complicação</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="bg-black/30 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Users className="h-12 w-12 text-cyan-400" />
                  <div>
                    <CardTitle className="text-white text-xl">Times Brasileiros</CardTitle>
                    <CardDescription className="text-white/70">Times clássicos e jogadores lendários</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="bg-black/30 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Trophy className="h-12 w-12 text-cyan-400" />
                  <div>
                    <CardTitle className="text-white text-xl">Ligas Licenciadas</CardTitle>
                    <CardDescription className="text-white/70">
                      Conteúdo exclusivo e atualizações constantes
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Payment Method Modal */}
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
