/**
 *
 * App - Lotto Main
 */
import React, { Component } from "react";
import styled from "styled-components";

const Smallcardcontainers = styled.div`
	background-color: beige;
`;

const NestedHalfCards = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-auto-rows: minmax(93px, auto);
	grid-gap: 1em;
	@media only screen and (max-width: 724px) {
		grid-template-columns: 1fr;
	}
`;

class Settings extends Component {
	render() {
		return (
			<div>
				<NestedHalfCards>
					<Smallcardcontainers>settings</Smallcardcontainers>
					<Smallcardcontainers>settings</Smallcardcontainers>
				</NestedHalfCards>
			</div>
		);
	}
}

export default Settings;
