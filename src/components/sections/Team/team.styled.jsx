import styled from "styled-components";

export const BoxAvatar = styled.div`
	width: 70%;
	padding: 24px;

	display: flex;
	gap: 1.5rem;

	border-radius: 300px;
	border-bottom-right-radius: 0;
	background-color: ${({ theme }) => theme.colors.main};
	box-shadow: 8px 11px 19px 5px rgba(0, 0, 0, 0.25);
`;
export const AvatarImage = styled.figure``;

export const AvatarDetails = styled.div`
	width: 50%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	gap: 1.5rem;

	h4 {
		text-transform: capitalize;
		font-family: ${({ theme }) => theme.fonts.fm.asap};
		font-weight: ${({ theme }) => theme.fonts.fw.md};
		font-size: min(1.8rem, 5.8vw);
	}

	p {
		color: ${({ theme }) => theme.colors.gray};
		font-weight: ${({ theme }) => theme.fonts.fw.rg};
		font-size: min(1rem, 3.5vw);
	}
`;

export const Pointers = styled.div`
	display: flex;
	gap: 1rem;
`;

export const PointerButton = styled.button`
	img {
		cursor: pointer;
		border-radius: 50%;
		border: 0.25em solid ${({ theme }) => theme.colors.primary};
		width: 64px;
	}
`;
