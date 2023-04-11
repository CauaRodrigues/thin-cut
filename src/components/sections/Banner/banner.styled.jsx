import styled from "styled-components";

export const BannerContainer = styled.div`
	width: 100%;
	min-height: 95vh;
	padding: 1rem;

	background-image: ${({ bgImage }) =>
		`url(/assets/images/banners/${bgImage}.png)`};
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;

	@media (max-width: 460px) {
		min-height: 80vh;
	}

	.content-text {
		width: 40vw;

		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 1.5rem;

		text-align: center;
		color: ${({ theme }) => theme.colors.main};

		@media (max-width: 1000px) {
			width: 80vw;
		}

		@media (max-width: 700px) {
			width: 90vw;
		}

		@media (max-width: 500px) {
			width: 100%;
		}

		h1 {
			font-weight: ${({ theme }) => theme.fonts.fw.bd};
			font-family: ${({ theme }) => theme.fonts.fm.asap};
			font-size: min(3rem, 9vw);
		}

		p {
			color: ${({ theme }) => theme.colors.gray};
			font-weight: ${({ theme }) => theme.fonts.fw.md};
			font-size: min(1.1rem, 8vw);
		}
	}
`;

export const Points = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1rem;
`;

export const Point = styled.button`
	background-color: ${({ theme, active }) =>
		active ? theme.colors.primary : theme.colors.main};
	border-radius: 50%;
	width: 1rem;
	height: 1rem;
	cursor: pointer;
	outline: 0.15em solid ${({ theme }) => theme.colors.dark};
`;
