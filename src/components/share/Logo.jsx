import React from "react";
import styled from "styled-components";

export default function Logo() {
	return (
		<StyledLogo>
			<img src="/assets/logo/logo.png" alt="logo Thin Cut" />

			<figcaption>
				<span>Thin</span>
				<span id="text-primary">Cut</span>
			</figcaption>
		</StyledLogo>
	);
}

const StyledLogo = styled.figure`
	display: flex;

	img {
		width: 55px;
	}

	figcaption {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-around;

		span {
			text-transform: uppercase;
			letter-spacing: 2px;
			color: ${({ theme }) => theme.colors.main};
			line-height: 1;
			font-size: 1.5rem;
			font-family: ${({ theme }) => theme.fonts.fm.asap};
			font-weight: ${({ theme }) => theme.fonts.fw.bd};
		}
	}
`;
