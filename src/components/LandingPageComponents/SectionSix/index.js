import React from "react";
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

const AwardContainer = styled.div`
  display: grid;
  grid-column-end: span 3;
  grid-template-columns: 35% 1fr;
  margin-bottom: 117px;
`;

const SectionSix = () => (
  <Container>
    <SectionThreeContainer>
      <Header sectionheader="This months winner" />
      <Congratulations />
      <AwardContainer>
        <Profile />
        <AwardDetails />
      </AwardContainer>
    </SectionThreeContainer>
  </Container>
);

export default SectionSix;
