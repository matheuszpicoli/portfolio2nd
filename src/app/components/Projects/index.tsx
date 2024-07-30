//- React
import React from "react"

//- Components
import Section from "@/app/components/Section"
import Project from "./Project"

//- API
import projects from "@/app/api/projectsAPI"

export default function Projects(): React.JSX.Element {
	return (
		<Section name="Projetos">
			{projects.map((project, index) => (
				<Project
					key={index}
					title={project.title}
					description={project.description}
					projectLink={project.project}
					repositoryLink={project.repository}
				/>
			))}
		</Section>
	)
}
