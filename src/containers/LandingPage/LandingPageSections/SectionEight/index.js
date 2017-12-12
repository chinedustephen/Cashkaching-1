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
`;
const Header = styled.p`
  font-family: Campton-BoldDEMO;
  font-size: 44px;
  color: #212121;
  letter-spacing: -1.6px;
  line-height: 48px;
`;

const SubText = styled.p`
  /* NaijaFreelotto a way: */
  font-family: Campton-Medium;
  font-size: 16px;
  color: #212121;
  letter-spacing: 0;
  line-height: 24px;
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
