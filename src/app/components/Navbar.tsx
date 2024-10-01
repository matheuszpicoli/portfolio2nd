"use client"

import React from "react"

import DropdownItem from "./utils/DropdownItem"
import DropdownMenu from "./utils/DropdownMenu"
import ThemeButton from "./utils/ThemeButton"
import TransitionLink from "./utils/TransitionLink"

export default function Navbar(): React.JSX.Element {
    const openLink = (link: string, target: "_self" | "_blank" = "_self"): Window | null => window?.open(link, target, "noopener noreferrer")

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
                    <DropdownMenu name="Projetos">
                        <DropdownItem name="">
                            Nada por enquanto
                        </DropdownItem>
                    </DropdownMenu>
                    <DropdownMenu name="Contato">
                        <DropdownItem name="Currículo">
                            Clique aqui para visualizar meu currículo em PDF.
                        </DropdownItem>
                        <DropdownItem name="Email" onClick={() => openLink("mailto: matheuspicoli2011@gmail.com")}>
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
                    <select name="languages" defaultValue={"Português"}>
                        <option value="Português">Português</option>
                        <option value="Inglês">English</option>
                        <option value="Espanhol">Español</option>
                    </select>
                </div>
            </nav>
        </header>
    )
}
