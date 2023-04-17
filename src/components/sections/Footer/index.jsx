import React from "react";
import { useTheme } from "styled-components";

import Section from "@styled/Section";
import Logo from "@components/Logo";
import Icon from "@styled/Icon";

import * as S from "./footer.styled";

export default function Footer() {
	const theme = useTheme();

	return (
		<Section background={theme.colors.dark} color={theme.colors.main}>
			<S.Footer>
				<S.Menu>
					<Logo />

					<ul>
						<li>Sobre nós</li>
						<li>Serviços</li>
						<li>Time</li>
						<li>Galeria</li>
						<li>Avaliações</li>
						<li>Localização</li>
						<li>Contato</li>
					</ul>
				</S.Menu>

				<S.FeedbackForm>
					<h2>Feedback</h2>

					<div className="field">
						<label htmlFor="name">Nome</label>
						<input type="text" />
					</div>

					<div className="field">
						<label htmlFor="email">E-mail</label>
						<input type="email" />
					</div>

					<div className="field">
						<label htmlFor="message">Mensagem</label>
						<input type="text" />
					</div>
				</S.FeedbackForm>

				<S.Contact>
					<h3>Contato</h3>
					<div>
						<h4>Número de telefone</h4>
						<span>+55 11 99999-9999</span>
					</div>
					<div>
						<h4>Endereço</h4>
						<span>Palace Embankment, 32, St Petersburg, Rússia, 190000</span>
					</div>
					<div>
						<h4>Redes Sociais</h4>
						<div>
							<a
								href="https://www.instagram.com"
								rel="noreferrer"
								target="_blank"
							>
								<Icon
									sizes={24}
									src="/assets/icons/Instagram.svg"
									alt="instagram icon"
								/>
							</a>

							<a
								href="https://www.whatsapp.com/"
								rel="noreferrer"
								target="_blank"
							>
								<Icon
									sizes={24}
									src="/assets/icons/WhatsApp.svg"
									alt="Whatsapp icon"
								/>
							</a>

							<a
								href="https://web.facebook.com/"
								rel="noreferrer"
								target="_blank"
							>
								<Icon
									sizes={24}
									src="/assets/icons/Facebook.svg"
									alt="Facebook icon"
								/>
							</a>

							<a
								href="https://www.tiktok.com/"
								rel="noreferrer"
								target="_blank"
							>
								<Icon
									sizes={24}
									src="/assets/icons/TikTok.svg"
									alt="Tiktok icon"
								/>
							</a>
						</div>
					</div>
				</S.Contact>
			</S.Footer>

			<S.Rights>
				<p>
					<span id="text-primary">Thin Cut</span> © 2023 Todos direitos
					reservados.
				</p>

				<p>
					Desenvolvido por{" "}
					<a
						href="https://github.com/CauaRodrigues"
						rel="noreferrer"
						target="_blank"
					>
						Cauã
					</a>
				</p>
			</S.Rights>
		</Section>
	);
}
