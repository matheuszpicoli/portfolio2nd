//- React
import React from "react"

//- Components
import Section from "../Section"

//- Icon API
import * as Icon from "@/app/api/iconAPI"
import type { IconType } from "react-icons"

export default function Technologies(): React.JSX.Element {
	const technologies: Array<{ name: string, Logo: IconType }> = [
		{ name: "CSS", Logo: Icon.Css },
		{ name: "Git", Logo: Icon.Git },
		{ name: "Gulp", Logo: Icon.Gulp },
		{ name: "HTML", Logo: Icon.Html },
		{ name: "JavaScript", Logo: Icon.JavaScript },
		{ name: "jQuery", Logo: Icon.Jquery },
		{ name: "MongoDB", Logo: Icon.MongoDB },
		{ name: "MySQL", Logo: Icon.MySQL },
		{ name: "Next JS", Logo: Icon.NextJS },
		{ name: "Node JS", Logo: Icon.NodeJS },
		{ name: "Oracle", Logo: Icon.Oracle },
		{ name: "Python", Logo: Icon.Python },
		{ name: "React", Logo: Icon.React },
		{ name: "SCSS", Logo: Icon.Scss },
		{ name: "SQL Server", Logo: Icon.SQLServer },
		{ name: "Tailwind", Logo: Icon.Tailwind },
		{ name: "TypeScript", Logo: Icon.TypeScript },
		{ name: "Vue JS", Logo: Icon.VueJS }
	]

	return (
		<Section name="Tecnologias">
			<div className="technologies">
				{technologies.map(({ name, Logo }, index) => (
					<div key={index} className="technology-item">
						<Logo className="technology-icon" />
						<p className="technology-description">
							{name}
						</p>
					</div>
				))}
			</div>
		</Section>
	)
}
