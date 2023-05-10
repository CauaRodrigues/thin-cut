import React from "react";
import { useTheme } from "styled-components";

import Button from "@components/Button";
import Section from "@styled/Section";
import * as S from "./services.styled";

export default function Services() {
	const theme = useTheme();

	return (
		<Section background={theme.colors.dark} color={theme.colors.main}>
			<a id="services" />
			<h2>Serviços</h2>

			<S.CardsServices>
				<S.CardService image="service1.png">
					<div className="card--info">
						<h3>Corte</h3>
						<p>
							Corte de cabelo tradicional com tesoura e a máquina na mão de
							profissionais que entendem MUITO BEM do assunto.
						</p>
						<span className="price">R$ 75,00</span>
					</div>
				</S.CardService>

				<S.CardService image="service2.png">
					<div className="card--info">
						<h3>Barba</h3>
						<p>
							Na Thin Cut, nossos clientes podem realizar desde aparar a barba
							até os desenhos mais modernos ou tradicionais.
						</p>
						<span className="price">R$ 65,00</span>
					</div>
				</S.CardService>

				<S.CardService image="service3.png">
					<div className="card--info">
						<h3>Corte e Barba</h3>

						<p>
							Serviço completo, cliente já sai de cabelo e barba feitos e com
							desconto garantido.
						</p>
						<span className="price">R$ 132,00</span>
					</div>
				</S.CardService>

				<S.CardService image="service4.png">
					<div className="card--info">
						<h3>Limpeza Facial</h3>
						<p>
							Fazemos a higienização na pele, removendo os cravos e impurezas,
							promovendo a renovação celular. Também fazemos a sobrancelha.
						</p>
						<span className="price">R$ 95,00</span>
					</div>
				</S.CardService>
			</S.CardsServices>

			<Button title="Agendar Agora!" />
		</Section>
	);
}
