"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Shield, Mail, CreditCard } from "lucide-react"

export function TrustBanner() {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 border-2 border-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 border-2 border-white rounded-full"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <div className="flex items-center gap-3 mb-6">
              <img src="/logo.jpg" alt="WG PATCH" className="h-12 w-auto" />
              <Badge className="bg-white/20 text-white border-white/30 text-sm">PATCH FUTEBOL</Badge>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Compre com
              <br />
              <span className="text-yellow-300">Segurança!</span>
            </h2>

            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Segurança garantida para você comprar sem preocupações!
            </p>

            <Button
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 text-lg rounded-full shadow-lg"
            >
              Explore nossas ofertas!
            </Button>

            {/* Trust Features */}
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="flex items-start gap-3">
                <div className="bg-white/20 p-2 rounded-full">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Envio imediato para o seu email, após a compra!</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-white/20 p-2 rounded-full">
                  <Shield className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">
                    Garantia de 7 dias, caso você não goste do nosso patch
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-white/20 p-2 rounded-full">
                  <CreditCard className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Parcele até 2x sem juros!</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img src="/banner-seguranca.png" alt="Compre com Segurança" className="max-w-md w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
