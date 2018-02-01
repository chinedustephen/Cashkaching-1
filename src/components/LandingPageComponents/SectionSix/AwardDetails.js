import React from "react";
import styled from "styled-components";
import Amount from "./Amount";
import Testimonial from "./Testimonial";
import WinnerDp from "./images/Winner.svg";

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
const Award = styled.div``;

const AwardDetails = props => (
  <Award>
    <Container>
      <FirstContainer>
        <WinnerImg src={WinnerDp} />
      </FirstContainer>
      <SecondContainer>
        <SubText>{props.subWinnerText}</SubText>
        <Amount reward="100 000" />
        <Testimonial comment={props.comment} user={props.name} />
      </SecondContainer>
    </Container>
  </Award>
);

export default AwardDetails;
