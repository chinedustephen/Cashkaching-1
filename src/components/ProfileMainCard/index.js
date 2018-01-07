import React, { Component } from "react";
import styled from "styled-components";
import ProfileBk from "./images/ProfileBk.png";
import ProImg from "./images/ProImg.png";

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
  margin-bottom: 38px;
`;
const ContentTop = styled.div`
  display: grid;

  background-color: #6ca516;
  min-height: 144px;
  background-image: url(${ProfileBk});
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

const ProfileDetails = styled.div`
  margin-left: 24px;
`;
const BonusAmmount = styled.div`
  margin-left: 24px;
  margin-top: 4px;
`;
const BonusText = styled.p`
  /* BONUS AMOUNT: */
  font-family: Campton-Light;
  font-size: 8px;
  color: #fafafa;
  display: inline-block;
  margin-right: 8px;
`;
const Bonus = styled.p`
  /* N100: */
  font-family: Campton-Medium;
  font-size: 12px;
  color: #fafafa;
  margin-right: 30px;
  display: inline-block;
`;
const Status = styled.p`
  font-family: Campton-Light;
  font-size: 8px;
  color: #fafafa;
  margin-right: 8px;
  display: inline-block;
`;

const Tablet = styled.div`
  display: inline-block;
  background-color: #f27272;
  border-radius: 4px;
  font-family: Campton-Light;
  font-size: 8px;
  color: #fafafa;
  padding: 5px;
  display: inline-block;
`;
const ProfileImg = styled.div`
width: 72px;
height: 72px;
border-radius: 50%;
border: 3px solid #ffffff;
background-repeat: no-repeat;
  background-image: url(${ProImg});

}
`;
const ProfileContainer = styled.div`
  margin-left: 24px;
  display: grid;
  margin-top: 5px;
  grid-template-columns: 16% 50%;
`;
const ProfileName = styled.p`
  font-family: Campton-Light;
  font-size: 16px;
  color: #fafafa;
  letter-spacing: 0.29px;
  margin: 0px;
`;
const Rank = styled.p`
  font-family: Poppins-Medium;
  font-size: 16px;
  color: #212121;
  letter-spacing: 0.29px;
`;

const RankImg = styled.img`
  align-self: center;
`;
const Subheader = styled.p`
  font-family: Campton-Light;
  font-size: 8px;
  color: #202020;
  margin: 0px;
`;
const CashOutAmount = styled.p`
  /* N100, 000: */
  font-family: Campton-Book;
  font-size: 36px;
  color: #202020;
  margin-top: 0px;
  margin-bottom: 19px;
`;
const Button = styled.button`
  display: block;
  border: 0px;
  background: #f25500;
  border-radius: 4px;
  border-bottom: 3px solid #c44500;
  color: #ffffff;
  font-family: Campton-BoldDEMO;
  font-size: 12px;
  letter-spacing: 1.37px;
  width: 120px;
  height: 40px;
`;
const ProfileNameContainer = styled.div`
  align-self: center;
`;
const RankContianer = styled.div`
  display: grid;
  grid-template-columns: 20% 50%;
  margin-top: 14px;
`;

const ProfileMainCard = () => (
  <Cardlayout>
    <Cardcontainer>
      <CardContent>
        <ContentTop>
          <div>
            <BonusAmmount>
              <BonusText>BONUS AMMOUNT</BonusText>
              <Bonus>| N 100</Bonus>
              <Status>STATUS</Status>
              <Tablet>CASH OUT</Tablet>
            </BonusAmmount>
          </div>
          <div>
            <ProfileContainer>
              <ProfileImg />
              <ProfileNameContainer>
                <ProfileName>Gideon Kaduzra</ProfileName>
              </ProfileNameContainer>
            </ProfileContainer>
          </div>
        </ContentTop>
        <ProfileDetails>
          <RankContianer>
            <Rank>Diamond Rank</Rank>
            <RankImg src={require("./images/diamond.svg")} />
          </RankContianer>
          <Subheader>READY CASHOUT MONEY</Subheader>
          <CashOutAmount>N 100 000</CashOutAmount>
          <div>
            <Button>CashOut</Button>
          </div>
        </ProfileDetails>
      </CardContent>
    </Cardcontainer>
  </Cardlayout>
);

export default ProfileMainCard;
