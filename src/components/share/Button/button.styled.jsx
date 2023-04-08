import styled from "styled-components";

export const Button = styled.button`
	padding: 10px 16px;

	background-color: ${({ theme }) => theme.colors.primary};
	border-radius: 8px;
	cursor: pointer;
	transition: all 0.4s;

	color: ${({ theme }) => theme.colors.light};
	font-size: min(0.9rem, 5vw);
	font-weight: ${({ theme }) => theme.fonts.fw.md};

	&:hover {
		background-color: ${({ theme }) => theme.colors.primary_dark};
	}
`;
