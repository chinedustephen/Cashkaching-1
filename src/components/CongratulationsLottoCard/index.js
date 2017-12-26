/**
 *
 * App - Lotto Main
 */
import React, { Component } from "react";
import styled from "styled-components";
import Congratulations from "./Congratulations";
import Profile from "./Profile";
import AwardDetails from "./AwardDetails";

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

const WinnerContainer = styled.div`
  display: grid;
  grid-template-columns: 25% 50%;
`;

const ConentContainer = styled.div`
  display: grid;
  grid-area: sectionthree;
`;

class CongratulationsLottoCard extends Component {
  render() {
    return (
      <Cardlayout>
        <Cardcontainer>
          <CardContent>
            <CardLabel>
              <LabelText>DAILY LOTTO WINNER</LabelText>
              <Share src={require("./images/share.svg")} />
            </CardLabel>
            <ConentContainer>
              <div>
                <Congratulations />
              </div>
              <WinnerContainer>
                <div>
                  <Profile />
                </div>
                <div>
                  <AwardDetails />
                </div>
              </WinnerContainer>
            </ConentContainer>
          </CardContent>
        </Cardcontainer>
      </Cardlayout>
    );
  }
}

export default CongratulationsLottoCard;
