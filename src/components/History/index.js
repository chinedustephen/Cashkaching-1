import React from "react";
import styled from "styled-components";

const CatagoryContainer = styled.div`
  display: grid;
  grid-template-columns: 80% 1fr;
  border-bottom: 1px solid #666666;
`;
const HistoryContainer = styled.div`
  display: grid;
`;
const Icon = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #6ca516;
  align-self: center;
`;
const HistoryType = styled.p`
  font-family: Campton-Medium;
  font-size: 12px;
  color: #666666;
`;
const Bounus = styled.p`
  font-family: Campton-Bold;
  font-size: 12px;
  color: #ee452d;
  justify-self: end;
`;
const TimeStamp = styled.p`
  font-family: Campton-Light;
  font-size: 12px;
  color: #666666;
`;
const DetailsContainer = styled.div`
  display: grid;
  grid-template-columns: 5% 20% 100%;
  margin-top: 7px;
`;
const IconImg = styled.img`
  height: 12px;
  margin-left: 4px;
  margin-top: 4px;
`;

const History = () => (
  <div>
    <CatagoryContainer>
      <HistoryContainer>
        <DetailsContainer>
          <Icon>
            <IconImg src={require("./images/star.svg")} />
          </Icon>
          <HistoryType>Played daily draw</HistoryType>
          <Bounus>+ N100</Bounus>
        </DetailsContainer>
        <div>
          <TimeStamp>a minute ago</TimeStamp>
        </div>
      </HistoryContainer>
    </CatagoryContainer>
  </div>
);

export default History;
