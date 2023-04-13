import styled from "styled-components";

export const BoxAvatar = styled.div`
	width: 70%;
	padding: 24px;

	display: flex;
	justify-content: space-between;
	gap: 1rem;

	border-radius: 300px;
	border-bottom-right-radius: 0;
	background-color: ${({ theme }) => theme.colors.main};
	box-shadow: 8px 11px 19px 5px rgba(0, 0, 0, 0.25);
`;

export const AvatarDetails = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
`;
