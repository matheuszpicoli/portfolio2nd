"use client"

import React, { useState, useRef, useLayoutEffect } from "react"

import * as Icon from "@/app/assets/icons"

import "swiper/scss"
import "swiper/scss/navigation"
import "swiper/scss/pagination"
import { Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

interface ProjectProps {
    videoSource: string
    title: string
    description: string
    technologies: Array<React.ReactNode>
    deployLink: string
    repositoryLink: string
    isOnTheActiveSlide?: boolean
}

function Project(props: ProjectProps): React.JSX.Element {
    const videoRef = useRef<HTMLVideoElement | null>(null)

    useLayoutEffect(() => {
        if (props.isOnTheActiveSlide) videoRef.current?.play()
        else videoRef.current?.pause()
    }, [props.isOnTheActiveSlide])

    return (
        <React.Fragment>
            <div className="project">
                <video ref={videoRef} className="video" muted loop>
                    <source src={`videos/${props.videoSource}.mp4`} type="video/mp4" />
                </video>
            </div>
            <div className="description">
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                <div className="technologies">
                    {props.technologies.map((technology: React.ReactNode, index: number): React.JSX.Element => (
                        <React.Fragment key={index}>
                            {technology}
                        </React.Fragment>
                    ))}
                </div>
                <div className="actions">
                    <button type="button" onClick={(): Window | null => window?.open(`${props.deployLink}`, "_blank", "noopener noreferrer")}>
                        <Icon.Eye />Deploy
                    </button>
                    <button type="button" onClick={(): Window | null => window?.open(`${props.repositoryLink}`, "_blank", "noopener noreferrer")}>
                        <Icon.Github />Repositório
                    </button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default function Projects(): React.JSX.Element {
    const [activeSlide, setActiveSlide] = useState<number>(0)

    const projects: Array<ProjectProps> = [
        {
            videoSource: "spaceship",
            title: "MP Spaceship",
            description: "MP SpaceShip foi o primeiro projeto que desenvolvi, ele é um jogo de nave onde o jogador controla uma nave azul e deve eliminar naves inimigas brancas. O jogo oferece três níveis de dificuldade (Fácil, Médio e Difícil) e é inteiramente implementado em um único arquivo HTML, sem rotas. A movimentação é feita com as teclas W, A, S, D ou setas, e os jogadores podem atirar com a barra de espaço. Cada dificuldade apresenta variações nas vidas das naves inimigas e na cadência de tiro do jogador. O projeto utiliza ferramentas como Gulp e SCSS, e pode ser facilmente executado localmente.",
            technologies: [
                <Icon.Css aria-label="css" />,
                <Icon.Gulp aria-label="gulp" />,
                <Icon.Html aria-label="html" />,
                <Icon.JavaScript aria-label="javascript" />,
                <Icon.Scss aria-label="scss" />
            ],
            deployLink: "https://mp-spaceship-game.vercel.app",
            repositoryLink: "https://github.com/matheuszpicoli/spaceship-game"
        },
        {
            videoSource: "burger",
            title: "MP Burger",
            description: "MP Burger é uma hamburgueria fictícia desenvolvida em React, com um servidor JSON- Server para gerenciar pedidos temporariamente, sem estrutura de banco de dados. O estabelecimento opera das 18h às 23h (horário de Brasília) e oferece categorias como entradas, lanches padrões, opções de frango, artesanais, porções, bebidas e sobremesas, todas com preços e imagens gerados por IA. O usuário pode buscar itens, fazer pedidos através de modais, e revisar e finalizar compras com um formulário, armazenando informações no local storage. O projeto utiliza ferramentas como React, Tailwind CSS e JSON - Server, e pode ser executado localmente após a configuração correta do servidor e do arquivo de pedidos.",
            technologies: [
                <Icon.React aria-label="react" />,
                <Icon.Node aria-label="node" />,
                <Icon.Tailwind aria-label="tailwind" />,
                <Icon.Json aria-label="json" />
            ],
            deployLink: "https://mp-burguer-place.vercel.app",
            repositoryLink: "https://github.com/matheuszpicoli/burger-place"
        },
        {
            videoSource: "chatbot",
            title: "MP Chatbot",
            description: "MP Chatbot é um projeto pessoal que apresenta uma inteligência artificial simples, onde os usuários podem fazer perguntas e receber respostas de uma API desenvolvida especificamente para isso. As perguntas e respostas foram extraídas do site Mentimeter, e ao acessar a aplicação, o usuário interage por meio de uma caixa de seleção que exibe perguntas em ordem alfabética. O chatbot responde instantaneamente após a seleção e o envio da pergunta. O projeto também permite alternar entre temas claro e escuro, com a configuração sendo salva no armazenamento local do navegador.",
            technologies: [
                <Icon.TypeScript aria-label="typescript" />,
                <Icon.Next aria-label="next" />,
                <Icon.Tailwind aria-label="tailwind" />
            ],
            deployLink: "https://mp-chatbot-sigma.vercel.app",
            repositoryLink: "https://github.com/matheuszpicoli/chatbot"
        },
        {
            videoSource: "portfolio",
            title: "Primeiro portfólio",
            description: "Esse é o primeiro portfólio desenvolvido por mim, o antecessor à este. Aqui você encontrará uma visão geral das minhas competências em desenvolvimento de software, com destaque para as tecnologias e bibliotecas que utilizo regularmente. Explore uma seleção dos meus projetos mais relevantes, que refletem meu comprometimento com qualidade e inovação, e acesse minhas redes sociais profissionais, incluindo LinkedIn e GitHub, para se conectar e conhecer mais sobre meu trabalho.",
            technologies: [
                <Icon.TypeScript aria-label="typescript" />,
                <Icon.Next aria-label="next" />,
                <Icon.Scss aria-label="scss" />
            ],
            deployLink: "https://mp-portfolio-bice.vercel.app",
            repositoryLink: "https://github.com/matheuszpicoli/portfolio"
        }
    ]

    return (
        <section className="projects-section" id="projects">
            <h2>Projetos</h2>
            <p>Todos os projetos aqui mostrados são projetos pessoais desenvolvidos por mim, <dfn>MP</dfn> antes de cada título significa o meu nome.</p>
            <p>Não são muitos por conta do meu trabalho, mas estou sempre desenvolvendo ou estudando algo.</p>
            <article className="viewer">
                <Swiper modules={[Navigation, Pagination]} navigation pagination slidesPerView={1} onSlideChange={(slide): void => setActiveSlide(slide.activeIndex)}>
                    {projects.map((project: ProjectProps, index: number): React.JSX.Element => {
                        const isActiveSlide: boolean = activeSlide === index

                        return (
                            <SwiperSlide key={index}>
                                <Project {...project} isOnTheActiveSlide={isActiveSlide} />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </article>
        </section>
    )
}
