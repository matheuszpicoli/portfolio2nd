import React from "react"

import * as Icon from "@/app/assets/icons"
import Card from "@/app/components/utils/Card"

export default function Apps(): React.JSX.Element {
    return (
        <section className="apps">
            <h1>Apps</h1>
            <p>Aqui eu coloquei tudo em um só lugar, mostrando os softwares e serviços que utilizo em meu dia a dia.</p>
            <article className="cards">
                <Card icon={Icon.AnyDesk} content="AnyDesk" category="Serviço" />
                <Card icon={Icon.Canva} content="Canva" category="Design" />
                <Card icon={Icon.ChatGPT} content="Chat GPT" category="IA" />
                <Card icon={Icon.Dbeaver} content="Dbeaver" category="Código" />
                <Card icon={Icon.GithubDesktop} content="Github Desktop" category="Código" />
                <Card icon={Icon.OBSStudio} content="OBS Studio" category="Serviço" />
                <Card icon={Icon.OneNote} content="OneNote" category="Organização" />
                <Card icon={Icon.Postman} content="Postman" category="API" />
                <Card icon={Icon.Powershell} content="PowerShell" category="Terminal" />
                <Card icon={Icon.RemoteDesktop} content="Área de trabalho remota" category="Serviço" />
                <Card icon={Icon.Spotify} content="Spotify" category="Música" />
                <Card icon={Icon.VirtualBox} content="Virtual Box" category="Serviço" />
                <Card icon={Icon.VSCode} content="Visual Studio Code" category="Código" />
            </article>
        </section>
    )
}
