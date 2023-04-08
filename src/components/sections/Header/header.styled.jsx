import styled from "styled-components";

export const Header = styled.header`
	width: 100%;
	display: flex;
	justify-content: space-around;
	align-items: center;
`;

export const LogoBox = styled.figure`
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

export const NavBox = styled.nav`
	width: 30%;
	display: flex;
	justify-content: space-between;
	gap: 0.8rem;

	a {
		color: ${({ theme }) => theme.colors.light};
		text-transform: capitalize;
		font-size: min(1.1rem, 3vw);
		font-weight: ${({ theme }) => theme.fonts.fw.md};
	}
`;
