import React from "react";
import MediaQuery from "react-responsive";

import TopInfo from "@section/TopInfo";
import Banner from "@section/Banner";
import AboutUs from "@section/AboutUs";
import Services from "@section/Services";
import Team from "@section/Team";
import Gallery from "@section/Gallery";
import Location from "@section/Location";
import Footer from "@section/Footer";
import Appointment from "@section/Appointment";

export default function Home() {
	return (
		<>
			<MediaQuery minWidth={640}>
				<TopInfo />
			</MediaQuery>
			<Banner />
			<AboutUs />
			<Services />
			<Team />
			<Gallery />
			<Location />
			<Appointment />
			<Footer />
		</>
	);
}
