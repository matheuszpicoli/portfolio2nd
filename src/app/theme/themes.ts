export type ThemeTemplate = {
	color: string
	background: string
}

export type ThemeName = "light" | "dark"

export type Theme = { [theme in ThemeName]: ThemeTemplate }

export const themes: Theme = {
	light: {
		color: "#131516",
		background: "#e5e5e5"
	},
	dark: {
		color: "#e5e5e5",
		background: "#131516"
	}
}
