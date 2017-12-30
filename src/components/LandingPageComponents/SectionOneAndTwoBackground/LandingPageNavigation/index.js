import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import BrandLogo from "./BrandLogo";

const Nav = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;

  margin-right: 112px;
`;

const ListNavigation = styled.li`
  float: right;
`;

const Tablinks = styled.a`
  display: block;
  font-family: Roboto-Medium;
  font-size: 14px;
  color: #212121;
  letter-spacing: 0.78px;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  margin-top: 16px;
  &:hover {
    border-bottom: 3px solid #5e8a1c;
  }
`;
const LandingNavLink = styled(NavLink)`
  display: block;
  font-family: Roboto-Medium;
  font-size: 14px;
  color: #212121;
  letter-spacing: 0.78px;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  margin-top: 16px;
  &:hover {
    border-bottom: 3px solid #5e8a1c;
  }
`;

const LandingLinks = {
  Login: {
    link: "/personalaccount",
    text: "Login"
  }
};

const Links = [
  {
    id: 1,
    link: "/personalaccount",
    text: "Blog"
  },
  {
    id: 2,
    link: "/personalaccount",
    text: "How it works"
  },
  {
    id: 3,
    link: "/personalaccount",
    text: "For Business"
  }
];

const NavItems = Links.map(list => (
  <ListNavigation key={list.id}>
    <Tablinks>{list.text}</Tablinks>
  </ListNavigation>
));

const LandingPageNavigation = () => (
  <div>
    <Nav>
      <BrandLogo />
      <ListNavigation>
        <LandingNavLink to={LandingLinks.Login.link} exact>
          {LandingLinks.Login.text}
        </LandingNavLink>
      </ListNavigation>
      {NavItems}
    </Nav>
  </div>
);

export default LandingPageNavigation;
