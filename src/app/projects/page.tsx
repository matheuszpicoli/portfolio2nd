//- Project API
import { projects } from "@/app/api/projectsAPI"
import type { Project } from "@/app/api/projectsAPI"

const repositories = projects.map((project: Project) => {
	const lastSegment = project.repository.split("/").pop()

	return lastSegment
})

export default function Projects(): React.JSX.Element {
	return (
		<div>
			{repositories}
		</div>
	)
}
