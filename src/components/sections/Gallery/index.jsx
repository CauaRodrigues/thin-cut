import React from "react";
import Section from "@styled/Section";

import * as S from "./gallery.styled";

export default function Gallery() {
	return (
		<Section>
			<h2>Galeria</h2>

			<p className="description">
				Essas fotos foram todas tiradas em nossa barbearia. Como pode ver, nosso
				ambiente é agradável e adequado para cuidar de você e de sua autoestima.
			</p>

			<S.BoxGallery>
				<S.Photo
					src="/assets/images/gallery/Photo1.png"
					alt="Photo 1"
					id="photo1"
				/>
				<S.Photo
					src="/assets/images/gallery/Photo2.png"
					alt="Photo 2"
					id="photo2"
				/>
				<S.Photo
					src="/assets/images/gallery/Photo3.png"
					alt="Photo 3"
					id="photo3"
				/>
				<S.Photo
					src="/assets/images/gallery/Photo4.png"
					alt="Photo 4"
					id="photo4"
				/>
				<S.Photo
					src="/assets/images/gallery/Photo5.png"
					alt="Photo 5"
					id="photo5"
				/>
				<S.Photo
					src="/assets/images/gallery/Photo6.png"
					alt="Photo 6"
					id="photo6"
				/>
				<S.Photo
					src="/assets/images/gallery/Photo7.png"
					alt="Photo 7"
					id="photo7"
				/>
				<S.Photo
					src="/assets/images/gallery/Photo8.png"
					alt="Photo 8"
					id="photo8"
				/>
			</S.BoxGallery>
		</Section>
	);
}
