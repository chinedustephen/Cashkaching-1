import React from "react";
import styled from "styled-components";
import Amount from "./Amount";
import Testimonial from "./Testimonial";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
`;

const WinnerImg = styled.img``;
const SubText = styled.p`
  font-family: Campton-Medium;
  font-size: 16px;
  color: #212121;
  letter-spacing: 0;
  line-height: 30px;
`;

const FirstContainer = styled.div`
  grid-row-start: 1;
  grid-column-start: 1;
`;
const SecondContainer = styled.div`
  grid-row-start: 1;
  z-index: 1;
  grid-column-start: 1;
  padding-left: 147px;
`;

const AwardDetails = () => (
  <Container>
    <FirstContainer>
      <WinnerImg src={require("./images/Winner.svg")} />
    </FirstContainer>
    <SecondContainer>
      <SubText>I HAVE JUST WON</SubText>
      <Amount />
      <Testimonial />
    </SecondContainer>
  </Container>
);

export default AwardDetails;
