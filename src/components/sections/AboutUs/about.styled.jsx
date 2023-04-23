import styled from "styled-components";

export const Content = styled.div`
	margin: 12px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	gap: 1rem;

	@media (max-width: 1000px) {
		flex-direction: column-reverse;
		align-items: center;
		padding-bottom: 10rem;
	}

	@media (max-width: 610px) {
		padding-bottom: 12px;
		min-height: max-content;
	}
`;

export const BoxImages = styled.div`
	flex: 1;
	display: flex;
	justify-content: center;
	gap: 0.5rem;

	@media (max-width: 610px) {
		width: 80%;
	}

	@media (max-width: 500px) {
		width: 95%;
	}

	figure {
		position: relative;

		@media (max-width: 610px) {
			position: static;
		}

		&:first-of-type {
			top: 110px;
			left: 70px;
		}

		&:last-of-type {
			right: 30px;
		}

		img {
			border-radius: 23px;
			max-width: 300px;

			@media (max-width: 610px) {
				max-width: 100%;
			}
		}
	}
`;

export const Box = styled.div`
	width: 50%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 1rem;

	@media (max-width: 1000px) {
		text-align: center;
		align-items: center;
		justify-content: center;
		margin: 24px 0;
		width: 70%;
	}

	@media (max-width: 800px) {
		width: 80%;
	}

	@media (max-width: 500px) {
		width: 95%;
	}
`;

export const ContentText = styled.div`
	width: 85%;
	display: flex;
	flex-direction: column;
	gap: 0.5rem;

	@media (max-width: 1063px) {
		width: 100%;
	}

	h3 {
		font-family: ${({ theme }) => theme.fonts.fm.asap};
		font-weight: ${({ theme }) => theme.fonts.fw.sb};
		font-size: min(1.5rem, 6vw);
	}

	p {
		font-size: min(1.05rem, 3.8vw);
		font-weight: ${({ theme }) => theme.fonts.fw.rg};
	}
`;

export const BoxMetrics = styled.div`
	width: 100%;
	display: flex;
	gap: 2rem;

	@media (max-width: 1000px) {
		align-items: center;
		justify-content: center;
	}
`;
