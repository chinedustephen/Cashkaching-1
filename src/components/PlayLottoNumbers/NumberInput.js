import React from "react";
import styled from "styled-components";

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
  display: inline-block;
  margin-right: 15px;
`;
const RefreshContainer = styled.div`
  align-self: center;
  justify-self: end;
  margin-right: 22px;
`;

const NumbersContainer = styled.div`
  display: grid;
  grid-template-columns: 80% 10%;
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

const ButtonContainer = styled.div`
  justify-self: end;
  margin-top: 24px;
  margin-right: 24px;
`;
const LottoNumberContainer = styled.div`
  display: inline-block;
`;

class NumberInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { displayValue: "Enter you number" };
  }

  //State changers
  inputDigit(digit) {
    const { displayValue } = this.state;
    this.setState({
      displayValue:
        displayValue === "Enter you number"
          ? String(digit)
          : displayValue + digit
    });
  }

  render() {
    const { displayValue } = this.state;
    return (
      <div>
        <NumberInputContainer>
          <SubNumberText>
            Select your numbers and play simple right?
          </SubNumberText>
          <NumbersContainer>
            <LottoNumberContainer>
              <Numbers>{displayValue}</Numbers>
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
          <NumberButton onClick={() => this.inputDigit(1)}>1</NumberButton>
          <NumberButton onClick={() => this.inputDigit(2)}>2</NumberButton>
          <NumberButton onClick={() => this.inputDigit(3)}>3</NumberButton>
          <NumberButton onClick={() => this.inputDigit(4)}>4</NumberButton>
          <NumberButton onClick={() => this.inputDigit(5)}>5</NumberButton>
          <NumberButton onClick={() => this.inputDigit(6)}>6</NumberButton>
          <NumberButton onClick={() => this.inputDigit(7)}>7</NumberButton>
          <NumberButton onClick={() => this.inputDigit(8)}>8</NumberButton>
          <NumberButton onClick={() => this.inputDigit(8)}>9</NumberButton>
          <NumberButton onClick={() => this.inputDigit(10)}>10</NumberButton>
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
    );
  }
}

export default NumberInput;
