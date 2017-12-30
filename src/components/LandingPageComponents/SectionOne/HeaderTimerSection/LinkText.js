import React from "react";
import styled from "styled-components";

const TimerText = styled.p`
  font-family: Roboto-Medium;
  font-size: 16px;
  color: #575555;
  line-height: 24px;

  text-align: center;
  grid-row-start: 3;
  grid-row-end: span 1;
`;

const Linktext = props => <TimerText>{props.text}</TimerText>;

export default Linktext;
