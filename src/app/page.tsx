//- React
import React from "react"

//- Components
import About from "@/app/components/About"
import Connect from "@/app/components/Connect"
import Profile from "@/app/components/Profile"
import Projects from "@/app/components/Projects"
import Technologies from "@/app/components/Technologies"
import Footer from "@/app/components/Footer"

export default function Portfolio(): React.JSX.Element {
	return (
		<React.Fragment>
			<Profile />
			<Projects />
			<About />
			<Technologies />
			<Connect />
			<Footer />
		</React.Fragment>
	)
}
