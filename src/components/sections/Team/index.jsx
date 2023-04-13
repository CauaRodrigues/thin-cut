import React, { Fragment } from "react";
import Section from "@styled/Section";
import Metric from "@styled/Metric";
import { Button } from "@components/Button";

import * as S from "./team.styled";

export default function Team() {
	const Profissionals = [
		{
			id: 1,
			name: "Daniel Ramon",
			image: "/assets/images/professionals/professional1.png",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pretium volutpat libero, at mattis mi. Integer sodales mi ut tempor luctus.",
			experience: 26,
			hierarchy: "CEO",
		},
		{
			id: 2,
			name: "Felipe Silva",
			image: "/assets/images/professionals/professional2.png",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pretium volutpat libero, at mattis mi. Integer sodales mi ut tempor luctus.",
			experience: 12,
			hierarchy: "Sócio",
		},
		{
			id: 3,
			name: "Rodriguez Aguëro",
			image: "/assets/images/professionals/professional3.png",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pretium volutpat libero, at mattis mi. Integer sodales mi ut tempor luctus.",
			experience: 5,
		},
	];

	return (
		<Section>
			<h2>Time</h2>

			<h3>
				Nossos Top 3 <span id="text-primary">Profissionais</span>
			</h3>

			<S.BoxAvatar>
				<S.AvatarImage>
					<img
						src="/assets/images/professionals/professional1.png"
						alt="Avata de Daniel Ramon"
					/>
				</S.AvatarImage>

				<S.AvatarDetails>
					<h4>
						Daniel Ramon - <span id="text-primary">CEO</span>
					</h4>

					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
						pretium volutpat libero, at mattis mi. Integer sodales mi ut tempor
						luctus.
					</p>

					<Metric sizeNumber="2">
						<span className="number">26</span>
						<span className="caption">Anos de experiência</span>
					</Metric>

					<Button title="Agendar Um Corte Comigo" />
				</S.AvatarDetails>
			</S.BoxAvatar>

			<S.Pointers>
				{Profissionals.map(({ id, name, image }) => (
					<Fragment key={id}>
						<S.PointerButton>
							<img src={image} alt={name} />

							<span>{name}</span>
						</S.PointerButton>
					</Fragment>
				))}
			</S.Pointers>
		</Section>
	);
}
