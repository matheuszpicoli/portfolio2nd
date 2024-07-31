//- React
import React from "react"

interface FormLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	children: React.ReactNode
}

export default function FormLink(props: FormLinkProps): React.JSX.Element {
	return (
		<a {...props}>
			{props.children}
		</a>
	)
}
