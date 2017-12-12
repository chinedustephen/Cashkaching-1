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

const Carousel = styled.div``;
const CurveImg = styled.img``;

class SectionTwo extends Component {
  render() {
    return (
      <div>
        <Container>
          <SectionTwoContainer>
            <Carousel>Carousel</Carousel>
          </SectionTwoContainer>
        </Container>
        <CurveImg src={require("./images/Curve.svg")} />
      </div>
    );
  }
}

export default SectionTwo;
