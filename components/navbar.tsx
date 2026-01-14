"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/app/context/language-context"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const menuItems = [
    { label: t("navbar.ps4"), href: "/ps4" },
    { label: t("navbar.ps5"), href: "/ps5" },
    { label: t("navbar.xbox"), href: "/xbox" },
    { label: t("navbar.pc"), href: "/pc" },
    { label: t("navbar.mobile"), href: "/celular" },
  ]

  const LanguageSwitcher = () => (
    <div className="flex items-center gap-1 mx-2">
      <button
        onClick={() => setLanguage('es')}
        className={`text-xl hover:scale-110 transition-transform ${language === 'es' ? 'opacity-100' : 'opacity-50 hover:opacity-100'}`}
        title="Español"
      >
        🇪🇸
      </button>
      <button
        onClick={() => setLanguage('it')}
        className={`text-xl hover:scale-110 transition-transform ${language === 'it' ? 'opacity-100' : 'opacity-50 hover:opacity-100'}`}
        title="Italiano"
      >
        🇮🇹
      </button>
    </div>
  )

  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-b from-gray-900 via-gray-900 to-transparent backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center overflow-hidden">
              <span className="text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                WG
              </span>
            </div>
            <span className="text-white font-bold text-lg hidden sm:inline bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              WG PATCH
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm text-white/70 hover:text-white transition-colors duration-200 hover:bg-white/5 rounded-md"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden sm:flex items-center">
            <LanguageSwitcher />

            {/* Desktop CTA */}
            <div className="flex gap-2">
              <Button
                asChild
                variant="outline"
                size="sm"
                className="border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/10 hover:text-cyan-200"
              >
                <a href="https://wa.me/5521982907277" target="_blank" rel="noopener noreferrer">
                  {t("navbar.support")}
                </a>
              </Button>
              <Button
                asChild
                size="sm"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white"
              >
                <a href="#products">{t("navbar.buy")}</a>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-2 pb-4 animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="flex justify-center py-2 mb-2 border-b border-white/5">
              <LanguageSwitcher />
            </div>
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-2">
              <Button
                asChild
                variant="outline"
                size="sm"
                className="w-full border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/10"
              >
                <a href="https://wa.me/5521982907277" target="_blank" rel="noopener noreferrer">
                  {t("navbar.support")}
                </a>
              </Button>
              <Button
                asChild
                size="sm"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500"
              >
                <a href="#products">{t("navbar.buy")}</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
