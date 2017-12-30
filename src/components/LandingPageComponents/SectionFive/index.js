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
  grid-template-rows: 50% 50%;
`;

const NumberStat = styled.div`
  align-self: end;
`;

class SectionFive extends Component {
  render() {
    return (
      <Container>
        <SectionThreeContainer>
          <StatsContainer>
            <NumberStat>
              <Stat number="3000" />
            </NumberStat>
            <div>
              <StatText text="REGISTERD USERS" />
            </div>
          </StatsContainer>
          <StatsContainer>
            <NumberStat>
              <Stat number="4000" />
            </NumberStat>
            <div>
              <StatText text="CASHED OUT" />
            </div>
          </StatsContainer>
          <StatsContainer>
            <NumberStat>
              <Stat number="10000" />
            </NumberStat>
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
