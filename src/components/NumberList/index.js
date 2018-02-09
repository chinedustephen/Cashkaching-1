import React from "react";
import styled from "styled-components";
import NumberSvg from "./images/Number";

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
const NumberImg = styled(NumberSvg)``;

const B = styled.div`
  grid-row-start: 1;
  grid-row-end: 2;
  grid-column-start: 1;
  z-index: 2;
`;

const PlayedNumbers = [1, 1, 23, 23, 22, 22];

const LottoNumbers = props => (
  <Numbers>
    {PlayedNumbers.map(number => (
      <div>
        <NumberBubble>
          <B>
            <NumberImg bglabel={props.bglabel} secbk={props.secbk} />
          </B>
          <LottoNumber>
            <NumberText>{number}</NumberText>
          </LottoNumber>
        </NumberBubble>
      </div>
    ))}
  </Numbers>
);

export default LottoNumbers;
