"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/app/context/language-context"
import { Badge } from "@/components/ui/badge"
import { MessageSquare, Instagram, Send, Star } from "lucide-react"

export function ContactSection() {
  const { t } = useLanguage()

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-background to-background -z-10" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 backdrop-blur-md px-4 py-1.5 uppercase tracking-widest text-xs font-bold">
            {t("contact.general_support")}
          </Badge>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">{t("contact.title")}</h2>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto">
            {t("contact.description")}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button asChild size="lg" className="h-16 bg-[#25D366] hover:bg-[#25D366]/90 text-white font-bold rounded-2xl shadow-lg shadow-emerald-500/10 transition-all hover:scale-[1.02] active:scale-[0.98]">
              <a
                href="https://wa.me/5521982907277"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full"
              >
                <MessageSquare className="w-5 h-5" />
                <span className="truncate">{t("contact.general_support")}</span>
              </a>
            </Button>

            <Button asChild size="lg" className="h-16 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-2xl shadow-lg shadow-primary/10 transition-all hover:scale-[1.02] active:scale-[0.98]">
              <a
                href="https://wa.me/5521982907277"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full"
              >
                <Star className="w-5 h-5" />
                <span className="truncate">{t("contact.install_support")}</span>
              </a>
            </Button>

            <Button asChild size="lg" className="h-16 bg-gradient-to-tr from-[#f09433] via-[#e6683c] via-[#dc2743] via-[#cc2366] to-[#bc1888] hover:opacity-90 text-white font-bold rounded-2xl shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98]">
              <a
                href="https://www.instagram.com/wgpatch"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full"
              >
                <Instagram className="w-5 h-5" />
                <span>@wgpatch</span>
              </a>
            </Button>

            <Button asChild size="lg" className="h-16 bg-white/5 hover:bg-white/10 text-white border border-white/10 backdrop-blur-xl font-bold rounded-2xl transition-all hover:scale-[1.02] active:scale-[0.98]">
              <a
                href="https://www.tiktok.com/@wgpatch"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-.88-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
                <span>TikTok</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
