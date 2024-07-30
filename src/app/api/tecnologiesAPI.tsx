//- Next
import type { StaticImageData } from "next/image"

//- Image API
import { CSS, Git, Gulp, HTML, JavaScript, jQuery, MongoDB, MySQL, NextJS, NodeJS, Oracle, ReactJS, SCSS, TailwindCSS, TypeScript, VueJS } from "@/app/api/imageAPI"

/**
 * @description API que retorna todas as imagens das tecnologias
 * @type { src: StaticImageData, alt: string }[]
 */
export const technologies: Array<{ src: StaticImageData, alt: string }> = [
	{
		src: CSS,
		alt: "CSS"
	},
	{
		src: Git,
		alt: "Git"
	},
	{
		src: Gulp,
		alt: "Gulp"
	},
	{
		src: HTML,
		alt: "HTML"
	},
	{
		src: JavaScript,
		alt: "JavaScript"
	},
	{
		src: jQuery,
		alt: "jQuery"
	},
	{
		src: MongoDB,
		alt: "MongoDB"
	},
	{
		src: MySQL,
		alt: "MySQL"
	},
	{
		src: NextJS,
		alt: "Next JS"
	},
	{
		src: NodeJS,
		alt: "Node JS"
	},
	{
		src: Oracle,
		alt: "Oracle"
	},
	{
		src: ReactJS,
		alt: "React"
	},
	{
		src: SCSS,
		alt: "SCSS"
	},
	{
		src: TailwindCSS,
		alt: "TailwindCSS"
	},
	{
		src: TypeScript,
		alt: "TypeScript"
	},
	{
		src: VueJS,
		alt: "Vue JS"
	}
]

export default technologies
