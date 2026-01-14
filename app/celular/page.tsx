"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, Star, Smartphone, Gamepad2, Users, Trophy, Shield, Zap } from "lucide-react"
import { Footer } from "@/components/footer"
import { PaymentMethodModal } from "@/components/payment-method-modal"
import { useState } from "react"

export default function CelularPage() {
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

  return (
    <div className="bg-gradient-to-br from-black via-slate-900 to-black min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="mr-4">
              <div className="h-16 w-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center">
                <Smartphone className="h-8 w-8 text-white" />
              </div>
            </div>
            <div>
              <Badge className="mb-2 bg-gradient-to-r from-cyan-600/20 to-purple-600/20 text-cyan-300 border-cyan-500/30">
                📱 Mobile Gaming
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Futebol Brasileiro
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  {" "}
                  no Celular
                </span>
              </h1>
            </div>
          </div>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            Experimente o futebol brasileiro na palma da sua mão com times atualizados, jogadores licenciados e
            jogabilidade otimizada para dispositivos móveis.
          </p>
        </div>
      </section>

      {/* Main Product Section */}
      <section className="py-20 px-4 bg-black/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-red-600/20 text-red-300 border-red-500/30">🔥 PRODUTO EXCLUSIVO MOBILE</Badge>
            <h2 className="text-4xl font-bold text-white mb-4">DFL 25 - Times Brasileiros</h2>
            <p className="text-white/70 text-lg">A experiência completa do futebol brasileiro no seu smartphone!</p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Card className="bg-black/30 border-white/10 backdrop-blur-sm overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative">
                  <img
                    src="/dfl25-celular.png"
                    alt="DFL 25 - Times Brasileiros Celular"
                    className="w-full h-full object-cover min-h-[400px]"
                  />
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    <Badge className="bg-red-600/90 text-white text-lg px-4 py-2">50% OFF - MOBILE</Badge>
                    <Badge className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white">
                      📱 EXCLUSIVO MOBILE
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-black/80 backdrop-blur-sm rounded-lg p-4">
                      <div className="flex items-center justify-between text-white">
                        <div className="flex items-center gap-2">
                          <Star className="h-5 w-5 text-yellow-400 fill-current" />
                          <span className="font-bold">4.8/5</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Download className="h-5 w-5 text-cyan-400" />
                          <span className="font-bold">8.5k downloads</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <Badge className="mb-6 bg-gradient-to-r from-cyan-600/20 to-purple-600/20 text-cyan-300 border-cyan-500/30 w-fit text-lg px-4 py-2">
                    DFL 25 Mobile
                  </Badge>

                  <h3 className="text-4xl font-bold text-white mb-6">DFL 25 - TIMES BRASILEIROS CELULAR</h3>

                  <p className="text-xl text-white/80 mb-8 leading-relaxed">
                    Experimente o futebol brasileiro no seu celular com times atualizados, jogadores licenciados e
                    jogabilidade otimizada para dispositivos móveis. Compatível com iOS e Android.
                  </p>

                  <div className="flex gap-4 mb-8">
                    <Button
                      onClick={() =>
                        openPaymentModal(
                          "https://pay.cakto.com.br/xa54qtu_638427",
                          "https://pay.cakto.com.br/xa54qtu_638427",
                          "DFL 25 - TIMES BRASILEIROS CELULAR",
                        )
                      }
                      size="lg"
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-lg py-6"
                    >
                      <Download className="mr-2 h-5 w-5" />
                      Comprar Agora
                    </Button>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-white/5 rounded-lg p-4">
                      <Smartphone className="h-8 w-8 text-cyan-400 mx-auto mb-2" />
                      <p className="text-white font-semibold">iOS & Android</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                      <Shield className="h-8 w-8 text-green-400 mx-auto mb-2" />
                      <p className="text-white font-semibold">100% Seguro</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Características do Jogo</h2>
            <p className="text-white/70 text-lg">Tudo que você precisa saber sobre o DFL 25 Mobile</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-black/30 border-white/10 backdrop-blur-sm text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
                <CardTitle className="text-white">Times Brasileiros</CardTitle>
                <CardDescription className="text-white/70">
                  Todos os principais times do futebol brasileiro atualizados para 2025
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-black/30 border-white/10 backdrop-blur-sm text-center">
              <CardHeader>
                <Gamepad2 className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
                <CardTitle className="text-white">Jogabilidade Mobile</CardTitle>
                <CardDescription className="text-white/70">
                  Controles otimizados especialmente para dispositivos móveis
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-black/30 border-white/10 backdrop-blur-sm text-center">
              <CardHeader>
                <Trophy className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
                <CardTitle className="text-white">Ligas Completas</CardTitle>
                <CardDescription className="text-white/70">
                  Brasileirão, Copa do Brasil e outras competições nacionais
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-black/30 border-white/10 backdrop-blur-sm text-center">
              <CardHeader>
                <Zap className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
                <CardTitle className="text-white">Atualizado 2025</CardTitle>
                <CardDescription className="text-white/70">
                  Jogadores, uniformes e estatísticas 100% atualizados
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Compatibility Section */}
      <section className="py-20 px-4 bg-black/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Compatibilidade</h2>
            <p className="text-white/70 text-lg">Funciona perfeitamente em todos os dispositivos móveis</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-black/30 border-white/10 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="text-6xl mb-4">📱</div>
                <CardTitle className="text-white text-2xl">iOS</CardTitle>
                <CardDescription className="text-white/70 text-lg">iPhone e iPad</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-center">
                    <Shield className="h-5 w-5 text-green-400 mr-3" />
                    iOS 12.0 ou superior
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-5 w-5 text-green-400 mr-3" />
                    iPhone 6s ou mais recente
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-5 w-5 text-green-400 mr-3" />
                    iPad Air 2 ou mais recente
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-5 w-5 text-green-400 mr-3" />
                    2GB RAM mínimo
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-black/30 border-white/10 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="text-6xl mb-4">🤖</div>
                <CardTitle className="text-white text-2xl">Android</CardTitle>
                <CardDescription className="text-white/70 text-lg">Smartphones e Tablets</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-center">
                    <Shield className="h-5 w-5 text-green-400 mr-3" />
                    Android 7.0 ou superior
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-5 w-5 text-green-400 mr-3" />
                    3GB RAM mínimo
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-5 w-5 text-green-400 mr-3" />
                    OpenGL ES 3.0
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-5 w-5 text-green-400 mr-3" />
                    2GB espaço livre
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <Badge className="mb-6 bg-gradient-to-r from-red-600/20 to-orange-600/20 text-red-300 border-red-500/30 text-lg px-6 py-3">
              🔥 OFERTA LIMITADA - 50% OFF
            </Badge>
            <h2 className="text-5xl font-bold text-white mb-6">Não Perca Esta Oportunidade!</h2>
            <p className="text-xl text-white/80 mb-8">
              Leve o melhor do futebol brasileiro para o seu celular com 50% de desconto. Oferta válida por tempo
              limitado!
            </p>

            <div className="bg-black/30 border-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <div className="flex items-center justify-center gap-8 mb-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-400">R$ 29,90</div>
                  <div className="text-white/60">Preço Promocional</div>
                </div>
                <div className="text-6xl text-white/30">→</div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white/60 line-through">R$ 59,90</div>
                  <div className="text-white/60">Preço Normal</div>
                </div>
              </div>

              <Button
                onClick={() =>
                  openPaymentModal(
                    "https://pay.cakto.com.br/xa54qtu_638427",
                    "https://pay.cakto.com.br/xa54qtu_638427",
                    "DFL 25 - TIMES BRASILEIROS CELULAR",
                  )
                }
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-xl px-12 py-6"
              >
                <Download className="mr-3 h-6 w-6" />
                Comprar Agora - 50% OFF
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-sm text-white/70">
              <div className="flex items-center justify-center gap-2">
                <Shield className="h-5 w-5 text-green-400" />
                Compra 100% Segura
              </div>
              <div className="flex items-center justify-center gap-2">
                <Zap className="h-5 w-5 text-cyan-400" />
                Entrega Imediata
              </div>
              <div className="flex items-center justify-center gap-2">
                <Users className="h-5 w-5 text-purple-400" />
                Suporte Incluído
              </div>
            </div>
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
