import React, { useState } from "react";
import styled from "styled-components";

export default function MenuMobile() {
	const [openMenu, setOpenMenu] = useState(false);

	return (
		<StyledButtonMenu
			open={openMenu}
			onClick={() => setOpenMenu((prevState) => !prevState)}
		>
			<div />
			<div />
			<div />
		</StyledButtonMenu>
	);
}

const StyledButtonMenu = styled.button`
	height: 2.5rem;
	width: 2.5rem;
	z-index: 10;

	display: flex;
	flex-direction: column;
	justify-content: space-around;

	background-color: transparent;
	border: none;
	cursor: pointer;

	&,
	&:focus {
		outline: none;
	}

	div {
		content: " ";
		width: 2.5rem;
		height: 0.25rem;
		position: relative;

		background-color: ${({ theme }) => theme.colors.primary};
		border-radius: 10px;
		transition: all 0.3s linear;
		transform-origin: 1px;

		&:first-child {
			transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
		}

		&:nth-child(2) {
			opacity: ${({ open }) => (open ? "0" : "1")};
			transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
		}

		:nth-child(3) {
			transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
		}
	}
`;
