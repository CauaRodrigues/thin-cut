import styled from "styled-components";

export const BoxGallery = styled.div`
	width: 80%;
	display: grid;
	grid-template-areas:
		"photo1 photo3 photo5"
		"photo2 photo4 photo6"
		"photo7 photo7 photo8";
	gap: 1rem;
	justify-content: center;
	align-items: flex-start;

	#photo1 {
		grid-area: photo1;
	}
	#photo2 {
		grid-area: photo2;
	}
	#photo3 {
		grid-area: photo3;
	}
	#photo4 {
		grid-area: photo4;
	}
	#photo5 {
		grid-area: photo5;
	}
	#photo6 {
		grid-area: photo6;
	}
	#photo7 {
		grid-area: photo7;
	}
	#photo8 {
		grid-area: photo8;
	}
`;

export const Photo = styled.img`
	border-radius: 22px;
`;
