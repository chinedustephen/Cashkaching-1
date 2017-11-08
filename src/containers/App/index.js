/**
 *
 * App - Personal Dashboard
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */
import React, { Component } from "react";
import PersonalAccount from "../PersonalAccount";
import LandingPage from "../LandingPage";
import { BrowserRouter as Router, Route } from "react-router-dom";

class PersonalAccountApp extends Component {
	render() {
		return (
			<Router>
				<div>
					<Route exact path="/" component={PersonalAccount} />
					<Route path="/landingPage" component={LandingPage} />
				</div>
			</Router>
		);
	}
}

export default PersonalAccountApp;
