"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Download, Eye } from "lucide-react"
import { Footer } from "@/components/footer"
import { ImageModal } from "@/components/image-modal"
import Link from "next/link"

export default function DemonstracaoPage() {
  const [modalOpen, setModalOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const demonstrations = [
    {
      id: 1,
      title: "Palmeiras - Maurício #18",
      image: "/demo-mauricio.png",
      team: "Palmeiras",
      player: "Maurício",
      description: "Uniformes oficiais do Palmeiras com detalhes realistas e jogadores licenciados",
    },
    {
      id: 2,
      title: "Vasco - Vegetti #99",
      image: "/demo-vasco.png",
      team: "Vasco da Gama",
      player: "Vegetti",
      description: "Cruz-Maltino com uniformes clássicos e jogadores atualizados",
    },
    {
      id: 3,
      title: "Santos - Neymar Jr #10",
      image: "/demo-neymar.png",
      team: "Santos FC",
      player: "Neymar Jr",
      description: "O Peixe com a lenda Neymar Jr e uniformes históricos do clube",
    },
    {
      id: 4,
      title: "Internacional - Allan #10",
      image: "/demo-allan.png",
      team: "Internacional",
      player: "Allan",
      description: "Colorado com uniformes tradicionais e elenco completo atualizado",
    },
    {
      id: 5,
      title: "Corinthians - Memphis Depay #10",
      image: "/demo-depay.png",
      team: "Corinthians",
      player: "Memphis Depay",
      description: "Timão com o craque holandês e uniformes oficiais licenciados",
    },
    {
      id: 6,
      title: "Flamengo - Jorginho #21",
      image: "/demo-jorginho.png",
      team: "Flamengo",
      player: "Jorginho",
      description: "Mengão com uniformes oficiais e jogadores do elenco atual licenciados",
    },
    {
      id: 7,
      title: "Bahia - Everton Ribeiro #10",
      image: "/demo-everton-ribeiro.png",
      team: "Bahia",
      player: "Everton Ribeiro",
      description: "Tricolor baiano com uniformes oficiais e o craque Everton Ribeiro licenciado",
    },
    {
      id: 8,
      title: "Cruzeiro - Kaio Jorge #19",
      image: "/demo-kaio-jorge.png",
      team: "Cruzeiro",
      player: "Kaio Jorge",
      description: "Raposa com uniformes oficiais e o atacante Kaio Jorge licenciado",
    },
    {
      id: 9,
      title: "Sport Recife - Lucas Lima #10",
      image: "/demo-lucas-lima.png",
      team: "Sport Recife",
      player: "Lucas Lima",
      description: "Leão da Ilha com uniformes tradicionais e o meia Lucas Lima licenciado",
    },
  ]

  const openModal = (index: number) => {
    setCurrentImageIndex(index)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % demonstrations.length)
  }

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + demonstrations.length) % demonstrations.length)
  }

  return (
    <div className="bg-gradient-to-br from-black via-slate-900 to-black min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <Link href="/">
              <Button
                variant="outline"
                size="sm"
                className="border-white/20 text-white hover:bg-white/10 bg-transparent"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar
              </Button>
            </Link>
          </div>

          <div className="text-center mb-16">
            <Badge className="mb-6 bg-cyan-600/20 text-cyan-300 border-cyan-500/30">
              <Eye className="mr-2 h-4 w-4" />
              Demonstração dos Patches
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Veja a
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                {" "}
                Qualidade Premium{" "}
              </span>
              dos Nossos Patches
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
              Times brasileiros licenciados com uniformes oficiais, jogadores atualizados e qualidade profissional. Veja
              como seus times favoritos ficam incríveis com nossos patches!
            </p>
            <p className="text-lg text-cyan-400 font-semibold">👆 Clique nas imagens para ver em tamanho completo</p>
          </div>
        </div>
      </section>

      {/* Demonstrations Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {demonstrations.map((demo, index) => (
              <Card
                key={demo.id}
                className="bg-black/30 border-white/10 backdrop-blur-sm overflow-hidden hover:bg-white/5 transition-all group cursor-pointer"
                onClick={() => openModal(index)}
              >
                <div className="relative">
                  <img
                    src={demo.image || "/placeholder.svg"}
                    alt={demo.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:bg-black/20 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                      <Eye className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <Badge className="absolute top-4 left-4 bg-cyan-600/90 text-white">{demo.team}</Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{demo.title}</h3>
                  <p className="text-white/70 text-sm mb-4">{demo.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-cyan-400 font-semibold">#{demo.player}</div>
                    <Badge variant="outline" className="border-cyan-500/30 text-cyan-300">
                      Licenciado
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-black/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Qualidade Profissional em Cada Detalhe</h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Nossos patches são desenvolvidos com máxima atenção aos detalhes para oferecer a melhor experiência
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Uniformes Oficiais",
                description: "Camisas, shorts e meias idênticos aos originais",
                icon: "👕",
              },
              {
                title: "Jogadores Licenciados",
                description: "Rostos, nomes e características reais",
                icon: "⚽",
              },
              {
                title: "Estádios Brasileiros",
                description: "Arenas e estádios dos principais clubes",
                icon: "🏟️",
              },
              {
                title: "Qualidade 4K",
                description: "Texturas em alta resolução para máxima qualidade",
                icon: "📺",
              },
            ].map((feature, index) => (
              <Card key={index} className="bg-black/30 border-white/10 backdrop-blur-sm text-center">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-white font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-white/60 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">Pronto para Transformar Seu Jogo?</h2>
            <p className="text-xl text-white/80 mb-8">
              Escolha seu patch favorito e experimente a qualidade premium que você acabou de ver!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-lg px-8 py-4"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Ver Todos os Patches
                </Button>
              </Link>
              <Link href="/#contato">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 text-lg px-8 py-4 bg-transparent"
                >
                  Falar com Suporte
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ImageModal
        images={demonstrations}
        currentIndex={currentImageIndex}
        isOpen={modalOpen}
        onClose={closeModal}
        onNext={nextImage}
        onPrevious={previousImage}
      />

      <Footer />
    </div>
  )
}
