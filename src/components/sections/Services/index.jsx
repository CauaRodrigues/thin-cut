import React from "react";
import { useTheme } from "styled-components";

import { Button } from "@components/Button";
import * as SG from "@styled/Section";
import * as S from "./services.styled";

export default function Services() {
	const theme = useTheme();

	return (
		<SG.Section background={theme.colors.dark} color={theme.colors.main}>
			<h2>Serviços</h2>

			<S.CardsServices>
				<S.CardService image="service1.png">
					<div className="card--title">
						<h3>Corte</h3>
					</div>

					<p>
						Corte de cabelo tradicional com tesoura e a máquina na mão de
						profissionais que entendem MUITO BEM do assunto.
					</p>
					<span>R$ 40,00</span>
				</S.CardService>

				<S.CardService image="service2.png">
					<div className="card--title">
						<h3>Barba</h3>
					</div>

					<p>
						Na Thin Cut, nossos clientes podem realizar desde aparar a barba até
						os desenhos mais modernos ou tradicionais.
					</p>
					<span>R$ 35,00</span>
				</S.CardService>

				<S.CardService image="service3.png">
					<div className="card--title">
						<h3>Corte e Barba</h3>
					</div>
					<p>
						Serviço completo, cliente já sai de cabelo e barba feitos e com
						desconto garantido.
					</p>
					<span>R$ 65,00</span>
				</S.CardService>

				<S.CardService image="service4.png">
					<div className="card--title">
						<h3>Limpeza Facial</h3>
					</div>
					<p>
						Fazemos a higienização na pele, removendo os cravos e impurezas,
						promovendo a renovação celular. Também fazemos a sobrancelha.
					</p>
					<span>R$ 30,00</span>
				</S.CardService>
			</S.CardsServices>

			<Button title="Agendar Agora!" />
		</SG.Section>
	);
}
