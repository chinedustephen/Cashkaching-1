/**
 *
 * App - Lotto Main
 */
import React, { Component } from "react";
import styled from "styled-components";

const Cardcontainer = styled.div`
	background-color: green;
`;

const Cardlayout = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-auto-rows: minmax(300px, auto);
	grid-row-gap: 1em;
`;

class Activity extends Component {
	render() {
		return (
			<div>
				<Cardlayout>
					<Cardcontainer>AccountActivity</Cardcontainer>
				</Cardlayout>
			</div>
		);
	}
}

export default Activity;
