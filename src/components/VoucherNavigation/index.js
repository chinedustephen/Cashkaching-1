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
	margin-bottom: 10px;
`;

const ListNavigation = styled.li`
	float: left;
`;
const Tablinks = styled(NavLink)`
	display: block;
	color: white;
	text-align: center;
	padding: 3px 16px;
	text-decoration: none;
	font-family: Campton-BoldDEMO;
	font-size: 16px;
	color: #212121;
	letter-spacing: 0.29px;
	&:hover {

	}
	 &.active {
		 border-bottom: 3px solid #5e8a1c;
	 }
`;



class VoucherNavigation extends Component {
	render() {
		return (
			<div>
				<VoucherNav>
					<ListNavigation>

							<Tablinks to="/personalaccount/vouchers" exact  >Discover</Tablinks>

					</ListNavigation>
					<ListNavigation>

							<Tablinks to="/personalaccount/vouchers/vouchersall" exact >All</Tablinks>


					</ListNavigation>
					<ListNavigation>

							<Tablinks to="/personalaccount/vouchers/vouchersfavourites" exact >Favourites</Tablinks>

					</ListNavigation>
				</VoucherNav>
			</div>
		);
	}
}

export default VoucherNavigation;
