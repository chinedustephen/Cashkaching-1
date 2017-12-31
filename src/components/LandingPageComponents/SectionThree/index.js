import React from "react";
import styled from "styled-components";
import Circle from "./Circle.js";
import Launch from "./images/Launch.svg";
import Voucher from "./images/Vouchers.svg";
import Money from "./images/Money.svg";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 83% 1fr;
  grid-template-areas: ". sectionthree .";
  background-color: #6ca516;
`;
const SectionThreeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-area: sectionthree;
  height: 80px
  background-color: blue;
`;

const ItemsContainer1 = styled.div``;
const ItemsContainer2 = styled.div`
  justify-self: center;
`;
const ItemsContainer3 = styled.div`
  justify-self: end;
`;

const CircleContent = {
  Launch: {
    text: "test 1"
  },
  Voucher: {
    text: "test 2"
  },
  Money: {
    text: "test 3"
  }
};

const SectionThree = () => (
  <Container>
    <SectionThreeContainer>
      <ItemsContainer1>
        <Circle icon={Launch} text={CircleContent.Launch.text} />
      </ItemsContainer1>
      <ItemsContainer2>
        <Circle icon={Voucher} text={CircleContent.Voucher.text} />
      </ItemsContainer2>
      <ItemsContainer3>
        <Circle icon={Money} text={CircleContent.Money.text} />
      </ItemsContainer3>
    </SectionThreeContainer>
  </Container>
);

export default SectionThree;
