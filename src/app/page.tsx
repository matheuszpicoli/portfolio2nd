//- React
import React from "react"

//- Components
import About from "@/app/components/About"
import Profile from "@/app/components/Profile"
import Projects from "@/app/components/Projects"
import Technologies from "./components/Technologies"
import Connect from "./components/Connect"

export default function Portfolio(): React.JSX.Element {
	return (
		<React.Fragment>
			<Profile />
			<Projects />
			<About />
			<Technologies />
			<Connect />
		</React.Fragment>
	)
}
