import React, { Component } from "react";
import styled from "styled-components";
import Header from "./sectionTwoHeader";
import SmallCardWinner from "./winnerCard";

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

const Carousel = styled.div``;
const CurveImg = styled.img``;
const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

const EndContainer = styled.div`
  justify-self: end;
`;
const CenterContainer = styled.div`
  justify-self: center;
`;

class SectionTwo extends Component {
  render() {
    return (
      <Hold>
        <Container>
          <SectionTwoContainer>
            <Carousel>
              <div>
                <Header />
              </div>
              <CardsContainer>
                <div>
                  <SmallCardWinner />
                </div>
                <CenterContainer>
                  <SmallCardWinner />
                </CenterContainer>
                <CenterContainer>
                  <SmallCardWinner />
                </CenterContainer>
                <EndContainer>
                  <SmallCardWinner />
                </EndContainer>
              </CardsContainer>
            </Carousel>
          </SectionTwoContainer>
        </Container>
        <CurveImg src={require("./images/Curve.svg")} />
      </Hold>
    );
  }
}

export default SectionTwo;
