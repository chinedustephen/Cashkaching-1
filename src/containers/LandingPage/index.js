/**
 *
 * App - Lotto Main
 */
import React, { Component } from "react";
import Sections from "../LandingPage";
import LandingPageNavigation from "../../components/LandingPageNavigation";

class LandingPage extends Component {
	render() {
		return (
			<div>
				<LandingPageNavigation />
				<Sections />
			</div>
		);
	}
}

export default LandingPage;
