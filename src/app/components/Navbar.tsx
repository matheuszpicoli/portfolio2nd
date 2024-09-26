import React from "react"
import ThemeButton from "./utils/ThemeButton"
import DropdownMenu from "./utils/DropdownMenu"

export default function Navbar(): React.JSX.Element {
    return (
        <header>
            <nav className="navbar">
                <div className="logo"><span>M</span>atheus <span>P</span>icoli</div>
                <div className="actions">
                    <DropdownMenu name="Home" menu="home">
                        {Array.from({ length: 3 }, (_: unknown, index: number): React.JSX.Element => {
                            return (
                                <div key={index}>
                                    {`Item ${index + 1} de home`}
                                </div>
                            )
                        })}
                    </DropdownMenu>
                    <DropdownMenu name="Projetos" menu="home">
                        {Array.from({ length: 3 }, (_: unknown, index: number): React.JSX.Element => {
                            return (
                                <div key={index}>
                                    {`Item ${index + 1} de projetos`}
                                </div>
                            )
                        })}
                    </DropdownMenu>
                    <DropdownMenu name="Contato" menu="contato">
                        {Array.from({ length: 3 }, (_: unknown, index: number): React.JSX.Element => {
                            return (
                                <div key={index}>
                                    {`Item ${index + 1} de contato`}
                                </div>
                            )
                        })}
                    </DropdownMenu>
                    <ThemeButton />
                    <select name="languages">
                        <option value="Português" selected>Português</option>
                        <option value="Inglês">Inglês</option>
                        <option value="Espanhol">Espanhol</option>
                    </select>
                </div>
            </nav>
        </header>
    )
}
