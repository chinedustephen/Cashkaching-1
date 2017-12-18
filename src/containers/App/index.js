/**
 *
 * App - Personal Dashboard
 **/
import React, { Component } from "react";
import LandingPage from "../LandingPage";
import PersonalAccount from "../PersonalAccount";
import RegisterPage from "../RegisterPage";
import { BrowserRouter as Router, Route } from "react-router-dom";

class PersonalAccountApp extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={LandingPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/personalaccount" component={PersonalAccount} />
        </div>
      </Router>
    );
  }
}

export default PersonalAccountApp;
