import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 83% 1fr;
  grid-template-areas: ". sectionthree .";
  height: 316px;
  background: #5c0d3c;
`;
const SectionThreeContainer = styled.div`
  display: grid;
  grid-area: sectionthree;
`;

class Footer extends Component {
  render() {
    return (
      <Container>
        <SectionThreeContainer>Footer</SectionThreeContainer>
      </Container>
    );
  }
}

export default Footer;
