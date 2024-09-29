import React from "react"
import * as Icon from "@/app/assets/icons"
import Card from "../components/utils/Card"

export default function Apps(): React.JSX.Element {
    return (
        <section className="apps">
            <h1>Apps</h1>
            <p>Aqui eu coloquei tudo em um só lugar, mostrando os softwares e serviços que utilizo em meu dia a dia.</p>
            <article className="cards">
                <Card icon={Icon.AnyDesk} content="AnyDesk" description="Serviço" />
                <Card icon={Icon.Canva} content="Canva" description="Design" />
                <Card icon={Icon.ChatGPT} content="Chat GPT" description="IA" />
                <Card icon={Icon.Dbeaver} content="Dbeaver" description="Código" />
                <Card icon={Icon.GithubDesktop} content="Github Desktop" description="Código" />
                <Card icon={Icon.OBSStudio} content="OBS Studio" description="Serviço" />
                <Card icon={Icon.OneNote} content="OneNote" description="Organização" />
                <Card icon={Icon.Postman} content="Postman" description="API" />
                <Card icon={Icon.Powershell} content="PowerShell" description="Terminal" />
                <Card icon={Icon.RemoteDesktop} content="Área de trabalho remota" description="Serviço" />
                <Card icon={Icon.Spotify} content="Spotify" description="Música" />
                <Card icon={Icon.VirtualBox} content="Virtual Box" description="Serviço" />
                <Card icon={Icon.VSCode} content="Visual Studio Code" description="Código" />
            </article>
        </section>
    )
}
