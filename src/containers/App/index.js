/**
 *
 * App - Personal Dashboard
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */
import React, { Component } from "react";
import LandingPage from "../LandingPage";
import PersonalAccount from "../PersonalAccount";
import { BrowserRouter, Route } from "react-router-dom";

class PersonalAccountApp extends Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<Route exact path="/" component={LandingPage} />

					<Route path="/personalaccount" component={PersonalAccount} />

				</div>
			</BrowserRouter>
		);
	}
}

export default PersonalAccountApp;
