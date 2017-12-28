import React, { Component } from "react";
import styled from "styled-components";
import ActivityCard from "../../components/ActivityCard";
import History from "../../components/History";

const Catagory = styled.p`
  opacity: 0.87;
  font-family: Campton-BoldDEMO;
  font-size: 16px;
  color: #212121;
  letter-spacing: 0.29px;
`;
const CatagoryContainer = styled.div`
  display: grid;
  grid-template-columns: 80% 1fr;
  border-bottom: 1px solid #666666;
`;
class Activity extends Component {
  render() {
    return (
      <div>
        <ActivityCard />
        <CatagoryContainer>
          <Catagory>History</Catagory>
        </CatagoryContainer>
        <History />
      </div>
    );
  }
}

export default Activity;
