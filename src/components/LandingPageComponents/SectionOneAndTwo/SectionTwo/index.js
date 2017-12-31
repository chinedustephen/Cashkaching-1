import React from "react";
import styled from "styled-components";
import Header from "./Header";
import DailyCard from "./DailyCard";
import WeeklyCard from "./WeeklyCard";
import MonthlyCard from "./MonthlyCard";
import CurveImg from "./images/Curve.svg";

const Hold = styled.div`
  display: grid;
  height: 415px;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 83% 1fr;
  margin-top: 130px;
  grid-template-areas: ". sectiontwo .";
`;
const SectionTwoContainer = styled.div`
  display: grid;
  grid-area: sectiontwo;
  height: 228px;
`;

const Img = styled.img``;
const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const EndContainer = styled.div`
  justify-self: end;
`;
const CenterContainer = styled.div`
  justify-self: center;
`;

const SectionTwo = () => (
  <Hold>
    <Container>
      <SectionTwoContainer>
        <Header />
        <CardsContainer>
          <DailyCard
            theme={{ main: "darkorange" }}
            amount="N50 000"
            text="Play the daily draw three time and qualify for the weekly draw"
            time="4:30:1"
          />
          <CenterContainer>
            <WeeklyCard
              theme={{ main: "darkorange" }}
              amount="N100 000"
              text="Play the daily draw three time and qualify for the weekly draw"
              time="4:30:1"
            />
          </CenterContainer>
          <EndContainer>
            <MonthlyCard
              theme={{ main: "darkorange" }}
              amount="N500 000"
              text="Play the daily draw three time and qualify for the weekly draw"
              time="4:30:1"
            />
          </EndContainer>
        </CardsContainer>
      </SectionTwoContainer>
    </Container>
    <Img src={CurveImg} />
  </Hold>
);

export default SectionTwo;
