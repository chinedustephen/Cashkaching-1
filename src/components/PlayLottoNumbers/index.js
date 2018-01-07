import React from "react";
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
  grid-row-gap: 1em;
  margin-top: 28px;
`;

const CardContent = styled.div`
  display: grid;
  display: grid;
  grid-template-rows: 7% 1fr;
  margin-left: 24px;
  margin-right: 24px;
  margin-bottom: 24px;
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

const ConentContainer = styled.div`
  display: grid;
  grid-template-columns: 75% 25%;
`;
const SubNumberText = styled.p`
  font-family: Campton-ExtraLight;
  color: #ffffff;
  letter-spacing: 0;
  line-height: 21px;
  font-size: 14px;
`;

const Numbers = styled.p`
  /* 23 45 5 64 6 34: */
  font-family: Campton-Bold;
  font-size: 40px;
  color: #fafafa;
  letter-spacing: 1.43px;
  margin: 0;
`;
const RefreshContainer = styled.div`
  align-self: center;
  justify-self: end;
  margin-right: 22px;
`;

const NumbersContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;
const Refresh = styled.img`
  width: 36px;
`;
const NumberInputContainer = styled.div`
  display: grid;
`;

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
  margin-top: 14px;
`;
const NumberButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  margin-top: 16px;
`;
const Clear = styled.button`
  background: #fafafa;
  border-radius: 4px;
  height: 30px;
  height: 30px;
  width: 81px;
  padding-top: 4px;
  font-family: Campton-Bold;
  font-size: 12px;
  color: #000000;
  letter-spacing: 0;
  border: none;
  border-bottom: 2px solid #eee6e6;
  display: inline-block;
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
  width: 120px;
  height: 40px;
`;
const ButtonContainer = styled.div`
  justify-self: end;
  margin-top: 24px;
  margin-right: 24px;
`;
const LottoNumberContainer = styled.div``;
const ButtonContainerPlay = styled.div`
  align-self: end;
  justify-self: end;
`;

const PlayLottoNumbers = () => (
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
                <LottoNumberContainer>
                  <Numbers>34</Numbers>
                </LottoNumberContainer>
                <LottoNumberContainer>
                  <Numbers>4</Numbers>
                </LottoNumberContainer>
                <LottoNumberContainer>
                  <Numbers>14</Numbers>
                </LottoNumberContainer>
                <LottoNumberContainer>
                  <Numbers>44</Numbers>
                </LottoNumberContainer>
                <LottoNumberContainer>
                  <Numbers>84</Numbers>
                </LottoNumberContainer>
                <LottoNumberContainer>
                  <Numbers>9</Numbers>
                </LottoNumberContainer>
                <RefreshContainer>
                  <Refresh src={require("./images/refresh.svg")} />
                </RefreshContainer>
              </NumbersContainer>
              <ButtonContainer>
                <Clear>Clear</Clear>
              </ButtonContainer>
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
          <ButtonContainerPlay>
            <Play>Play</Play>
          </ButtonContainerPlay>
        </ConentContainer>
      </CardContent>
    </Cardcontainer>
  </Cardlayout>
);

export default PlayLottoNumbers;
