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
  grid-template-rows: 80px 80px 40px;
`;

const CancelContainer = styled.div`
  display: grid;
  justify-self: end;
  align-self: center;
  margin-right: 100px;
`;
const Cancel = styled.div``;
const CancelImg = styled.img``;
const SubFormText = styled.p`
  font-family: Campton-Book;
  font-size: 13px;
  color: #ffffff;
  letter-spacing: 0;
  text-align: center;
`;

const EmailLoginPage = () => {
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
          <Header>Email Login</Header>
        </div>
        <ButtonContainer>
          <TextField
            hintText="Type your Email"
            hintStyle={{ fontFamily: "Campton-Book" }}
            floatingLabelText="Email address"
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

          <TextField
            hintText="Type your password"
            hintStyle={{ fontFamily: "Campton-Book" }}
            floatingLabelText="Password"
            type="password"
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

          <div>
            <SubFormText>
              Not registered yet? <span>register here</span>
            </SubFormText>
          </div>
        </ButtonContainer>
      </AuthenticationContianer>
    </MuiThemeProvider>
  );
};

export default EmailLoginPage;
