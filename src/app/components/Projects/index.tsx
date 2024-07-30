//- React
import React from "react"

//- Components
import Section from "@/app/components/Section"
import Project from "./Project"

export default function Projects(): React.JSX.Element {
	const gitHubLink: string = "https://github.com/matheuszpicoli"

	return (
		<Section name="Projetos">
			<Project
				title="Portfólio (versão 1)"
				description="O primeiro portfólio, desenvolvido em Next JS com Typescript e SCSS"
				projectLink="https://mp-portfolio-bice.vercel.app/"
				repositoryLink={`${gitHubLink}/portfolio`}
			/>
			<Project
				title="MP Burger Place"
				description="Uma hamburgueria fictícia criada com React, Tailwind CSS e JSON Server"
				projectLink="https://mp-burguer-place.vercel.app/"
				repositoryLink={`${gitHubLink}/burger-place`}
			/>
			<Project
				title="MP SpaceShip"
				description="Um jogo de nave espacial construído com HTML, JavaScript puro e SCSS"
				projectLink="https://mp-spaceship-game.vercel.app/"
				repositoryLink={`${gitHubLink}/spaceship-game`}
			/>
			<Project
				title="MP Chatbot"
				description="Um chatbot bem simples construído em Next JS com Typescript e Tailwind CSS"
				projectLink="https://mp-chatbot-sigma.vercel.app/"
				repositoryLink={`${gitHubLink}/chatbot`}
			/>
		</Section>
	)
}
