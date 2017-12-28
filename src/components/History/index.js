import React, { Component } from "react";
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
`;
const TimeStamp = styled.p`
  font-family: Campton-Light;
  font-size: 12px;
  color: #666666;
`;

class History extends Component {
  render() {
    return (
      <div>
        <CatagoryContainer>
          <HistoryContainer>
            <div>
              <Icon />
              <HistoryType>Played daily draw</HistoryType>
              <Bounus>+ N100</Bounus>
            </div>
            <div>
              <TimeStamp>a minute ago</TimeStamp>
            </div>
          </HistoryContainer>
        </CatagoryContainer>
      </div>
    );
  }
}

export default History;
