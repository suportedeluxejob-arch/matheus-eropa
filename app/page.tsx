"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, Zap, Users, Trophy, Check, Shield, Star } from "lucide-react"
import { Footer } from "@/components/footer"
import { PaymentMethodModal } from "@/components/payment-method-modal"
import { CountdownTimer } from "@/components/countdown-timer"
import { useState } from "react"
import Link from "next/link"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { useLanguage } from "@/app/context/language-context"

export default function Home() {
  const { t } = useLanguage()
  const [paymentModal, setPaymentModal] = useState({
    isOpen: false,
    pixLink: "",
    cardLink: "",
    productName: "",
  })

  const [selectedLicense, setSelectedLicense] = useState<"secundaria" | "primaria">("secundaria")

  const openPaymentModal = (pixLink: string, cardLink: string, productName: string) => {
    setPaymentModal({ isOpen: true, pixLink, cardLink, productName })
  }

  const closePaymentModal = () => {
    setPaymentModal({ isOpen: false, pixLink: "", cardLink: "", productName: "" })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-cyan-900">
      {/* Hero Section */}
      {/* Hero Section */}
      <section className="relative py-24 sm:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] -z-10 animate-pulse" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-background to-background -z-20" />

        <div className="max-w-5xl mx-auto w-full text-center hover:scale-[1.01] transition-transform duration-700 ease-out">
          <Badge className="mb-8 bg-primary/10 text-primary border-primary/20 backdrop-blur-md inline-flex items-center gap-2 px-4 py-1.5 text-sm font-medium tracking-wide uppercase shadow-[0_0_15px_-3px_var(--primary)] animate-fade-in-up">
            <Star className="w-3.5 h-3.5 fill-current" />
            {t("hero.badge")}
          </Badge>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tighter leading-[1.1] drop-shadow-2xl animate-fade-in-up delay-100">
            {t("hero.title_start")}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient-x bg-[length:200%_auto]">
              {t("hero.title_highlight")}
            </span>
            {t("hero.title_end")}
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200">
            {t("hero.description")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-300">
            <Button
              asChild
              size="lg"
              className="h-14 px-8 text-lg bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_-5px_var(--primary)] hover:shadow-[0_0_30px_-5px_var(--primary)] transition-all duration-300 transform hover:-translate-y-1 rounded-full font-bold"
            >
              <Link href="/demonstracao">{t("hero.cta")}</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-14 px-8 text-lg border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-sm hover:border-white/20 text-white rounded-full transition-all duration-300"
            >
              <Link href="#products">Ver Produtos</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">{t("platforms.title")}</h2>
            <p className="text-white/70 text-xl">{t("platforms.subtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "PlayStation 4",
                icon: "🎮",
                color: "from-blue-600 to-indigo-600",
                href: "/ps4",
                desc: t("navbar.ps4"),
              },
              {
                name: "PlayStation 5",
                icon: "🎮",
                color: "from-blue-500 to-cyan-500",
                href: "/ps5",
                desc: t("navbar.ps5"),
              },
              {
                name: "Xbox Series",
                icon: "🎯",
                color: "from-emerald-500 to-green-600",
                href: "/xbox",
                desc: t("navbar.xbox"),
              },
              {
                name: "PC Gaming",
                icon: "💻",
                color: "from-cyan-500 to-blue-600",
                href: "/pc",
                desc: t("navbar.pc"),
              },
            ].map((platform, index) => (
              <Link key={index} href={platform.href} className="group">
                <Card className="glass-card h-full transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_0_30px_-5px_var(--primary)] group-hover:border-primary/30 overflow-hidden relative">
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${platform.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  <CardContent className="p-8 text-center flex flex-col items-center h-full">
                    <div className={`text-4xl mb-6 p-5 rounded-2xl bg-gradient-to-br ${platform.color} text-white shadow-lg shadow-black/20 group-hover:scale-110 transition-transform duration-500`}>
                      {platform.icon}
                    </div>
                    <h3 className="text-white font-bold text-xl mb-3 tracking-wide">{platform.desc}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{t("platforms.optimized")}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-red-600/20 text-red-300 border-red-500/30">{t("featured.badge")}</Badge>
            <h2 className="text-4xl font-bold text-white mb-4">{t("featured.title")}</h2>
            <p className="text-white/70 text-xl">{t("featured.subtitle")}</p>
          </div>

          <div className="mb-12">
            <Card className="relative bg-gradient-to-br from-purple-900/40 via-blue-900/40 to-cyan-900/40 border-2 border-purple-500/50 backdrop-blur-sm overflow-hidden hover:border-purple-400/70 transition-all shadow-2xl shadow-purple-500/20">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-cyan-500/20 to-transparent rounded-full blur-3xl" />

              <div className="relative flex flex-col md:grid md:grid-cols-2 gap-6 p-4 md:p-8">
                <div className="relative w-full max-w-sm mx-auto md:max-w-none aspect-[3/4] overflow-hidden rounded-lg border-2 border-purple-500/30 bg-black">
                  <img
                    src="/images/egs-easportsfc26standardedition-eacanada-s2-1200x1600-effee280c00b9890a0c5249d4b0e5c97.jpg"
                    alt={`EA Sports FC 26 - ${t("product.digital_media")}`}
                    className="w-full h-full object-contain rounded-lg"
                  />

                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 md:h-5 md:w-5 fill-yellow-400 text-yellow-400" />
                      <Star className="h-4 w-4 md:h-5 md:w-5 fill-yellow-400 text-yellow-400" />
                      <Star className="h-4 w-4 md:h-5 md:w-5 fill-yellow-400 text-yellow-400" />
                      <Star className="h-4 w-4 md:h-5 md:w-5 fill-yellow-400 text-yellow-400" />
                      <Star className="h-4 w-4 md:h-5 md:w-5 fill-yellow-400 text-yellow-400" />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-4">
                      <Badge className="bg-purple-600/30 text-white border-purple-500/50 text-sm md:text-lg px-3 md:px-4 py-1 md:py-2">
                        EA Sports FC 26
                      </Badge>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 md:h-5 md:w-5 fill-yellow-400 text-yellow-400" />
                        <Star className="h-4 w-4 md:h-5 md:w-5 fill-yellow-400 text-yellow-400" />
                        <Star className="h-4 w-4 md:h-5 md:w-5 fill-yellow-400 text-yellow-400" />
                        <Star className="h-4 w-4 md:h-5 md:w-5 fill-yellow-400 text-yellow-400" />
                        <Star className="h-4 w-4 md:h-5 md:w-5 fill-yellow-400 text-yellow-400" />
                      </div>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                      EA Sports FC 26 - {t("product.digital_media")}
                    </h3>

                    <p className="text-white/90 mb-4 md:mb-6 text-base md:text-lg leading-relaxed">
                      Jogo completo digital do EA Sports FC 26 para PS5, PS4 e Xbox. Acesso imediato na sua conta com
                      todos os recursos oficiais e atualizações.
                    </p>

                    <div className="grid grid-cols-2 gap-2 md:gap-3 mb-4 md:mb-6">
                      <div className="flex items-center gap-2 text-cyan-300">
                        <Check className="h-4 w-4 md:h-5 md:w-5 flex-shrink-0" />
                        <span className="text-xs md:text-sm">PS5 | PS4 | Xbox</span>
                      </div>
                      <div className="flex items-center gap-2 text-cyan-300">
                        <Check className="h-4 w-4 md:h-5 md:w-5 flex-shrink-0" />
                        <span className="text-xs md:text-sm">{t("product.immediate_access")}</span>
                      </div>
                      <div className="flex items-center gap-2 text-cyan-300">
                        <Check className="h-4 w-4 md:h-5 md:w-5 flex-shrink-0" />
                        <span className="text-xs md:text-sm">{t("product.official_license")}</span>
                      </div>
                      <div className="flex items-center gap-2 text-cyan-300">
                        <Check className="h-4 w-4 md:h-5 md:w-5 flex-shrink-0" />
                        <span className="text-xs md:text-sm">{t("product.total_support")}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="mb-4 md:mb-6 p-3 md:p-4 bg-black/30 rounded-lg border border-purple-500/30">
                      <h4 className="text-white font-semibold mb-2 md:mb-3 text-center text-sm md:text-base">
                        {t("product.choose_license")}
                      </h4>
                      <div className="grid grid-cols-2 gap-2 md:gap-3">
                        <button
                          onClick={() => setSelectedLicense("secundaria")}
                          className={`p-3 md:p-4 rounded-lg border-2 transition-all ${selectedLicense === "secundaria"
                            ? "border-cyan-500 bg-cyan-500/20 shadow-lg shadow-cyan-500/50"
                            : "border-white/20 bg-white/5 hover:border-cyan-500/50"
                            }`}
                        >
                          <div className="text-center">
                            <p className="text-white font-bold text-sm md:text-lg mb-1">{t("product.secondary")}</p>
                            <p className="text-cyan-400 font-bold text-lg md:text-2xl">{t("product.price_secundaria")}</p>
                            <p className="text-white/60 text-[10px] md:text-xs mt-1">{t("product.shared_account")}</p>
                          </div>
                        </button>

                        <button
                          onClick={() => setSelectedLicense("primaria")}
                          className={`p-3 md:p-4 rounded-lg border-2 transition-all ${selectedLicense === "primaria"
                            ? "border-purple-500 bg-purple-500/20 shadow-lg shadow-purple-500/50"
                            : "border-white/20 bg-white/5 hover:border-purple-500/50"
                            }`}
                        >
                          <div className="text-center">
                            <p className="text-white font-bold text-sm md:text-lg mb-1">{t("product.primary")}</p>
                            <p className="text-purple-400 font-bold text-lg md:text-2xl">{t("product.price_primaria")}</p>
                            <p className="text-white/60 text-[10px] md:text-xs mt-1">{t("product.exclusive_account")}</p>
                          </div>
                        </button>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-baseline gap-2 md:gap-4 mb-4 md:mb-6">
                      <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                        {selectedLicense === "secundaria" ? t("product.price_secundaria") : t("product.price_primaria")}
                      </div>
                      <div className="text-white/50 line-through text-lg md:text-xl">
                        {selectedLicense === "secundaria" ? t("product.price_secundaria_old") : t("product.price_primaria_old")}
                      </div>
                      <Badge className="bg-green-600 text-white text-xs md:text-sm">50% OFF</Badge>
                    </div>

                    <div className="mb-4 md:mb-6 p-3 md:p-4 bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-lg border border-green-500/30">

                    </div>

                    <Button
                      onClick={() =>
                        openPaymentModal(
                          selectedLicense === "secundaria"
                            ? "https://go.invictuspay.app.br/p9z3m78rwl"
                            : "https://go.invictuspay.app.br/ywfgl87azm",
                          "", // Credit card link - to be added
                          `EA Sports FC 26 - ${t("product.digital_media")} (${selectedLicense === "secundaria" ? "Licença " + t("product.secondary") : "Licença " + t("product.primary")})`,
                        )
                      }
                      className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 hover:from-purple-700 hover:via-pink-700 hover:to-cyan-700 text-white font-bold text-base md:text-lg py-4 md:py-6 shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 transition-all"
                    >
                      <Download className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                      <span className="truncate">
                        {t("product.buy_now")} - {selectedLicense === "secundaria" ? "Licença " + t("product.secondary") : "Licença " + t("product.primary")}
                      </span>
                    </Button>

                    <div className="mt-3 md:mt-4 flex items-center justify-center gap-2 text-purple-300 text-xs md:text-sm">
                      <Shield className="h-3 w-3 md:h-4 md:w-4" />
                      <span>{t("product.secure_purchase")}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* EAFC 26 Bundle - SUPER PROMO */}
            <Card className="glass-card overflow-hidden hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10">
              <div className="relative">
                <img
                  src="/eafc26-bundle-promo.png"
                  alt={t("descriptions.eafc26_bundle_title")}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 left-3">
                  <Badge className="bg-gradient-to-r from-red-600 to-orange-600 text-white font-bold animate-pulse text-lg">
                    🔥 SUPER PROMOÇÃO
                  </Badge>
                </div>
              </div>
              <div className="p-6">
                <Badge className="mb-3 bg-cyan-600/20 text-cyan-300 border-cyan-500/30 w-fit">{t("product.complete_package")}</Badge>
                <div className="mb-3">
                  <CountdownTimer hours={0.083} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{t("descriptions.eafc26_bundle_title")}</h3>
                <p className="text-white/70 mb-4">
                  Super promoção! Jogo completo EA FC 26 + patch premium com times brasileiros. Mídia digital na sua
                  conta.
                </p>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="text-2xl font-bold text-cyan-400">{t("product.price_eafc26_bundle")}</div>
                  <div className="text-white/60 line-through">{t("product.price_eafc26_bundle_old")}</div>
                </div>
                <Button
                  onClick={() =>
                    openPaymentModal(
                      "https://go.invictuspay.app.br/3p65wtvjht",
                      "https://pay.cakto.com.br/agtjpxf_638373",
                      t("descriptions.eafc26_bundle_title"),
                    )
                  }
                  className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700"
                >
                  <Download className="mr-2 h-4 w-4" />
                  {t("product.buy_now")} - Super Oferta
                </Button>
              </div>
            </Card>

            {/* EAFC 26 Product - NEW LAUNCH */}
            <Card className="glass-card overflow-hidden hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10">
              <div className="relative">
                <img src="/site-26.png" alt={t("descriptions.eafc26_title")} className="w-full h-48 object-cover" />
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold animate-pulse">
                    🚀 LANÇAMENTO
                  </Badge>
                  <Badge className="bg-red-600/90 text-white">50% OFF</Badge>
                </div>
              </div>
              <div className="p-6">
                <Badge className="mb-3 bg-cyan-600/20 text-cyan-300 border-cyan-500/30 w-fit">EA Sports FC 26</Badge>
                <h3 className="text-xl font-bold text-white mb-3">{t("descriptions.eafc26_title")}</h3>
                <p className="text-white/70 mb-4">
                  {t("descriptions.eafc26_desc")}
                </p>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="text-2xl font-bold text-cyan-400">R$ 59,90</div>
                  <div className="text-white/60 line-through">R$ 119,90</div>
                </div>
                <Button
                  onClick={() =>
                    openPaymentModal(
                      "https://go.invictuspay.app.br/qaatnpzass",
                      "https://pay.cakto.com.br/5jgfx87_638363",
                      t("descriptions.eafc26_title"),
                    )
                  }
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600"
                >
                  <Download className="mr-2 h-4 w-4" />
                  {t("product.buy_now")}
                </Button>
              </div>
            </Card>

            {/* EAFC 25 Product */}
            <Card className="glass-card overflow-hidden hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10">
              <div className="relative">
                <img
                  src="/eafc25-brasileiros.png"
                  alt={t("descriptions.eafc25_title")}
                  className="w-full h-48 object-cover"
                />
                <Badge className="absolute top-3 left-3 bg-red-600/90 text-white">50% OFF</Badge>
              </div>
              <div className="p-6">
                <Badge className="mb-3 bg-cyan-600/20 text-cyan-300 border-cyan-500/30 w-fit">EA Sports FC 25</Badge>
                <h3 className="text-xl font-bold text-white mb-3">{t("descriptions.eafc25_title")}</h3>
                <p className="text-white/70 mb-4">
                  {t("descriptions.eafc25_desc")}
                </p>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="text-2xl font-bold text-cyan-400">{t("product.price_eafc25")}</div>
                  <div className="text-white/60 line-through">{t("product.price_eafc25_old")}</div>
                </div>
                <Button
                  onClick={() =>
                    openPaymentModal(
                      "https://go.invictuspay.app.br/fuv2ufja8l",
                      "https://pay.cakto.com.br/39xfxuj_638367",
                      t("descriptions.eafc25_title"),
                    )
                  }
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600"
                >
                  <Download className="mr-2 h-4 w-4" />
                  {t("product.buy_now")}
                </Button>
              </div>
            </Card>

            {/* EAFC 25 Bundle */}
            <Card className="glass-card overflow-hidden hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10">
              <div className="relative">
                <img
                  src="/eafc25-bundle.png"
                  alt={t("descriptions.eafc25_bundle_title")}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  <Badge className="bg-gold-600/90 text-white">PACOTE</Badge>
                </div>
              </div>
              <div className="p-6">
                <Badge className="mb-3 bg-cyan-600/20 text-cyan-300 border-cyan-500/30 w-fit">{t("product.complete_package")}</Badge>
                <h3 className="text-xl font-bold text-white mb-3">{t("descriptions.eafc25_bundle_title")}</h3>
                <p className="text-white/70 mb-4">
                  {t("descriptions.eafc25_bundle_desc")}
                </p>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="text-2xl font-bold text-cyan-400">{t("product.price_eafc25_bundle")}</div>
                  <div className="text-white/60 line-through">{t("product.price_eafc25_bundle_old")}</div>
                </div>
                <Button
                  onClick={() =>
                    openPaymentModal(
                      "https://go.invictuspay.app.br/rt0t2uecxd",
                      "https://pay.cakto.com.br/39xfxuj_638367",
                      t("descriptions.eafc25_bundle_title"),
                    )
                  }
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600"
                >
                  <Download className="mr-2 h-4 w-4" />
                  {t("product.buy_now")}
                </Button>
              </div>
            </Card>

            {/* EAFC 24 */}
            <Card className="glass-card overflow-hidden hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10">
              <div className="relative">
                <img
                  src="/eafc24-brasileiros.png"
                  alt={t("descriptions.eafc24_title")}
                  className="w-full h-48 object-cover"
                />
                <Badge className="absolute top-3 left-3 bg-orange-600/90 text-white">50% OFF</Badge>
              </div>
              <div className="p-6">
                <Badge className="mb-3 bg-cyan-600/20 text-cyan-300 border-cyan-500/30 w-fit">EA Sports FC 24</Badge>
                <h3 className="text-xl font-bold text-white mb-3">{t("descriptions.eafc24_title")}</h3>
                <p className="text-white/70 mb-4">
                  {t("descriptions.eafc24_desc")}
                </p>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="text-2xl font-bold text-cyan-400">{t("product.price_eafc24")}</div>
                  <div className="text-white/60 line-through">{t("product.price_eafc24_old")}</div>
                </div>
                <Button
                  onClick={() =>
                    openPaymentModal(
                      "https://go.invictuspay.app.br/kllijhnfgx",
                      "https://pay.cakto.com.br/337h6fv_638368",
                      t("descriptions.eafc24_title"),
                    )
                  }
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600"
                >
                  <Download className="mr-2 h-4 w-4" />
                  {t("product.buy_now")}
                </Button>
              </div>
            </Card>

            {/* PES 2021 Bundle */}
            <Card className="glass-card overflow-hidden hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10">
              <div className="relative">
                <img
                  src="/pes2021-bundle.png"
                  alt="PES 2021 Versão 25 - Times Brasileiros"
                  className="w-full h-48 object-cover"
                />
                <Badge className="absolute top-3 left-3 bg-purple-600/90 text-white">50% OFF</Badge>
              </div>
              <div className="p-6">
                <Badge className="mb-3 bg-cyan-600/20 text-cyan-300 border-cyan-500/30 w-fit">eFootball PES 2021</Badge>
                <h3 className="text-xl font-bold text-white mb-3">{t("descriptions.pes21_bundle_title")}</h3>
                <p className="text-white/70 mb-4">
                  {t("descriptions.pes21_bundle_desc")}
                </p>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="text-2xl font-bold text-cyan-400">{t("product.price_pes21_bundle")}</div>
                  <div className="text-white/60 line-through">{t("product.price_pes21_bundle_old")}</div>
                </div>
                <Button
                  onClick={() =>
                    openPaymentModal(
                      "https://go.invictuspay.app.br/ovmhlg21rh",
                      "https://pay.cakto.com.br/3634a38_638395",
                      t("descriptions.pes21_bundle_title"),
                    )
                  }
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600"
                >
                  <Download className="mr-2 h-4 w-4" />
                  {t("product.buy_now")}
                </Button>
              </div>
            </Card>

            {/* PES 2021 Patch */}
            <Card className="glass-card overflow-hidden hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10">
              <div className="relative">
                <img
                  src="/pes2021-patch.png"
                  alt="PES 2021 Versão 25 - Patch Times Brasileiros"
                  className="w-full h-48 object-cover"
                />
                <Badge className="absolute top-3 left-3 bg-green-600/90 text-white">PATCH</Badge>
              </div>
              <div className="p-6">
                <Badge className="mb-3 bg-cyan-600/20 text-cyan-300 border-cyan-500/30 w-fit">eFootball PES 2021</Badge>
                <h3 className="text-xl font-bold text-white mb-3">{t("descriptions.pes21_patch_title")}</h3>
                <p className="text-white/70 mb-4">
                  {t("descriptions.pes21_patch_desc")}
                </p>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="text-2xl font-bold text-cyan-400">{t("product.price_pes21_patch")}</div>
                  <div className="text-white/60 line-through">{t("product.price_pes21_patch_old")}</div>
                </div>
                <Button
                  onClick={() =>
                    openPaymentModal(
                      "https://go.invictuspay.app.br/qcgqeanwjc",
                      "https://pay.cakto.com.br/8fekayj_638394",
                      t("descriptions.pes21_patch_title"),
                    )
                  }
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600"
                >
                  <Download className="mr-2 h-4 w-4" />
                  {t("product.buy_now")}
                </Button>
              </div>
            </Card>

            {/* DFL 25 Mobile */}
            <Card className="glass-card overflow-hidden hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10">
              <div className="relative">
                <img
                  src="/dfl25-celular.png"
                  alt={t("descriptions.dfl25_title")}
                  className="w-full h-48 object-cover"
                />
                <Badge className="absolute top-3 left-3 bg-red-600/90 text-white">50% OFF</Badge>
              </div>
              <div className="p-6">
                <Badge className="mb-3 bg-cyan-600/20 text-cyan-300 border-cyan-500/30 w-fit">Mobile Gaming</Badge>
                <h3 className="text-xl font-bold text-white mb-3">{t("descriptions.dfl25_title")}</h3>
                <p className="text-white/70 mb-4">
                  {t("descriptions.dfl25_desc")}
                </p>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="text-2xl font-bold text-cyan-400">{t("product.price_dfl25")}</div>
                  <div className="text-white/60 line-through">{t("product.price_dfl25_old")}</div>
                </div>
                <Button
                  onClick={() =>
                    openPaymentModal(
                      "https://pay.cakto.com.br/xa54qtu_638427",
                      "https://pay.cakto.com.br/xa54qtu_638427",
                      t("descriptions.dfl25_title"),
                    )
                  }
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600"
                >
                  <Download className="mr-2 h-4 w-4" />
                  {t("product.buy_now")}
                </Button>
              </div>
            </Card>

            {/* Remote Installation Service */}
            <Card className="glass-card overflow-hidden hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10">
              <div className="relative">
                <img src="/instalacao-remota.png" alt={t("descriptions.remote_install_title")} className="w-full h-48 object-cover" />
                <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground font-bold shadow-lg shadow-primary/20">{t("featured.service")}</Badge>
              </div>
              <div className="p-6">
                <Badge className="mb-3 bg-primary/10 text-primary border-primary/20 w-fit">
                  {t("descriptions.remote_install_title")}
                </Badge>
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{t("descriptions.remote_install_title")}</h3>
                <p className="text-muted-foreground mb-6 line-clamp-3">
                  {t("descriptions.remote_install_desc")}
                </p>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="text-3xl font-black text-primary">{t("product.price_remote_install")}</div>
                </div>
                <Button
                  onClick={() =>
                    openPaymentModal(
                      "https://pay.cakto.com.br/xhxaq8h_638384",
                      "https://pay.cakto.com.br/xhxaq8h_638384",
                      t("descriptions.remote_install_title"),
                    )
                  }
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold h-12 rounded-xl shadow-lg shadow-primary/20 transition-all"
                >
                  <Download className="mr-2 h-4 w-4" />
                  {t("product.contract_service")}
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 relative overflow-hidden bg-black/40">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 px-4 py-1.5 uppercase tracking-widest text-xs font-bold">
              Premium Features
            </Badge>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">{t("features.title")}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">{t("features.subtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="glass-card group hover:border-primary/30 transition-all duration-500">
              <CardHeader className="p-8">
                <div className="flex flex-col items-center text-center gap-6">
                  <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/20 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500">
                    <Zap className="h-10 w-10 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-white text-2xl font-bold mb-4 tracking-tight">{t("features.remote_install_title")}</CardTitle>
                    <CardDescription className="text-muted-foreground text-lg leading-relaxed">{t("features.remote_install_desc")}</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="glass-card group hover:border-primary/30 transition-all duration-500">
              <CardHeader className="p-8">
                <div className="flex flex-col items-center text-center gap-6">
                  <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/20 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500">
                    <Users className="h-10 w-10 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-white text-2xl font-bold mb-4 tracking-tight">{t("features.brazilian_teams_title")}</CardTitle>
                    <CardDescription className="text-muted-foreground text-lg leading-relaxed">{t("features.brazilian_teams_desc")}</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="glass-card group hover:border-primary/30 transition-all duration-500">
              <CardHeader className="p-8">
                <div className="flex flex-col items-center text-center gap-6">
                  <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/20 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500">
                    <Trophy className="h-10 w-10 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-white text-2xl font-bold mb-4 tracking-tight">{t("features.licensed_leagues_title")}</CardTitle>
                    <CardDescription className="text-muted-foreground text-lg leading-relaxed">
                      {t("features.licensed_leagues_desc")}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      < TestimonialsSection />

      {/* Contact Section */}
      < ContactSection />

      {/* Payment Method Modal */}
      < PaymentMethodModal
        isOpen={paymentModal.isOpen}
        onClose={closePaymentModal}
        pixLink={paymentModal.pixLink}
        cardLink={paymentModal.cardLink}
        productName={paymentModal.productName}
      />

      <Footer />
    </div >
  )
}
