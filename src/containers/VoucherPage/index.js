/**
 *
 * App - Lotto Main
 */
import React, { Component } from "react";
import styled from "styled-components";
import VoucherNavigation from "../../components/VoucherNavigation";
import VouchersDiscover from "../VouchersDiscover";
import VouchersAll from "../VouchersAll";
import VouchersFavourites from "../VouchersFavourites";
import BonusNaira from "../../components/BonusNaira";
import SearchInput from "../../components/SearchInput";

import { BrowserRouter as Router, Route } from "react-router-dom";

const Aside = styled.div`
	@media only screen and (max-width: 1000px) {
		div {
			display: none;
		}
	}
`;
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

const Search = styled.div`
	background-color: grey;
`;

const Adplacement = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-auto-rows: minmax(400px, auto);
	margin-top: 3em;
	margin-bottom: 2em;
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

class Vouchers extends Component {
	render() {
		return (
			<Router>
				<Contentwrapper>
					<Aside>
						<Adplacement>ads here</Adplacement>
						<Adplacement>ads here</Adplacement>
					</Aside>

					<Mainpanel>
						<BonusNaira />
						<SearchInput />
						<VoucherNavigation />
						<Route path="/vouchers/vouchersDiscover" component={VouchersDiscover} />
						<Route path="/vouchers/vouchersAll" component={VouchersAll} />
						<Route path="/vouchers/vouchersFavourites" component={VouchersFavourites} />
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

export default Vouchers;
