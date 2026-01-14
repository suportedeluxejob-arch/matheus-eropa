"use client"

import React, { createContext, useContext, useEffect, useState } from "react"
import { dictionary, Locale } from "@/app/lib/dictionaries"

type LanguageContextType = {
    language: Locale
    setLanguage: (lang: Locale) => void
    t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguageState] = useState<Locale>("es")
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        // 1. Check Local Storage
        const savedLang = localStorage.getItem("wgpatch-language") as Locale
        if (savedLang && ["es", "it"].includes(savedLang)) {
            setLanguageState(savedLang)
            setIsLoaded(true)
            return
        }

        // 2. Check Browser Language
        const browserLang = navigator.language.toLowerCase()
        if (browserLang.startsWith("es")) {
            setLanguageState("es")
        } else if (browserLang.startsWith("it")) {
            setLanguageState("it")
        } else {
            setLanguageState("es") // Default fallback
        }
        setIsLoaded(true)
    }, [])

    const setLanguage = (lang: Locale) => {
        setLanguageState(lang)
        localStorage.setItem("wgpatch-language", lang)
    }

    // Nested object lookup for translations
    const t = (path: string): string => {
        const keys = path.split(".")
        let current: any = dictionary[language]

        for (const key of keys) {
            if (current[key] === undefined) {
                console.warn(`Translation missing for key: ${path} in language: ${language}`)
                return path // Return key as fallback
            }
            current = current[key]
        }

        return current as string
    }

    if (!isLoaded) {
        return null // or a loading spinner to prevent flash of wrong content
    }

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    )
}

export function useLanguage() {
    const context = useContext(LanguageContext)
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider")
    }
    return context
}
