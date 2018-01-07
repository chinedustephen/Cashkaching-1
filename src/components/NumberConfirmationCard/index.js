import React, { Component } from "react";
import styled from "styled-components";

const Cardcontainer = styled.div`
  display: grid;
  background: #6ca516;
  border-radius: 4px;
  border-bottom: 8px solid #5e8a1c;
  box-shadow: 0 9px 16px 0 rgba(5, 2, 7, 0.35);
`;
const Cardlayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: minmax(300px, auto);
  grid-row-gap: 1em;
  margin-top: 28px;
`;

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
const NumberImg = styled.img`
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

const NumberConfirmationCard = () => (
  <Cardlayout>
    <Cardcontainer>
      <CardContent>
        <TextInfoContainer>
          <BonusTextInfo>
            Well played N20 bonus points for playing. Fingers crossed.
          </BonusTextInfo>
        </TextInfoContainer>
        <Sentcontianer>
          <NumbersSent>
            These are your numbers we will send you an email for your own
            records
          </NumbersSent>
        </Sentcontianer>
        <Numbers>
          <div>
            <NumberBubble>
              <NumberImg src={require("./images/NumberImg.svg")} />
              <LottoNumber>
                <NumberText>1</NumberText>
              </LottoNumber>
            </NumberBubble>
          </div>
          <div>
            <NumberBubble>
              <NumberImg src={require("./images/NumberImg.svg")} />
              <LottoNumber>
                <NumberText>34</NumberText>
              </LottoNumber>
            </NumberBubble>
          </div>
          <div>
            <NumberBubble>
              <NumberImg src={require("./images/NumberImg.svg")} />
              <LottoNumber>
                <NumberText>2</NumberText>
              </LottoNumber>
            </NumberBubble>
          </div>
          <div>
            <NumberBubble>
              <NumberImg src={require("./images/NumberImg.svg")} />
              <LottoNumber>
                <NumberText>1</NumberText>
              </LottoNumber>
            </NumberBubble>
          </div>
          <div>
            <NumberBubble>
              <NumberImg src={require("./images/NumberImg.svg")} />
              <LottoNumber>
                <NumberText>33</NumberText>
              </LottoNumber>
            </NumberBubble>
          </div>
          <div>
            <NumberBubble>
              <NumberImg src={require("./images/NumberImg.svg")} />
              <LottoNumber>
                <NumberText>1</NumberText>
              </LottoNumber>
            </NumberBubble>
          </div>
        </Numbers>
        <ButtonContianer>
          <GotIt>Play</GotIt>
        </ButtonContianer>
      </CardContent>
    </Cardcontainer>
  </Cardlayout>
);

export default NumberConfirmationCard;
