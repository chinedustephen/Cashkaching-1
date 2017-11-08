/**
 *
 * App - Navigation
 */
import React, { Component } from "react";
import styled from "styled-components";

const Nav = styled.ul`
	list-style-type: none;
	margin: 0;
	padding: 0;
	overflow: hidden;
	background-color: #333;
`;

const ListNavigation = styled.li`
	float: right;
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

class LandingPageNavigation extends Component {
	render() {
		return (
			<div>
				<Nav>
					<ListNavigation>
						<Tablinks>Register</Tablinks>
					</ListNavigation>
					<ListNavigation>
						<Tablinks>Blog</Tablinks>
					</ListNavigation>
					<ListNavigation>
						<Tablinks>How it works</Tablinks>
					</ListNavigation>
					<ListNavigation>
						<Tablinks>For business</Tablinks>
					</ListNavigation>
					<ListNavigation>
						<Tablinks>How it works</Tablinks>
					</ListNavigation>
				</Nav>
			</div>
		);
	}
}

export default LandingPageNavigation;
