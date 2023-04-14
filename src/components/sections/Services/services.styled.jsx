import styled from "styled-components";

export const CardsServices = styled.div`
	width: 95%;
	margin: 1.5rem;

	display: grid;
	grid-template-columns: repeat(4, 0.2fr);
	justify-content: center;
	gap: 2rem;

	@media (max-width: 1050px) {
		grid-template-columns: repeat(4, 0.4fr);
	}

	@media (max-width: 900px) {
		grid-template-columns: repeat(2, 0.4fr);
	}

	@media (max-width: 650px) {
		grid-template-columns: repeat(2, 0.8fr);
	}

	@media (max-width: 500px) {
		grid-template-columns: repeat(1, 0.8fr);
	}
`;

export const CardService = styled.button`
	min-height: 50vh;

	display: flex;
	flex-direction: column;
	justify-content: flex-end;

	background-color: ${({ theme }) => theme.colors.main};
	background-image: ${(props) => `url(/assets/images/work/${props.image})`};
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	cursor: pointer;

	@media (max-width: 500px) {
		min-height: 45vh;
	}

	&:is(:hover, :focus) .card--info {
		height: 37vh;
		overflow-y: auto;

		h3 {
			color: ${({ theme }) => theme.colors.primary};
		}
	}

	.card--info {
		height: 55px;
		padding: 12px;
		margin-bottom: 24px;

		display: flex;
		flex-direction: column;
		justify-content: space-between;

		overflow-y: hidden;
		border-left: 3px solid ${({ theme }) => theme.colors.primary};
		background-color: rgba(33, 33, 33, 0.82);
		transition: ease-in-out 0.6s;
		text-align: left;

		::-webkit-scrollbar {
			display: none;
		}

		h3 {
			color: ${({ theme }) => theme.colors.main};
			font-family: ${({ theme }) => theme.fonts.fm.asap};
			font-weight: ${({ theme }) => theme.fonts.fw.md};
			font-size: min(1.35rem, 8vw);
			margin-bottom: 0.5rem;
		}

		p {
			color: ${({ theme }) => theme.colors.main};
			font-weight: ${({ theme }) => theme.fonts.fw.rg};
			font-size: min(1rem, 4vw);
		}

		.price {
			color: ${({ theme }) => theme.colors.primary};
			font-size: min(1.8rem, 8vw);
			font-family: ${({ theme }) => theme.fonts.fm.asap};
			font-weight: ${({ theme }) => theme.fonts.fw.md};
		}
	}
`;
