import React from "react";
import styled from "styled-components";
import LockSvg from "./images/Lock";

const Smallcardcontainers = styled.div.attrs({
  // we can define static props

  // or we can define dynamic ones
  background: props => props.bk
})`
  border-radius: 4px;

  /* here we use the dynamically computed props */
  background: ${props => props.background};
`;

const PlaysCounter = styled.p`
  opacity: 0.87;
  font-family: Roboto-Medium;
  font-size: 41px;
  color: #ffffff;
  letter-spacing: 0.73px;
  margin-top: 21px;
  margin-bottom: 24px;
  margin-left: 20px;
  display: inline-block;
`;

const PlaysDescription = styled.p`
  /* Plays to unlocking w: */
  opacity: 0.87;
  font-family: Roboto-Bold;
  font-size: 12px;
  color: #ffffff;
  letter-spacing: 0.21px;
  display: inline-block;
  grid-column-start: 2;
  grid-column-end: 4;
  margin-top: 26px;
`;

const PlaysAmount = styled.p`
  opacity: 0.87;
  font-family: Roboto-Medium;
  font-size: 15px;
  color: #ffffff;
  -webkit-letter-spacing: 0.27px;
  -moz-letter-spacing: 0.27px;
  -ms-letter-spacing: 0.27px;
  letter-spacing: 0.27px;
  grid-column-start: 2;
  grid-column-end: 4;
  margin-top: 24px;
`;
const PlaysContainer = styled.div`
  display: grid;
  grid-template-columns: 28% 1fr 1fr 15%;
  grid-template-rows: 21px 30px 30px 20px;
`;

const LockContainer = styled.div`
  margin-top: 10px;
`;

const UnlockDrawsCard = props => (
  <Smallcardcontainers bk={props.bk}>
    <PlaysContainer>
      <PlaysCounter>
        {props.played}/{props.plays}
      </PlaysCounter>
      <PlaysDescription>{props.description}</PlaysDescription>
      <PlaysAmount>Amount:{props.amount}</PlaysAmount>
      <LockContainer>
        <LockSvg iconBk={props.iconBk} />
      </LockContainer>
    </PlaysContainer>
  </Smallcardcontainers>
);

export default UnlockDrawsCard;
