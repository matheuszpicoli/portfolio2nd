import React from "react"

import Home from "@/app/components/Home"
import Projects from "@/app/components/Projects"
import Technologies from "@/app/components/Technologies"

export default function Portfolio(): React.JSX.Element {
    return (
        <React.Fragment>
            <Home />
            <Projects />
            <Technologies />
        </React.Fragment>
    )
}
