import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import SectionFiveBackground from "./images/SectionFiveBackground.svg";
import ButtonMain from "./ButtonMain";
import SectionHeaderText from "./Header";
import Paragraph from "./SubText";

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

const SectionEight = () => (
  <Container>
    <SectionThreeContainer>
      <SectionHeaderText />
      <Paragraph />
      <ButtonMain />
    </SectionThreeContainer>
  </Container>
);

export default SectionEight;
