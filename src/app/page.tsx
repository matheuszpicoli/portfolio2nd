//- React
import React from "react"

//- Components
import Profile from "@/app/components/Profile"
import Projects from "@/app/components/Projects"
import About from "@/app/components/About"

export default function Portfolio(): React.JSX.Element {
	return (
		<React.Fragment>
			<Profile />
			<Projects />
			<About />
		</React.Fragment>
	)
}
