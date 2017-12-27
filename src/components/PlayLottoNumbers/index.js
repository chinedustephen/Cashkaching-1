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

const Share = styled.img`
  float: right;
`;

const WinnerContainer = styled.div`
  display: grid;
  grid-template-columns: 25% 50%;
`;

const ConentContainer = styled.div`
  display: grid;
  grid-template-columns: 75% 25%;
`;
const SubNumberText = styled.p`
  font-family: Campton-ExtraLight;
  font-size: 16px;
  color: #ffffff;
  letter-spacing: 0;
  line-height: 21px;
`;

const Numbers = styled.p`
  /* 23 45 5 64 6 34: */
  font-family: Campton-Bold;
  font-size: 40px;
  color: #fafafa;
  letter-spacing: 1.43px;
  margin: 0;
`;

const NumbersContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;
const Refresh = styled.img``;
const NumberInputContainer = styled.div``;

const NumberButtons = styled.div``;

const NumberButton = styled.button`
  /* Oval 6 Copy 91: */
  background: #fafafa;
  border-radius: 26px;
  height: 30px;
  width: 30px;
  /* 1: */
  font-family: Campton-Bold;
  font-size: 12px;
  color: #000000;
  letter-spacing: 0;
  border: none;
  border-bottom: 2px solid #eee6e6;
`;
const NumberButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
`;
const Clear = styled.button`
  background: #fafafa;
  border-radius: 4px;
  height: 30px;

  /* 1: */
  font-family: Campton-Bold;
  font-size: 12px;
  color: #000000;
  letter-spacing: 0;
  border: none;
  border-bottom: 2px solid #eee6e6;
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
`;

class PlayLottoNumbers extends Component {
  render() {
    return (
      <Cardlayout>
        <Cardcontainer>
          <CardContent>
            <CardLabel>
              <LabelText>DAILY DRAW</LabelText>
            </CardLabel>
            <ConentContainer>
              <div>
                <NumberInputContainer>
                  <SubNumberText>
                    Select your numbers and play simple right?
                  </SubNumberText>
                  <NumbersContainer>
                    <Numbers>34</Numbers>
                    <Numbers>4</Numbers>
                    <Numbers>14</Numbers>
                    <Numbers>44</Numbers>
                    <Numbers>84</Numbers>
                    <Numbers>9</Numbers>
                    <Numbers>
                      <Refresh src={require("./images/refresh.svg")} />
                    </Numbers>
                  </NumbersContainer>
                  <Clear>Clear</Clear>
                </NumberInputContainer>
                <NumberButtonsContainer>
                  <NumberButton>1</NumberButton>
                  <NumberButton>2</NumberButton>
                  <NumberButton>3</NumberButton>
                  <NumberButton>4</NumberButton>
                  <NumberButton>5</NumberButton>
                  <NumberButton>6</NumberButton>
                  <NumberButton>7</NumberButton>
                  <NumberButton>8</NumberButton>
                  <NumberButton>9</NumberButton>
                  <NumberButton>10</NumberButton>
                </NumberButtonsContainer>
              </div>
              <div>
                <Play>Play</Play>
              </div>
            </ConentContainer>
          </CardContent>
        </Cardcontainer>
      </Cardlayout>
    );
  }
}

export default PlayLottoNumbers;
