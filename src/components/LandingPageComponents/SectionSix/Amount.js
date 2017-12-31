import React from "react";
import styled from "styled-components";
import NairaImg from "./images/Naira.svg";
import LineImg from "./images/Line.svg";

const P = styled.p`
  font-family: Campton-Bold;
  font-size: 116px;
  color: #000000;
  letter-spacing: -2.9px;
  margin: 0;
`;
const Container = styled.div`
  display: grid;
  grid-template-columns: 20% 1fr;
`;
const Sign = styled.div`
  align-self: center;
`;
const Digit = styled.div``;
const Naira = styled.img``;
const Line = styled.img``;

const Amount = props => (
  <div>
    <Container>
      <Sign>
        <Naira src={NairaImg} />
      </Sign>
      <Digit>
        <P>{props.reward}</P>
      </Digit>
    </Container>
    <Line src={LineImg} />
  </div>
);

export default Amount;
