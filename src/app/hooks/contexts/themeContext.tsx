"use client"
import React, { createContext, useContext, useLayoutEffect, useState } from "react"

type Theme = "light" | "dark" | null

type ThemeContextType = {
    theme: Theme
    toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType)

interface ThemeProviderProps {
    children: React.ReactNode
}

export function ThemeProvider(props: ThemeProviderProps) {
    const [theme, setTheme] = useState<Theme>(null)

    useLayoutEffect((): void => {
        if (typeof window !== "undefined") {
            const storedTheme = localStorage.getItem("theme") as Theme

            if (storedTheme) setTheme(storedTheme)
            else {
                const userPreferredTheme: Theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"

                setTheme(userPreferredTheme)
            }
        }
    }, [])

    const toggleTheme = (): void => {
        setTheme((prev: Theme): Theme => {
            const newTheme: Theme = prev === "light" ? "dark" : "light"

            if (typeof window !== "undefined") localStorage.setItem("theme", newTheme)
            return newTheme
        })
    }

    useLayoutEffect((): void => {
        document.body.classList.toggle("dark-theme", theme === "dark")
        document.body.classList.toggle("light-theme", theme === "light")
    }, [theme])

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export const useTheme = (): ThemeContextType => useContext(ThemeContext)
