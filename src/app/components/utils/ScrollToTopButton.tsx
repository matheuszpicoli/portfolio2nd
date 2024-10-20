"use client"

import React, { useLayoutEffect, useState } from "react"

import * as Icon from "@/app/assets/icons"

export default function ScrollToTopButton(): React.JSX.Element {
    const [isVisible, setIsVisible] = useState<boolean>(false)

    const handleScroll = (): void => window.scrollY >= 30
        ? setIsVisible(true)
        : setIsVisible(false)

    useLayoutEffect(() => {
        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <React.Fragment>
            {isVisible && (
                <button className="scroll-to-top-button" onClick={(): void => window.scrollTo({ top: 0, behavior: "smooth" })}>
                    Voltar ao Topo<Icon.Up />
                </button>
            )}
        </React.Fragment>
    )
}
