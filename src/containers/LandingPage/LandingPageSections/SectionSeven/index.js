import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 83% 1fr;
  grid-template-areas: ". sectionthree .";
  background-color: #6ca516;
`;
const SectionSevenContainer = styled.div`
  display: grid;
  grid-area: sectionthree;
  background-color: blue;
  height: 300px;

	}
`;

const HeaderContainer = styled.div``;
const Header = styled.div`
  font-family: Campton-Bold;
  font-size: 20px;
  color: #ffffff;
`;

class SectionSeven extends Component {
  render() {
    return (
      <Container>
        <SectionSevenContainer>
          <HeaderContainer>
            <Header>Our daily and monthly winners</Header>
          </HeaderContainer>
          <div>Carsoul</div>
        </SectionSevenContainer>
      </Container>
    );
  }
}

export default SectionSeven;
