import React from "react";
import Header from "@section/Header";
import { Button } from "@components/Button";

import * as S from "./banner.styled";

export default function Banner() {
	return (
		<S.BannerContainer>
			<Header />

			<section className="content-text">
				<h1>
					Eleve sua <span id="text-primary">autoestima</span> com um novo{" "}
					<span id="text-primary">visual!</span>
				</h1>

				<p>
					Cortes que transformam, estilo que impressiona. Seja bem-vindo à nossa
					barbearia Thin Cut!
				</p>

				<Button title="Fazer um Agendamento" />
			</section>

			<S.Points></S.Points>
		</S.BannerContainer>
	);
}
