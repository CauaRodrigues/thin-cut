import styled from "styled-components";

export const BoxAvatar = styled.div`
	padding: 24px;
	width: 35%;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1.5rem;

	background-color: ${({ theme }) => theme.colors.main};
	box-shadow: 6px 6px 24px 1px rgba(0, 0, 0, 0.15);
	border-radius: 32px;

	@media (max-width: 1000px) {
		width: 50%;
	}

	@media (max-width: 710px) {
		width: 70%;
	}

	@media (max-width: 500px) {
		width: 95%;
	}

	img {
		width: 60%;
		border-radius: 50%;

		@media (max-width: 1000px) {
			width: 80%;
		}
	}
`;

export const AvatarImage = styled.figure``;

export const AvatarDetails = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1.5rem;

	h4 {
		text-align: center;
		text-transform: capitalize;
		font-family: ${({ theme }) => theme.fonts.fm.asap};
		font-weight: ${({ theme }) => theme.fonts.fw.md};
		font-size: min(1.8rem, 5.8vw);
	}

	p {
		text-align: center;
		color: ${({ theme }) => theme.colors.gray};
		font-weight: ${({ theme }) => theme.fonts.fw.rg};
		font-size: min(1rem, 3.5vw);
	}
`;

export const Pointers = styled.div`
	display: flex;
	gap: 1rem;
`;

export const PointerButton = styled.div`
	cursor: ${(props) => (props.active ? "auto" : "pointer")};

	img {
		border-radius: 50%;
		width: 64px;
		border: 0.25em solid
			${(props) =>
				props.active ? props.theme.colors.primary : props.theme.colors.black};
	}
`;
