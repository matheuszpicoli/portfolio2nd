"use client"

import React, { useContext } from "react"
import { ThemeContext } from "@/app/hooks/contexts/themeContext"
import * as Icon from "@/app/assets/icons"

export default function ThemeButton(): React.JSX.Element {
    const { theme, toggleTheme } = useContext(ThemeContext)

    return (
        <button type="button" className="theme-button" onClick={toggleTheme}>
            {theme === "light"
                ? <React.Fragment><Icon.Moon />Modo escuro</React.Fragment>
                : <React.Fragment><Icon.Sun />Modo claro</React.Fragment>
            }
        </button>
    )
}
