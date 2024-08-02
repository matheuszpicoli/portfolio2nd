//- React
import React from "react"

//- Next
import type { Metadata } from "next"

//- Styles
import "@/app/scss/index.scss"

//- Components
import Menu from "@/app/components/Menu"

export const metadata: Metadata = {
	title: "Portfólio | Matheus Picoli",
	description: "Meu portfólio pessoal, feito em Next JS com Typescript e SCSS.",
	authors: [{
		name: "Matheus Zanela Picoli",
		url: "https://github.com/matheuszpicoli/portfolio2nd"
	}],
	keywords: [
		"NextJS",
		"Next",
		"Portfólio",
		"Portfólio Pessoal",
		"React",
		"ReactJS",
		"JavaScript",
		"JS",
		"TypeScript",
		"TS",
		"Git",
		"GitHub"
	]
}

interface RootLayoutProps {
	children: React.ReactNode
}

export default function RootLayout(props: Readonly<RootLayoutProps>): React.JSX.Element {
	return (
		<html lang="pt-br">
			<body className="container">
				<Menu />
				{props.children}
			</body>
		</html>
	)
}
