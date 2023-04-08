import React, { useState } from "react";
import Header from "@section/Header";
import { Button } from "@components/Button";

import * as S from "./banner.styled";

export default function Banner() {
	const [image, setImage] = useState("banner1");
	const imagesList = ["banner1", "banner2", "banner3", "banner4", "banner5"];

	return (
		<S.BannerContainer bgImage={image}>
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

			<S.Points>
				{imagesList.map((bg, index) => (
					<S.Point
						onClick={() => setImage(bg)}
						key={index}
						active={bg === image}
					/>
				))}
			</S.Points>
		</S.BannerContainer>
	);
}
