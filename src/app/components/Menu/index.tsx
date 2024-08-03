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

	return (
		<React.Fragment>
			<nav className="navbar">
				<button
					type="button"
					className="navbar-button"
					onClick={(): void => setModalOpen(true)}
				>
					<Icon.NavbarMenu className="navbar-icon" />
				</button>
			</nav>
			{modalOpen && (
				<div className="modal">
					<div className="modal-content">
						<div className="modal-header">
							<Icon.Search className="search-icon" />
							<input type="text" placeholder={`Pesquisar`} autoFocus />
							<Icon.Close className="close-icon" onClick={(): void => setModalOpen(false)} />
						</div>
						<div className="modal-body">
							<ModalSection name="Idioma">
								<ModalButton icon={Icon.Language} text="Português" />
								<ModalButton icon={Icon.Language} text="Inglês" />
								<ModalButton icon={Icon.Language} text="Espanhol" />
							</ModalSection>
							<ModalSection name="Sociais">
								<ModalButton icon={Icon.GitHub} text="GitHub" onClick={(): Window | null => window.open("https://github.com/matheuszpicoli/", "_blank")} />
								<ModalButton icon={Icon.LinkedIn} text="LinkedIn" onClick={(): Window | null => window.open("https://www.linkedin.com/in/matheus-zpicoli/", "_blank")} />
							</ModalSection>
							<ModalSection name="Tema">
								<ModalButton icon={Icon.LightMode} text="Claro" onClick={(): void => themeContext.setLightTheme()} disabled={Boolean(theme === "light")} />
								<ModalButton icon={Icon.DarkMode} text="Escuro" onClick={(): void => themeContext.setDarkTheme()} disabled={Boolean(theme === "dark")} />
							</ModalSection>
							<ModalSection name="Sugestões">
								<ModalButton icon={Icon.Url} text={urlButtonText} onClick={(): void => handleUrlButtonClick()} disabled={Boolean(urlButtonText === urlButtonTextAfterClicked)} />
								<ModalButton icon={Icon.CodeSymbol} text="Código Fonte" onClick={(): Window | null => window.open("https://github.com/matheuszpicoli/portfolio2nd", "_blank")} />
							</ModalSection>
						</div>
					</div>
				</div>
			)}
		</React.Fragment>
	)
}
