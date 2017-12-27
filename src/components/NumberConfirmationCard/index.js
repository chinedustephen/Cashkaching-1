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

const BonusTextInfo = styled.p`
  font-family: Campton-ExtraLight;
  font-size: 16px;
  color: #ffffff;
  letter-spacing: 0;
  line-height: 21px;
`;

const NumbersSent = styled.p`
  font-family: Campton-Bold;
  font-size: 20px;
  color: #ffffff;
  letter-spacing: 0;
  line-height: 25px;
`;
const Numbers = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
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
`;

const NumberText = styled.p`
  font-family: Campton-Bold;
  font-size: 40px;
  color: #fafafa;
  letter-spacing: 1.43px;
  margin: 0px;
  padding: 0px;
`;
const NumberImg = styled.img`
  grid-row-start: 1;
  grid-row-end: 2;
  grid-column-start: 1;
  z-index: 2;
`;
const GotIt = styled.button`
  background: #ffffff;
  border-radius: 4px;
  height: 30px;
  /* PLAY: */
  font-family: Campton-Bold;
  font-size: 12px;
  color: #333333;
  letter-spacing: 0.87px;
  border: none;
  border-bottom: 2px solid #eee6e6;
`;

class NumberConfirmationCard extends Component {
  render() {
    return (
      <Cardlayout>
        <Cardcontainer>
          <CardContent>
            <div>
              <BonusTextInfo>
                Well played N20 bonus points for playing. Fingers crossed.
              </BonusTextInfo>
            </div>
            <div>
              <NumbersSent>
                These are your numbers we will send you an email for your own
                records
              </NumbersSent>
            </div>
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
            </Numbers>
            <div>
              <GotIt>Play</GotIt>
            </div>
          </CardContent>
        </Cardcontainer>
      </Cardlayout>
    );
  }
}

export default NumberConfirmationCard;
