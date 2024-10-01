"use client"
import { useLayoutEffect, useState } from "react"
import * as Icon from "@/app/assets/icons"

export default function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState<boolean>(false)

    const handleScroll = (): void => window.scrollY >= 30
        ? setIsVisible(true)
        : setIsVisible(false)

    const scrollToTop = (): void => window.scrollTo({ top: 0, behavior: "smooth" })

    useLayoutEffect(() => {
        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        isVisible && (
            <button className="scroll-to-top-button" onClick={scrollToTop}>
                Voltar ao Topo<Icon.Up />
            </button>
        )
    )
}
