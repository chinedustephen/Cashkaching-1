import React from "react";
import styled from "styled-components";
import TimerHeader from "./TimerHeader";
import TimerHeaderImg from "./TimerImg";
import TimerCountDown from "./TimerText";
import Linktext from "./LinkText";

const TimerLayout = styled.div`
  display: grid;
  justify-items: center;
`;

const TimerHeaderContent = () => (
  <TimerLayout>
    <TimerHeader timerHeader="timer header" />
    <TimerHeaderImg />
    <TimerCountDown time="40:30" />
    <Linktext text="text test" />
  </TimerLayout>
);

export default TimerHeaderContent;
