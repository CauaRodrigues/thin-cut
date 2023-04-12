import styled from "styled-components";

export const Section = styled.section`
	width: 100%;
	padding: 24px 12px;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	gap: 2rem;

	background-color: ${(props) => props.background || props.theme.colors.main};
	color: ${(props) => props.color || props.theme.colors.title};

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
