"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, Star, Smartphone, Gamepad2, Users, Trophy, Shield, Zap, CheckCircle2 } from "lucide-react"
import { Footer } from "@/components/footer"
import { PaymentMethodModal } from "@/components/payment-method-modal"
import { useState } from "react"
import { useLanguage } from "@/app/context/language-context"
import { PRODUCTS } from "@/app/lib/products"
import { ProductCard } from "@/components/product-card"
import { HeroCarousel } from "@/components/hero-carousel"

export default function CelularPage() {
  const { t } = useLanguage()
  const [paymentModal, setPaymentModal] = useState({
    isOpen: false,
    pixLink: "",
    cardLink: "",
    productName: "",
  })

  // Find the mobile product in our centralized data
  const mobileProduct = PRODUCTS.find(p => p.id === "dfl25-mobile")

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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] -z-10 animate-pulse" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-background to-background -z-20" />

        <div className="max-w-5xl mx-auto w-full text-center">
          <Badge className="mb-8 bg-primary/10 text-primary border-primary/20 backdrop-blur-md inline-flex items-center gap-2 px-4 py-1.5 text-sm font-medium tracking-wide uppercase shadow-[0_0_15px_-3px_var(--primary)] animate-fade-in-up">
            <Smartphone className="w-3.5 h-3.5" />
            {t("navbar.mobile")} Gaming
          </Badge>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-8 tracking-tighter leading-[1.1] drop-shadow-2xl animate-fade-in-up delay-100">
            Futebol Brasileiro
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-primary">
              no Celular
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200">
            {t("descriptions.dfl25_desc")} Experimente a emoção do futebol nacional na palma da sua mão.
          </p>
        </div>
      </section>

      {/* Main Product Section */}
      <section className="py-24 px-4 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-red-600/10 text-red-500 border-red-500/20 px-4 py-1.5 uppercase tracking-widest text-xs font-bold">
              🔥 PRODUTO EXCLUSIVO MOBILE
            </Badge>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">DFL 25 - Times Brasileiros</h2>
          </div>

          <div className="max-w-5xl mx-auto">
            {mobileProduct ? (
              <Card className="glass-card relative border-2 border-primary/30 backdrop-blur-xl overflow-hidden shadow-2xl rounded-[2rem]">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative aspect-[4/5] lg:aspect-auto">
                    <img
                      src={mobileProduct.image}
                      alt={t(mobileProduct.titleKey)}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-6 left-6 flex flex-col gap-2">
                      <Badge className="bg-red-600 text-white font-black px-4 py-2 text-sm shadow-xl">50% OFF</Badge>
                      <Badge className="bg-primary text-primary-foreground font-black px-4 py-2 text-sm">ESPECIAL MOBILE</Badge>
                    </div>
                  </div>

                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="text-white font-black ml-2">4.9/5</span>
                    </div>

                    <h3 className="text-3xl md:text-4xl font-black text-white mb-6 uppercase tracking-tight">
                      {t(mobileProduct.titleKey)}
                    </h3>

                    <p className="text-lg text-muted-foreground mb-10 leading-relaxed border-l-4 border-primary/30 pl-6 italic">
                      {t(mobileProduct.descriptionKey)}
                    </p>

                    <div className="flex items-baseline gap-4 mb-10">
                      <div className="text-5xl font-black text-primary drop-shadow-[0_0_15px_rgba(var(--primary),0.3)]">
                        {t(mobileProduct.priceKey)}
                      </div>
                      <div className="text-white/30 line-through text-xl font-medium">
                        {t(mobileProduct.oldPriceKey)}
                      </div>
                    </div>

                    <Button
                      onClick={() =>
                        openPaymentModal(
                          mobileProduct.link,
                          mobileProduct.link,
                          t(mobileProduct.titleKey),
                        )
                      }
                      className="w-full h-16 bg-primary hover:bg-primary/90 text-primary-foreground font-black text-lg rounded-2xl shadow-2xl shadow-primary/20 transition-all hover:scale-[1.01]"
                    >
                      <Download className="mr-3 h-6 w-6" />
                      {t("product.buy_now")}
                    </Button>

                    <div className="grid grid-cols-2 gap-4 mt-8">
                      <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
                        <Smartphone className="h-6 w-6 text-primary mx-auto mb-2" />
                        <p className="text-white font-bold text-xs">iOS & ANDROID</p>
                      </div>
                      <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
                        <Shield className="h-6 w-6 text-emerald-400 mx-auto mb-2" />
                        <p className="text-white font-bold text-xs">100% SEGURO</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ) : (
              <div className="text-center text-white p-20 glass-card rounded-3xl">Loading console product...</div>
            )}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">{t("features.title")}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Users, title: "brazilian_teams_title", desc: "brazilian_teams_desc" },
              { icon: Gamepad2, title: "navbar.mobile", desc: "platforms.optimized" },
              { icon: Trophy, title: "licensed_leagues_title", desc: "licensed_leagues_desc" },
              { icon: Zap, title: "product.immediate_access", desc: "features.brazilian_teams_desc" }
            ].map((feature, i) => (
              <Card key={i} className="glass-card p-8 border-white/5 hover:border-primary/30 transition-all group rounded-3xl">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-white font-black text-xl mb-4 tracking-tight">{t(`features.${feature.title}`) || feature.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{t(`features.${feature.desc}`) || feature.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compatibility */}
      <section className="py-24 px-4 bg-black/40 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -z-10" />
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">Compatibilidade</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">Otimizado para rodar liso no seu dispositivo</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="glass-card p-10 border-white/5 rounded-[2.5rem] relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 text-6xl opacity-10 font-black group-hover:scale-110 transition-transform">iOS</div>
              <div className="relative z-10">
                <Smartphone className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-2xl font-black text-white mb-8">iPhone & iPad</h3>
                <ul className="space-y-4">
                  {["iOS 12.0 ou superior", "iPhone 6s ou mais recente", "2GB RAM mínimo", "Conectividade estável"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-white/80 font-medium">
                      <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                      <span className="text-sm tracking-wide">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>

            <Card className="glass-card p-10 border-white/5 rounded-[2.5rem] relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 text-6xl opacity-10 font-black group-hover:scale-110 transition-transform">ADR</div>
              <div className="relative z-10">
                <Smartphone className="h-12 w-12 text-emerald-400 mb-6" />
                <h3 className="text-2xl font-black text-white mb-8">Android</h3>
                <ul className="space-y-4">
                  {["Android 7.0 ou superior", "3GB RAM mínimo", "OpenGL ES 3.0", "2GB espaço livre"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-white/80 font-medium">
                      <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                      <span className="text-sm tracking-wide">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <Badge className="mb-8 bg-red-600/10 text-red-500 border-red-500/20 px-6 py-2 uppercase tracking-[0.2em] text-sm font-black animate-pulse">
            🔥 OFERTA POR TEMPO LIMITADO
          </Badge>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-10 tracking-tighter">Pronto para o<br /><span className="text-primary">Kick-off?</span></h2>

          <div className="p-12 glass-card rounded-[3rem] border-2 border-primary/30 mb-8 max-w-2xl mx-auto">
            <div className="text-3xl text-white/40 font-medium mb-2 line-through">{mobileProduct ? t(mobileProduct.oldPriceKey) : "R$ 59,90"}</div>
            <div className="text-7xl font-black text-white mb-10 drop-shadow-[0_0_20px_rgba(var(--primary),0.5)]">{mobileProduct ? t(mobileProduct.priceKey) : "R$ 29,90"}</div>

            <Button
              onClick={() =>
                openPaymentModal(
                  mobileProduct?.link || "#",
                  mobileProduct?.link || "#",
                  t(mobileProduct?.titleKey || "product.buy_now"),
                )
              }
              size="lg"
              className="w-full h-20 bg-primary hover:bg-primary/90 text-primary-foreground font-black text-2xl rounded-3xl shadow-[0_20px_40px_-10px_rgba(var(--primary),0.3)] transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Download className="mr-4 h-8 w-8" />
              DOWLOAD AGORA
            </Button>
          </div>
        </div>
      </section>

      <PaymentMethodModal
        isOpen={paymentModal.isOpen}
        onClose={closePaymentModal}
        pixLink={paymentModal.pixLink}
        cardLink={paymentModal.cardLink}
        productName={paymentModal.productName}
      />

      <Footer />
    </div>
  )
}
