import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { SocialProofNotifications } from "@/components/social-proof-notifications"
import { LanguageProvider } from "@/app/context/language-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "WG PATCH - Patches de Futebol para Consoles e PC",
  description: "O patch mais completo e realista do mercado para PS4, PS5, Xbox e PC",
  generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <LanguageProvider>
          {children}
          <WhatsAppFloat />
          <SocialProofNotifications />
        </LanguageProvider>
      </body>
    </html>
  )
}
