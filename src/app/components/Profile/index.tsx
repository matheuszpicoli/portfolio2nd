//- React
import React from "react"

//- Next
import Image from "next/image"

//- API
import * as ImageAPI from "@/assets/api/imageAPI"

export default function Profile(): React.JSX.Element {
	return (
		<header className="application-header">
			<div className="photo">
				<figure className="profile-figure">
					<Image
						className="profile-photo"
						src={ImageAPI.ProfilePhoto}
						alt="Imagem de Perfil"
						width={80}
						height={80}
					/>
				</figure>
			</div>
			<div className="profile">
				<p className="name">Matheus Picoli</p>
				<p className="profession">Web Developer</p>
			</div>
		</header>
	)
}
