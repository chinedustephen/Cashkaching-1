/**
 *
 * App - Lotto Main
 */
import React from "react";
import styled from "styled-components";
import Congratulations from "./Congratulations";
import Profile from "./Profile";
import AwardDetails from "./AwardDetails";
import CardLabel from "../CardLabel";

const Cardcontainer = styled.div.attrs({
  // we can define static props

  // or we can define dynamic ones
  background: props => props.bg,
  borderbottom: props => props.brb
})`
  border-radius: 4px;
  border-bottom-style: solid;
  border-bottom: 8px;
  box-shadow: 0 9px 16px 0 rgba(5, 2, 7, 0.35);

  /* here we use the dynamically computed props */
  background: ${props => props.background};
  border-bottom: ${props => props.borderbottom};
`;

const Cardlayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: minmax(300px, auto);
  grid-row-gap: 1em;
  margin-top: 28px;
`;

const CardContent = styled.div`
  display: grid;
  justify-items: center;
  margin-bottom: 24px;
`;

const WinnerContainer = styled.div`
  display: grid;
  grid-template-columns: 25% 75%;
  grid-row-start: 1;
  grid-column-start: 1;
  z-index: 2;
  margin-top: 85px;
`;

const ConentContainer = styled.div`
  display: grid;
`;
const CongratulationsContainer = styled.div`
  grid-row-start: 1;
  grid-column-start: 1;
  z-index: 1;
`;

const CongratulationsLottoCard = props => (
  <Cardlayout>
    <Cardcontainer bg={props.bg} brb={props.brb}>
      <CardLabel cardLabel={props.cardLabel} bglabel={props.bglabel} />
      <CardContent>
        <ConentContainer>
          <CongratulationsContainer>
            <Congratulations />
          </CongratulationsContainer>
          <WinnerContainer>
            <div>
              <Profile bglabel={props.bglabel} />
            </div>
            <div>
              <AwardDetails bglabel={props.bglabel} ammount={props.ammount} />
            </div>
          </WinnerContainer>
        </ConentContainer>
      </CardContent>
    </Cardcontainer>
  </Cardlayout>
);

export default CongratulationsLottoCard;
