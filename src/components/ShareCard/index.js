import React from "react";
import styled from "styled-components";
import SharedImg from "./images/ShareImg.svg";

const CardContent = styled.div`
  display: grid;
`;

const ContentContianer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  margin: 24px;
`;

const Header = styled.p`
  /* SHARE THE FUN: */
  font-family: Campton-Bold;
  font-size: 20px;
  color: #fafafa;
  letter-spacing: 1.45px;
`;

const Txt = styled.p`
  /* By sharing with your: */
  font-family: Campton-Book;
  font-size: 16px;
  color: #fafafa;
  letter-spacing: 0.21px;
`;
const CopyText = styled.p`
  font-family: Campton-Book;
  font-size: 10px;
  color: #fafafa;
  letter-spacing: 0.13px;
`;
const ShareContainer = styled.div`
  /* Rectangle 17: */
  background: #5e8a1c;
  border: 1px dashed #fafafa;
  border-radius: 4px;
  width: 254px;
  padding-left: 25px;
`;
const ShareLink = styled.p`
  font-family: Roboto-Regular;
  font-size: 12px;
  color: #fafafa;
  letter-spacing: 0.16px;
`;

const ShareImg = styled.img``;
const BonusPointsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 30%;
`;
const TextContainer = styled.div`
  align-self: center;
`;
const AdBonusText = styled.p`
  font-family: Campton-ExtraLight;
  font-size: 13px;
  color: #ffffff;
  letter-spacing: 0;
  line-height: 16px;
`;
const BadgeContainer = styled.div`
  align-self: center;
  justify-self: end
  margin-bottom: 4px;

`;
const BonusBadge = styled.div`
  /* Rectangle 10: */
  background: #ffffff;
  border-radius: 4px;
  height: 21px;
  display: inline-block;
  padding: 3px;
`;
const BonusFigure = styled.p`
  font-family: Campton-Medium;
  font-size: 10px;
  color: #000000;
  letter-spacing: 0.13px;
  margin: 0px;
  margin-top: 5px;
  margin-left: 5px;
  margin-right: 5px;
`;
const ImgContainer = styled.div`
  justify-self: center;
  align-self: center;
`;

const ShareCard = () => (
  <CardContent>
    <ContentContianer>
      <ImgContainer>
        <ShareImg src={SharedImg} />
      </ImgContainer>
      <div>
        <div>
          <BonusPointsContainer>
            <TextContainer>
              <AdBonusText>One time sharing bonus naira</AdBonusText>
            </TextContainer>
            <BadgeContainer>
              <BonusBadge>
                <BonusFigure>+ N 50</BonusFigure>
              </BonusBadge>
            </BadgeContainer>
          </BonusPointsContainer>
        </div>
        <div>
          <Header>Share the fun</Header>
        </div>
        <div>
          <Txt>
            By sharing with your friends you get a one time sharing and a life
            time bonus points on any bonus they make.What are you waiting for,
            Lets get sharing.
          </Txt>
        </div>
        <div>
          <CopyText>Copy link below or go share using the links below</CopyText>
          <ShareContainer>
            <ShareLink>http://nftletsshare.com/gideon</ShareLink>
          </ShareContainer>
        </div>
      </div>
    </ContentContianer>
  </CardContent>
);

export default ShareCard;
