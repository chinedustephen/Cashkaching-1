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
      <SectionHeader header="Our recent winners" />
      <TestimonialContainer>
        <div>
          <TestimonialCard
            amount="100 000"
            usertestimonial="happy that this actually happened"
            username="Gideon"
          />
        </div>
        <Middle>
          <TestimonialCard
            amount="50 000"
            usertestimonial="that moment when you second guessing then you end up winning.
             Im actually enjoying this"
            username="Taku"
          />
        </Middle>
        <End>
          <TestimonialCard
            amount="200 000"
            usertestimonial="Winning winning thats all i can say"
            username="Gideon"
          />
        </End>
      </TestimonialContainer>
    </SectionSevenContainer>
  </Container>
);

export default SectionSeven;
