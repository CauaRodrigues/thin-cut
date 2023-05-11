import React, { useState } from "react";
import MediaQuery from "react-responsive";

import Button from "@components/Button";
import Logo from "@components/Logo";
import ButtonMenuMobile from "@components/ButtonMenuMobile";
import * as S from "./header.styled";

export default function Header() {
	const [showMenuMobile, setShowMenuMobile] = useState(false);

	const statusMenu = (status) => {
		setShowMenuMobile(status);
	};

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
				<ButtonMenuMobile status={statusMenu} />

				{showMenuMobile ? (
					<S.MenuMobile>
						<S.NavBoxMobile>
							<a href="#about">Sobre</a>
							<a href="#services">Serviços</a>
							<a href="#team">time</a>
							<a href="#gallery">Galeria</a>
							<a href="#contact">Contato</a>
						</S.NavBoxMobile>

						<Button title="Agendar Corte" />
					</S.MenuMobile>
				) : null}
			</MediaQuery>
		</S.Header>
	);
}
