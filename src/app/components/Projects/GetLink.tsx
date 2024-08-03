//- React
import React from "react"

//- Types
import type { IconType } from "react-icons"

interface LinkProps {
	href: string
	icon: IconType
	newTab?: boolean
}

export default function GetLink(props: LinkProps): React.JSX.Element {
	return (
		<a
			className="project-link"
			href={props.href}
			target={!props.newTab ? "_blank" : "_self"}
			rel="noopener noreferrer"
		>
			<props.icon className="project-icon" />
		</a>
	)
}
