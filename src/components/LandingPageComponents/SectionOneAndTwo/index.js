import React from "react";
import styled from "styled-components";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import LandingPageNavigation from "./LandingPageNavigation";
import BackgroundSVG from "./images/BackgroundSVG.svg";

const Background = styled.div`
  height: 1121px;
  background-image: url(${BackgroundSVG});
`;

const SectionOneAndTwo = () => (
  <Background>
    <LandingPageNavigation />
    <SectionOne />
    <SectionTwo />
  </Background>
);

export default SectionOneAndTwo;
