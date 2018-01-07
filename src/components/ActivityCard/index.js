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
  margin-bottom: 28px;
`;

const CardContent = styled.div`
  display: grid;
  margin-left: 24px;
`;

const Total = styled.p`
  font-family: Campton-Book;
  font-size: 20px;
  color: #ffffff;
  letter-spacing: 1.45px;
  margin: 0;
  margin-top: 36px;
  margin-bottom: 30px;
`;
const SubText = styled.p`
  font-family: Campton-Light;
  font-size: 8px;
  color: #ffffff;
  margin: 0px;
`;
const CashOut = styled.p`
  font-family: Campton-Bold;
  font-size: 36px;
  color: #ffffff;
  margin-top: 0px;
  margin-bottom: 20px;
`;
const TodayEarnings = styled.p`
  font-family: Campton-Light;
  font-size: 12px;
  color: #ffffff;
  margin: 0px;
`;
const Earnings = styled.p`
  font-family: Campton-Medium;
  font-size: 16px;
  color: #ffffff;
  margin: 0px;
`;

const ActivityCard = () => (
  <Cardlayout>
    <Cardcontainer>
      <CardContent>
        <div>
          <Total>TOTAL: N100, 000</Total>
        </div>
        <div>
          <SubText>READY CASHOUT AMOUNT</SubText>
          <CashOut>N100, 000</CashOut>
        </div>
        <div>
          <TodayEarnings>EARNINGS FOR TODAY:</TodayEarnings>
          <Earnings>N 50 000</Earnings>
        </div>
      </CardContent>
    </Cardcontainer>
  </Cardlayout>
);

export default ActivityCard;
