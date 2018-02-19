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
  timerHeader: "Dont miss the next draw register now",
  time: "Sat, 28 Feb 2018",
  login: "Login",
  text: " if you have already registered"
};

const HeaderTimerSection = () => (
  <TimerLayout>
    <TimerHeader timerHeader={TimerContent.timerHeader} />
    <TimerHeaderImg />
    <TimerCountDown time={TimerContent.time} />
    <Linktext text={TimerContent.text} login={TimerContent.login} />
  </TimerLayout>
);

export default HeaderTimerSection;
