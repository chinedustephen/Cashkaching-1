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

const BrandContainer = styled.div`
  align-self: center;
`;
const LinksContainer = styled.div`
  display: grid;
  grid-template-columns: 20% 20% 20% 1fr;
`;
const ExtraContainer = styled.div``;
const HeaderLink = styled.p`
  font-family: Campton-Bold;
  font-size: 16px;
  color: #fafafa;
`;

const ListItem = styled.li`
  font-family: Campton-Medium;
  font-size: 16px;
  color: #fafafa;
  text-decoration: none;
`;
const Listcontainer = styled.ul`
  list-style: none;
  padding-left: 0px;
`;
const ExtraText = styled.p`
  font-family: Campton-ExtraLight;
  font-size: 16px;
  color: #fafafa;
  letter-spacing: 0;
`;
const BrandImg = styled.img``;
const Latest = styled.div``;
const HeaderLine = styled.div`
  border-bottom: 5px solid #eee6e6;
`;
const LatestHeader = styled.p`
  font-family: Campton-Bold;
  font-size: 16px;
  color: #fafafa;
  letter-spacing: 0.89px;
`;
const BlogName = styled.p`
  font-family: Campton-Medium;
  font-size: 24px;
  color: #fafafa;
  line-height: 28px;
`;

class Footer extends Component {
  render() {
    return (
      <Container>
        <SectionThreeContainer>
          <BrandContainer>
            <BrandImg src={require("./images/FooterLogo.svg")} />
          </BrandContainer>
          <LinksContainer>
            <div>
              <HeaderLink>NFL SERVICES</HeaderLink>
              <Listcontainer>
                <ListItem>Business ads</ListItem>
                <ListItem>Lottery</ListItem>
                <ListItem>Ads</ListItem>
              </Listcontainer>
            </div>
            <div>
              <HeaderLink>COMPANY</HeaderLink>
              <Listcontainer>
                <ListItem>How it works</ListItem>
                <ListItem>About us</ListItem>
                <ListItem>Blog</ListItem>
              </Listcontainer>
            </div>
            <div>
              <HeaderLink>LEGAL</HeaderLink>
              <Listcontainer>
                <ListItem>Terms</ListItem>
                <ListItem>Legal</ListItem>
              </Listcontainer>
            </div>
            <div>
              <Latest>
                <HeaderLine>
                  <LatestHeader>Lattest Blog Post</LatestHeader>
                </HeaderLine>
                <BlogName>Hello Nijeria...</BlogName>
              </Latest>
            </div>
          </LinksContainer>
          <ExtraContainer>
            <ExtraText>@ NaijaFreeLotto, LLC. All Rights Reserved</ExtraText>
          </ExtraContainer>
        </SectionThreeContainer>
      </Container>
    );
  }
}

export default Footer;
