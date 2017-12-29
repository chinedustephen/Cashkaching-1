import React from "react";
import styled from "styled-components";
import SectionOne from "../SectionOne";
import SectionTwo from "../SectionTwo";
import LandingPageNavigation from "../../../../components/LandingPageNavigation";
import BackgroundSVG from "./images/BackgroundSVG.svg";

const Background = styled.div`
  height: 1121px;
  background-image: url(${BackgroundSVG});
`;

const SectionOneAndTwoBackground = () => (
  <Background>
    <LandingPageNavigation />
    <SectionOne />
    <SectionTwo />
  </Background>
);

export default SectionOneAndTwoBackground;
