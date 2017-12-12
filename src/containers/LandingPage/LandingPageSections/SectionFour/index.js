import React, { Component } from "react";
import styled from "styled-components";
import Paragraph from "./P";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 83% 1fr;
  grid-template-areas: ". sectionthree .";
  background-color: #6ca516;
`;
const SectionThreeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-area: sectionthree;
  
	}
`;

const ContentContainer = styled.div`
  display: grid;
`;

const HeaderContainer = styled.div``;
const SectionFourHeader = styled.p`
  font-family: Campton-Bold;
  font-size: 32px;
  color: #ffffff;
  line-height: 42px;
`;

class SectionFour extends Component {
  render() {
    return (
      <Container>
        <SectionThreeContainer>
          <ContentContainer>
            <HeaderContainer>
              <SectionFourHeader>NOT CONVINCED ?</SectionFourHeader>
            </HeaderContainer>
            <HeaderContainer>
              <Paragraph />
            </HeaderContainer>
          </ContentContainer>
          <div>img</div>
        </SectionThreeContainer>
      </Container>
    );
  }
}

export default SectionFour;
