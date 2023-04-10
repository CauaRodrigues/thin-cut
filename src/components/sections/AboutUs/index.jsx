import React from "react";
import * as S from "./about.styled";

export default function AboutUs() {
	return (
		<S.ContainerAbout>
			<h1>Sobre nós</h1>

			<div>
				<div className="box-images">
					<figure>
						<img
							src="/assets/images/about/image1.png"
							alt="Homem de boné cortando cabelo"
						/>
					</figure>

					<figure>
						<img
							src="/assets/images/about/image2.png"
							alt="Homem cacheado e de chapéu cortando cabelo"
						/>
					</figure>
				</div>

				<div className="box">
					<div className="content-text">
						<h1>
							Proporcionando uma experiência de corte diferenciada desde 2012.
						</h1>
						<p>
							Somos uma barbearia moderna e inovadora, que valoriza a arte do
							corte de cabelo e da barba. Nossos profissionais são altamente
							qualificados e apaixonados pelo que fazem, buscando sempre
							oferecer o melhor atendimento e serviço aos nossos clientes. Aqui,
							você encontra um ambiente descontraído e acolhedor, perfeito para
							relaxar e cuidar da sua aparência.
						</p>
					</div>

					<div className="metrics">
						<div className="metric">
							<span>43</span>
							<span>Anos de experiência</span>
						</div>

						<div className="metric">
							<span>+200</span>
							<span>Clientes Satisfeitos</span>
						</div>
					</div>
				</div>
			</div>
		</S.ContainerAbout>
	);
}
