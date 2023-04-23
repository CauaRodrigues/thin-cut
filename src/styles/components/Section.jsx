import styled from "styled-components";

const Section = styled.section`
	width: 100%;
	padding: 3rem 12px;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 2rem;

	background-color: ${(props) => props.background || props.theme.colors.main};
	color: ${(props) => props.color || props.theme.colors.title};

	@media (max-width: 500px) {
		gap: 1rem;
	}

	h2 {
		font-family: ${({ theme }) => theme.fonts.fm.asap};
		font-weight: ${({ theme }) => theme.fonts.fw.bd};
		font-size: min(2rem, 7vw);
		letter-spacing: 2px;
	}

	h3 {
		font-family: ${({ theme }) => theme.fonts.fm.asap};
		font-weight: ${({ theme }) => theme.fonts.fw.sb};
		font-size: min(1.8rem, 6.5vw);
	}

	p.description {
		width: 55%;
		text-align: center;
		color: ${({ theme }) => theme.colors.gray};
		font-weight: ${({ theme }) => theme.fonts.fw.md};
		font-size: min(1rem, 3vw);

		@media (max-width: 800px) {
			width: 80%;
		}

		@media (max-width: 400px) {
			width: 95%;
		}
	}
`;

export default Section;
