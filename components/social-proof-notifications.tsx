"use client"

import { useEffect, useState } from "react"
import { ShoppingBag } from "lucide-react"

interface Purchase {
  name: string
  product: string
  time: string
}

const purchases: Purchase[] = [
  { name: "João Silva", product: "EAFC 26 - Times Brasileiros", time: "há 2 minutos" },
  { name: "Maria Santos", product: "PATCH EAFC 26 + JOGO", time: "há 5 minutos" },
  { name: "Pedro Costa", product: "EAFC 25 - Times Brasileiros", time: "há 8 minutos" },
  { name: "Ana Oliveira", product: "PES 2021 VERSÃO 25", time: "há 12 minutos" },
  { name: "Carlos Souza", product: "EAFC 24 - Times Brasileiros", time: "há 15 minutos" },
  { name: "Juliana Lima", product: "PATCH EAFC 25 + JOGO", time: "há 18 minutos" },
  { name: "Rafael Alves", product: "EAFC 26 - Times Brasileiros", time: "há 22 minutos" },
  { name: "Fernanda Rocha", product: "DFL 25 - CELULAR", time: "há 25 minutos" },
  { name: "Lucas Martins", product: "EAFC 25 - Times Brasileiros", time: "há 28 minutos" },
  { name: "Camila Ferreira", product: "PES 2021 + JOGO", time: "há 32 minutos" },
]

export function SocialProofNotifications() {
  const [currentPurchase, setCurrentPurchase] = useState<Purchase | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const showNotification = () => {
      const randomPurchase = purchases[Math.floor(Math.random() * purchases.length)]
      setCurrentPurchase(randomPurchase)
      setIsVisible(true)

      setTimeout(() => {
        setIsVisible(false)
      }, 5000)
    }

    const initialTimeout = setTimeout(showNotification, 3000)

    const interval = setInterval(
      () => {
        showNotification()
      },
      Math.random() * 10000 + 15000,
    )

    return () => {
      clearTimeout(initialTimeout)
      clearInterval(interval)
    }
  }, [])

  if (!currentPurchase || !isVisible) return null

  return (
    <div className="fixed bottom-4 left-4 z-50 animate-in slide-in-from-left duration-700">
      <div className="bg-white border-l-4 border-green-600 shadow-2xl rounded-lg overflow-hidden max-w-xs">
        <div className="p-3 flex items-center gap-3">
          <div className="flex-shrink-0 bg-green-600 rounded-full p-2">
            <ShoppingBag className="h-4 w-4 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse" />
              <p className="text-gray-900 font-bold text-xs truncate">{currentPurchase.name}</p>
            </div>
            <p className="text-gray-600 text-[11px] leading-tight mb-1">
              comprou <span className="font-semibold text-gray-900">{currentPurchase.product}</span>
            </p>
            <p className="text-gray-400 text-[10px]">{currentPurchase.time}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
