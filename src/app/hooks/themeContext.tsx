"use client"
import React, { createContext, useContext, useLayoutEffect, useState } from "react"

type Theme = "light" | "dark"

type ThemeContextType = {
    theme: Theme
    toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType)

interface ThemeProviderProps {
    children: React.ReactNode
}

export function ThemeProvider(props: ThemeProviderProps) {
    const [theme, setTheme] = useState<Theme>((): Theme => {
        const storedTheme = localStorage.getItem("theme")

        return storedTheme as Theme
    })

    useLayoutEffect((): void => {
        const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches

        setTheme(prev => prev || (prefersDarkScheme ? "dark" : "light"))
    }, [])

    const toggleTheme = (): void => {
        setTheme((prev: Theme): Theme => {
            const newTheme: Theme = prev === "light" ? "dark" : "light"
            localStorage.setItem("theme", newTheme)

            return newTheme
        })
    }

    useLayoutEffect((): void => {
        document.body.style.transitionDuration = "500ms"

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
