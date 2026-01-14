"use client"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Shield, Star, Users, Clock, CheckCircle, Award } from "lucide-react"

interface TrustModalProps {
  isOpen: boolean
  onClose: () => void
  onProceed: () => void
}

export function TrustModal({ isOpen, onClose, onProceed }: TrustModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-gradient-to-br from-white to-blue-50">
        <DialogHeader>
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <img src="/logo.jpg" alt="WG PATCH" className="h-10 w-auto" />
              <Badge className="bg-blue-600 text-white">PATCH FUTEBOL</Badge>
            </div>
            <DialogTitle className="text-2xl font-bold text-gray-800 mb-2">🔒 Sua Compra Está Protegida!</DialogTitle>
            <p className="text-gray-600">Milhares de clientes confiam na WG PATCH todos os dias</p>
          </div>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-6 py-6">
          {/* Left Column - Trust Indicators */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-green-600" />
              <div>
                <p className="font-semibold text-green-800">Entrega Garantida</p>
                <p className="text-sm text-green-600">Receba em até 5 minutos no seu email</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
              <Shield className="h-6 w-6 text-blue-600" />
              <div>
                <p className="font-semibold text-blue-800">Garantia de 7 Dias</p>
                <p className="text-sm text-blue-600">Não gostou? Devolvemos seu dinheiro</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
              <Award className="h-6 w-6 text-purple-600" />
              <div>
                <p className="font-semibold text-purple-800">Suporte Premium</p>
                <p className="text-sm text-purple-600">Instalação remota incluída</p>
              </div>
            </div>
          </div>

          {/* Right Column - Social Proof */}
          <div className="space-y-4">
            <div className="text-center p-4 bg-yellow-50 rounded-lg">
              <div className="flex items-center justify-center gap-1 mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="font-bold text-yellow-800">4.9/5 Avaliação</p>
              <p className="text-sm text-yellow-600">Baseado em +50.000 vendas</p>
            </div>

            <div className="text-center p-4 bg-cyan-50 rounded-lg">
              <Users className="h-8 w-8 text-cyan-600 mx-auto mb-2" />
              <p className="font-bold text-cyan-800">+50.000 Clientes</p>
              <p className="text-sm text-cyan-600">Satisfeitos em todo o Brasil</p>
            </div>

            <div className="text-center p-4 bg-green-50 rounded-lg">
              <Clock className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <p className="font-bold text-green-800">5 Anos no Mercado</p>
              <p className="text-sm text-green-600">Empresa consolidada e confiável</p>
            </div>
          </div>
        </div>

        <div className="flex gap-3 pt-4">
          <Button variant="outline" onClick={onClose} className="flex-1 bg-transparent">
            Voltar
          </Button>
          <Button
            onClick={onProceed}
            className="flex-1 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600"
          >
            🔒 Prosseguir com Segurança
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
