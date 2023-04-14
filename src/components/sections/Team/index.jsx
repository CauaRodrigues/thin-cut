import React, { Fragment } from "react";
import Section from "@styled/Section";
import Metric from "@styled/Metric";
import { Button } from "@components/Button";

import * as S from "./team.styled";
import { useState } from "react";

export default function Team() {
	const Barbers = [
		{
			id: 0,
			name: "Daniel Ramon",
			image: {
				lg: "/assets/images/professionals/professional1.png",
				sm: "/assets/images/professionals/smallprofessional1.png",
			},
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pretium volutpat libero, at mattis mi. Integer sodales mi ut tempor luctus.",
			experience: 26,
			hierarchy: "CEO",
		},
		{
			id: 1,
			name: "Felipe Silva",
			image: {
				lg: "/assets/images/professionals/professional2.png",
				sm: "/assets/images/professionals/smallprofessional2.png",
			},
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pretium volutpat libero, at mattis mi. Integer sodales mi ut tempor luctus.",
			experience: 12,
			hierarchy: "Sócio",
		},
		{
			id: 2,
			name: "Rodriguez Aguëro",
			image: {
				lg: "/assets/images/professionals/professional3.png",
				sm: "/assets/images/professionals/smallprofessional3.png",
			},
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pretium volutpat libero, at mattis mi. Integer sodales mi ut tempor luctus.",
			experience: 5,
		},
	];

	const [barber, setBarber] = useState(Barbers[0]);

	return (
		<Section>
			<h2>Time</h2>

			<h3>
				Nossos Top 3 <span id="text-primary">Profissionais</span>
			</h3>

			<S.BoxAvatar>
				<S.AvatarImage>
					<img src={barber.image.lg} alt={`Avata de ${barber.name}`} />
				</S.AvatarImage>

				<S.AvatarDetails>
					<h4>
						{barber.name}{" "}
						{barber.hierarchy ? (
							<>
								- <span id="text-primary">{barber.hierarchy}</span>
							</>
						) : null}
					</h4>

					<p>{barber.description}</p>

					<Metric sizeNumber="2">
						<span className="number">{barber.experience}</span>
						<span className="caption">Anos de experiência</span>
					</Metric>

					<Button title="Agendar Um Corte Comigo" />
				</S.AvatarDetails>
			</S.BoxAvatar>

			<S.Pointers>
				{Barbers.map(({ id, name, image }) => (
					<Fragment key={id}>
						<S.PointerButton
							onClick={() => setBarber(Barbers[id])}
							active={id === barber.id}
						>
							<img src={image.sm} alt={name} />
						</S.PointerButton>
					</Fragment>
				))}
			</S.Pointers>
		</Section>
	);
}
