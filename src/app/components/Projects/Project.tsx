//- React
import React from "react"

//- API
import * as Icon from "@/app/api/iconAPI"

//- Components
import GetLink from "./GetLink"

interface ProjectProps {
	title: string
	description: string
	projectLink: string
	repositoryLink: string
}

export default function Project(props: ProjectProps): React.JSX.Element {
	return (
		<div>
			<p className="project-title">{props.title}</p>
			<div className="project-description">
				<p>{props.description}</p>
				<GetLink href={props.projectLink} icon={Icon.Url} newTab={true} />
				<GetLink href={props.repositoryLink} icon={Icon.GitHub} newTab={true} />
				<GetLink href="/" icon={Icon.Preview} newTab={false} />
			</div>
		</div>
	)
}
