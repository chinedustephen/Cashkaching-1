/**
 *
 * App - Personal Dashboard
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */
import React, { Component } from "react";
import Navigation from "../../components/Navigation";
import Lotto from "../LottoPage";
import Vouchers from "../VoucherPage";
import ProfilePage from "../ProfilePage";
import { BrowserRouter as Router, Route } from "react-router-dom";

class PersonalAccount extends Component {
	render() {
		return (
			<Router>
				<div>
					<Navigation />
					<Route path="/lotto" component={Lotto} />
					<Route path="/vouchers" component={Vouchers} />
					<Route path="/profilePage" component={ProfilePage} />
				</div>
			</Router>
		);
	}
}

export default PersonalAccount;
