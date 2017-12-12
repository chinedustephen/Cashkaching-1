import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 83% 1fr;
  margin-top: 130px;
  grid-template-areas: ". sectiontwo .";
`;
const SectionTwoContainer = styled.div`
  display: grid;
  grid-area: sectiontwo;
  height: 80px;
  background-color: blue;
	}
`;

class SectionTwo extends Component {
  render() {
    return (
      <Container>
        <SectionTwoContainer>Section two</SectionTwoContainer>
      </Container>
    );
  }
}

export default SectionTwo;
