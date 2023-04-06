import React from "react";
import Header from "@section/Header";

import * as S from "./banner.styled";

export default function Banner() {
	return (
		<S.BannerContainer>
			<Header />

			<section>
				<h1>Eleve sua autoestima com um novo visual!</h1>

				<p>
					Cortes que transformam, estilo que impressiona. Seja bem-vindo à nossa
					barbearia Thin Cut!
				</p>

				<button>Fazer um Agendamento</button>
			</section>

			<S.Points></S.Points>
		</S.BannerContainer>
	);
}
