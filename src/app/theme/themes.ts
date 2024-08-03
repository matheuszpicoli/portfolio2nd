export type ThemeTemplate = {
	background: string
}

export type ThemeName = "light" | "dark"

export type Theme = { [theme in ThemeName]: ThemeTemplate }

export const themes: Theme = {
	light: {
		background: "#e5e5e5"
	},
	dark: {
		background: "#131516"
	}
}
