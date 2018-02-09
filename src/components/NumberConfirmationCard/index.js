import React from "react";
import styled from "styled-components";
import NumberSvg from "./images/Number";
import LottoNumbers from "../NumberList";

const CardContent = styled.div`
  display: grid;
  margin-left: 24px;
  margin-right: 24px;
  margin-bottom: 24px;
`;

const BonusTextInfo = styled.p`
  font-family: Campton-ExtraLight;
  font-size: 16px;
  color: #ffffff;
  letter-spacing: 0;
  line-height: 21px;
  margin: 0px;
`;

const TextInfoContainer = styled.div`
  margin-top: 31px;
  margin-bottom: 16px;
  width: 378px;
`;

const NumbersSent = styled.p`
  font-family: Campton-Bold;
  font-size: 20px;
  color: #ffffff;
  letter-spacing: 0;
  line-height: 25px;
  width: 478px;
`;

const GotIt = styled.button`
  background: #ffffff;
  border-radius: 4px;
  height: 30px;
  /* PLAY: */
  font-family: Campton-Bold;
  font-size: 12px;
  color: #333333;
  letter-spacing: 0.87px;
  border: none;
  border-bottom: 2px solid #eee6e6;
  width: 120px;
  height: 41px;
`;

const ButtonContianer = styled.div`
  justify-self: end;
  margin-right: 23px;
`;
const Sentcontianer = styled.div`
  margin-bottom: 24px;
`;

const NumberConfirmationCard = props => (
  <CardContent>
    <TextInfoContainer>
      <BonusTextInfo>
        Well played N20 bonus points for playing. Fingers crossed.
      </BonusTextInfo>
    </TextInfoContainer>
    <Sentcontianer>
      <NumbersSent>
        These are your numbers we will send you an email for your own records
      </NumbersSent>
    </Sentcontianer>
    <LottoNumbers bglabel={props.bglabel} secbk={props.secbk} />
    <ButtonContianer>
      <GotIt onClick={props.onClick}>Got it</GotIt>
    </ButtonContianer>
  </CardContent>
);

export default NumberConfirmationCard;
