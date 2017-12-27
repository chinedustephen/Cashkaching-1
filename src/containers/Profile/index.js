/**
 *
 * App - Lotto Main
 */

import React, { Component } from "react";
import styled from "styled-components";
import ProfileNavigation from "../../components/ProfileNavigation";
import ProfileMain from "../ProfileMain";
import Badges from "../Badges";
import Activity from "../Activity";
import Settings from "../Settings";
import BonusNaira from "../../components/BonusNaira";
import { Switch, Route } from "react-router-dom";

const Mainpanel = styled.div`
  margin-top: 30px;
  @media only screen and (max-width: 1000px) {
    grid-auto-columns: minmax(700px, auto);
    width: 724px;
  }
  @media only screen and (max-width: 500px) {
    width: 381px;
  }
`;

class Profile extends Component {
  render() {
    return (
      <div>
        <Mainpanel>
          <BonusNaira />

          <ProfileNavigation />

          <Switch>
            <Route
              path="/personalaccount/profile"
              exact
              component={ProfileMain}
            />
            <Route path="/personalaccount/profile/badges" component={Badges} />
            <Route
              path="/personalaccount/profile/activity"
              component={Activity}
            />
            <Route
              path="/personalaccount/profile/settings"
              component={Settings}
            />
          </Switch>
        </Mainpanel>
      </div>
    );
  }
}

export default Profile;
