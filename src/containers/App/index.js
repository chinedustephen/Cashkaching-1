import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "../LandingPage";
import PersonalAccount from "../PersonalAccount";
import RegisterPage from "../RegisterPage";
import LoginPage from "../LoginPage";
import ForgotPasswordPage from "../ForgotPasswordPage";
import EmailLoginPage from "../EmailLogin";
import EmailRegisterPage from "../EmailRegister";

const PersonalAccountAppRoutes = () => (
  <Router>
    <div>
      <Route exact path="/" component={LandingPage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/emaillogin" component={EmailLoginPage} />
      <Route path="/emailregister" component={EmailRegisterPage} />
      <Route path="/forgotpassword" component={ForgotPasswordPage} />
      <Route path="/personalaccount" component={PersonalAccount} />
    </div>
  </Router>
);
export default PersonalAccountAppRoutes;
