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

	&:hover .card--info {
		height: 37vh;

		h3 {
			color: ${({ theme }) => theme.colors.primary};
		}
	}

	.card--info {
		height: 55px;
		padding: 12px 0 12px 16px;
		margin-bottom: 24px;

		display: flex;
		flex-direction: column;
		justify-content: space-between;

		overflow-y: hidden;
		border-left: 3px solid ${({ theme }) => theme.colors.primary};
		background-color: rgba(33, 33, 33, 0.82);

		transition: ease-in-out 0.6s;

		h3 {
			font-family: ${({ theme }) => theme.fonts.fm.asap};
			font-weight: ${({ theme }) => theme.fonts.fw.md};
			font-size: min(1.35rem, 5vw);
			margin-bottom: 0.5rem;
		}

		p {
			font-weight: ${({ theme }) => theme.fonts.fw.th};
			font-size: min(1rem, 4vw);
		}

		.price {
			color: ${({ theme }) => theme.colors.primary};
			font-size: min(1.8rem, 5.8vw);
			font-family: ${({ theme }) => theme.fonts.fm.asap};
			font-weight: ${({ theme }) => theme.fonts.fw.md};
		}
	}
`;
