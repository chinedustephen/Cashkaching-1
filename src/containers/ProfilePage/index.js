/**
 *
 * App - Lotto Main
 */
import React, { Component } from "react";
import styled from "styled-components";
import Profile from "../Profile";





const Mainpanel = styled.div`
	background-color: pink;
	@media only screen and (max-width: 1000px) {
		grid-auto-columns: minmax(700px, auto);
		width: 724px;
	}
`;

const Bonusnaira = styled.div`
	background-color: yellow;
	margin-bottom: 30px;
`;




class ProfilePage extends Component {
	render() {
		return (

				<div>

						<Mainpanel>
							<Bonusnaira>Bonusnaira</Bonusnaira>


							<Profile/>
						</Mainpanel>

				</div>

		);
	}
}

export default ProfilePage;
