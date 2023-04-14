import styled from "styled-components";

const Metric = styled.div`
	display: flex;
	flex-direction: column;
	align-items: ${(props) => (props.alignCenter ? "center" : "flex-start")};

	span {
		color: ${({ theme }) => theme.colors.primary};

		&.number {
			font-size: ${(props) => `min(${props.sizeNumber}rem, 8vw)`};
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

export default Metric;
