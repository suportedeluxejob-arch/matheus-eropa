"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download, Star, CheckCircle2 } from "lucide-react"
import { useLanguage } from "@/app/context/language-context"
import { Product } from "@/app/lib/products"
import { CountdownTimer } from "@/components/countdown-timer"

interface ProductCardProps {
    product: Product;
    onBuy: (link: string, cardLink: string, title: string) => void;
}

export function ProductCard({ product, onBuy }: ProductCardProps) {
    const { t } = useLanguage();

    return (
        <Card className="glass-card group flex flex-col h-full overflow-hidden border-white/5 hover:border-primary/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.5),0_0_20px_-5px_var(--primary)]">
            {/* Image Section */}
            <div className="relative aspect-[16/9] overflow-hidden bg-black/40">
                <img
                    src={product.image}
                    alt={t(product.titleKey)}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Badges Overlay */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                    {product.badge && (
                        <Badge className="bg-primary text-primary-foreground font-black tracking-tighter shadow-lg shadow-primary/20 px-2.5 py-1">
                            {product.badge}
                        </Badge>
                    )}
                    {product.isPromo && (
                        <Badge className="bg-red-600/90 text-white font-black text-[10px] tracking-widest uppercase px-2.5 py-1 border border-red-500/30">
                            50% OFF
                        </Badge>
                    )}
                </div>

                {/* Dynamic Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Content Section */}
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-4">
                    <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20 text-[10px] font-black uppercase tracking-widest px-2 py-0.5">
                        {product.version || t("featured.patch")}
                    </Badge>
                    <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        ))}
                    </div>
                </div>

                {product.withTimer && (
                    <div className="mb-5 scale-90 origin-left">
                        <CountdownTimer hours={0.083} />
                    </div>
                )}

                <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-primary transition-colors line-clamp-2 min-h-[3.5rem]">
                    {t(product.titleKey)}
                </h3>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
                    {t(product.descriptionKey)}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                    <span className="text-[10px] font-bold text-primary/80 bg-primary/5 border border-primary/20 px-2 py-1 rounded-md tracking-tight">
                        {t("product.compatibility_all")}
                    </span>
                </div>

                {/* Pricing Area - Always at bottom of text area */}
                <div className="mt-auto pt-4 border-t border-white/5">
                    <div className="flex items-baseline gap-3 mb-6">
                        <span className="text-3xl font-black text-primary drop-shadow-[0_0_10px_rgba(var(--primary),0.3)]">
                            {t(product.priceKey)}
                        </span>
                        {product.isPromo && (
                            <span className="text-white/40 line-through text-sm font-medium">
                                {t(product.oldPriceKey)}
                            </span>
                        )}
                    </div>

                    <Button
                        onClick={() => onBuy(product.link, product.cardLink || "", t(product.titleKey))}
                        className={`w-full h-12 rounded-xl font-black text-sm uppercase tracking-widest transition-all duration-300 shadow-xl ${product.id.includes('bundle')
                            ? "bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 shadow-red-500/10"
                            : "bg-primary hover:bg-primary/90 text-primary-foreground shadow-primary/10"
                            }`}
                    >
                        <Download className="mr-2.5 h-4 w-4" />
                        <span>{t("product.buy_now")}</span>
                    </Button>

                    <div className="flex items-center justify-center gap-1.5 mt-3 text-[10px] font-medium text-white/30 uppercase tracking-[0.1em]">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>{t("product.secure_purchase")}</span>
                    </div>
                </div>
            </div>
        </Card>
    )
}
