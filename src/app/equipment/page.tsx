import React from "react"

import { default as Deskpad } from "@/app/assets/deskpad.png"
import { default as Headset } from "@/app/assets/headset.png"
import { default as Keyboard } from "@/app/assets/keyboard.png"
import { default as Mouse } from "@/app/assets/mouse.png"
import { default as Projector } from "@/app/assets/projector.png"

import Card from "@/app/components/utils/Card"

export default function Equipment(): React.JSX.Element {
    return (
        <section className="equipments">
            <h1>Equipamentos</h1>
            <p>Nessa seção coloquei os equipamentos que eu utilizo, aprovo cada item aqui citado.</p>
            <article className="cards">
                <Card image={Deskpad} content="Deskpad RGB Exbom" category="Periférico" />
                <Card image={Headset} content="Headset Multilaser Warrior Rama" category="Som" />
                <Card image={Keyboard} content="Machenike K500 B94" category="Periférico" />
                <Card image={Mouse} content="Redragon Griffin" category="Periférico" />
                <Card image={Projector} content="Projetor Astronauta" category="Iluminação" />
            </article>
        </section>
    )
}
