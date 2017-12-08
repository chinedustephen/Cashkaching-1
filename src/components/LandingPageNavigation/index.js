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

class LandingPageNavigation extends Component {
  render() {
    return (
      <div>
        <Nav>
          <BrandImg src={require("./images/logo.svg")} />
          <ListNavigation>
            <LandingNavLink to="/personalaccount" exact>
              Login
            </LandingNavLink>
          </ListNavigation>
          <ListNavigation>
            <Tablinks>Blog</Tablinks>
          </ListNavigation>
          <ListNavigation>
            <Tablinks>How it works</Tablinks>
          </ListNavigation>
          <ListNavigation>
            <Tablinks>For business</Tablinks>
          </ListNavigation>
          <ListNavigation>
            <Tablinks>How it works</Tablinks>
          </ListNavigation>
        </Nav>
      </div>
    );
  }
}

export default LandingPageNavigation;
