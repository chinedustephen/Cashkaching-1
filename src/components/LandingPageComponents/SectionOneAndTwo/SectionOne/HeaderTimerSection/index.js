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

// Timer section conetent object
const TimerContent = {
  timerHeader: "header test",
  time: "40:30",
  text: "test"
};

const HeaderTimerSection = () => (
  <TimerLayout>
    <TimerHeader timerHeader={TimerContent.timerHeader} />
    <TimerHeaderImg />
    <TimerCountDown time={TimerContent.time} />
    <Linktext text={TimerContent.text} />
  </TimerLayout>
);

export default HeaderTimerSection;
