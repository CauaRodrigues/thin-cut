import React from "react";
import Button from "@components/Button";
import Section from "@styled/Section";
import * as S from "./appointment.styled";

export default function Appointment() {
	return (
		<Section>
			<S.BoxBook>
				<S.InfoBook>
					<span>agendamento online</span>
					<h2>Faça um agendamento pelo site e ganhe 20% de desconto!</h2>
					<p>Esta promoção é válida até o dia 18 de junho - 18 Jun 2023</p>

					<S.GroupButtons>
						<Button title="Fazer Agendamento" />
						<Button title="Copiar Código de 20%" outline />
					</S.GroupButtons>
				</S.InfoBook>
			</S.BoxBook>
		</Section>
	);
}
