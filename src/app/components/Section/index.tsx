//- React
import React from "react"

interface SectionProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
	name: string
	children: React.ReactNode
}

export default function Section(props: SectionProps): React.JSX.Element {
	return (
		<section className="section">
			<div className="section-title">
				<h2>{props.name}</h2>
			</div>
			<div className="section-content">
				{props.children}
			</div>
		</section>
	)
}
