import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import decode from "jwt-decode";
import LandingPage from "../LandingPage";
import PersonalAccount from "../PersonalAccount";
import RegisterPage from "../RegisterPage";
import LoginPage from "../LoginPage";
import ForgotPasswordPage from "../ForgotPasswordPage";
import EmailLoginPage from "../EmailLogin";
import EmailRegisterPage from "../EmailRegister";

const checkAuth = () => {
  const token = localStorage.getItem("token");
  //const refreshToken = localStorage.getItem("refreshToken");
  console.log(token);
  if (!token) {
    try {
      const { exp } = decode(token);
      console.log(exp);
      console.log(new Date().getTime() / 1000);
      if (exp < new Date().getTime() / 1000) {
        return false;
      }
    } catch (e) {
      return false;
    }
    return false;
  }

  return true;
};

const AuthRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      checkAuth() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login"
          }}
        />
      )
    }
  />
);

const PersonalAccountAppRoutes = ({ children }) => (
  <Router>
    <div>
      <Route exact path="/" component={LandingPage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/emaillogin" component={EmailLoginPage} />
      <Route path="/emailregister" component={EmailRegisterPage} />
      <Route path="/forgotpassword" component={ForgotPasswordPage} />
      <AuthRoute path="/personalaccount" component={PersonalAccount} />
      {children}
    </div>
  </Router>
);
export default PersonalAccountAppRoutes;
