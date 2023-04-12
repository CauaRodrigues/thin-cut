import styled from "styled-components";

export const CardsServices = styled.div`
	width: 95%;
	display: grid;
	grid-template-columns: 0.2fr 0.2fr 0.2fr 0.2fr;
	justify-content: center;
	gap: 2rem;
`;

export const CardService = styled.div`
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
	transition: ease-in-out 0.6s;

	&:hover {
		p,
		span {
			display: flex;
		}
	}

	.card--title {
		padding: 12px 0 12px 16px;
		margin-bottom: 24px;
		border-left: 3px solid ${({ theme }) => theme.colors.primary};
		background-color: rgba(33, 33, 33, 0.82);

		h3 {
			font-family: ${({ theme }) => theme.fonts.fm.asap};
			font-weight: ${({ theme }) => theme.fonts.fw.rg};
			font-size: min(1.35rem, 5vw);
		}
	}

	p,
	span {
		display: none;
	}
`;
