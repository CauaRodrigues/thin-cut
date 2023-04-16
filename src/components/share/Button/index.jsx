import React from "react";
import * as S from "./button.styled";

export const Button = ({ title, outline }) => (
	<S.Button invert={outline}>{title}</S.Button>
);
