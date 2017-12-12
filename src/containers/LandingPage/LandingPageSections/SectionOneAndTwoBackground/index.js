import React, { Component } from "react";
import styled from "styled-components";
import SectionContainer from "../SectionOne";
import SectionTwo from "../SectionTwo";
import LandingPageNavigation from "../../../../components/LandingPageNavigation";
import BackgroundSVG from "./images/BackgroundSVG.svg";

const Background = styled.div`
	height: 1120px;
	background-image: url(${BackgroundSVG});
	}
`;

class SectionOneAndTwoBackground extends Component {
  render() {
    return (
      <Background>
        <LandingPageNavigation />
        <SectionContainer />
        <SectionTwo />
      </Background>
    );
  }
}

export default SectionOneAndTwoBackground;