"use client"

//- React
import React, { useState, useLayoutEffect, useContext } from "react"

//- Icons
import * as Icon from "@/app/api/iconAPI"

//- Components
import ModalButton from "./ModalButton"
import ModalSection from "./ModalSection"

//- Context
import * as Context from "@/app/hooks/context/themeContext"

export default function Menu(): React.JSX.Element {
	const urlButtonTextBeforeClicked: string = "Copiar Link"
	const urlButtonTextAfterClicked: string = "Link Copiado!"

	const [modalOpen, setModalOpen] = useState<boolean>(false)
	const [urlButtonText, setUrlButtonText] = useState<string>(urlButtonTextBeforeClicked)
	const [searchTerm, setSearchTerm] = useState<string>("")

	const themeContext = useContext(Context.ThemeContext)
	const theme = Context.getStoredTheme()

	useLayoutEffect(() => {
		if (modalOpen) {
			const esc = (event: KeyboardEvent): void => {
				if (event.code === "Escape") setModalOpen(false)
			}

			window.addEventListener("keydown", esc)

			return (): void => window.removeEventListener("keydown", esc)
		}
	}, [modalOpen])

	const handleUrlButtonClick = (): void => {
		navigator.clipboard.writeText(window.location.href) as Promise<void>

		setUrlButtonText(urlButtonTextAfterClicked)
		setTimeout((): void => setUrlButtonText(urlButtonTextBeforeClicked), 3000) as NodeJS.Timeout
	}

	const filterButtons = (text: string) => {
		const filterText = text.toLowerCase()

		return [
			{ icon: Icon.Language, text: "Português" },
			{ icon: Icon.Language, text: "Inglês" },
			{ icon: Icon.Language, text: "Espanhol" },
			{ icon: Icon.GitHub, text: "GitHub", onClick: () => window.open("https://github.com/matheuszpicoli/", "_blank") },
			{ icon: Icon.LinkedIn, text: "LinkedIn", onClick: () => window.open("https://www.linkedin.com/in/matheus-zpicoli/", "_blank") },
			{ icon: Icon.LightMode, text: "Claro", onClick: () => themeContext.setLightTheme(), disabled: Boolean(theme === "light") },
			{ icon: Icon.DarkMode, text: "Escuro", onClick: () => themeContext.setDarkTheme(), disabled: Boolean(theme === "dark") },
			{ icon: Icon.Url, text: urlButtonText, onClick: () => handleUrlButtonClick(), disabled: Boolean(urlButtonText === urlButtonTextAfterClicked) },
			{ icon: Icon.CodeSymbol, text: "Código Fonte", onClick: () => window.open("https://github.com/matheuszpicoli/portfolio2nd", "_blank") }
		].filter(button => button.text.toLowerCase().includes(filterText))
	}

	return (
		<React.Fragment>
			<nav className="navbar">
				<button
					type="button"
					className="navbar-button"
					onClick={() => setModalOpen(true)}
				>
					<Icon.NavbarMenu className="navbar-icon" />
				</button>
			</nav>
			{modalOpen && (
				<div className="modal">
					<div className="modal-content">
						<div className="modal-header">
							<Icon.Search className="search-icon" />
							<input
								type="text"
								placeholder="Pesquisar"
								autoFocus
								value={searchTerm}
								onChange={(event: React.ChangeEvent<HTMLInputElement>): void => setSearchTerm(event.target.value)}
							/>
							<Icon.Close className="close-icon" onClick={() => setModalOpen(false)} />
						</div>
						<div className="modal-body">
							{["Idioma", "Sociais", "Tema", "Sugestões"].map((sectionName: string, index: number) => (
								<ModalSection key={index} name={sectionName}>
									{filterButtons(searchTerm).filter(button => {
										switch (sectionName) {
											case "Idioma":
												return ["Português", "Inglês", "Espanhol"].includes(button.text)
											case "Sociais":
												return ["GitHub", "LinkedIn"].includes(button.text)
											case "Tema":
												return ["Claro", "Escuro"].includes(button.text)
											case "Sugestões":
												return ["Código Fonte", urlButtonTextBeforeClicked, urlButtonTextAfterClicked].includes(button.text)
											default:
												return false
										}
									}).map((button, index) => (
										<ModalButton
											key={index}
											icon={button.icon}
											text={button.text}
											onClick={button.onClick}
											disabled={button.disabled}
										/>
									))}
								</ModalSection>
							))}
						</div>
					</div>
				</div>
			)}
		</React.Fragment>
	)
}
