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
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
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
      {/* Hero Section */}
      <section className="relative py-24 sm:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] -z-10 animate-pulse" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-background to-background -z-20" />

        <div className="max-w-5xl mx-auto w-full text-center hover:scale-[1.01] transition-transform duration-700 ease-out">
          <Badge className="mb-12 bg-primary/10 text-primary border-primary/20 backdrop-blur-md inline-flex items-center gap-2 px-4 py-1.5 text-sm font-medium tracking-wide uppercase shadow-[0_0_15px_-3px_var(--primary)] animate-fade-in-up">
            <Star className="w-3.5 h-3.5 fill-current" />
            {t("hero.badge")}
          </Badge>

          {/* Carousel moved here */}
          <div className="mb-16">
            <HeroCarousel />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-10 tracking-tighter leading-[1.2] drop-shadow-2xl animate-fade-in-up delay-100">
            {t("hero.title_start")}
            <span className="block my-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-primary animate-gradient-x bg-[length:200%_auto]">
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

      {/* Featured Products Section with Filters */}
      <section id="products" className="py-24 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 px-3 py-1 uppercase tracking-widest text-[10px] font-bold">
              Premium Patches
            </Badge>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tight">{t("featured.title")}</h2>

            {/* Category Filter Bar */}
            <div className="flex flex-wrap justify-center gap-3 mb-16">
              {["all", "brazil", "europe", "world-cup", "service"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border backdrop-blur-md ${selectedCategory === cat
                    ? "bg-primary text-primary-foreground border-primary shadow-[0_0_20px_rgba(var(--primary),0.4)] scale-105"
                    : "bg-white/5 text-white/60 border-white/10 hover:border-white/20 hover:text-white"
                    }`}
                >
                  {t(`categories.${cat.replace("-", "_")}`)}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS.filter(p => selectedCategory === "all" || p.displayCategory === selectedCategory).map((product) => (
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
