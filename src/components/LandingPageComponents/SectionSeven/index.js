import React from "react";
import styled from "styled-components";
import TestimonialCard from "./TestimonialCard";
import SectionHeader from "./Header";

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

const SectionSeven = () => (
  <Container>
    <SectionSevenContainer>
      <SectionHeader header="test" />
      <TestimonialContainer>
        <div>
          <TestimonialCard
            amount="2"
            usertestimonial="testmonial"
            username="Gideon"
          />
        </div>
        <Middle>
          <TestimonialCard
            amount="2"
            usertestimonial="testmonial"
            username="Gideon"
          />
        </Middle>
        <End>
          <TestimonialCard
            amount="2"
            usertestimonial="testmonial"
            username="Gideon"
          />
        </End>
      </TestimonialContainer>
    </SectionSevenContainer>
  </Container>
);

export default SectionSeven;
