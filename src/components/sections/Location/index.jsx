import React from "react";
import { useTheme } from "styled-components";
import Section from "@styled/Section";
import * as S from "./location.styled";

export default function Location() {
	const theme = useTheme();

	return (
		<Section background={theme.colors.dark} color={theme.colors.main}>
			<h2>Onde nos encontrar?</h2>

			<S.Map
				src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7994.0103035781685!2d30.3137962!3d59.9403958!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46963110eb25adbd%3A0x214f8f2811596776!2sPal%C3%A1cio%20de%20Inverno!5e0!3m2!1spt-BR!2sbr!4v1681600905448!5m2!1spt-BR!2sbr"
				height="600"
				allowFullScreen
				loading="lazy"
				referrerPolicy="no-referrer-when-downgrade"
			/>
		</Section>
	);
}
