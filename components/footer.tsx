"use client"

import Link from "next/link"
import { useLanguage } from "@/app/context/language-context"
import { Instagram, Play, Youtube } from "lucide-react"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="relative bg-background pt-24 pb-12 overflow-hidden">
      {/* Decorative Border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-blue-600 rounded-xl flex items-center justify-center font-black text-white text-lg">
                WG
              </div>
              <span className="text-2xl font-black text-white tracking-widest italic">PATCH</span>
            </Link>
            <p className="text-muted-foreground leading-relaxed">
              {t("footer.description")}
            </p>
          </div>

          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-xs mb-8">{t("footer.platforms")}</h4>
            <ul className="space-y-4">
              {[
                { label: t("navbar.ps4"), href: "/ps4" },
                { label: t("navbar.ps5"), href: "/ps5" },
                { label: t("navbar.xbox"), href: "/xbox" },
                { label: t("navbar.pc"), href: "/pc" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-all duration-300 flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-2 h-px bg-primary transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-xs mb-8">{t("footer.support")}</h4>
            <ul className="space-y-4">
              {[
                t("footer.install"),
                t("footer.tutorials"),
                t("footer.faq"),
                t("footer.contact"),
              ].map((item, idx) => (
                <li key={idx}>
                  <span className="text-muted-foreground hover:text-white transition-colors cursor-default select-none">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-xs mb-8">{t("footer.company")}</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li>{t("footer.about")}</li>
              <li>{t("footer.terms")}</li>
              <li>{t("footer.privacy")}</li>
              <li>{t("footer.blog")}</li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/wgpatch"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 hover:-translate-y-1 transition-all duration-300"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.tiktok.com/@wgpatch"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 hover:-translate-y-1 transition-all duration-300"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-.88-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
            </a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-muted-foreground text-sm font-medium">
              &copy; {new Date().getFullYear()} WG PATCH. {t("footer.rights")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
