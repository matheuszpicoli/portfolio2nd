import React from "react"
import { IconType } from "react-icons"

interface CardProps {
    icon: IconType
    content: string
    description: string
}

export default function Card(props: CardProps): React.JSX.Element {
    return (
        <div className="card">
            <div className="card-header">
                <props.icon aria-label={props.content.toLowerCase().replaceAll(" ", "-")} />
            </div>
            <div className="card-body">
                <strong>{props.content}</strong>
            </div>
            <div className="card-footer">
                <p>{props.description}</p>
            </div>
        </div>
    )
}
