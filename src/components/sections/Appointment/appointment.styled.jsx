import styled from "styled-components";

export const BoxBook = styled.div`
	width: 95%;
	padding: 16px;

	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;

	background-color: #4e93b13f;
	border-radius: 23px;
`;

export const InfoBook = styled.div`
	width: 45%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: flex-start;
	gap: 0.5rem;

	span {
		padding: 8px 10px;
		background-color: ${({ theme }) => theme.colors.dark};
		border-radius: 8px;

		text-transform: uppercase;
		color: ${({ theme }) => theme.colors.light};
		letter-spacing: 1px;
		font-size: 0.6rem;
		font-weight: ${({ theme }) => theme.fonts.fw.md};
	}

	h2 {
		letter-spacing: normal;
	}

	p {
		font-size: min(0.9rem, 3vw);
		color: #ce5151;
		font-weight: ${({ theme }) => theme.fonts.fw.md};
	}
`;

export const GroupButtons = styled.div`
	margin-top: 1rem;
	display: flex;
	gap: 1rem;
`;

export const SaleImage = styled.figure`
	width: max-content;
	img {
		width: 85%;
	}
`;
