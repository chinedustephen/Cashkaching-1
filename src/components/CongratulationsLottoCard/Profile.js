import React from "react";
import styled from "styled-components";
import Dp from "./images/Dp.png";

const ProfileImg = styled.div`
  border-radius: 50%;
  width: 139.06px;
  height: 135.07px;
  background: #5e8a1c;

  justify-self: end;
  align-self: end;
  background-image: url(${Dp});
`;
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
`;
const ProfileCirlce = styled.div`
  border-radius: 50%;
  width: 139.06px;
  height: 135.07px;
  /* Oval 5 Copy 2: */
  opacity: 0.43;
  background: #5e8a1c;
`;

const Profile = () => (
  <Container>
    <ProfileCirlce />
    <ProfileImg />
  </Container>
);

export default Profile;
