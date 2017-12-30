/**
 *
 * App - Navigation
 */
import React, { Component } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

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
const BrandImg = styled.img`
  margin-left: 128px;
  margin-top: 18px;
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
    background-color: red;
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
    background-color: red;
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

console.log(Content);

const LandingPageNavigation = () => (
  <div>
    <Nav>
      <BrandImg src={require("./images/logo.svg")} />
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
