import React, { Component } from "react";
import styled from "styled-components";
import SectionFiveBackground from "./images/SectionFiveBackground.svg";
import Stat from "./Number";
import StatText from "./Text";

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
const StatsContainer = styled.div`
  display: grid;
`;

class SectionFive extends Component {
  render() {
    return (
      <Container>
        <SectionThreeContainer>
          <StatsContainer>
            <div>
              <Stat number="3000" />
            </div>
            <div>
              <StatText text="REGISTERD USERS" />
            </div>
          </StatsContainer>
          <StatsContainer>
            <div>
              <Stat number="4000" />
            </div>
            <div>
              <StatText text="CASHED OUT" />
            </div>
          </StatsContainer>
          <StatsContainer>
            <div>
              <Stat number="10000" />
            </div>
            <div>
              <StatText text="WON LOTTERIES" />
            </div>
          </StatsContainer>
        </SectionThreeContainer>
      </Container>
    );
  }
}

export default SectionFive;
