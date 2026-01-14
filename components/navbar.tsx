"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ShoppingCart, Headset } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/app/context/language-context"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

  const menuItems = [
    { label: t("navbar.ps4"), href: "/ps4" },
    { label: t("navbar.ps5"), href: "/ps5" },
    { label: t("navbar.xbox"), href: "/xbox" },
    { label: t("navbar.pc"), href: "/pc" },
    { label: t("navbar.mobile"), href: "/celular" },
  ]

  const LanguageSwitcher = () => (
    <div className="flex items-center gap-2 mx-2 bg-white/5 p-1 rounded-full border border-white/5">
      <button
        onClick={() => setLanguage('es')}
        className={`relative w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 ${language === 'es' ? 'bg-white/10 shadow-[0_0_10px_-2px_rgba(255,255,255,0.3)] scale-110' : 'opacity-50 hover:opacity-100 hover:scale-105'}`}
        title="Español"
      >
        <span className="text-xl">🇪🇸</span>
      </button>
      <button
        onClick={() => setLanguage('it')}
        className={`relative w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 ${language === 'it' ? 'bg-white/10 shadow-[0_0_10px_-2px_rgba(255,255,255,0.3)] scale-110' : 'opacity-50 hover:opacity-100 hover:scale-105'}`}
        title="Italiano"
      >
        <span className="text-xl">🇮🇹</span>
      </button>
    </div>
  )

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? "glass border-b border-white/5 py-2" : "bg-transparent py-4 border-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 overflow-hidden rounded-xl bg-gradient-to-br from-primary to-blue-600 shadow-[0_0_15px_-5px_var(--primary)] group-hover:shadow-[0_0_25px_-5px_var(--primary)] transition-shadow duration-500">
              <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay"></div>
              <div className="absolute inset-0 flex items-center justify-center text-white font-black text-lg tracking-tighter group-hover:scale-110 transition-transform duration-500">
                WG
              </div>
            </div>
            <span className="hidden sm:inline-block font-bold text-xl tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/70 group-hover:to-primary transition-all duration-500">
              WG PATCH
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1 bg-black/20 backdrop-blur-sm p-1.5 rounded-full border border-white/5">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-1.5 text-sm font-medium text-white/70 hover:text-white transition-all duration-300 hover:bg-white/10 rounded-full"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden sm:flex items-center gap-3">
            <LanguageSwitcher />

            {/* Desktop CTA */}
            <div className="flex gap-3">
              <Button
                asChild
                variant="ghost"
                size="icon"
                className="text-white/70 hover:text-cyan-400 hover:bg-cyan-950/30 rounded-full w-10 h-10"
              >
                <a href="https://wa.me/5521982907277" target="_blank" rel="noopener noreferrer">
                  <Headset className="w-5 h-5" />
                </a>
              </Button>
              <Button
                asChild
                size="sm"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full px-6 shadow-[0_0_15px_-5px_var(--primary)] hover:shadow-[0_0_20px_-5px_var(--primary)] transition-all duration-300"
              >
                <a href="#products">
                  <span>{t("navbar.buy")}</span>
                </a>
              </Button>
            </div>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 sm:hidden">
            <LanguageSwitcher />
            <button
              onClick={toggleMenu}
              className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 text-white active:scale-95 transition-all"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"}`}>
          <div className="glass-card rounded-2xl p-4 space-y-2 mb-4 border border-white/10">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200 group"
              >
                <span className="font-medium">{item.label}</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-4 border-t border-white/5 mt-2">
              <Button
                asChild
                variant="outline"
                className="w-full justify-center border-white/10 hover:bg-white/5 text-white rounded-xl h-11"
              >
                <a href="https://wa.me/5521982907277" target="_blank" rel="noopener noreferrer" className="gap-2">
                  <Headset className="w-4 h-4" />
                  {t("navbar.support")}
                </a>
              </Button>
              <Button
                asChild
                className="w-full justify-center bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-xl h-11 shadow-lg shadow-primary/20"
              >
                <a href="#products">{t("navbar.buy")}</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
