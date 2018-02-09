import React from "react";
import styled from "styled-components";
import Amount from "./Amount";
import WinnerSvg from "./images/Winner";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
`;

const SubText = styled.p`
  font-family: Campton-SemiBold;
  font-size: 12px;
  color: #fafafa;
  letter-spacing: -0.67px;
`;

const FirstContainer = styled.div`
  grid-row-start: 1;
  grid-column-start: 1;
  justify-self: center;
`;
const SecondContainer = styled.div`
  grid-row-start: 1;
  z-index: 1;
  grid-column-start: 1;
  padding-left: 147px;
  margin-top: 33px;
`;

const AwardDetails = props => (
  <Container>
    <FirstContainer>
      <WinnerSvg bglabel={props.bglabel} />
    </FirstContainer>
    <SecondContainer>
      <SubText>I HAVE JUST WON</SubText>
      <Amount ammount={props.ammount} />
    </SecondContainer>
  </Container>
);

export default AwardDetails;
