/**
 * @description API de projetos desenvolvidos
 * @type Project
 */

export type Project = {
	title: string
	description: string
	project: string
	repository: string
}

export const projects: Array<Project> = [
	{
		title: "Portfólio (versão 1)",
		description: "O primeiro portfólio, desenvolvido em Next JS com Typescript e SCSS",
		project: "https://mp-portfolio-bice.vercel.app/",
		repository: "https://github.com/matheuszpicoli/portfolio"
	},
	{
		title: "MP Burger Place",
		description: "Uma hamburgueria fictícia criada com React, Tailwind CSS e JSON Server",
		project: "https://mp-burguer-place.vercel.app/",
		repository: "https://github.com/matheuszpicoli/burger-place"
	},
	{
		title: "MP SpaceShip",
		description: "Um jogo de nave espacial construído com HTML, JavaScript puro e SCSS",
		project: "https://mp-spaceship-game.vercel.app/",
		repository: "https://github.com/matheuszpicoli/spaceship-game"
	},
	{
		title: "MP Chatbot",
		description: "Um chatbot bem simples construído em Next JS com Typescript e Tailwind CSS",
		project: "https://mp-chatbot-sigma.vercel.app/",
		repository: "https://github.com/matheuszpicoli/chatbot"
	}
]

export default projects
