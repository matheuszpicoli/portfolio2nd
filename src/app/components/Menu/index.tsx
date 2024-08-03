"use client"

//- React
import React, { useState, useLayoutEffect } from "react"

//- Icons
import * as Icon from "@/app/api/iconAPI"
import ModalSection from "./ModalSection"
import ModalButton from "./ModalButton"

export default function Menu(): React.JSX.Element {
	const [modalOpen, setModalOpen] = useState<boolean>(false)

	useLayoutEffect(() => {
		if (modalOpen) {
			const esc = (event: KeyboardEvent): void => {
				if (event.code === "Escape") setModalOpen(false)
			}

			window.addEventListener("keydown", esc)

			return (): void => window.removeEventListener("keydown", esc)
		}
	}, [modalOpen])

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
							<input type="text" placeholder="Pesquisar" autoFocus />
							<Icon.Close className="close-icon" onClick={(): void => setModalOpen(false)} />
						</div>
						<div className="modal-body">
							<ModalSection name="Idioma">
								<ModalButton icon={Icon.Language} text="Português" />
								<ModalButton icon={Icon.Language} text="Inglês" />
								<ModalButton icon={Icon.Language} text="Espanhol" />
							</ModalSection>
							<ModalSection name="Sociais">
								<ModalButton icon={Icon.GitHub} text="GitHub" />
								<ModalButton icon={Icon.LinkedIn} text="LinkedIn" />
							</ModalSection>
							<ModalSection name="Tema">
								<ModalButton icon={Icon.LightMode} text="Claro" />
								<ModalButton icon={Icon.DarkMode} text="Escuro" />
								<ModalButton icon={Icon.Laptop} text="Sistema" />
							</ModalSection>
							<ModalSection name="Sugestões">
								<ModalButton icon={Icon.Url} text="Copiar Link" />
								<ModalButton icon={Icon.CodeSymbol} text="Código Fonte" />
							</ModalSection>
						</div>
					</div>
				</div>
			)}
		</React.Fragment>
	)
}
