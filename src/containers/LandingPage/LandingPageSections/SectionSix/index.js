import React, { Component } from "react";
import styled from "styled-components";
import Header from "./Header";
import Congratulations from "./Congratulations";
import Profile from "./Profile";
import AwardDetails from "./AwardDetails";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 100s% 1fr;
  grid-template-areas: ". sectionthree .";
  background-color: #6ca516;
`;
const SectionThreeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-area: sectionthree;
`;

const HeaderContainer = styled.div`
  grid-column-end: span 3;
  background-color: blue;
`;
const BackgroundTextContainer = styled.div`
  grid-column-end: span 3;
  background-color: red;
`;

const AwardContainer = styled.div`
  display: grid;
  grid-column-end: span 3;
  grid-template-columns: 35% 1fr;
`;

const Award = styled.div``;

const ProfileImageContainer = styled.div``;

class SectionSix extends Component {
  render() {
    return (
      <Container>
        <SectionThreeContainer>
          <HeaderContainer>
            <Header />
          </HeaderContainer>
          <BackgroundTextContainer>
            <Congratulations />
          </BackgroundTextContainer>
          <AwardContainer>
            <ProfileImageContainer>
              <Profile />
            </ProfileImageContainer>
            <Award>
              <AwardDetails />
            </Award>
          </AwardContainer>
        </SectionThreeContainer>
      </Container>
    );
  }
}

export default SectionSix;
