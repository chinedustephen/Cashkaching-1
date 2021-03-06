/**
 *
 * App - Lotto Main
 */
import React, { Component } from "react";
import styled from "styled-components";
import Profile from "../Profile";

const Mainpanel = styled.div`
  @media only screen and (max-width: 1000px) {
    grid-auto-columns: minmax(700px, auto);
    width: 724px;
  }
`;

class ProfilePage extends Component {
  render() {
    return (
      <div>
        <Mainpanel>
          <Profile />
        </Mainpanel>
      </div>
    );
  }
}

export default ProfilePage;
