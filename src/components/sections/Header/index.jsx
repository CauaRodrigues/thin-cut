import React from "react";
import * as S from "./header.styled";
import { Button } from "@components/Button";

export default function Header() {
	return (
		<S.Header>
			<S.LogoBox>
				<img src="/assets/logo/logo.png" alt="logo Thin Cut" />

				<figcaption>
					<span>Thin</span>
					<span id="text-primary">Cut</span>
				</figcaption>
			</S.LogoBox>

			<S.NavBox>
				<a href="#about">Sobre</a>
				<a href="#services">Serviços</a>
				<a href="#team">time</a>
				<a href="#gallery">Galeria</a>
				<a href="#contact">Contato</a>
			</S.NavBox>

			<Button title="Agendar Corte" />
		</S.Header>
	);
}
