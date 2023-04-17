import styled from "styled-components";

export const Footer = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-around;
`;

export const Menu = styled.nav`
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;
`;

export const Links = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.3rem;

	a {
		color: ${({ theme }) => theme.colors.main};
		font-weight: ${({ theme }) => theme.fonts.fw.md};
		font-size: min(1rem, 2.3vw);
		transition: all 0.5s;

		&:hover {
			color: ${({ theme }) => theme.colors.primary};
			text-decoration: underline;
		}
	}
`;

export const FeedbackForm = styled.form`
	flex: 3;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	gap: 24px;

	h2 {
		text-align: center;
	}
`;

export const Field = styled.div`
	width: 50%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 5px;

	label {
		align-self: flex-start;
		font-size: min(1rem, 4.8vw);
		font-weight: ${({ theme }) => theme.fonts.fw.md};
		letter-spacing: 1.5px;
	}

	input,
	textarea {
		width: 100%;
		padding: 12px;
		border-radius: 8px;
		font-size: min(0.9rem, 4vw);
		font-weight: ${({ theme }) => theme.fonts.fw.rg};
		color: ${({ theme }) => theme.colors.dark};

		&:focus {
			outline: none;
		}
	}

	textarea {
		resize: none;
	}
`;

export const Contact = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const Rights = styled.div`
	text-align: center;
`;
