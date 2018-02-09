import React from "react";
import styled from "styled-components";
import LottoNumbers from "../NumberList";
import CardLabel from "../CardLabel";

const Cardcontainer = styled.div.attrs({
  // we can define static props

  // or we can define dynamic ones
  background: props => props.bg,
  borderbottom: props => props.brb
})`
  border-radius: 4px;
  border-bottom-style: solid;
  border-bottom: 8px;
  box-shadow: 0 9px 16px 0 rgba(5, 2, 7, 0.35);

  /* here we use the dynamically computed props */
  background: ${props => props.background};
  border-bottom: ${props => props.borderbottom};
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

const RewardContianer = styled.div`
  margin-top: 48px;
`;
const TimerContainer = styled.div`
  justify-self: end;
  margin-top: 18px;
`;

const CountDownLottoCard = props => (
  <Cardlayout>
    <Cardcontainer bg={props.bg} brb={props.brb}>
      <CardContent>
        <CardLabel cardLabel={props.cardLabel} bglabel={props.bglabel} />
        <ContentContainer>
          <LottoNumbers bglabel={props.bglabel} secbk={props.secbk} />
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
