import React, { Component } from "react";
import styled from "styled-components";
import Circles from "./images/Circles.svg";

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
	}
`;

const ItemsContainer1 = styled.div``;
const ItemsContainer2 = styled.div`
  justify-self: center;
`;
const ItemsContainer3 = styled.div`
  justify-self: end;
`;

const Icon = styled.img`
  margin-top: 71px;
  margin-left: 116px;
`;
const CircleContainer = styled.div`
  background-image: url(${Circles});
  background-repeat: no-repeat;
  height: 233px;
  width: 252px;
`;

const LottoText = styled.p`
  font-family: Campton-Medium;
  font-size: 14px;
  color: #ffffff;
  letter-spacing: 0.78px;
  line-height: 15px;
  width: 179px;
  text-align: center;
  margin-left: 57px;
  margin-top: 31px;
`;

class SectionThree extends Component {
  render() {
    return (
      <Container>
        <SectionThreeContainer>
          <ItemsContainer1>
            <CircleContainer>
              <Icon src={require("./images/Launch.svg")} />
              <LottoText>PLAY THE LOTTO DRAWS FOR FREE</LottoText>
            </CircleContainer>
          </ItemsContainer1>
          <ItemsContainer2>
            <CircleContainer>
              <Icon src={require("./images/Vouchers.svg")} />
              <LottoText>GET DEALS, COUPONS AND MORE FOR FREE</LottoText>
            </CircleContainer>
          </ItemsContainer2>
          <ItemsContainer3>
            <CircleContainer>
              <Icon src={require("./images/Money.svg")} />
              <LottoText>
                GET PAID TO ANSWER QUESTIONS AND WATCH VIDEOS
              </LottoText>
            </CircleContainer>
          </ItemsContainer3>
        </SectionThreeContainer>
      </Container>
    );
  }
}

export default SectionThree;
