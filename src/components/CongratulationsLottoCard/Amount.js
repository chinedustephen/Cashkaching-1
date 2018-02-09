import React from "react";
import styled from "styled-components";

const P = styled.p`
  /* N 500, 000: */
  font-family: Campton-Bold;
  font-size: 48px;
  color: #fafafa;
  letter-spacing: -1.2px;
  line-height: 42px;
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
const Naira = styled.img`
  width: 48px;
`;
const Line = styled.img``;

const Amount = props => (
  <div>
    <Container>
      <Sign>
        <Naira src={require("./images/Naira.svg")} />
      </Sign>
      <Digit>
        <P>{props.ammount} </P>
      </Digit>
    </Container>
    <Line src={require("./images/Line.svg")} />
  </div>
);

export default Amount;
