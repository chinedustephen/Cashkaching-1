import React from "react";
import styled from "styled-components";
import CardLabel from "./CardLabel";

const Cardcontainer = styled.div`
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
  grid-template-columns: 50% 50% 1fr;
`;

const CardDescription = styled.div`
  display: grid;
  @media only screen and (max-width: 500px) {
    grid-column-start: 1;
    grid-column-end: 4;
  }
`;

const CardTimer = styled.div`
  display: grid;
  display: grid;
  align-self: center;
  justify-self: end;
`;

const CardDescriptionText = styled.p`
  /* Your dashboard is up: */
  font-family: Campton-Medium;
  font-size: 14px;
  color: #fafafa;
  letter-spacing: 0.5px;
  line-height: 18px;
  @media only screen and (max-width: 500px) {
    display: none;
  }
`;

const SubText = styled.p`
  font-family: Campton-Book;
  font-size: 12px;
  color: #fafafa;
  line-height: 24px;
  margin-bottom: 0px;
`;

const DrawAmount = styled.p`
  /* N 10 000, 000: */
  font-family: Campton-BoldDEMO;
  font-size: 40px;
  color: #fafafa;
  letter-spacing: 1.43px;
  margin-top: 0px;
  margin-bottom: 24px;
`;

const TimerImg = styled.img`
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 2;
  @media only screen and (max-width: 500px) {
    grid-column-start: 4;
    grid-column-end: 4;
    grid-row-start: 1;
    margin-left: 81px;
  }
`;

const Counter = styled.p`
  font-family: Roboto-Regular;
  font-size: 28px;
  color: #ffffff;
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 2;
  margin-top: 56px;
  @media only screen and (max-width: 500px) {
    grid-column-start: 4;
    grid-column-end: 4;
    grid-row-start: 1;
    margin-left: 81px;
  }
`;

const CardTimerContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  float: right;
  margin-right: 24px;
`;

const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 25% 1fr;
`;

const GirlImg = styled.img``;

const PlayedHeader = styled.p`
  font-family: Campton-Bold;
  font-size: 28px;
  color: #fafafa;
  letter-spacing: 1px;
`;

const HashTag = styled.p`
  /* #CashKachingjokes: */
  font-family: Campton-Book;
  font-size: 12px;
  color: #fafafa;
  letter-spacing: 0.43px;
`;

const CashDrawText = styled.div`
  font-family: Campton-ExtraLight;
  font-size: 16px;
  color: #fafafa;
  letter-spacing: 0.57px;
  grid-row-start: 3;
  grid-column-start: 1;
  grid-column-end: 4;
`;

const ImgContainer = styled.div`
  margin-left: 24px;
`;
const DecscritpionContianer = styled.div`
  margin-left: 24px;
`;
const RewardContianer = styled.div`
  margin-left: 24px;
`;

const PlayedLottoCard = () => (
  <Cardlayout>
    <Cardcontainer>
      <CardContent>
        <CardLabel />
        <CardDescription>
          <HeaderContainer>
            <ImgContainer>
              <GirlImg src={require("./images/Girl.svg")} />
            </ImgContainer>
            <div>
              <PlayedHeader>PATIENCE!</PlayedHeader>
            </div>
          </HeaderContainer>
          <DecscritpionContianer>
            <CardDescriptionText>
              Your dashboard is updated daily so remeber to keep an eye on it.
              Click Play to enter the monthly draw
            </CardDescriptionText>
            <HashTag>#CashkachingJokes</HashTag>
          </DecscritpionContianer>
          <RewardContianer>
            <SubText>You are in the Day Draw for:</SubText>
            <DrawAmount>N 10 000, 000</DrawAmount>
          </RewardContianer>
        </CardDescription>
        <CardTimer>
          <CardTimerContainer>
            <TimerImg src={require("./images/TimerPatient.svg")} />
            <Counter>4:30:1</Counter>
            <CashDrawText>Till cash draw</CashDrawText>
          </CardTimerContainer>
        </CardTimer>
      </CardContent>
    </Cardcontainer>
  </Cardlayout>
);

export default PlayedLottoCard;
