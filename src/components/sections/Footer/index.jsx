import React from "react";
import Section from "@styled/Section";
import * as S from "./footer.styled";

export default function Footer() {
	return (
		<Section>
			<S.Footer>
				<S.Menu></S.Menu>

				<S.FeedbackForm>
					<h2>Feedback</h2>
				</S.FeedbackForm>

				<S.Contact>
					<h3>Contato</h3>
				</S.Contact>
			</S.Footer>

			<S.Rights></S.Rights>
		</Section>
	);
}
