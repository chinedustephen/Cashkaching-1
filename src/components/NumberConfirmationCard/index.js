import React from "react";
import styled from "styled-components";
import NumberSvg from "./images/Number";

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
const Numbers = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  margin-bottom: 25px;
`;
const NumberBubble = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  width: 90px;
  height: 88px;
`;
const LottoNumber = styled.div`
  grid-row-start: 1;
  grid-row-end: 2;
  z-index: 2;
  justify-self: center;
  align-self: center;
  grid-column-start: 1;
  margin-left: 10px;
  margin-top: 9px;
`;

const NumberText = styled.p`
  font-family: Campton-Bold;
  font-size: 40px;
  color: #fafafa;
  letter-spacing: 1.43px;
  margin: 0px;
  padding: 0px;
`;
const NumberImg = styled(NumberSvg)``;

const B = styled.div`
  grid-row-start: 1;
  grid-row-end: 2;
  grid-column-start: 1;
  z-index: 2;
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

const PlayedNumbers = [1, 1, 23, 23, 22, 22];

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
    <Numbers>
      {PlayedNumbers.map(number => (
        <div>
          <NumberBubble>
            <B>
              <NumberImg bglabel={props.bglabel} secbk={props.secbk} />
            </B>
            <LottoNumber>
              <NumberText>{number}</NumberText>
            </LottoNumber>
          </NumberBubble>
        </div>
      ))}
    </Numbers>
    <ButtonContianer>
      <GotIt onClick={props.onClick}>Got it</GotIt>
    </ButtonContianer>
  </CardContent>
);

export default NumberConfirmationCard;
