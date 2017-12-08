import React, { Component } from "react";
import styled from "styled-components";
import TimerHeaderContent from "../HeaderTimerSection";
import HeaderContent from "../HeaderContentSection";

const Container = styled.div`
  margin-left: 128px;
  margin-right: 128px;
  margin-top: 130px;
`;
const SectionOne = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  height: 50%;
  width: 100%;

	}
`;

const SectionTwo = styled.div`
  height: 80px;
`;

class SectionContainer extends Component {
  render() {
    return (
      <Container>
        <SectionOne>
          <HeaderContent />
          <TimerHeaderContent />
        </SectionOne>
        <SectionTwo />
      </Container>
    );
  }
}

export default SectionContainer;
