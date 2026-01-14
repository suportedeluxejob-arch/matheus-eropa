export interface Product {
    id: string;
    category: "bundle" | "ea-fc" | "pes" | "mobile" | "service";
    version?: string;
    badge?: string;
    titleKey: string;
    descriptionKey: string;
    priceKey: string;
    oldPriceKey: string;
    image: string;
    link: string;
    cardLink?: string; // Optional credit card link
    isPromo?: boolean;
    withTimer?: boolean;
}

export const PRODUCTS: Product[] = [
    {
        id: "eafc26-bundle",
        category: "bundle",
        badge: "🔥 SUPER PROMOÇÃO",
        titleKey: "descriptions.eafc26_bundle_title",
        descriptionKey: "descriptions.eafc26_bundle_desc_short", // Need to ensure these keys exist
        priceKey: "product.price_eafc26_bundle",
        oldPriceKey: "product.price_eafc26_bundle_old",
        image: "/eafc26-bundle-promo.png",
        link: "https://go.invictuspay.app.br/3p65wtvjht",
        cardLink: "https://pay.cakto.com.br/agtjpxf_638373",
        isPromo: true,
        withTimer: true,
    },
    {
        id: "eafc26-standard",
        category: "ea-fc",
        version: "EA Sports FC 26",
        badge: "🚀 LANÇAMENTO",
        titleKey: "descriptions.eafc26_title",
        descriptionKey: "descriptions.eafc26_desc",
        priceKey: "product.price_eafc26",
        oldPriceKey: "product.price_eafc26_old",
        image: "/site-26.png",
        link: "https://go.invictuspay.app.br/qaatnpzass",
        cardLink: "https://pay.cakto.com.br/5jgfx87_638363",
        isPromo: true,
    },
    {
        id: "eafc25-standard",
        category: "ea-fc",
        version: "EA Sports FC 25",
        titleKey: "descriptions.eafc25_title",
        descriptionKey: "descriptions.eafc25_desc",
        priceKey: "product.price_eafc25",
        oldPriceKey: "product.price_eafc25_old",
        image: "/eafc25-brasileiros.png",
        link: "https://go.invictuspay.app.br/fuv2ufja8l",
        cardLink: "https://pay.cakto.com.br/39xfxuj_638367",
        isPromo: true,
    },
    {
        id: "eafc25-bundle",
        category: "bundle",
        badge: "PACOTE",
        titleKey: "descriptions.eafc25_bundle_title",
        descriptionKey: "descriptions.eafc25_bundle_desc",
        priceKey: "product.price_eafc25_bundle",
        oldPriceKey: "product.price_eafc25_bundle_old",
        image: "/eafc25-bundle.png",
        link: "https://go.invictuspay.app.br/rt0t2uecxd",
        cardLink: "https://pay.cakto.com.br/39xfxuj_638367",
    },
    {
        id: "eafc24-standard",
        category: "ea-fc",
        version: "EA Sports FC 24",
        titleKey: "descriptions.eafc24_title",
        descriptionKey: "descriptions.eafc24_desc",
        priceKey: "product.price_eafc24",
        oldPriceKey: "product.price_eafc24_old",
        image: "/eafc24-brasileiros.png",
        link: "https://go.invictuspay.app.br/kllijhnfgx",
        cardLink: "https://pay.cakto.com.br/337h6fv_638368",
        isPromo: true,
    },
    {
        id: "pes21-bundle",
        category: "pes",
        version: "eFootball PES 2021",
        titleKey: "descriptions.pes21_bundle_title",
        descriptionKey: "descriptions.pes21_bundle_desc",
        priceKey: "product.price_pes21_bundle",
        oldPriceKey: "product.price_pes21_bundle_old",
        image: "/pes2021-bundle.png",
        link: "https://go.invictuspay.app.br/ovmhlg21rh",
        cardLink: "https://pay.cakto.com.br/3634a38_638395",
        isPromo: true,
    },
    {
        id: "pes21-patch",
        category: "pes",
        version: "eFootball PES 2021",
        badge: "PATCH",
        titleKey: "descriptions.pes21_patch_title",
        descriptionKey: "descriptions.pes21_patch_desc",
        priceKey: "product.price_pes21_patch",
        oldPriceKey: "product.price_pes21_patch_old",
        image: "/pes2021-patch.png",
        link: "https://go.invictuspay.app.br/qcgqeanwjc",
        cardLink: "https://pay.cakto.com.br/8fekayj_638394",
    },
    {
        id: "dfl25-mobile",
        category: "mobile",
        version: "Mobile Gaming",
        titleKey: "descriptions.dfl25_title",
        descriptionKey: "descriptions.dfl25_desc",
        priceKey: "product.price_dfl25",
        oldPriceKey: "product.price_dfl25_old",
        image: "/dfl25-celular.png",
        link: "https://pay.cakto.com.br/xa54qtu_638427",
        isPromo: true,
    },
    {
        id: "remote-install",
        category: "service",
        badge: "SERVICE",
        titleKey: "descriptions.remote_install_title",
        descriptionKey: "descriptions.remote_install_desc",
        priceKey: "product.price_remote_install",
        oldPriceKey: "product.price_remote_install", // Same price for service usually
        image: "/instalacao-remota.png",
        link: "https://pay.cakto.com.br/xhxaq8h_638384",
    }
];
