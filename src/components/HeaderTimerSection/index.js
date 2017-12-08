import React, { Component } from "react";
import styled from "styled-components";

const Timer = styled.div`
  display: grid;
  justify-items: center;
`;
const TimerHeader = styled.h4`
  font-family: Campton-BoldDEMO;
  font-size: 24px;
  color: #212121;
  letter-spacing: 0.43px;
  text-align: center;
`;

const TimerHeaderImg = styled.img`
  width: 288px;
  height: 288px;
  grid-row-start: 2;
  grid-row-end: span 1;
  grid-column-start: 1;
`;
const TimerText = styled.p`
  font-family: Roboto-Medium;
  font-size: 16px;
  color: #575555;
  line-height: 24px;

  text-align: center;
  grid-row-start: 3;
  grid-row-end: span 1;
`;
const TimerClock = styled.h3`
  font-family: Campton-BoldDEMO;
  font-size: 64px;
  color: #000000;
  letter-spacing: -1.31px;
  line-height: 48px;
  margin-top: 91px;
  text-align: center;
  grid-row-start: 2;
  grid-row-end: span 1;
  grid-column-start: 1;
  z-index: 1;
`;

class TimerHeaderContent extends Component {
  render() {
    return (
      <div>
        <Timer>
          <TimerHeader>Dont miss the next draw register now</TimerHeader>
          <TimerHeaderImg src={require("./images/timeer.svg")} />
          <TimerClock>4:30:5</TimerClock>
          <TimerText>Sign in if you have already registered.</TimerText>
        </Timer>
      </div>
    );
  }
}

export default TimerHeaderContent;
