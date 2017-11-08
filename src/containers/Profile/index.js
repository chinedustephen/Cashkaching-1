/**
 *
 * App - Lotto Main
 */
import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Cardcontainer = styled.div`
	background-color: green;
`;

const Smallcardcontainers = styled.div`
	background-color: beige;
`;

const Nested = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-auto-rows: minmax(93px, auto);
	grid-gap: 1em;
	@media only screen and (max-width: 724px) {
		grid-template-columns: 1fr;
	}
`;

const Cardlayout = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-auto-rows: minmax(300px, auto);
	grid-row-gap: 1em;
`;

class Profile extends Component {
	render() {
		return (
			<div>
				<Cardlayout>
					<Cardcontainer>
						<Link to="/profilePage/settings">Settings</Link>
					</Cardcontainer>
				</Cardlayout>
				<Nested>
					<Smallcardcontainers>
						<Link to="/profilePage/badgeCollection">badge Collection</Link>
					</Smallcardcontainers>
					<Smallcardcontainers>
						<Link to="/profilePage/accountActivity">Account Activity</Link>
					</Smallcardcontainers>
					<Smallcardcontainers>
						<Link to="/profilePage/inviteFriends">Invite Friends</Link>
					</Smallcardcontainers>
				</Nested>
			</div>
		);
	}
}

export default Profile;
