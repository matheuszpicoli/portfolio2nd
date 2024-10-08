"use client"

import React from "react"

import DropdownItem from "./utils/DropdownItem"
import DropdownMenu from "./utils/DropdownMenu"
import ThemeButton from "./utils/ThemeButton"
import TransitionLink from "./utils/TransitionLink"

type Anchor = "projects" | "technologies" | "contact"

export default function Navbar(): React.JSX.Element {
    const openLink = (link: string, target: "_self" | "_blank" = "_self"): Window | null => window?.open(link, target, "noopener noreferrer")

    const navigateToAnchor = (anchor: Anchor): void => {
        const anchorLink = document.getElementById(anchor) as HTMLAnchorElement

        const offset: number = 50
        const anchorPosition: number = anchorLink.getBoundingClientRect().top + window.scrollY

        window.scrollTo({
            top: (anchorPosition) - offset,
            behavior: "smooth"
        })
    }

    return (
        <header>
            <nav className="navbar">
                <div className="logo">
                    <TransitionLink href="/">
                        <span>M</span>atheus <span>P</span>icoli
                    </TransitionLink>
                </div>
                <div className="actions">
                    <DropdownMenu name="Setup">
                        <TransitionLink href="/apps">
                            <DropdownItem name="Apps">
                                Aplicativos e serviços que utilizo no meu dia a dia.
                            </DropdownItem>
                        </TransitionLink>
                        <TransitionLink href="/equipment">
                            <DropdownItem name="Equipamentos">
                                Equipamentos que uso e aprovo.
                            </DropdownItem>
                        </TransitionLink>
                    </DropdownMenu>

                    <DropdownMenu name="Profissional">
                        <DropdownItem name="Meus projetos" onClick={(): void => navigateToAnchor("projects")}>
                            Veja aqui os meus projetos mais recentes.
                        </DropdownItem>
                        <DropdownItem name="Skills" onClick={(): void => navigateToAnchor("technologies")}>
                            Tecnologias que utilizo em meus projetos e que venho trabalhando nos últimos tempos.
                        </DropdownItem>
                        <DropdownItem name="Ficou interessado?" onClick={(): void => navigateToAnchor("contact")}>
                            Compartilhe a sua ideia aqui, não leva nem 2 minutos.
                        </DropdownItem>
                    </DropdownMenu>

                    <DropdownMenu name="Contato">
                        <DropdownItem name="Currículo">
                            Clique aqui para visualizar meu currículo em PDF.
                        </DropdownItem>
                        <DropdownItem name="Email" onClick={(): Window | null => openLink("mailto: matheuspicoli2011@gmail.com")}>
                            Entre em contato comigo por email.
                        </DropdownItem>
                        <DropdownItem name="Github" onClick={(): Window | null => openLink("https://github.com/matheuszpicoli", "_blank")}>
                            Acesse meu Github.
                        </DropdownItem>
                        <DropdownItem name="LinkedIn" onClick={(): Window | null => openLink("https://www.linkedin.com/in/matheus-zpicoli", "_blank")}>
                            Acesse meu LinkedIn.
                        </DropdownItem>
                    </DropdownMenu>

                    <ThemeButton />
                </div>
            </nav>
        </header>
    )
}
