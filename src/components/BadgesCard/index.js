import React from "react";
import styled from "styled-components";
import Badge from "./Badge";
import ModalBadge from "./Modal";

const Cardcontainer = styled.div`
  display: grid;
  background: #fafafa;
  border-radius: 4px;
  border-bottom: 8px solid #eee6e6;
  box-shadow: 0 9px 16px 0 rgba(5, 2, 7, 0.35);
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
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 35% 35% 20%;
  justify-items: center;
  align-items: center;
`;

const BadgesCard = props => (
  <Cardlayout>
    <Cardcontainer>
      <CardContent>
        <ModalBadge onClick={props.onClick} />
      </CardContent>
    </Cardcontainer>
  </Cardlayout>
);

export default BadgesCard;
