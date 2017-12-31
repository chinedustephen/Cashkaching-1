import React from "react";
import styled from "styled-components";
import FooterBrandImg from "./BrandImg";
import BlogSnippet from "./Blog";
import FooterNote from "./Footnote";

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

const LinksContainer = styled.div`
  display: grid;
  grid-template-columns: 20% 20% 20% 1fr;
`;

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

const Footer = () => (
  <Container>
    <SectionThreeContainer>
      <FooterBrandImg />
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
          <BlogSnippet />
        </div>
      </LinksContainer>
      <FooterNote />
    </SectionThreeContainer>
  </Container>
);

export default Footer;
