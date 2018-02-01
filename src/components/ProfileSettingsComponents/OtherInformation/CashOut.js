import React from "react";
import styled from "styled-components";
import CashImg from "./images/card.svg";
import Button from "../GeneralInformation/SettingsButton";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 60% 1fr;
`;

const Points = styled.p`
  /* + N10 Copy 4: */
  font-family: Campton-Bold;
  font-size: 12px;
  color: #ee452d;
  justify-self: end;
  align-self: center;
`;

const PointContainer = styled.div`
  display: grid;
`;
const CardImg = styled.img`
  align-self: center;
`;
const Title = styled.p`
  /* Cashout account: */
  font-family: Campton-Medium;
  font-size: 16px;
  color: #666666;
`;
const Title2 = styled.p`
  /* Cashout account: */
  font-family: Campton-Medium;
  font-size: 14px;
  color: #666666;
`;
const ImgContainer = styled.div`
  display: grid;
`;
const Conenectcontainer = styled.div`
  display: grid;
  grid-template-columns: 80% 1fr;
`;
const ButtonContainer = styled.div`
  display: grid;
  align-items: center;
`;
const TitleContainer = styled.div`
  display: grid;
  align-items: center;
`;

const Card = () => (
  <div>
    <Container>
      <ImgContainer>
        <CardImg src={CashImg} />
      </ImgContainer>
      <div>
        <Title>Cashout method</Title>
      </div>
      <PointContainer>
        <Points>+10</Points>
      </PointContainer>
    </Container>
    <Conenectcontainer>
      <TitleContainer>
        <Title2>VoguePay</Title2>
      </TitleContainer>
      <ButtonContainer>
        <Button name="CONNECT" />
      </ButtonContainer>
    </Conenectcontainer>
    <hr />
  </div>
);

export default Card;
