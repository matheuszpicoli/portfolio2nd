//- React
import React from "react"

//- Types
import type { IconType } from "react-icons"

interface ModalButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	icon: IconType
	text: string
}

export default function ModalButton(props: ModalButtonProps): React.JSX.Element {
	return (
		<button className="section-button" {...props}>
			<props.icon className="section-icon" />
			<p>{props.text}</p>
		</button>
	)
}
