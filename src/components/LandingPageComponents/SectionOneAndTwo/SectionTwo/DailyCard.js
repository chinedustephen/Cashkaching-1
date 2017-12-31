import React from "react";
import styled, { ThemeProvider } from "styled-components";
import TimerImg from "./images/SmallTimer.svg";

const CardText = styled.p`
  font-family: Campton-Medium;
  font-size: 12px;
  color: #ffffff;
  line-height: 20px;
  margin: 0;
`;
const LottoReward = styled.p`
  font-family: Campton-Bold;
  font-size: 18px;
  color: #fdfdfd;
  letter-spacing: 1.31px;
  margin: 0;
  margin-bottom: 14px;
`;
const TimerWrapper = styled.div`
  display: grid;
  grid-template-columns: 15% 1fr;
`;
const Time = styled.p`
  font-family: Campton-Light;
  font-size: 12px;
  color: #ffffff;
`;
const TimerExpiry = styled.img`
  margin: 0;
  padding: 0;
`;
const CardWrapper = styled.div`
  margin: 20px;
  margin-top: 16px;
  margin-bottom: 16px;
`;

const TimeImgWrapper = styled.div`
  align-self: center;
`;
const Card = styled.div`
  display: grid;
  background: #6ca516;
  border-radius: 4px;
  width: 279px;
  height: 146px;
  box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.24);
  border-bottom: 5px solid #5e8a1c;

  background: ${props => props.theme.main};
`;

const theme = {
  main: "#6ca516"
};

const DailyCard = props => (
  <div>
    <ThemeProvider theme={theme}>
      <Card>
        <CardWrapper>
          <LottoReward>{props.amount}</LottoReward>
          <CardText>{props.text}</CardText>
          <TimerWrapper>
            <TimeImgWrapper>
              <TimerExpiry src={TimerImg} />
            </TimeImgWrapper>
            <Time>{props.time}</Time>
          </TimerWrapper>
        </CardWrapper>
      </Card>
    </ThemeProvider>
  </div>
);

export default DailyCard;
