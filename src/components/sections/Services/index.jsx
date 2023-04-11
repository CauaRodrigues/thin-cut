import React from "react";
import { Button } from "@components/Button";
import * as S from "./services.styled";

export default function Services() {
	return (
		<S.ContainerServices>
			<h1>Serviços</h1>

			<div className="cards--service">
				<div>
					<h3>Corte</h3>
					<p>
						Corte de cabelo tradicional com tesoura e a máquina na mão de
						profissionais que entendem MUITO BEM do assunto.
					</p>
					<span>R$ 40,00</span>
				</div>

				<div>
					<h3>Barba</h3>
					<p>
						Na Thin Cut, nossos clientes podem realizar desde aparar a barba até
						os desenhos mais modernos ou tradicionais.
					</p>
					<span>R$ 35,00</span>
				</div>

				<div>
					<h3>Corte e Barba</h3>
					<p>
						Serviço completo, cliente já sai de cabelo e barba feitos e com
						desconto garantido.
					</p>
					<span>R$ 65,00</span>
				</div>

				<div>
					<h3>Limpeza Facial</h3>
					<p>
						Fazemos a higienização na pele, removendo os cravos e impurezas,
						promovendo a renovação celular. Também fazemos a sobrancelha.
					</p>
					<span>R$ 30,00</span>
				</div>
			</div>

			<Button title="Agendar Agora!" />
		</S.ContainerServices>
	);
}
