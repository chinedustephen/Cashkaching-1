import React from "react";
import styled from "styled-components";
import PasswordImg from "./images/password.svg";
import Button from "../GeneralInformation/SettingsButton";
import Form from "../GeneralInformation/Form";
import Arrow from "./images/arrow.svg";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 60% 1fr;
  margin-top: 28px;
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

const ImgContainer = styled.div`
  display: grid;
  justify-self: center;
`;
const Conenectcontainer = styled.div`
  display: grid;
`;
const ButtonContainer = styled.div`
  display: grid;
  justify-items: end;
  margin-top: 40px;
`;
const ArrrowImg = styled.img``;
const ArrowContainer = styled.div`
  display: grid;
  align-items: center;
  justify-items: end;
`;

const Password = () => (
  <div>
    <Container>
      <div>
        <Title>Password</Title>
      </div>
      <ImgContainer>
        <CardImg src={PasswordImg} />
      </ImgContainer>

      <PointContainer>
        <ArrowContainer>
          <ArrrowImg src={Arrow} />
        </ArrowContainer>
      </PointContainer>
    </Container>
    <Conenectcontainer>
      <Form />
      <Form />
      <ButtonContainer>
        <Button name="UPDATE" />
      </ButtonContainer>
    </Conenectcontainer>
  </div>
);

export default Password;
