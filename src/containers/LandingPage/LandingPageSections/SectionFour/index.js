import React, { Component } from "react";
import styled from "styled-components";
import Paragraph from "./P";
import SectionFourHeader from "./Header";

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
const ImgContainer = styled.div``;
const Img = styled.img``;

class SectionFour extends Component {
  render() {
    return (
      <Container>
        <SectionThreeContainer>
          <ContentContainer>
            <HeaderContainer>
              <SectionFourHeader />
            </HeaderContainer>
            <HeaderContainer>
              <Paragraph />
            </HeaderContainer>
          </ContentContainer>
          <ImgContainer>
            <Img src={require("./images/RewardBox.svg")} />
          </ImgContainer>
        </SectionThreeContainer>
      </Container>
    );
  }
}

export default SectionFour;
