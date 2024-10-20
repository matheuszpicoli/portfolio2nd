"use client"

import React, { useState } from "react"

import * as Icon from "@/app/assets/icons"

interface DropdownMenuProps extends React.HTMLAttributes<HTMLDivElement> {
    name: string
    menu?: string
}

export default function DropdownMenu(props: DropdownMenuProps): React.JSX.Element {
    const [openMenu, setOpenMenu] = useState<string | null>(null)

    const handleMouseEnter = (menu: string): void => setOpenMenu(menu)
    const isMenuOpen: boolean = typeof openMenu === "string"
    const mainColor: string = "#942648"
    const dropdownMenu: string = props.menu ?? props.name.toLowerCase()

    return (
        <div className="dropdown-menu" onMouseEnter={(): void => handleMouseEnter(dropdownMenu)} onMouseLeave={(): void => setOpenMenu(null)} {...props}>
            <span className="dropdown-title" style={isMenuOpen ? { color: mainColor } : undefined}>
                {props.name}<Icon.Arrow style={isMenuOpen ? { transform: "rotate(180deg)" } : undefined} />
            </span>
            {openMenu === dropdownMenu && (
                <div className="submenu">
                    {props.children}
                </div>
            )}
        </div>
    )
}
