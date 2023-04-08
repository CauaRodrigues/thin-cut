import styled from "styled-components";

export const BannerContainer = styled.div`
	width: 100%;
	min-height: 95vh;
	padding: 1rem;

	background-image: url("/assets/images/banners/banner-bg4.png");
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;

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
			font-size: min(3rem, 12vw);
		}

		p {
			color: ${({ theme }) => theme.colors.gray};
		}
	}
`;

export const Points = styled.div``;
