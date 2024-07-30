//- React
import React from "react"

//- Components
import About from "@/app/components/About"
import Profile from "@/app/components/Profile"
import Projects from "@/app/components/Projects"

export default function Portfolio(): React.JSX.Element {
	return (
		<React.Fragment>
			<Profile />
			<Projects />
			<About />
		</React.Fragment>
	)
}
