import React from "react";
import styled, { css } from "styled-components";
import BrandLogo from "../../components/BrandImg";
import MailSvg from "../../components/Icons/Mail.svg";
import GoogleSvg from "../../components/Icons/Google.svg";
import FacebookSvg from "../../components/Icons/Facebook.svg";
import CancelSvg from "../../components/Icons/Cancel.svg";

const AuthenticationContianer = styled.div`
  display: grid;
  grid-template-rows: 80px 200px 100px 300px;
  justify-items: center;
  background-color: #6ca516;
  height: 800px;
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
const BrandContianer = styled.div`
  align-self: end;
`;
const Terms = styled.p`
  font-family: Campton-Book;
  font-size: 9px;
  color: #ffffff;
  letter-spacing: 0;
  line-height: 24px;
  text-align: center;
`;

const SubFormText = styled.p`
  font-family: Campton-Book;
  font-size: 13px;
  color: #ffffff;
  letter-spacing: 0;
  text-align: center;
`;
const ButtonContainer = styled.div`
  display: grid;
  justify-items: center;
`;

const CancelContainer = styled.div`
  display: grid;
  align-self: center;
  justify-self: left;
  margin-left: 100px;
`;
const Cancel = styled.div``;
const CancelImg = styled.img``;

const RegisterPage = () => (
  <AuthenticationContianer>
    <CancelContainer>
      <Cancel>
        <a href="/">
          <CancelImg src={CancelSvg} />
        </a>
      </Cancel>
    </CancelContainer>
    <BrandContianer>
      <BrandLogo />
    </BrandContianer>
    <div>
      <Header>LogIn</Header>
    </div>
    <ButtonContainer>
      <a href="/emaillogin">
        <ButtonLanding primary>
          <Icon src={MailSvg} />
          <MailText>MAIL</MailText>
        </ButtonLanding>
      </a>
      <ButtonLanding google>
        <Icon src={GoogleSvg} />
        <MailText>GOOGLE</MailText>
      </ButtonLanding>
      <ButtonLanding facebook>
        <Icon src={FacebookSvg} />
        <MailText>FACEBOOK</MailText>
      </ButtonLanding>
      <div>
        <SubFormText>
          Not registered yet <a href="/register">register here</a>
        </SubFormText>
        <Terms>
          By contining, you accept the terms of use and Privacy Policy
        </Terms>
      </div>
    </ButtonContainer>
  </AuthenticationContianer>
);

export default RegisterPage;
