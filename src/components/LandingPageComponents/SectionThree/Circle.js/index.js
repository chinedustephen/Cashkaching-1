import React from "react";
import styled from "styled-components";
import Circles from "../images/Circles.svg";

const Icon = styled.img`
  margin-top: 71px;
  margin-left: 116px;
`;
const CircleContainer = styled.div`
  background-image: url(${Circles});
  background-repeat: no-repeat;
  height: 233px;
  width: 252px;
`;

const LottoText = styled.p`
  font-family: Campton-Medium;
  font-size: 14px;
  color: #ffffff;
  letter-spacing: 0.78px;
  line-height: 15px;
  width: 179px;
  text-align: center;
  margin-left: 57px;
  margin-top: 31px;
`;

const Circle = props => (
  <CircleContainer>
    <Icon src={props.icon} />
    <LottoText>{props.text}</LottoText>
  </CircleContainer>
);

export default Circle;
