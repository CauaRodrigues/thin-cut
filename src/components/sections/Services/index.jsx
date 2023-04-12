import React, { useState } from "react";
import { useTheme } from "styled-components";

import { Button } from "@components/Button";
import Section from "@styled/Section";
import * as S from "./services.styled";

export default function Services() {
	const theme = useTheme();
	const [fixedDetails, setFixedDetails] = useState("");

	function handlerFixedService(service) {
		if (service === fixedDetails) {
			setFixedDetails("");
		} else {
			setFixedDetails(service);
		}
	}

	return (
		<Section background={theme.colors.dark} color={theme.colors.main}>
			<h2>Serviços</h2>

			<S.CardsServices>
				<S.CardService
					image="service1.png"
					fixed={fixedDetails === "cut"}
					onClick={() => handlerFixedService("cut")}
				>
					<div className="card--info">
						<h3>Corte</h3>
						<p>
							Corte de cabelo tradicional com tesoura e a máquina na mão de
							profissionais que entendem MUITO BEM do assunto.
						</p>
						<span className="price">R$ 40,00</span>
					</div>
				</S.CardService>

				<S.CardService
					image="service2.png"
					fixed={fixedDetails === "beard"}
					onClick={() => handlerFixedService("beard")}
				>
					<div className="card--info">
						<h3>Barba</h3>
						<p>
							Na Thin Cut, nossos clientes podem realizar desde aparar a barba
							até os desenhos mais modernos ou tradicionais.
						</p>
						<span className="price">R$ 35,00</span>
					</div>
				</S.CardService>

				<S.CardService
					image="service3.png"
					fixed={fixedDetails === "complet"}
					onClick={() => handlerFixedService("complet")}
				>
					<div className="card--info">
						<h3>Corte e Barba</h3>

						<p>
							Serviço completo, cliente já sai de cabelo e barba feitos e com
							desconto garantido.
						</p>
						<span className="price">R$ 65,00</span>
					</div>
				</S.CardService>

				<S.CardService
					image="service4.png"
					fixed={fixedDetails === "cleaning"}
					onClick={() => handlerFixedService("cleaning")}
				>
					<div className="card--info">
						<h3>Limpeza Facial</h3>
						<p>
							Fazemos a higienização na pele, removendo os cravos e impurezas,
							promovendo a renovação celular. Também fazemos a sobrancelha.
						</p>
						<span className="price">R$ 30,00</span>
					</div>
				</S.CardService>
			</S.CardsServices>

			<Button title="Agendar Agora!" />
		</Section>
	);
}
