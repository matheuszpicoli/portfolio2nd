"use client"

//- React
import React from "react"

//- Components
import Section from "../Section"

//- Icon API
import * as Icon from "@/app/api/iconAPI"

//- Components
import FormField from "./FormField"

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
					<a href="mailto:matheuspicoli2011@gmail.com">
						<Icon.Mail className="connect-icon" />
					</a>
					<p>Se meu trabalho lhe despertou interesse ou se você gostaria de compartilhar seu feedback sobre este site, ficarei feliz em trocar ideias.</p>
				</div>
				<form
					action="post"
					onSubmit={(): void => event?.preventDefault()}
					className="connect-form"
				>
					<FormField formType="input" id="name" type="text" name="Nome" spellCheck={false} required />
					<FormField formType="input" id="email" type="text" name="E-mail" spellCheck={false} required />
					<FormField formType="textarea" id="message" name="Mensagem" spellCheck={false} required />
					<button type="submit" className="form-button">
						Enviar
					</button>
				</form>
			</div>
		</Section>
	)
}
