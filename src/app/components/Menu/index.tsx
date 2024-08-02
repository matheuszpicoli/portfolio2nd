"use client"

//- React
import React, { useState, useLayoutEffect } from "react"

//- Icons
import * as Icon from "@/app/api/iconAPI"
import ModalSection from "./ModalSection"

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
							<ModalSection name="Menu">
								<p>Conteúdo</p>
							</ModalSection>
						</div>
					</div>
				</div>
			)}
		</React.Fragment>
	)
}
