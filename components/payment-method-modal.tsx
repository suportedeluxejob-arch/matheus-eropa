"use client"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { CreditCard, Smartphone, AlertTriangle } from "lucide-react"

interface PaymentMethodModalProps {
  isOpen: boolean
  onClose: () => void
  pixLink: string
  cardLink: string
  productName: string
}

export function PaymentMethodModal({ isOpen, onClose, pixLink, cardLink, productName }: PaymentMethodModalProps) {
  const handlePixPayment = () => {
    if (pixLink) {
      window.open(pixLink, "_blank", "noopener,noreferrer")
    }
    onClose()
  }

  const handleCardPayment = () => {
    window.open(cardLink, "_blank", "noopener,noreferrer")
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-black/95 border-white/20 backdrop-blur-xl max-w-md">
        <DialogHeader>
          <DialogTitle className="text-white text-2xl mb-2">Escolha a Forma de Pagamento</DialogTitle>
          <DialogDescription className="text-white/70 text-base">{productName}</DialogDescription>
        </DialogHeader>

        <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 mt-4">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-yellow-100/90 leading-relaxed">
              <strong className="text-yellow-400 block mb-1">Importante:</strong>
              Por se tratar de infoproduto digital de acesso imediato, não realizamos estorno, troca ou cancelamento
              após o download e/ou ativação do serial. Os registros de acesso (logs) serão armazenados e poderão ser
              utilizados como comprovação, em conformidade com nossa Política de Privacidade e Termos de Uso.
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 mt-6">
          <Button
            onClick={handlePixPayment}
            className="h-24 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 flex flex-col items-center justify-center gap-2 text-lg font-semibold"
          >
            <Smartphone className="h-8 w-8" />
            Pagar com PIX
            <span className="text-sm font-normal opacity-90">Aprovação instantânea</span>
          </Button>

          <Button
            onClick={handleCardPayment}
            className="h-24 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 flex flex-col items-center justify-center gap-2 text-lg font-semibold"
          >
            <CreditCard className="h-8 w-8" />
            Pagar com Cartão
            <span className="text-sm font-normal opacity-90">Crédito</span>
          </Button>
        </div>

        <Button variant="ghost" onClick={onClose} className="mt-4 text-white/60 hover:text-white hover:bg-white/10">
          Cancelar
        </Button>
      </DialogContent>
    </Dialog>
  )
}
