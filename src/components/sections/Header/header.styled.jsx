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
		position: relative;
		color: ${({ theme }) => theme.colors.light};
		text-transform: capitalize;
		font-size: min(1.1rem, 3vw);
		font-weight: ${({ theme }) => theme.fonts.fw.md};
		transition: 0.6s ease;

		&:hover {
			color: ${({ theme }) => theme.colors.primary};
		}

		&::before {
			content: "";
			height: 2px;

			position: absolute;
			bottom: 0;
			left: 0;
			right: 0;

			background-color: ${({ theme }) => theme.colors.primary};
			transform-origin: bottom right;
			transform: scaleX(0);
			transition: transform 0.6s ease;
		}

		&:hover::before {
			transform-origin: bottom left;
			transform: scaleX(1);
		}
	}
`;
