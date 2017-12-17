import React, { Component } from "react";
import styled from "styled-components";
import TestimonialCard from "./TestimonialCard";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 83% 1fr;
  grid-template-areas: ". sectionthree .";
  background-color: #6ca516;
`;
const SectionSevenContainer = styled.div`
  display: grid;
  grid-area: sectionthree;
  height: 300px;
margin-bottom: 160px;
	}
`;

const HeaderContainer = styled.div``;
const Header = styled.div`
  font-family: Campton-Bold;
  font-size: 20px;
  color: #ffffff;
`;
const TestimonialContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const Middle = styled.div`
  justify-self: center;
`;

const End = styled.div`
  justify-self: end;
`;

class SectionSeven extends Component {
  render() {
    return (
      <Container>
        <SectionSevenContainer>
          <HeaderContainer>
            <Header>Our daily and monthly winners</Header>
          </HeaderContainer>
          <TestimonialContainer>
            <div>
              <TestimonialCard />
            </div>
            <Middle>
              <TestimonialCard />
            </Middle>
            <End>
              <TestimonialCard />
            </End>
          </TestimonialContainer>
        </SectionSevenContainer>
      </Container>
    );
  }
}

export default SectionSeven;
