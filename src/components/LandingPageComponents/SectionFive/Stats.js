import React from "react";
import styled from "styled-components";
import Stat from "./Number";
import StatText from "./Text";

const StatsContainer = styled.div`
  display: grid;
  grid-template-rows: 50% 50%;
`;

const NumberStat = styled.div`
  align-self: end;
`;

const Stats = props => (
  <StatsContainer>
    <NumberStat>
      <Stat number={props.figure} />
    </NumberStat>
    <div>
      <StatText text={props.subtext} />
    </div>
  </StatsContainer>
);

export default Stats;
