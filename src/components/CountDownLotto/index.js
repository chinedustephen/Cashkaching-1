/**
 *
 * App - Lotto Main
 */
import React from "react";
import styled from "styled-components";
import CardLabel from "./CardLabel";

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
`;

const Numbers = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
`;
const ContentContainer = styled.div`
  display: grid;
  grid-column-start: 1;
  grid-column-end: 4;
  margin-left: 24px;
  margin-right: 24px;
  margin-bottom: 24px;
`;

const TimerTextContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
`;
const NumberBubble = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  width: 90px;
  height: 88px;
`;
const NumberImg = styled.img`
  grid-row-start: 1;
  grid-row-end: 2;
  grid-column-start: 1;
  z-index: 2;
`;
const LottoNumber = styled.div`
  grid-row-start: 1;
  grid-row-end: 2;
  z-index: 2;
  justify-self: center;
  align-self: center;
  grid-column-start: 1;
  margin-left: 8px;
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

const TopText = styled.p`
  font-family: Campton-Book;
  font-size: 12px;
  color: #fafafa;
  line-height: 24px;
  margin: 0px;
  padding: 0px;
`;

const Figure = styled.p`
  font-family: Campton-Bold;
  font-size: 40px;
  color: #fafafa;
  letter-spacing: 1.43px;
  margin: 0px;
`;
const TimeImgContainer = styled.div`
  display: grid;
  justify-items: center;
`;
const Img = styled.img`
  grid-row-start: 1;
  grid-column-start: 1;
  z-index: 1;
`;

const TimerText = styled.p`
  font-family: Campton-Book;
  font-size: 24px;
  color: #ffffff;
  margin-top: 38px;
  grid-row-start: 1;
  grid-column-start: 1;
  z-index: 2;
`;

const TimerSubHeader = styled.p`
  font-family: Campton-Light;
  font-size: 12px;
  color: #fafafa;
  grid-row-start: 1;
  grid-column-start: 1;
  margin-top: 116px;
`;
const FirstNumber = styled.div``;
const LastNumber = styled.div`
  justify-self: end;
`;
const NumberContainer = styled.div`
  justify-self: center;
`;
const RewardContianer = styled.div`
  margin-top: 48px;
`;
const TimerContainer = styled.div`
  justify-self: end;
  margin-top: 18px;
`;

const CountDownLottoCard = () => (
  <Cardlayout>
    <Cardcontainer>
      <CardContent>
        <CardLabel />
        <ContentContainer>
          <Numbers>
            <FirstNumber>
              <NumberBubble>
                <NumberImg src={require("./images/NumberImg.svg")} />
                <LottoNumber>
                  <NumberText>1</NumberText>
                </LottoNumber>
              </NumberBubble>
            </FirstNumber>
            <NumberContainer>
              <NumberBubble>
                <NumberImg src={require("./images/NumberImg.svg")} />
                <LottoNumber>
                  <NumberText>23</NumberText>
                </LottoNumber>
              </NumberBubble>
            </NumberContainer>
            <NumberContainer>
              <NumberBubble>
                <NumberImg src={require("./images/NumberImg.svg")} />
                <LottoNumber>
                  <NumberText>3</NumberText>
                </LottoNumber>
              </NumberBubble>
            </NumberContainer>
            <NumberContainer>
              <NumberBubble>
                <NumberImg src={require("./images/NumberImg.svg")} />
                <LottoNumber>
                  <NumberText>8</NumberText>
                </LottoNumber>
              </NumberBubble>
            </NumberContainer>
            <NumberContainer>
              <NumberBubble>
                <NumberImg src={require("./images/NumberImg.svg")} />
                <LottoNumber>
                  <NumberText>55</NumberText>
                </LottoNumber>
              </NumberBubble>
            </NumberContainer>
            <LastNumber>
              <NumberBubble>
                <NumberImg src={require("./images/NumberImg.svg")} />
                <LottoNumber>
                  <NumberText>9</NumberText>
                </LottoNumber>
              </NumberBubble>
            </LastNumber>
          </Numbers>
          <TimerTextContainer>
            <RewardContianer>
              <TopText>Daily count down</TopText>
              <Figure>N 500, 000</Figure>
            </RewardContianer>
            <TimerContainer>
              <TimeImgContainer>
                <Img src={require("./images/countdowntimer.svg")} />
                <TimerText>00:00:00</TimerText>
                <TimerSubHeader>Count down</TimerSubHeader>
              </TimeImgContainer>
            </TimerContainer>
          </TimerTextContainer>
        </ContentContainer>
      </CardContent>
    </Cardcontainer>
  </Cardlayout>
);

export default CountDownLottoCard;
