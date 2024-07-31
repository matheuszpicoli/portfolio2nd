"use client"

//- React
import React from "react"

//- Components
import Section from "../Section"

//- Icon API
import * as Icon from "@/app/api/iconAPI"

export default function Connect(): React.JSX.Element {
	return (
		<Section name="Conecte-se">
			<div className="connect">
				<div>
					<a href="https://github.com/matheuszpicoli" target="_blank" rel="noopener noreferrer">
						<Icon.GitHub className="connect-icon" />
					</a>
					<a href="https://www.linkedin.com/in/matheus-zpicoli" target="_blank" rel="noopener noreferrer">
						<Icon.LinkedIn className="connect-icon" />
					</a>
					<p>Se meu trabalho lhe despertou interesse ou se você gostaria de compartilhar seu feedback sobre este site, ficarei feliz em trocar ideias.</p>
				</div>
				<form
					action="post"
					onSubmit={(): void => event?.preventDefault()}
					className="connect-form"
				>
					<div className="form-field">
						<input id="name" type="text" spellCheck={false} required />
						<label htmlFor="name">Nome</label>
					</div>
					<div className="form-field">
						<input id="email" type="text" spellCheck={false} required />
						<label htmlFor="email">E-mail</label>
					</div>
					<div className="form-field">
						<textarea id="message" spellCheck={false} required></textarea>
						<label htmlFor="message">Mensagem</label>
					</div>
					<button type="submit" className="form-button">
						Enviar
					</button>
				</form>
			</div>
		</Section>
	)
}
