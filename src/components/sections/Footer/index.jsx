import React from "react";
import { useTheme } from "styled-components";

import Section from "@styled/Section";
import Icon from "@styled/Icon";
import Logo from "@components/Logo";
import Button from "@components/Button";

import * as S from "./footer.styled";

export default function Footer() {
	const theme = useTheme();

	return (
		<S.FooterSection background={theme.colors.dark} color={theme.colors.main}>
			<a name="contact" />
			<S.Footer>
				<S.Menu>
					<Logo />

					<S.Links>
						<a href="#about">Sobre nós</a>
						<a href="#services">Serviços</a>
						<a href="#team">Time</a>
						<a href="#gallery">Galeria</a>
						<a href="#reviews">Avaliações</a>
						<a href="#location">Localização</a>
						<a href="#contact">Contato</a>
					</S.Links>
				</S.Menu>

				<S.Divider order={1} />

				<S.FeedbackForm id="feedback">
					<h2>Feedback</h2>

					<S.Field>
						<label htmlFor="name" id="name">
							Nome
						</label>
						<input type="text" placeholder="Nome" required />
					</S.Field>

					<S.Field>
						<label htmlFor="email" id="email">
							E-mail
						</label>
						<input type="email" placeholder="Seu melhor e-mail" required />
					</S.Field>

					<S.Field>
						<label htmlFor="message" id="message">
							Mensagem
						</label>
						<textarea
							rows="4"
							cols="22"
							name="message"
							form="feedback"
							placeholder="Feedback"
							required
						/>
					</S.Field>

					<Button title="Enviar Feedback" />
				</S.FeedbackForm>

				<S.Divider order={-1} />

				<S.Contact>
					<h3>Contato</h3>

					<S.ContactInfo>
						<h4>Número de telefone</h4>
						<span>+55 11 99999-9999</span>
					</S.ContactInfo>

					<S.ContactInfo>
						<h4>Endereço</h4>
						<span>Palace Embankment, 32, St Petersburg, Rússia, 190000</span>
					</S.ContactInfo>

					<S.ContactInfo>
						<h4>Redes Sociais</h4>

						<S.SocialMedia>
							<a
								href="https://www.instagram.com"
								rel="noreferrer"
								target="_blank"
							>
								<Icon
									sizes={28}
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
									sizes={28}
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
									sizes={28}
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
									sizes={28}
									src="/assets/icons/TikTok.svg"
									alt="Tiktok icon"
								/>
							</a>
						</S.SocialMedia>
					</S.ContactInfo>
				</S.Contact>

				<S.Divider order={-1} />
			</S.Footer>

			<S.Rights>
				<p className="rights">
					<span id="text-primary">Thin Cut</span> © {new Date().getFullYear()}{" "}
					Todos direitos reservados.
				</p>

				<p className="developer">
					Desenvolvido por{" "}
					<a
						href="https://github.com/CauaRodrigues"
						rel="noreferrer"
						target="_blank"
					>
						Cauã
						<Icon sizes={24} src="/assets/icons/Github.svg" alt="github icon" />
					</a>
				</p>
			</S.Rights>
		</S.FooterSection>
	);
}
