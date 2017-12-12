import React from "react";
import styled from "styled-components";

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

const Amount = () => (
  <div>
    <Container>
      <Sign>
        <Naira src={require("./images/Naira.svg")} />
      </Sign>
      <Digit>
        <P>100,000 </P>
      </Digit>
    </Container>
    <Line src={require("./images/Line.svg")} />
  </div>
);

export default Amount;
