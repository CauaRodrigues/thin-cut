import styled from "styled-components";
import { BoxSection } from "@styled/Box";

export const ContainerTop = styled(BoxSection)`
	justify-content: space-around;
	align-items: center;
	gap: 1rem;
	background-color: ${({ theme }) => theme.colors.primary};
`;

export const InfoGroup = styled.figure`
	display: flex;
	align-items: center;
	gap: 0.5rem;

	figcaption {
		color: ${({ theme }) => theme.colors.main};
		font-size: min(0.9rem, 5vw);
		font-weight: ${({ theme }) => theme.fonts.fw.md};
	}
`;
