import React from "react";

import TopInfo from "@section/TopInfo";
import Banner from "@section/Banner";
import MediaQuery from "react-responsive";

export default function Home() {
	return (
		<>
			<MediaQuery minWidth={640}>
				<TopInfo />
			</MediaQuery>
			<Banner />
		</>
	);
}
