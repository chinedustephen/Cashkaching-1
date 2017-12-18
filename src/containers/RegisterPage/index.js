import React, { Component } from "react";
import styled, { css } from "styled-components";
import BrandLogo from "../../components/BrandImg";

const AuthenticationContianer = styled.div`
  display: grid;
  justify-items: center;
  background-color: #6ca516;
  height: 100vh;
`;

const Header = styled.p`
  font-family: Campton-Bold;
  font-size: 24px;
  color: #ffffff;
`;

const ButtonLanding = styled.button`
  display: block;
  border: 0px;
  border-radius: 8px;
  border-bottom: 3px solid #6f6d6f;
  color: #ffffff;
  font-family: Campton-BoldDEMO;
  font-size: 12px;
  letter-spacing: 1.37px;
  width: 237px;
  height: 45px;
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

class RegisterPage extends Component {
  render() {
    return (
      <AuthenticationContianer>
        <div>
          <BrandLogo />
        </div>
        <div>
          <Header>Register</Header>
        </div>
        <div>
          <ButtonLanding primary>MAIL</ButtonLanding>
          <ButtonLanding google>GOOGLE</ButtonLanding>
          <ButtonLanding facebook>FACEBOOK</ButtonLanding>
        </div>
      </AuthenticationContianer>
    );
  }
}

export default RegisterPage;
