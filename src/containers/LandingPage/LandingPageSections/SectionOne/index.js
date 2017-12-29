import React from "react";
import styled from "styled-components";
import TimerHeaderContent from "../../../../components/HeaderTimerSection";
import HeaderContent from "../../../../components/HeaderContentSection";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 83% 1fr;
  margin-top: 130px;
  grid-template-areas: ". sectionone .";
`;
const SectionWrapper = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  height: 50%;
  width: 100%;
  grid-area: sectionone;
`;

const SectionOne = () => (
  <Container>
    <SectionWrapper>
      <HeaderContent />
      <TimerHeaderContent />
    </SectionWrapper>
  </Container>
);

export default SectionOne;
