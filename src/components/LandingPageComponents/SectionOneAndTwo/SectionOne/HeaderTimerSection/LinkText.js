import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const TimerText = styled.p`
  font-family: Roboto-Medium;
  font-size: 16px;
  color: #575555;
  line-height: 24px;

  text-align: center;
  grid-row-start: 3;
  grid-row-end: span 1;
`;

const LogInLink = styled(NavLink)`
  color: #9d241e;
`;

const Linktext = props => (
  <TimerText>
    <LogInLink to="/login" exact>
      {props.login}
    </LogInLink>
    {props.text}
  </TimerText>
);

export default Linktext;
