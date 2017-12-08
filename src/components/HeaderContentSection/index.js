import React, { Component } from "react";
import styled from "styled-components";
import ButtonMain from "../ButtonMain";

const HeaderTextContainer = styled.div``;

const MainHeaderText = styled.h1`
  /* The first free lotto: */
  font-family: Campton-BoldDEMO;
  font-size: 44px;
  color: #f3f3f3;
  letter-spacing: 0.8px;
  line-height: 48px;
  margin-right: 77px;
  margin-top: 88px;
`;
const SubHeaderText = styled.p`
  font-family: Roboto-Medium;
  font-size: 16px;
  color: #f3f3f3;
  letter-spacing: 0;
  line-height: 24px;
  margin-right: 77px;
  margin-bottom: 50px;
`;

const ButtonLanding = styled(ButtonMain)``;

class HeaderContent extends Component {
  render() {
    return (
      <div>
        <HeaderTextContainer>
          <MainHeaderText>
            The first free Lotto in Africa Its free
          </MainHeaderText>
          <SubHeaderText>
            Just enter your phone number and email address to enter today's
            draw. IT'S FREE Register now!
          </SubHeaderText>
          <ButtonLanding />
        </HeaderTextContainer>
      </div>
    );
  }
}

export default HeaderContent;
