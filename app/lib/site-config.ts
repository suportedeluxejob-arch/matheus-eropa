import { Monitor, Gamepad2, Target } from "lucide-react"

export const SITE_CONFIG = {
    hero: {
        badgeStarColor: "#22d3ee",
        titleHighlightGradient: "from-cyan-400 via-blue-500 to-primary",
    },
    banners: [
        {
            id: "banner-1",
            image: "/images/egs-easportsfc26standardedition-eacanada-s2-1200x1600-effee280c00b9890a0c5249d4b0e5c97.jpg",
            alt: "EA Sports FC 26 Launch",
            link: "#products",
        },
        {
            id: "banner-2",
            image: "/eafc26-bundle-promo.png", // Using bundle as a second banner
            alt: "Special Bundle Promotion",
            link: "#products",
        }
    ],
    platforms: [
        {
            id: "ps4",
            name: "PlayStation 4",
            icon: Gamepad2,
            color: "from-blue-600 to-indigo-600",
        },
        {
            id: "ps5",
            name: "PlayStation 5",
            icon: Gamepad2,
            color: "from-blue-500 to-cyan-500",
        },
        {
            id: "xbox",
            name: "Xbox Series",
            icon: Target,
            color: "from-emerald-500 to-green-600",
        },
        {
            id: "pc",
            name: "PC Gaming",
            icon: Monitor,
            color: "from-cyan-500 to-blue-600",
        },
    ],
    images: {
        heroMain: "/images/egs-easportsfc26standardedition-eacanada-s2-1200x1600-effee280c00b9890a0c5249d4b0e5c97.jpg",
        logo: "/logo.png",
        favicon: "/favicon.ico",
    }
}
