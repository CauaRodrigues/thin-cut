import styled from "styled-components";

export const ContainerAbout = styled.section`
	width: 100%;
	padding: 24px 12px;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	gap: 2rem;

	h2 {
		font-family: ${({ theme }) => theme.fonts.fm.asap};
		font-weight: ${({ theme }) => theme.fonts.fw.bd};
		font-size: min(2rem, 7vw);
		letter-spacing: 2px;
	}

	@media (max-width: 500px) {
		gap: 0.5rem;
	}
`;

export const Content = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	gap: 1rem;

	@media (max-width: 1000px) {
		flex-direction: column-reverse;
		align-items: center;
	}
`;

export const BoxImages = styled.div`
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: center;
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

export const Metric = styled.div`
	display: flex;
	flex-direction: column;

	span {
		color: ${({ theme }) => theme.colors.primary};

		&.number {
			font-size: min(3rem, 8vw);
			font-weight: ${({ theme }) => theme.fonts.fw.bd};
			font-family: ${({ theme }) => theme.fonts.fm.asap};
		}

		&.caption {
			text-transform: capitalize;
			font-size: min(1.2rem, 4vw);
			font-weight: ${({ theme }) => theme.fonts.fw.md};
			font-family: ${({ theme }) => theme.fonts.fm.poppins};
		}
	}
`;
