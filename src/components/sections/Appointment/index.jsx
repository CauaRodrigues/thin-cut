import React from "react";
import { Button } from "@components/Button";
import Section from "@styled/Section";
import * as S from "./appointment.styled";

export default function Appointment() {
	return (
		<Section>
			<S.BoxBook>
				<span>Faça um agendamento</span>
				<h2>Faça um agendamento pelo site e ganhe 20% de desconto!</h2>
				<div>
					<p>Esta promoção é válida até o dia 18 de junho - 18 Jun 2023</p>

					<Button title="Fazer Agendamento" />
				</div>
			</S.BoxBook>
		</Section>
	);
}
