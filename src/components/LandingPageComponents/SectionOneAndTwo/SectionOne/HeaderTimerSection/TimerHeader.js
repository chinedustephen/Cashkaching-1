import React from "react";
import styled from "styled-components";

const Header = styled.h4`
  font-family: Campton-BoldDEMO;
  font-size: 24px;
  color: #212121;
  letter-spacing: 0.43px;
  text-align: center;
`;

const TimerHeader = props => <Header>{props.timerHeader}</Header>;

export default TimerHeader;
