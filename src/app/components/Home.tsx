import React from "react"

export default function Home(): React.JSX.Element {
    const birthDate: Date = new Date(2003, 2, 18)
    let age: number = new Date().getFullYear() - birthDate.getFullYear()

    if (new Date().getMonth() < 2 || (new Date().getMonth() === 2 && new Date().getDate() < 18)) age--

    return (
        <section className="home">
            <div className="image"></div>
            <div className="main-content">
                <h1>Transformo as suas aplicações deixando elas</h1>
                <p>Me chamo Matheus e tenho {age} anos. Gosto de desenvolver a maioria das minhas aplicações com <strong>Next</strong>, <strong>TypeScript</strong> e <strong>SCSS</strong>, mas também posso e consigo desenvolver com outras tecnologias, sou bem aberto para isso.</p>
                <p>Sou um desenvolvedor dedicado, especializado na criação de interfaces intuitivas e na manipulação eficiente de dados. Estou sempre em busca de soluções inovadoras e práticas que possam otimizar a experiência do usuário.</p>
                <p>Comprometido com o aprendizado contínuo, busco aprimorar minhas habilidades constantemente, tanto em minha vida pessoal quanto na minha carreira profissional.</p>
            </div>
        </section>
    )
}
