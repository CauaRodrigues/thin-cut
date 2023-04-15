import styled from "styled-components";

export const Map = styled.iframe`
	border-radius: 23px;
	width: 80%;
	box-shadow: 8px 8px 32px 8px rgba(0, 0, 0, 0.4);

	@media (max-width: 630px) {
		width: 95%;
	}
`;
