"use client"
import React, { useState } from "react"

declare interface DropdownMenuProps extends React.HTMLAttributes<HTMLDivElement> {
    name: string
    menu: string
}

export default function DropdownMenu(props: DropdownMenuProps): React.JSX.Element {
    const [openMenu, setOpenMenu] = useState<string | null>(null)

    const handleMouseEnter = (menu: string): void => setOpenMenu(menu)

    return (
        <div className="dropdown-menu" onMouseEnter={(): void => handleMouseEnter(props.menu)} onMouseLeave={(): void => setOpenMenu(null)}>
            <span className="dropdown-title" style={openMenu !== null ? { color: "#6f16cf" } : undefined}>
                {props.name}
            </span>
            {openMenu === props.menu && (
                <div className="submenu">
                    {props.children}
                </div>
            )}
        </div>
    )
}
