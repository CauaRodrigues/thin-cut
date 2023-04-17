import styled from "styled-components";

export const Header = styled.header`
	width: 100%;
	display: flex;
	justify-content: space-around;
	align-items: center;

	@media (max-width: 1000px) {
		justify-content: space-between;
	}
`;

export const NavBox = styled.nav`
	width: 30%;
	display: flex;
	justify-content: space-between;
	gap: 0.8rem;

	@media (max-width: 1000px) {
		width: 50%;
	}

	a {
		color: ${({ theme }) => theme.colors.light};
		text-transform: capitalize;
		font-size: min(1.1rem, 3vw);
		font-weight: ${({ theme }) => theme.fonts.fw.md};
	}
`;
