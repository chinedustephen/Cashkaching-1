import React from "react";
import styled from "styled-components";
import TimerHeader from "./TimerHeader";
import TimerHeaderImg from "./TimerImg";
import TimerCountDown from "./TimerText";
import Linktext from "./LinkText";

const Timer = styled.div`
  display: grid;
  justify-items: center;
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

const TimerHeaderContent = () => (
  <Timer>
    <TimerHeader timerHeader="timer header" />
    <TimerHeaderImg />
    <TimerCountDown time="40:30" />
    <Linktext text="text test" />
  </Timer>
);

export default TimerHeaderContent;
