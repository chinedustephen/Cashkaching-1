/**
 *
 * App - Lotto Main
 */
import React, { Component } from "react";
import styled from "styled-components";
import Settings from "../SettingsPage";
import Profile from "../Profile";
import BadgeCollection from "../BadgeCollectionPage";
import Activity from "../AccountActivity";
import InviteFriends from "../InviteFriendsPage";

import { BrowserRouter as Router, Route } from "react-router-dom";

const Aside = styled.div`
	background-color: orange;
	@media only screen and (max-width: 1000px) {
		div {
			display: none;
		}
	}
`;
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

const Adplacement = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-auto-rows: minmax(400px, auto);
	margin-top: 3em;
	margin-bottom: 2em;
	background-color: red;
`;
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

class ProfilePage extends Component {
	render() {
		return (
			<Router>
				<Contentwrapper>
					<Aside>
						<Adplacement>ads here</Adplacement>
						<Adplacement>ads here</Adplacement>
					</Aside>
					<Mainpanel>
						<Bonusnaira>Bonusnaira</Bonusnaira>

						<Route exact path="/profilePage/profile" component={Profile} />
						<Route path="/profilePage/settings" component={Settings} />
						<Route path="/profilePage/badgeCollection" component={BadgeCollection} />
						<Route path="/profilePage/accountActivity" component={Activity} />
						<Route path="/profilePage/inviteFriends" component={InviteFriends} />
					</Mainpanel>
					<Aside>
						<Adplacement>ads here</Adplacement>
						<Adplacement>ads here</Adplacement>
					</Aside>
				</Contentwrapper>
			</Router>
		);
	}
}

export default ProfilePage;
