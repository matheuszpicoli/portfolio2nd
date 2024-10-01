"use client"

import React from "react"

import * as Icon from "@/app/assets/icons"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import "swiper/scss"
import "swiper/scss/navigation"
import "swiper/scss/pagination"

export default function Projects(): React.JSX.Element {
    return (
        <section className="projects">
            <h2>Projetos</h2>
            <article className="viewer">
                <Swiper modules={[Navigation, Pagination]} navigation pagination loop slidesPerView={1}>
                    <SwiperSlide>
                        <div className="project">
                            <video className="video" autoPlay muted loop>
                                <source src={"videos/spaceship.mp4"} type="video/mp4" />
                            </video>
                        </div>
                        <div className="description">
                            <h3>MP Spaceship</h3>
                            <p>MP SpaceShip é um jogo de nave onde você controla uma espaçonave azul para destruir inimigos brancos. Oferece três níveis de dificuldade e é totalmente executado em um arquivo HTML, manipulando a DOM diretamente. Utiliza Gulp para automação, SCSS para estilização, SweetAlert para modais e Particles JS para efeitos visuais. Feito em JavaScript puro.</p>
                            <div className="technologies">
                                <Icon.Css aria-label="css" />
                                <Icon.Gulp aria-label="gulp" />
                                <Icon.Html aria-label="html" />
                                <Icon.JavaScript aria-label="javascript" />
                                <Icon.Scss aria-label="scss" />
                            </div>
                            <div className="actions">
                                <button type="button"><Icon.Eye />Deploy</button>
                                <button type="button"><Icon.Github />Repositório</button>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </article>
        </section>
    )
}
