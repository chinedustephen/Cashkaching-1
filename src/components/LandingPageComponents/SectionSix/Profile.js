import React from "react";
import styled from "styled-components";
//import Prof from "./images/Prof.png";

const ProfileImg = styled.img`
  border-radius: 50%;
  width: 288px;
  height: 288px;
  background: #5e8a1c;
  grid-column-start: 1;
  grid-row-start: 1;
  z-index: 2;
  justify-self: end;
  align-self: end;
`;
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  width: 352px;
  height: 334px;
`;
const ProfileCirlce = styled.div`
  border-radius: 50%;
  width: 288px;
  height: 288px;
  /* Oval 5 Copy 2: */
  opacity: 0.43;
  background: #5e8a1c;
  grid-column-start: 1;
  grid-row-start: 1;
  z-index: 1;
`;
const ProfileImageContainer = styled.div``;

const Profile = props => (
  <ProfileImageContainer>
    <Container>
      <ProfileCirlce />
      <ProfileImg src={props.recentWinnerImg} />
    </Container>
  </ProfileImageContainer>
);

export default Profile;
