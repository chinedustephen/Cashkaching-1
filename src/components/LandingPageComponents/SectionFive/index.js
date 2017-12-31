import React from "react";
import styled from "styled-components";
import SectionFiveBackground from "./images/SectionFiveBackground.svg";
import Stats from "./Stats";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 83% 1fr;
  grid-template-areas: ". sectionthree .";
  height: 316px;
  background-image: url(${SectionFiveBackground});
`;
const SectionThreeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-area: sectionthree;
`;

const SectionFive = () => (
  <Container>
    <SectionThreeContainer>
      <Stats figure="1000" subtext="USERS" />
      <Stats figure="4000" subtext="CASHED OUT" />
      <Stats figure="10000" subtext="WON LOTTERIES" />
    </SectionThreeContainer>
  </Container>
);

export default SectionFive;
