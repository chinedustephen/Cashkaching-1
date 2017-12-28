import React, { Component } from "react";
import styled from "styled-components";

const Cardcontainer = styled.div`
  display: grid;
  background: #ef8a17;
  border-radius: 4px;
  border-bottom: 8px solid #cd740e;
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
const IconContainer = styled.div`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  border: 6px solid #c1e190;
  background-color: #6ca516;
`;
const Total = styled.p`
  font-family: Campton-Book;
  font-size: 20px;
  color: #ffffff;
  letter-spacing: 1.45px;
`;
const SubText = styled.p`
  font-family: Campton-Light;
  font-size: 8px;
  color: #ffffff;
`;
const CashOut = styled.p`
  font-family: Campton-Bold;
  font-size: 36px;
  color: #ffffff;
`;
const TodayEarnings = styled.p`
  font-family: Campton-Light;
  font-size: 12px;
  color: #ffffff;
`;
const Earnings = styled.p`
  font-family: Campton-Medium;
  font-size: 16px;
  color: #ffffff;
`;

class ActivityCard extends Component {
  render() {
    return (
      <Cardlayout>
        <Cardcontainer>
          <CardContent>
            <div>
              <div>
                <Total>TOTAL: N100, 000</Total>
              </div>
              <div>
                <SubText>READY CASHOUT AMOUNT</SubText>
                <CashOut>N100, 000</CashOut>
              </div>
              <div>
                <TodayEarnings>N100</TodayEarnings>
                <Earnings>N 50</Earnings>
              </div>
            </div>
          </CardContent>
        </Cardcontainer>
      </Cardlayout>
    );
  }
}

export default ActivityCard;
