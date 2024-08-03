//- React
import React from "react"

//- Components
import Section from "@/app/components/Section"

export default function About(): React.JSX.Element {
	return (
		<Section name="Sobre">
			<div className="about">
				<p>Sempre faço os meus projetos com <span>HTML</span>, <span>CSS</span>, <span>JavaScript</span> e os principais frameworks presentes no mercado atualmente. Estou em transição de carreira e sou apaixonado por tecnologia, buscando sempre aprimorar minhas habilidades e conhecimentos. Estou em constante evolução na minha vida pessoal e profissional.</p>
				<p>Atualmente trabalho na área de desenvolvimento atuando no back-end com o <span>Python</span>, utilizando <span>Plotly Express</span>, <span>Bootstrap</span>, <span>Dash</span>, <span>Pandas</span>, <span>SQL Alchemy</span>, entre outras bibliotecas presentes para montar grandes sistemas com a linguagem.</p>
				<p>Minha linguagem de programação favorita é o <span>TypeScript</span> e o que mais gosto de utilizar é o <span>React</span> e o <span>Next</span>. Também curto bastante bancos de dados, como <span>MySQL</span> e <span>Oracle</span>.</p>
			</div>
			<div className="cv">
				<button type="button" className="cv-button">
					Ver currículo
				</button>
			</div>
		</Section>
	)
}
