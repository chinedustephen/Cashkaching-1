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
`;
const ContentTop = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  background-color: #6ca516;
  min-height: 144px;
  background-image: url(${ProfileBk});
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

const ProfileDetails = styled.div``;
const BonusAmmount = styled.div``;
const BonusText = styled.p`
  /* BONUS AMOUNT: */
  font-family: Campton-Light;
  font-size: 8px;
  color: #fafafa;
`;
const Bonus = styled.p`
  /* N100: */
  font-family: Campton-Medium;
  font-size: 12px;
  color: #fafafa;
`;
const Status = styled.p`
  font-family: Campton-Light;
  font-size: 8px;
  color: #fafafa;
`;

const Tablet = styled.div`
  display: inline-block;
  background-color: #f27272;
  border-radius: 4px;
  font-family: Campton-Light;
  font-size: 8px;
  color: #fafafa;
  padding: 5px;
`;
const ProfileImg = styled.div`
width: 72px;
height: 72px;
border-radius: 50%;
background-repeat: no-repeat;
  background-image: url(${ProImg});

}
`;
const ProfileContainer = styled.div`
  width: 72px;
  height: 72px;
`;
const ProfileName = styled.p`
  font-family: Campton-Light;
  font-size: 16px;
  color: #fafafa;
  letter-spacing: 0.29px;
`;
const Rank = styled.p`
  font-family: Poppins-Medium;
  font-size: 16px;
  color: #212121;
  letter-spacing: 0.29px;
`;

const RankImg = styled.img``;
const Subheader = styled.p`
  font-family: Campton-Light;
  font-size: 8px;
  color: #202020;
`;
const CashOutAmount = styled.p`
  /* N100, 000: */
  font-family: Campton-Book;
  font-size: 36px;
  color: #202020;
`;
const Button = styled.button`
  display: block;
  border: 0px;
  background: #f25500;
  border-radius: 8px;
  border-bottom: 3px solid #c44500;
  color: #ffffff;
  font-family: Campton-BoldDEMO;
  font-size: 12px;
  letter-spacing: 1.37px;
  width: 120px;
  height: 40px;
`;

class ProfileMainCard extends Component {
  render() {
    return (
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
                  <ProfileName>Gideon Kaduzra</ProfileName>
                </ProfileContainer>
              </div>
            </ContentTop>
            <ProfileDetails>
              <div>
                <Rank>Diamond Rank</Rank>
                <RankImg src={require("./images/Rank.svg")} />
              </div>
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
  }
}

export default ProfileMainCard;
