/**
 *
 * App - Navigation
 */
import React, { Component } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const Nav = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #6ca516;
  height: 78px;
  @media only screen and (max-width: 500px) {
    height: 30px;
    margin-top: 8px;
  }
`;

const ListNavigation = styled.li`
  float: left;
  margin-top: 37px;
  margin-right: 8px;
  @media only screen and (max-width: 500px) {
    margin-top: 0;
  }
`;
const Tablinks = styled(NavLink)`
  display: block;
  text-align: center;
  padding: 14px 16px;
  font-family: Campton-BoldDEMO;
  font-size: 12px;
  color: #ffffff;
  letter-spacing: 0.16px;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  &:hover {
    background-color: #5e8a1c;
    /* Rectangle 20: */
  }
  &.active {
    background-color: #5e8a1c;
  }
`;

const Logout = styled(Link)`
  float: right;
  font-family: Roboto-Regular;
  font-size: 14px;
  color: #ffffff;
  line-height: 20px;
  margin-top: 25px;
  margin-right: 63px;
  @media only screen and (max-width: 500px) {
    padding-top: 30px;
    padding-right: 13px;
    margin: 0;
  }
`;

const NavBackground = styled.div`
  display: grid;
  grid-template-columns: 21% 1fr 1fr;
  background-color: #6ca516;
  @media only screen and (max-width: 500px) {
    grid-template-columns: 50% 50% 1fr;
    height: 93px;
  }
`;

const NavBrandContainer = styled.div`
  padding-top: 19px;
  padding-left: 34px;
  @media only screen and (max-width: 500px) {
    padding-top: 18px;
    padding-left: 13px;
  }
`;
const NavMainContainer = styled.div`
  padding-left: 4px;
  @media only screen and (max-width: 500px) {
    grid-column-start: 1;
    grid-column-end: 4;
  }
`;
const NavLogoutcontainer = styled.div`
  grid-row: 1;
  grid-column: 3 / 4;
  @media only screen and (max-width: 500px) {
    grid-row: 1;
    grid-column: 2 / 3;
  }
`;

const Brandimg = styled.img`
  @media only screen and (max-width: 500px) {
    width: 69px;
  }
`;

class Navigation extends Component {
  render() {
    return (
      <div>
        <NavBackground>
          <NavBrandContainer>
            <Brandimg src={require("./images/Logo.png")} />
          </NavBrandContainer>
          <NavLogoutcontainer>
            <Logout to="/landingPage">Logout</Logout>
          </NavLogoutcontainer>
          <NavMainContainer>
            <Nav>
              <ListNavigation>
                <Tablinks to="/personalaccount" exact>
                  Lotto
                </Tablinks>
              </ListNavigation>
              <ListNavigation>
                <Tablinks to="/personalaccount/vouchers">Vouchers</Tablinks>
              </ListNavigation>
              <ListNavigation>
                <Tablinks to="/personalaccount/profilepage">Profile</Tablinks>
              </ListNavigation>
            </Nav>
          </NavMainContainer>
        </NavBackground>
      </div>
    );
  }
}

export default Navigation;
