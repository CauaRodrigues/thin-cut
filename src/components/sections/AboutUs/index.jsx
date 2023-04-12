import React from "react";
import * as S from "./about.styled";
import * as SG from "@styled/Section";

export default function AboutUs() {
	return (
		<SG.Section>
			<h2>Sobre nós</h2>

			<S.Content>
				<S.BoxImages>
					<figure>
						<img
							src="/assets/images/about/image2.png"
							alt="Homem de boné cortando cabelo"
						/>
					</figure>

					<figure>
						<img
							src="/assets/images/about/image1.png"
							alt="Homem cacheado e de chapéu cortando cabelo"
						/>
					</figure>
				</S.BoxImages>

				<S.Box>
					<S.ContentText>
						<h3>
							Proporcionando uma <span id="text-primary">experiência</span> de
							corte <span id="text-primary">diferenciada</span> desde{" "}
							<span id="text-primary">2012</span>.
						</h3>

						<p>
							Somos uma barbearia moderna e inovadora, que valoriza a arte do
							corte de cabelo e da barba. Nossos profissionais são altamente
							qualificados e apaixonados pelo que fazem, buscando sempre
							oferecer o melhor atendimento e serviço aos nossos clientes. Aqui,
							você encontra um ambiente descontraído e acolhedor, perfeito para
							relaxar e cuidar da sua aparência.
						</p>
					</S.ContentText>

					<S.BoxMetrics>
						<S.Metric>
							<span className="number">43</span>
							<span className="caption">Anos de experiência</span>
						</S.Metric>

						<S.Metric>
							<span className="number">+200</span>
							<span className="caption">Clientes Satisfeitos</span>
						</S.Metric>
					</S.BoxMetrics>
				</S.Box>
			</S.Content>
		</SG.Section>
	);
}
