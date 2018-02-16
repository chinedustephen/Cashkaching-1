import React, { Component } from "react";
import styled, { css } from "styled-components";
import FacebookLogin from "react-facebook-login";
import { Redirect } from "react-router-dom";
import { facebookregister } from "../../utils/Apis/LandingApis";

const ButtonLanding = styled.button`
  display: block;
  border: 0px;
  border-radius: 8px;
  border-bottom: 3px solid #6f6d6f;
  width: 237px;
  height: 45px;
  margin-bottom: 28px;
  ${props =>
    props.primary &&
    css`
      background: #4a4a4a;
      border-bottom: 3px solid #6f6d6f;
    `};
  ${props =>
    props.google &&
    css`
      background: #dc4e41;
      border-bottom: 3px solid #c44500;
    `};
  ${props =>
    props.facebook &&
    css`
      background: #3b5998;
      border-bottom: 3px solid #224899;
    `};
`;
const Icon = styled.img`
  float: left;
  margin-left: 11px;
`;
const MailText = styled.p`
  display: inline-block;
  margin: 0px;
  padding-top: 1px;
  color: #ffffff;
  font-family: Campton-Bold;
  font-size: 12px;
  letter-spacing: 1.37px;
  margin-right: 32px;
`;

class FacebookLoginButton extends Component {
  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);

    // set the initial component state
    this.state = {
      errors: {},
      redirect: false
    };
    this.register = this.register.bind(this);
  }

  register(res, type) {
    // create an AJAX request
    let postData;
    if (type === "facebook-login" && res.email) {
      postData = {
        name: res.name,
        provider: type,
        email: res.email,
        provider_id: res.id,
        token: res.accessToken,
        provider_pic: res.picture.data.url
      };
    }

    if (postData) {
      facebookregister(type, postData).then(resp => {
        // pass in error response
        console.log(resp);
        console.log(resp);
        if (resp.data.error) {
          this.setState({
            errors: resp.data.error
          });
        }

        if (resp.data.success) {
          this.setState({
            redirect: true
          });
        }
      });
    }
  }

  /**
   * Render the component.
   */

  render() {
    if (this.state.redirect || localStorage.getItem("token")) {
      return <Redirect to={"/personalaccount"} />;
    }

    const responseFacebook = response => {
      console.log("facebook console");
      console.log(response);
      this.register(response, "facebook-login");
    };

    return (
      <div>
        <ButtonLanding facebook>
          <Icon src={require("../../components/Icons/Facebook.svg")} />
          <MailText>FACEBOOK</MailText>
        </ButtonLanding>
        {/*   <FacebookLogin
          appId="208453373032314"
          autoLoad={false}
          fields="name,email,picture"
          callback={responseFacebook}
        />*/}
      </div>
    );
  }
}

export default FacebookLoginButton;
