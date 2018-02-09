import React from "react";
import styled from "styled-components";
import Dp from "./images/Dp.png";
import Button from "./CashOutButton";

const ProfileImg = styled.div`
  border-radius: 50%;
  width: 139.06px;
  height: 135.07px;

  justify-self: end;
  align-self: end;
  background-image: url(${Dp});
  grid-row-start: 1;
  z-index: 2;
  grid-column-start: 1;
  margin-top: 23px;
`;
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
`;

const ProfileCirlce = styled.div.attrs({
  // we can define static props

  // or we can define dynamic ones
  background: props => props.bglabel
})`
  border-radius: 50%;
  width: 139.06px;
  height: 135.07px;
  /* Oval 5 Copy 2: */
  opacity: 0.43;
  grid-row-start: 1;
  z-index: 1;
  grid-column-start: 1;

  /* here we use the dynamically computed props */
  background: ${props => props.background};
`;

const ButtonContainer = styled.div`
  justify-self: center;
  margin-top: 17px;
`;

const Profile = props => (
  <Container>
    <ProfileCirlce bglabel={props.bglabel} />
    <ProfileImg />
    <ButtonContainer>
      <Button name="CASH OUT" />
    </ButtonContainer>
  </Container>
);

export default Profile;
