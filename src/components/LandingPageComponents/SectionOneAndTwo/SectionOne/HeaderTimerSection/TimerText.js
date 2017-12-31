import React from "react";
import styled from "styled-components";

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

const TimerCountDown = props => <TimerClock>{props.time}</TimerClock>;

export default TimerCountDown;
