/**
 *
 * App - Lotto Main
 */
import React, { Component } from "react";
import styled from "styled-components";
import Modal from "../LottoModal";
import LottoWizard from "../LottoWizard";

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

const CardLabel = styled.div`
  grid-column-start: 1;
  grid-column-end: 4;
`;

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

const Share = styled.img`
  float: right;
`;
const Numbers = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
`;
const ContentContainer = styled.div`
  display: grid;

  grid-column-start: 1;
  grid-column-end: 4;
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
`;

class CountDownLottoCard extends Component {
  render() {
    return (
      <Cardlayout>
        <Cardcontainer>
          <CardContent>
            <CardLabel>
              <LabelText>DAILY LOTTO COUNT DOWN</LabelText>
              <Share src={require("./images/share.svg")} />
            </CardLabel>
            <ContentContainer>
              <Numbers>
                <div>
                  <NumberBubble>
                    <NumberImg src={require("./images/NumberImg.svg")} />
                    <LottoNumber>
                      <NumberText>1</NumberText>
                    </LottoNumber>
                  </NumberBubble>
                </div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
                <div>7</div>
              </Numbers>
              <TimerTextContainer>
                <div>
                  <TopText>Daily count down</TopText>
                  <Figure>N 500, 000</Figure>
                </div>
                <div>timer</div>
              </TimerTextContainer>
            </ContentContainer>
          </CardContent>
        </Cardcontainer>
      </Cardlayout>
    );
  }
}

export default CountDownLottoCard;
