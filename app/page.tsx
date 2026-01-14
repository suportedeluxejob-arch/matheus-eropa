"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, Zap, Users, Trophy, Check, Shield, Star, CheckCircle2 } from "lucide-react"
import { Footer } from "@/components/footer"
import { PaymentMethodModal } from "@/components/payment-method-modal"
import { CountdownTimer } from "@/components/countdown-timer"
import { useState } from "react"
import Link from "next/link"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { useLanguage } from "@/app/context/language-context"
import { PRODUCTS } from "@/app/lib/products"
import { ProductCard } from "@/components/product-card"
import { SITE_CONFIG } from "@/app/lib/site-config"
import { HeroCarousel } from "@/components/hero-carousel"

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
    <div className="min-h-screen bg-background selection:bg-primary/30">
      {/* Hero Carousel Banner Section */}
      <section className="pt-28 pb-0">
        <HeroCarousel />
      </section>

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

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-[1.1] drop-shadow-2xl animate-fade-in-up delay-100">
            {t("hero.title_start")}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-primary animate-gradient-x bg-[length:200%_auto]">
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
              <Link href="#products">{t("navbar.buy")}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-24 px-4 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 px-3 py-1 uppercase tracking-widest text-[10px] font-bold">
              {t("platforms.subtitle")}
            </Badge>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">{t("platforms.title")}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SITE_CONFIG.platforms.map((platform, index) => (
              <Link key={index} href={`/${platform.id}`} className="group">
                <Card className="glass-card h-full transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_0_30px_-5px_var(--primary)] group-hover:border-primary/30 overflow-hidden relative border-white/5">
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${platform.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  <CardContent className="p-8 text-center flex flex-col items-center h-full">
                    <div className={`text-4xl mb-6 p-5 rounded-2xl bg-gradient-to-br ${platform.color} text-white shadow-lg shadow-black/20 group-hover:scale-110 transition-transform duration-500 flex items-center justify-center`}>
                      <platform.icon size={32} />
                    </div>
                    <h3 className="text-white font-bold text-xl mb-3 tracking-wide">{platform.name}</h3>
                    <p className="text-muted-foreground text-xs leading-relaxed uppercase tracking-widest font-bold opacity-60">{t("platforms.optimized")}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="products" className="py-24 px-4 relative overflow-hidden">
        <div className="absolute top-1/4 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -z-10" />

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <Badge className="mb-4 bg-red-600/10 text-red-500 border-red-500/20 px-4 py-1.5 uppercase tracking-widest text-xs font-bold">
              {t("featured.badge")}
            </Badge>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">{t("featured.title")}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">{t("featured.subtitle")}</p>
          </div>

          <div className="mb-16">
            <Card className="glass-card relative border-2 border-primary/30 backdrop-blur-xl overflow-hidden hover:border-primary/50 transition-all duration-500 shadow-2xl">
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl" />

              <div className="relative flex flex-col lg:grid lg:grid-cols-2 gap-12 p-8 lg:p-12">
                <div className="relative aspect-[3/4] overflow-hidden rounded-3xl border border-white/10 bg-black group shadow-3xl">
                  <img
                    src="/images/egs-easportsfc26standardedition-eacanada-s2-1200x1600-effee280c00b9890a0c5249d4b0e5c97.jpg"
                    alt={`EA Sports FC 26 - ${t("product.digital_media")}`}
                    className="w-full h-full object-cover rounded-3xl transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-6 left-6 flex flex-col gap-2">
                    <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col">
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <Badge className="bg-primary text-primary-foreground font-black tracking-widest uppercase text-xs px-4 py-1.5 shadow-lg shadow-primary/20">
                        {t("featured.launch")}
                      </Badge>
                    </div>

                    <h3 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
                      EA Sports FC 26<br />
                      <span className="text-primary">{t("product.digital_media")}</span>
                    </h3>

                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed italic border-l-4 border-primary/30 pl-6">
                      Jogo completo digital do EA Sports FC 26 para PS5, PS4 e Xbox. Acesso imediato na sua conta com
                      todos os recursos oficiais e atualizações.
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-10">
                      {[
                        "PS5 | PS4 | Xbox",
                        t("product.immediate_access"),
                        t("product.official_license"),
                        t("product.total_support")
                      ].map((feat, i) => (
                        <div key={i} className="flex items-center gap-3 text-white/80 font-medium">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                          <span className="text-sm tracking-wide">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto">
                    <div className="mb-8 p-6 glass-card rounded-3xl border border-primary/20">
                      <h4 className="text-white/60 font-black uppercase tracking-[0.2em] text-[10px] mb-6 text-center">
                        {t("product.choose_license")}
                      </h4>
                      <div className="grid grid-cols-2 gap-4">
                        <button
                          onClick={() => setSelectedLicense("secundaria")}
                          className={`p-5 rounded-2xl border-2 transition-all duration-300 ${selectedLicense === "secundaria"
                            ? "border-primary bg-primary/20 shadow-[0_0_20px_rgba(var(--primary),0.3)]"
                            : "border-white/5 bg-white/5 hover:border-primary/30"
                            }`}
                        >
                          <div className="text-center">
                            <p className="text-white/50 text-[10px] font-black uppercase tracking-widest mb-1">{t("product.secondary")}</p>
                            <p className="text-white font-black text-xl">{t("product.price_secundaria")}</p>
                          </div>
                        </button>

                        <button
                          onClick={() => setSelectedLicense("primaria")}
                          className={`p-5 rounded-2xl border-2 transition-all duration-300 ${selectedLicense === "primaria"
                            ? "border-primary bg-primary/20 shadow-[0_0_20px_rgba(var(--primary),0.3)]"
                            : "border-white/5 bg-white/5 hover:border-primary/30"
                            }`}
                        >
                          <div className="text-center">
                            <p className="text-white/50 text-[10px] font-black uppercase tracking-widest mb-1">{t("product.primary")}</p>
                            <p className="text-white font-black text-xl">{t("product.price_primaria")}</p>
                          </div>
                        </button>
                      </div>
                    </div>

                    <div className="flex items-baseline gap-4 mb-8">
                      <div className="text-5xl font-black text-primary drop-shadow-[0_0_15px_rgba(var(--primary),0.3)]">
                        {selectedLicense === "secundaria" ? t("product.price_secundaria") : t("product.price_primaria")}
                      </div>
                      <div className="text-white/30 line-through text-xl font-medium">
                        {selectedLicense === "secundaria" ? t("product.price_secundaria_old") : t("product.price_primaria_old")}
                      </div>
                      <Badge className="bg-emerald-500 text-white font-black px-2 py-0.5">50% OFF</Badge>
                    </div>

                    <Button
                      onClick={() =>
                        openPaymentModal(
                          selectedLicense === "secundaria"
                            ? "https://go.invictuspay.app.br/p9z3m78rwl"
                            : "https://go.invictuspay.app.br/ywfgl87azm",
                          "",
                          `EA Sports FC 26 - ${t("product.digital_media")} (${selectedLicense === "secundaria" ? t("product.secondary") : t("product.primary")})`,
                        )
                      }
                      className="w-full h-16 bg-primary hover:bg-primary/90 text-primary-foreground font-black text-lg rounded-2xl shadow-2xl shadow-primary/20 transition-all hover:scale-[1.01] active:scale-[0.99]"
                    >
                      <Download className="mr-3 h-5 w-5" />
                      <span>{t("product.buy_now")}</span>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onBuy={openPaymentModal}
              />
            ))}
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
