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
	width: 25%;

	display: flex;
	flex-direction: column;
	gap: 0.8rem;

	h3 {
		text-align: center;
	}
`;

export const ContactInfo = styled.div`
	max-width: 100%;

	h4 {
		color: ${({ theme }) => theme.colors.primary};
		font-weight: ${({ theme }) => theme.fonts.fw.sb};
		margin-bottom: 0.2rem;
	}

	span {
		margin-left: 8px;
	}
`;

export const SocialMedia = styled.div`
	margin-left: 8px;
	display: flex;
	gap: 0.6rem;
`;

export const Rights = styled.div`
	text-align: center;
	font-size: min(0.9rem, 2.5vw);
	color: ${({ theme }) => theme.colors.gray};
	display: flex;
	flex-direction: column;
	gap: 0.6rem;

	p.rights {
		font-weight: ${({ theme }) => theme.fonts.fw.rg};

		#text-primary {
			font-weight: ${({ theme }) => theme.fonts.fw.bd};
		}
	}

	.developer {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 4px;
		font-weight: ${({ theme }) => theme.fonts.fw.sb};
		color: ${({ theme }) => theme.colors.gray};

		a {
			color: ${({ theme }) => theme.colors.primary};
			display: flex;
			align-items: center;
			justify-content: center;
		}

		img {
			margin-left: 5px;
			display: inline;
		}
	}
`;
