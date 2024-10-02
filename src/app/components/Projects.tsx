"use client"

import React from "react"

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
}

function Project(props: ProjectProps): React.JSX.Element {
    return (
        <React.Fragment>
            <div className="project">
                <video className="video" autoPlay muted loop>
                    <source src={props.videoSource} type="video/mp4" />
                </video>
            </div>
            <div className="description">
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                <div className="technologies">
                    {props.technologies}
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
    const projects: Array<ProjectProps> = [
        {
            videoSource: "videos/spaceship.mp4",
            title: "MP Spaceship",
            description: "MP SpaceShip é um jogo de nave onde você controla uma espaçonave azul para destruir inimigos brancos. Oferece três níveis de dificuldade e é totalmente executado em um arquivo HTML, manipulando a DOM diretamente. Utiliza Gulp para automação, SCSS para estilização, SweetAlert para modais e Particles JS para efeitos visuais. Feito em JavaScript puro.",
            technologies: [
                <Icon.Css aria-label="css" />,
                <Icon.Gulp aria-label="gulp" />,
                <Icon.Html aria-label="html" />,
                <Icon.JavaScript aria-label="javascript" />,
                <Icon.Scss aria-label="scss" />
            ],
            deployLink: "https://mp-spaceship-game.vercel.app",
            repositoryLink: "https://github.com/matheuszpicoli/spaceship-game",
        }
    ]

    return (
        <section className="projects">
            <h2>Projetos</h2>
            <article className="viewer">
                <Swiper modules={[Navigation, Pagination]} navigation pagination loop slidesPerView={1}>
                    {projects.map((project: ProjectProps, index: number): React.JSX.Element => (
                        <SwiperSlide key={index}>
                            <Project {...project} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </article>
        </section>
    )
}
