import React from "react"

import Image from "next/image"

import type { IconType } from "react-icons"
import type { StaticImageData } from "next/image"

interface CardProps {
    icon?: IconType
    image?: StaticImageData
    content: string
    category: string
}

export default function Card(props: CardProps): React.JSX.Element {
    return (
        <div className="card">
            <div className="card-header">
                <figure>
                    {props.icon && <props.icon aria-label={props.content.toLowerCase().replaceAll(" ", "-")} />}
                    {props.image && <Image src={props.image} alt={props.content} priority={false} />}
                </figure>
            </div>
            <div className="card-body">
                <strong>{props.content}</strong>
            </div>
            <div className="card-footer">
                <p>{props.category}</p>
            </div>
        </div>
    )
}
