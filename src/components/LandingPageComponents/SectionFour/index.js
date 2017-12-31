import React from "react";
import styled from "styled-components";
import Paragraph from "./P";
import Header from "./Header";
import GiftImg from "./images/RewardBox.svg";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 83% 1fr;
  grid-template-areas: ". sectionthree .";
  background-color: #6ca516;
`;

const SectionThreeContainer = styled.div`
  display: grid;
  grid-template-columns: 427px 1fr;
  grid-area: sectionthree;
  margin-bottom: 164px;
  margin-top: 112px;
`;

const ContentContainer = styled.div`
  display: grid;
`;

const HeaderContainer = styled.div``;
const ImgContainer = styled.div`
  justify-self: end;
  align-self: end;
`;
const Img = styled.img``;

const SectionFourConent = {
  paragraph: {
    text:
      "You may be wondering how we are able to give away money for free - it's simple. The companies who advertise on our platform pay us. When you win, we pay you. Winners have 24 hours to claim and it is essential to check your account on a daily basis. As our players increase so do our daily cash prizes. £10 bonus is added to your account every time you enter a draw and a double bonus is given every time a friend registers as a result of your referral. Be sure to share this page so that the cash draw is at its peak when your lucky day comes! Check Rules and FAQs for more information"
  }
};

const SectionFour = () => (
  <Container>
    <SectionThreeContainer>
      <ContentContainer>
        <HeaderContainer>
          <Header header="NOT CONVINCED" />
        </HeaderContainer>
        <HeaderContainer>
          <Paragraph paragraphFour={SectionFourConent.paragraph.text} />
        </HeaderContainer>
      </ContentContainer>
      <ImgContainer>
        <Img src={GiftImg} />
      </ImgContainer>
    </SectionThreeContainer>
  </Container>
);

export default SectionFour;
