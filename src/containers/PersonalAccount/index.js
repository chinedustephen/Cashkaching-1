/**
 *
 * App - Personal Dashboard
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */
import React from "react";
import Navigation from "../../components/Navigation";
import Lotto from "../LottoPage";
import Vouchers from "../VoucherPage";
import ProfilePage from "../ProfilePage";

import { Route, Switch, Redirect } from "react-router-dom";
import styled from "styled-components";

const Aside = styled.div`
  @media only screen and (max-width: 1000px) {
    div {
      display: none;
    }
  }
`;

const Adplacement = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: minmax(400px, auto);
  margin-top: 3em;
  margin-bottom: 2em;
`;
const Contentwrapper = styled.div`
  display: grid;
  grid-template-columns: 20% 57.5% 20%;
  grid-column-gap: 1em;
  @media only screen and (max-width: 1000px) {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;

const PersonalAccount = props => {
  return (
    <div>
      <Navigation />
      <Contentwrapper>
        <Aside>
          <Adplacement>ads here</Adplacement>
          <Adplacement>ads here</Adplacement>
        </Aside>
        <Switch>
          <Route path="/personalaccount" exact component={Lotto} />
          <Route path="/personalaccount/vouchers" component={Vouchers} />
          <Route path="/personalaccount/profile" component={ProfilePage} />
          <Redirect to="/personalaccount" />
        </Switch>
        <Aside>
          <Adplacement>ads here</Adplacement>
          <Adplacement>ads here</Adplacement>
        </Aside>
      </Contentwrapper>
    </div>
  );
};

export default PersonalAccount;
