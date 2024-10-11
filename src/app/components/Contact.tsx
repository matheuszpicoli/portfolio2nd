"use client"

import React, { useState } from "react"

import * as Icon from "@/app/assets/icons"
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser"
import Toast, { ToastProps } from "./utils/Toast"

type MailTemplate = {
    from_name: string
    message: string
    email: string
}

export default function Contact(): React.JSX.Element {
    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [message, setMessage] = useState<string>("")
    const [toast, setToast] = useState<ToastProps | null>(null)

    async function sendEmail(event: React.FormEvent<HTMLFormElement>): Promise<void> {
        event.preventDefault()

        try {
            await emailjs.send(
                process.env.NEXT_PUBLIC_SERVICE_ID as string,
                process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
                { from_name: name, message: message, email: email } as MailTemplate,
                process.env.NEXT_PUBLIC_PUBLIC_KEY as string
            ) as EmailJSResponseStatus

            setToast({
                variant: "success",
                message: "Email enviado com sucesso!"
            })
        } catch (error: any) {
            setToast({
                variant: "error",
                message: "Ocorreu um erro ao enviar o email. Por favor, tente novamente."
            })
            console.error(error)
        } finally {
            setName("")
            setEmail("")
            setMessage("")
        }
    }

    return (
        <React.Fragment>
            <section className="contact-section" id="contact">
                <h2>Conecte-se</h2>
                <p>Para entrar em contato comigo, por favor, preencha os dados abaixo.</p>
                <p>Estou sempre aberto a novas oportunidades e ficarei feliz em discutir como posso ajudar em seu projeto.</p>
                <p>Aqui também está as minhas redes sociais profissionais, fique à vontade para dar uma olhada.</p>
                <div className="actions">
                    <button type="button" onClick={(): Window | null => window?.open("https://github.com/matheuszpicoli", "_blank", "noopener noreferrer")}>
                        <Icon.Github />Github
                    </button>
                    <button type="button" onClick={(): Window | null => window?.open("https://www.linkedin.com/in/matheus-zpicoli", "_blank", "noopener noreferrer")}>
                        <Icon.LinkedIn />LinkedIn
                    </button>
                </div>
                <form className="contact-form" onSubmit={sendEmail}>
                    <div>
                        <label htmlFor="name">Nome</label>
                        <input id="name" type="text" name="name" placeholder="Seu nome" onChange={(event: React.ChangeEvent<HTMLInputElement>): void => setName(event.target.value)} value={name} required />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input id="email" type="email" name="email" placeholder="exemplo@exemplo.com" onChange={(event: React.ChangeEvent<HTMLInputElement>): void => setEmail(event.target.value)} value={email} required />
                    </div>
                    <div>
                        <label htmlFor="message">Mensagem</label>
                        <textarea id="message" name="message" placeholder="Sua mensagem" onChange={(event: React.ChangeEvent<HTMLTextAreaElement>): void => setMessage(event.target.value)} value={message} required />
                    </div>
                    <div>
                        <button type="submit">Enviar</button>
                    </div>
                </form>
            </section>
            {toast && <Toast variant={toast.variant} message={toast.message} />}
        </React.Fragment>
    )
}
