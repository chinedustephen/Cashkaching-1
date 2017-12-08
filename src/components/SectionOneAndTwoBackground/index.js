import React, { Component } from "react";
import styled from "styled-components";
import SectionContainer from "../SectionOneAndTwoContainer";
import LandingPageNavigation from "../LandingPageNavigation";
import BackgroundSVG from "./images/BackgroundSVG.svg";

const Background = styled.div`
	height: 1120px;
	background-image: url(${BackgroundSVG});
	}
`;

const SvgCircle = styled.div`
  height: 500px;
  width: 500px;
  position: absolute;
`;

class SectionOneAndTwoBackground extends Component {
  render() {
    return (
      <Background>
        <LandingPageNavigation />
        <SectionContainer />
      </Background>
    );
  }
}

export default SectionOneAndTwoBackground;
