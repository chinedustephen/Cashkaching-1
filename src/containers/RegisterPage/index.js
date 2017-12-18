import React, { Component } from "react";
import styled from "styled-components";
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
        <div> buttons</div>
      </AuthenticationContianer>
    );
  }
}

export default RegisterPage;
