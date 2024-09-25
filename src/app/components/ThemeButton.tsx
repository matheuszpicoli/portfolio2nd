"use client"

import React, { useContext } from "react"
import { ThemeContext } from "@/app/hooks/themeContext"
import * as Icon from "@/app/assets/icons"

export default function ThemeToggleButton(): React.JSX.Element {
    const { theme, toggleTheme } = useContext(ThemeContext)

    return (
        <button type="button" onClick={toggleTheme}>
            {theme === "light"
                ? <Icon.Moon />
                : <Icon.Sun />
            }
        </button>
    )
}
