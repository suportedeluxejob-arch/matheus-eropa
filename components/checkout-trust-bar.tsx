"use client"

import { Shield, Lock, CheckCircle, CreditCard } from "lucide-react"

export function CheckoutTrustBar() {
  return (
    <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-4 mb-6">
      <div className="flex items-center justify-center gap-2 mb-3">
        <Lock className="h-5 w-5 text-green-600" />
        <span className="font-bold text-green-800 text-lg">Compra 100% Segura</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
        <div className="flex items-center gap-2">
          <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
          <span className="text-gray-700">Entrega imediata por email</span>
        </div>

        <div className="flex items-center gap-2">
          <Shield className="h-4 w-4 text-green-600 flex-shrink-0" />
          <span className="text-gray-700">Garantia de 7 dias</span>
        </div>

        <div className="flex items-center gap-2">
          <CreditCard className="h-4 w-4 text-green-600 flex-shrink-0" />
          <span className="text-gray-700">Parcele até 2x sem juros</span>
        </div>
      </div>
    </div>
  )
}
