"use client"

//- React
import { createContext, useContext, useLayoutEffect, useState } from "react"

//- Theme
import * as Theme from "@/app/theme/themes"

type ThemeContextType = {
	theme: Theme.ThemeTemplate
	setLightTheme: () => void
	setDarkTheme: () => void
}

interface ThemeProviderProps {
	children: React.ReactNode
}

export const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType)

export const getStoredTheme = (): Theme.ThemeName => {
	if (typeof window !== "undefined") {
		const storedTheme = window.localStorage.getItem("theme")

		return storedTheme ? storedTheme as Theme.ThemeName : "light"
	}

	return "light"
}

export function ThemeProvider(props: ThemeProviderProps) {
	const [themeName, setThemeName] = useState<Theme.ThemeName>(getStoredTheme)

	const theme: Theme.ThemeTemplate = Theme.themes[themeName]

	const setLightTheme = (): void => {
		window?.localStorage.setItem("theme", "light")

		setThemeName("light")
	}

	const setDarkTheme = (): void => {
		window?.localStorage.setItem("theme", "dark")

		setThemeName("dark")
	}

	useLayoutEffect(() => {
		if (themeName === "light") {
			document.body.classList.remove("dark-theme")
			document.body.classList.add("light-theme")
		}
		else if (themeName === "dark") {
			document.body.classList.remove("light-theme")
			document.body.classList.add("dark-theme")
		}

		document.body.style.transition = "all 500ms ease-in-out"
	}, [theme, themeName])

	return (
		<ThemeContext.Provider value={{ theme, setLightTheme, setDarkTheme }}>
			{props.children}
		</ThemeContext.Provider>
	)
}

export const useTheme = (): ThemeContextType => useContext(ThemeContext)
