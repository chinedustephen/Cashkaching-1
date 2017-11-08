/**
 *
 * App - Lotto Main
 */
import React, { Component } from "react";
import styled from "styled-components";
import SectionOne from "../LandingPage";
import SectionTwo from "../LandingPage";

const Contentwrapper = styled.div`
	display: grid;
	grid-template-columns: 20% 57.5% 20%;
	grid-column-gap: 1em;
	@media only screen and (max-width: 1000px) {
		display: grid;
		grid-template-columns: 1fr;
		justify-items: center;
	}
`;

class Sections extends Component {
	render() {
		return (
			<Contentwrapper>
				<SectionOne />
				<SectionTwo />
			</Contentwrapper>
		);
	}
}

export default Sections;
