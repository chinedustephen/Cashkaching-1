/**
 *
 * App - Lotto Main
 */
import React, { Component } from "react";
import styled from "styled-components";
import VoucherNavigation from "../../components/VoucherNavigation";
import VouchersDiscover from "../VouchersDiscover";
import BonusNaira from "../../components/BonusNaira";
import SearchInput from "../../components/SearchInput";




const Mainpanel = styled.div`
	margin-top: 30px;
	@media only screen and (max-width: 1000px) {
		grid-auto-columns: minmax(700px, auto);
		width: 724px;
	}
	@media only screen and (max-width: 500px) {
		width: 381px;
	}
`;





class Vouchers extends Component {
	render() {
		return (
				<div>


						<Mainpanel>
							<BonusNaira />
							<SearchInput />
							<VoucherNavigation />

							<VouchersDiscover/>
							
						</Mainpanel>


				</div>

		);
	}
}

export default Vouchers;
