/**
 *
 * App - Lotto Main
 */
import React, { Component } from "react";
import styled from "styled-components";
import VoucherCard from "../../components/VoucherCard";

const NestedHalfCards = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-auto-rows: minmax(396px, auto);
	grid-gap: 1em;

	@media only screen and (max-width: 724px) {
		grid-template-columns: 1fr;
	}
`;

class VouchersAll extends Component {
	render() {
		return (
			<div>
				<NestedHalfCards>
					<VoucherCard />
					<VoucherCard />
				</NestedHalfCards>
			</div>
		);
	}
}

export default VouchersAll;
