/**
 *
 * Voucher - VoucherNavigation
 */
import React, { Component } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const VoucherNav = styled.ul`
	list-style-type: none;
	margin: 0;
	padding: 0;
	overflow: hidden;
	background-color: #333;
`;

const ListNavigation = styled.li`
	float: left;
`;
const Tablinks = styled.a`
	display: block;
	color: white;
	text-align: center;
	padding: 14px 16px;
	text-decoration: none;
	&:hover {
		background-color: red;
	}
`;

class ProfileNavigation extends Component {
	render() {
		return (
			<div>
				<VoucherNav>
					<ListNavigation>
						<Tablinks>
							<NavLink to="/profilePage/profile">Profile</NavLink>
						</Tablinks>
					</ListNavigation>
					<ListNavigation>
						<Tablinks>
							<NavLink to="/profilePage/badgecollection">BadgeCollection</NavLink>
						</Tablinks>
					</ListNavigation>
					<ListNavigation>
						<Tablinks>
							<NavLink to="/profilePage/accountActivity">Activity</NavLink>
						</Tablinks>
					</ListNavigation>
					<ListNavigation>
						<Tablinks>
							<NavLink to="/profilePage/inviteFriends">inviteFriends</NavLink>
						</Tablinks>
					</ListNavigation>
					<ListNavigation>
						<Tablinks>
							<NavLink to="/profilePage/settings">Settings</NavLink>
						</Tablinks>
					</ListNavigation>
				</VoucherNav>
			</div>
		);
	}
}

export default ProfileNavigation;
