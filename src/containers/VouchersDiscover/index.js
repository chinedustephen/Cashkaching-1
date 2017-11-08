/**
 *
 * App - Lotto Main
 */
import React, { Component } from "react";
import styled from "styled-components";
import DiscoverCard from "../../components/DiscoverCard";
import VoucherCard from "../../components/VoucherCard";

const Smallcardcontainers = styled.div`
	background-color: beige;
`;
const CatagoryContainer = styled.div`
	display: grid;
	grid-template-columns: 80% 1fr;
	border-bottom: 1px solid #5e8a1c;
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
const NestedHalfCards = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-auto-rows: minmax(396px, auto);
	grid-gap: 1em;

	@media only screen and (max-width: 724px) {
		grid-template-columns: 1fr;
	}
`;
const Catagory = styled.p`
	opacity: 0.87;
	font-family: Campton-BoldDEMO;
	font-size: 16px;
	color: #212121;
	letter-spacing: 0.29px;
`;

const LinkCatagory = styled.a`
	/* More food vouchers: */
	font-family: Roboto-Regular;
	font-size: 12px;
	color: #009688;
	letter-spacing: 0.16px;
	margin-top: 16px;
`;

class VouchersDiscover extends Component {
	render() {
		return (
			<div>
				<DiscoverCard />

				<CatagoryContainer>
					<Catagory>Food</Catagory>
					<LinkCatagory>More food vouchers >>></LinkCatagory>
				</CatagoryContainer>
				<NestedHalfCards>
					<VoucherCard />
					<VoucherCard />
				</NestedHalfCards>
			</div>
		);
	}
}

export default VouchersDiscover;
