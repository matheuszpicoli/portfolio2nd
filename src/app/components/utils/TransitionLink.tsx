"use client"

import React from "react"

import { useRouter } from "next/navigation"
import Link from "next/link"

interface TransitionLinkProps {
    children: React.ReactNode
    href: string
}

const sleep = (time: number): Promise<void> => new Promise<void>((resolve) => setTimeout(resolve, time))

export default function TransitionLink(props: TransitionLinkProps): React.JSX.Element {
    const router = useRouter()
    const handleTransition = async (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>): Promise<void> => {
        event.preventDefault()

        document.body.classList.add("page-transition")
        await sleep(250)

        router.push(props.href)

        await sleep(250)
        document.body.classList.remove("page-transition")
    }

    return (
        <Link onClick={handleTransition} href={props.href}>
            {props.children}
        </Link>
    )
}
