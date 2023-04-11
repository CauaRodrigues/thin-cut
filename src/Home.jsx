import React from "react";
import MediaQuery from "react-responsive";

import TopInfo from "@section/TopInfo";
import Banner from "@section/Banner";
import AboutUs from "@section/AboutUs";
import Services from "@section/Services";

export default function Home() {
	return (
		<>
			<MediaQuery minWidth={640}>
				<TopInfo />
			</MediaQuery>
			<Banner />
			<AboutUs />
			<Services />
		</>
	);
}
