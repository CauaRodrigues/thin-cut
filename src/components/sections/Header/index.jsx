import React from "react";
import MediaQuery from "react-responsive";

import Button from "@components/Button";
import Logo from "@components/Logo";

import * as S from "./header.styled";
import MenuMobile from "@components/MenuMobile";

export default function Header() {
	return (
		<S.Header>
			<Logo />

			<MediaQuery minWidth={700}>
				<S.NavBox>
					<a href="#about">Sobre</a>
					<a href="#services">Serviços</a>
					<a href="#team">time</a>
					<a href="#gallery">Galeria</a>
					<a href="#contact">Contato</a>
				</S.NavBox>

				<Button title="Agendar Corte" />
			</MediaQuery>

			<MediaQuery maxWidth={699}>
				<MenuMobile />
			</MediaQuery>
		</S.Header>
	);
}
