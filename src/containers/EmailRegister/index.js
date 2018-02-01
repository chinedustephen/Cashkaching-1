import React from "react";
import styled from "styled-components";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TextField from "material-ui/TextField";
import BrandLogo from "../../components/BrandImg";
import Button from "../../components/Buttons/Button";
import Logo from "../../components/Icons/Cancel.svg";

const AuthenticationContianer = styled.div`
  display: grid;

  justify-items: center;
  background-color: #6ca516;
  min-height: 768px;
  max-height: auto;
`;

const Header = styled.p`
  font-family: Campton-Bold;
  font-size: 24px;
  color: #ffffff;
`;

const BrandContianer = styled.div`
  align-self: end;
`;

const CancelContainer = styled.div`
  display: grid;
  justify-self: left;
  align-self: center;
  margin-left: 100px;
`;
const Cancel = styled.div``;
const CancelImg = styled.img``;
const FormControl = styled.div`
  display: grid;
  justify-items: center;
`;

const SubFormText = styled.p`
  font-family: Campton-Book;
  font-size: 13px;
  color: #ffffff;
  letter-spacing: 0;
  text-align: center;
`;

const EmailRegisterPage = () => (
  <MuiThemeProvider>
    <AuthenticationContianer>
      <CancelContainer>
        <Cancel>
          <CancelImg src={Logo} />
        </Cancel>
      </CancelContainer>
      <BrandContianer>
        <BrandLogo />
      </BrandContianer>
      <div>
        <Header>Register</Header>
      </div>
      <FormControl>
        <TextField
          hintText="Confirm your password"
          hintStyle={{ fontFamily: "Campton-Book" }}
          floatingLabelText="Confirm password"
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
      </FormControl>
      <div>
        <Button name="REGISTER" />
      </div>
      <div>
        <SubFormText>
          Aready registered? <span>login here</span>
        </SubFormText>
      </div>
    </AuthenticationContianer>
  </MuiThemeProvider>
);
export default EmailRegisterPage;
