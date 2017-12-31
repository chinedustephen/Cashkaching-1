import React from "react";
import styled from "styled-components";
import TimerImg from "./images/timeer.svg";

const Timer = styled.img`
  width: 288px;
  height: 288px;
  grid-row-start: 2;
  grid-row-end: span 1;
  grid-column-start: 1;
`;

const TimerHeaderImg = () => <Timer src={TimerImg} />;

export default TimerHeaderImg;
