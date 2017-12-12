import React, { Component } from "react";
import styled from "styled-components";

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
  height: 80px;
  background-color: blue;
	}
`;

const Carousel = styled.div``;
const CurveImg = styled.img``;

class SectionTwo extends Component {
  render() {
    return (
      <Hold>
        <Container>
          <SectionTwoContainer>
            <Carousel>Carousel</Carousel>
          </SectionTwoContainer>
        </Container>
        <CurveImg src={require("./images/Curve.svg")} />
      </Hold>
    );
  }
}

export default SectionTwo;
