import React, { Component } from "react";
import styled from "styled-components";
import SectionFiveBackground from "./images/SectionFiveBackground.svg";
import ButtonMain from "../../../../components/ButtonMain";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 83% 1fr;
  grid-template-areas: ". sectionthree .";
  height: 316px;
  background-image: url(${SectionFiveBackground});
`;
const SectionThreeContainer = styled.div`
  display: grid;
  grid-area: sectionthree;
  justify-items: center;
`;
const Header = styled.p`
  font-family: Campton-BoldDEMO;
  font-size: 44px;
  color: #212121;
  letter-spacing: -1.6px;
  line-height: 48px;
  text-align: center;
  margin-bottom: 0px;
`;

const SubText = styled.p`
  /* NaijaFreelotto a way: */
  font-family: Campton-Medium;
  font-size: 16px;
  color: #212121;
  letter-spacing: 0;
  line-height: 24px;
  text-align: center;
  width: 555px;
  margin-top: 0px;
`;

const Button = styled.div``;

class SectionEight extends Component {
  render() {
    return (
      <Container>
        <SectionThreeContainer>
          <Header>Get registerd its easy</Header>
          <SubText>
            NaijaFreelotto a way to play the lottery differently register and
            don’t miss the chance to win.
          </SubText>
          <Button>
            <ButtonMain />
          </Button>
        </SectionThreeContainer>
      </Container>
    );
  }
}

export default SectionEight;
