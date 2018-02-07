import React from "react";
import styled from "styled-components";
import NumberInput from "./NumberInput";

const CardContent = styled.div`
  display: grid;
  display: grid;
  grid-template-rows: 7% 1fr;
  margin-left: 24px;
  margin-right: 24px;
  margin-bottom: 24px;
`;

const CardLabel = styled.div``;

const LabelText = styled.div`
  background: #5e8a1c;
  display: inline-block;
  font-family: Campton-BoldDEMO;
  font-size: 11px;
  color: #ffffff;
  -webkit-letter-spacing: 0.8px;
  -moz-letter-spacing: 0.8px;
  -ms-letter-spacing: 0.8px;
  letter-spacing: 0.8px;
  height: 15px;
  padding-top: 6px;
  padding-left: 20px;
  padding-right: 20px;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
  margin-left: 40px;
`;

const ConentContainer = styled.div`
  display: grid;
  grid-template-columns: 75% 25%;
`;

const Play = styled.button`
  background: #f25500;
  border-radius: 4px;
  height: 30px;
  /* PLAY: */
  font-family: Campton-Bold;
  font-size: 12px;
  color: #ffffff;
  letter-spacing: 0.87px;
  border: none;
  border-bottom: 2px solid #c44500;
  width: 120px;
  height: 40px;
`;

const ButtonContainerPlay = styled.div`
  align-self: end;
  justify-self: end;
`;

const PlayLottoNumbers = ({ onClick }) => (
  <CardContent>
    <CardLabel>
      <LabelText>DAILY DRAW</LabelText>
    </CardLabel>
    <ConentContainer>
      <NumberInput />
      <ButtonContainerPlay>
        <Play onClick={onClick}>Play</Play>
      </ButtonContainerPlay>
    </ConentContainer>
  </CardContent>
);

export default PlayLottoNumbers;
