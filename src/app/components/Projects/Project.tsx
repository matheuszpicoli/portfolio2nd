//- React
import React from "react"

//- API
import * as Icon from "@/app/api/iconAPI"

//- Components
import ExternalLink from "./ExternalLink"
import InternalLink from "./InternalLink"

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
				<ExternalLink href={props.projectLink} icon={Icon.Url} newTab={true} />
				<ExternalLink href={props.repositoryLink} icon={Icon.GitHub} newTab={true} />
				<InternalLink />
			</div>
		</div>
	)
}
