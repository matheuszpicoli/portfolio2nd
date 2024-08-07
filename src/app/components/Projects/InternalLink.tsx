//- React
import React from "react"

//- Next
import Link from "next/link"

//- Icon API
import * as Icon from "@/app/api/iconAPI"

export default function InternalLink(): React.JSX.Element {
	return (
		<Link href="/projects" className="project-link">
			<Icon.More className="project-icon" />
		</Link>
	)
}
