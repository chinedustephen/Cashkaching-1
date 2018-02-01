import React from "react";
import styled from "styled-components";
import ProImg from "./images/ProImg.png";

const Container = styled.div`
  display: grid;
  grid-template-columns: 80% 1fr;
`;
const ProfileContainer = styled.div`
  display: grid;
  grid-template-columns: 40% 1fr;
`;

const ProfileImg = styled.div`
width: 72px;
height: 72px;
border-radius: 50%;
border: 3px solid #ffffff;
background-repeat: no-repeat;
  background-image: url(${ProImg});

}`;

const EditName = styled.a`
  /* Add profile picture: */
  font-family: Campton-Book;
  font-size: 12px;
  color: #009688;
  letter-spacing: 0;
  line-height: 24px;
  margin: 0px;
`;
const ProfileNameContainer = styled.div`
  align-self: center;
`;
const Points = styled.p`
  /* + N10 Copy 4: */
  font-family: Campton-Bold;
  font-size: 12px;
  color: #ee452d;
  justify-self: end;
  align-self: center;
`;

const PointContainer = styled.div`
  display: grid;
`;

const ProPic = () => (
  <div>
    <Container>
      <div>
        <ProfileContainer>
          <ProfileImg />
          <ProfileNameContainer>
            <EditName>Edit profile picture</EditName>
          </ProfileNameContainer>
        </ProfileContainer>
      </div>
      <PointContainer>
        <Points>+10</Points>
      </PointContainer>
    </Container>
  </div>
);

export default ProPic;
