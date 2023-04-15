import styled from "styled-components";

export const BoxGallery = styled.div`
	max-width: 1200px;
	width: 80%;
	display: grid;
	grid-template-columns: repeat(7, 1fr);
	grid-template-rows: repeat(7, 5vw);
	gap: 1.5rem;

	@media (max-width: 1000px) {
		gap: 15px;
	}

	@media (max-width: 730px) {
		width: 90%;
	}

	@media (max-width: 570px) {
		gap: 8px;
	}

	@media (max-width: 520px) {
		grid-template-columns: repeat(8, 1fr);
		grid-template-rows: repeat(8, 5vw);
	}
`;

export const Photo = styled.figure`
	img {
		border-radius: 22px;
		width: 100%;
		height: 100%;
		object-fit: cover;

		@media (max-width: 570px) {
			border-radius: 12px;
		}
	}

	&.photo--1 {
		grid-column-start: 1;
		grid-column-end: 4;
		grid-row-start: 1;
		grid-row-end: 4;
	}

	&.photo--2 {
		grid-column-start: 1;
		grid-column-end: 4;
		grid-row-start: 4;
		grid-row-end: 7;

		@media (max-width: 520px) {
			grid-row-end: 8;
		}
	}

	&.photo--3 {
		grid-column-start: 4;
		grid-column-end: 6;
		grid-row-start: 1;
		grid-row-end: 5;

		@media (max-width: 520px) {
			grid-column-start: 4;
			grid-column-end: 7;
		}
	}

	&.photo--4 {
		grid-column-start: 4;
		grid-column-end: 6;
		grid-row-start: 5;
		grid-row-end: 7;

		@media (max-width: 520px) {
			grid-column-start: 4;
			grid-column-end: 7;
			grid-row-end: 8;
		}
	}

	&.photo--5 {
		grid-column-start: 6;
		grid-column-end: 8;
		grid-row-start: 1;
		grid-row-end: 3;

		@media (max-width: 520px) {
			grid-column-start: 7;
			grid-column-end: 9;
			grid-row-end: 4;
		}
	}

	&.photo--6 {
		grid-column-start: 6;
		grid-column-end: 8;
		grid-row-start: 3;
		grid-row-end: 7;

		@media (max-width: 520px) {
			grid-column-start: 7;
			grid-column-end: 9;
			grid-row-start: 4;
			grid-row-end: 8;
		}
	}

	&.photo--7 {
		grid-column-start: 1;
		grid-column-end: 6;
		grid-row-start: 7;
		grid-row-end: 9;

		@media (max-width: 520px) {
			grid-column-start: 1;
			grid-column-end: 7;
			grid-row-start: 8;
			grid-row-end: 10;
		}
	}

	&.photo--8 {
		grid-column-start: 6;
		grid-column-end: 8;
		grid-row-start: 7;
		grid-row-end: 9;

		@media (max-width: 520px) {
			grid-column-start: 7;
			grid-column-end: 9;
			grid-row-start: 8;
			grid-row-end: 10;
		}
	}
`;
