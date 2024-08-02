//- React
import React from "react"

interface ModalSectionProps {
	name: string
	children: React.ReactNode
}

export default function ModalSection(props: ModalSectionProps): React.JSX.Element {
	return (
		<section className="modal-section">
			<h3 className="modal-section-title">{props.name}</h3>
			<div className="modal-section-content">
				{props.children}
			</div>
		</section>
	)
}
