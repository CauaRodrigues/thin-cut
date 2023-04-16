import styled from "styled-components";

export const Button = styled.button`
	padding: 10px 16px;

	background-color: ${(props) =>
		props.invert ? "transparent" : props.theme.colors.primary};
	border-radius: 8px;
	border: ${(props) =>
		props.invert ? `0.21em solid ${props.theme.colors.primary}` : "none"};
	cursor: pointer;
	transition: all 0.4s;

	color: ${(props) =>
		props.invert ? props.theme.colors.primary : props.theme.colors.light};
	font-size: min(0.9rem, 5vw);
	font-weight: ${({ theme }) => theme.fonts.fw.md};

	&:hover {
		background-color: ${({ theme }) => theme.colors.primary_dark};
		color: ${({ theme }) => theme.colors.light};
		border-color: ${({ theme }) => theme.colors.primary_dark};
	}
`;
