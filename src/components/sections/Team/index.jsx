import React, { Fragment, useState } from "react";

import Section from "@styled/Section";
import Metric from "@styled/Metric";
import Button from "@components/Button";

import * as S from "./team.styled";
import { Barbers } from "./data";

export default function Team() {
	const [barber, setBarber] = useState(Barbers[0]);

	return (
		<Section>
			<h2>Time</h2>

			<h3>
				Nossos Top 3 <span id="text-primary">Profissionais</span>
			</h3>

			<S.Professionals>
				<S.BoxAvatar>
					<img src={barber.image.lg} alt={`Avata de ${barber.name}`} />

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

						<Metric sizeNumber="2" alignCenter>
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
			</S.Professionals>
		</Section>
	);
}
