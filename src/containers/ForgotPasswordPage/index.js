import React from "react";
import styled from "styled-components";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TextField from "material-ui/TextField";
import BrandLogo from "../../components/BrandImg";

const AuthenticationContianer = styled.div`
  display: grid;
  grid-template-rows: 80px 200px 100px 300px;
  justify-items: center;
  background-color: #6ca516;
  height: 100vh;
`;

const Header = styled.p`
  font-family: Campton-Bold;
  font-size: 24px;
  color: #ffffff;
`;

const BrandContianer = styled.div`
  align-self: end;
`;

const ButtonContainer = styled.div`
  display: grid;
  justify-items: center;
`;

const CancelContainer = styled.div`
  display: grid;
  justify-self: end;
  align-self: center;
  margin-right: 100px;
`;
const Cancel = styled.div``;
const CancelImg = styled.img``;

const RegisterPage = () => {
  return (
    <MuiThemeProvider>
      <AuthenticationContianer>
        <CancelContainer>
          <Cancel>
            <CancelImg src={require("../../components/Icons/Cancel.svg")} />
          </Cancel>
        </CancelContainer>
        <BrandContianer>
          <BrandLogo />
        </BrandContianer>
        <div>
          <Header>Forgot password</Header>
        </div>
        <ButtonContainer>
          <TextField
            hintText="Email address/ Number"
            hintStyle={{ fontFamily: "Campton-Book" }}
            floatingLabelText="Email address or number"
            floatingLabelStyle={{
              fontFamily: "Campton-Book",
              fontSize: "12px",
              color: "#ffffff"
            }}
            inputStyle={{
              fontFamily: "Campton-Medium",
              color: "#ffffff",
              fontSize: "16px"
            }}
            underlineFocusStyle={{ borderColor: "#ffffff" }}
          />
          <br />
        </ButtonContainer>
      </AuthenticationContianer>
    </MuiThemeProvider>
  );
};

export default RegisterPage;
