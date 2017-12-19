/**
 *
 * App - Lotto Main
 */
import React, { Component } from "react";
import styled from "styled-components";
import Modal from "../LottoModal";
import LottoWizard from "../LottoWizard";

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

const CardLabel = styled.div`
  grid-column-start: 1;
  grid-column-end: 4;
`;

const CardDescription = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  @media only screen and (max-width: 500px) {
    grid-column-start: 1;
    grid-column-end: 4;
  }
`;

const CardTimer = styled.div``;

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
  margin-left: 24px;
  margin-bottom: 88px;
  @media only screen and (max-width: 500px) {
    font-family: Campton-BoldDEMO;
    font-size: 25px;
    color: #fafafa;
    letter-spacing: 0.89px;
    margin-bottom: 20px;
  }
`;

const TimeLeft = styled.p`
  /* Days Left: */
  font-family: Roboto-Regular;
  font-size: 16px;
  color: #ffffff;
  text-align: center;

  grid-column-start: 1;
  grid-column-end: 4;
  @media only screen and (max-width: 500px) {
    grid-column-start: 1;
    grid-column-end: 3;
    margin-top: 65px;
    margin-left: 22px;
  }
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

const ButtonMain = styled.button`
  background-color: red;
  display: block;

  border: 0px;
  background: #f25500;
  border-radius: 8px;
  border-bottom: 3px solid #c44500;
  color: #ffffff;
  font-family: Campton-BoldDEMO;
  font-size: 12px;
  letter-spacing: 0.87px;
  width: 184px;
  height: 45px;
  grid-column-start: 1;
  grid-column-end: 4;
  @media only screen and (max-width: 500px) {
    width: 120px;
    height: 45px;
    margin-bottom: 24px;
    margin-right: 27px;
  }
`;

const CardTimerContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-items: center;
  float: right;
  @media only screen and (max-width: 500px) {
    grid-template-columns: 1fr 50% 50% 50%;
    justify-items: none;
    float: none;
  }
`;

const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
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

const Share = styled.img`
  float: right;
`;

class PlayedLottoCard extends Component {
  render() {
    return (
      <Cardlayout>
        <Cardcontainer>
          <CardContent>
            <CardLabel>
              <LabelText>PLAYED DAILY DRAW</LabelText>
              <Share src={require("./images/share.svg")} />
            </CardLabel>
            <CardDescription>
              <HeaderContainer>
                <div>
                  <GirlImg src={require("./images/Girl.svg")} />
                </div>
                <div>
                  <PlayedHeader>PATIENCE!</PlayedHeader>
                </div>
              </HeaderContainer>
              <div>
                <CardDescriptionText>
                  Your dashboard is updated daily so remeber to keep an eye on
                  it. Click Play to enter the monthly draw
                </CardDescriptionText>
                <HashTag>#CashkachingJokes</HashTag>
              </div>
              <div>
                <SubText>You are in the Day Draw for:</SubText>
                <DrawAmount>N 10 000, 000</DrawAmount>
              </div>
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
  }
}

export default PlayedLottoCard;
