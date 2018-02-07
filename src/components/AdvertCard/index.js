import React from "react";
import styled from "styled-components";

const Cardcontainer = styled.div`
  background: #6ca516;
  border-radius: 4px;
  border-bottom: 8px solid #5e8a1c;
  box-shadow: 0 9px 16px 0 rgba(5, 2, 7, 0.35);
`;
const Cardlayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: minmax(300px, auto);
  grid-row-gap: 1em;
  margin-top: 28px;
`;

const CardContent = styled.div``;

const CardLabel = styled.div`
  display: grid;
  grid-template-columns: 78% 1fr;
  grid-column-start: 1;
  grid-column-end: 4;
  margin-left: 24px;
`;

const AdTextContianer = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
`;

const ConentContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  margin-top: 48px;
  margin-left: 24px;
  margin-right: 24px;
  margin-bottom: 24px;
`;

const SponsoredText = styled.p`
  font-family: Campton-Book;
  font-size: 12px;
  color: #fafafa;
  margin-top: 18px;
  margin-bottom: 0px;
`;

const SkipText = styled.p`
  /* Skip to Free lotto: */
  font-family: Campton-medium;
  font-size: 12px;
  color: #ffffff;
  letter-spacing: 0;
  line-height: 17px;
  margin-top: 18px;
  margin-bottom: 0px;
`;

const AdBonusText = styled.p`
  font-family: Campton-Book;
  font-size: 13px;
  color: #ffffff;
  letter-spacing: 0;
  line-height: 16px;
`;

const BonusBadge = styled.div`
  /* Rectangle 10: */
  background: #ffffff;
  border-radius: 4px;
  height: 21px;
  display: inline-block;
  padding: 3px;
`;
const AdText = styled.p`
  /* Like what you see do: */
  font-family: Campton-Book;
  font-size: 14px;
  color: #ffffff;
  letter-spacing: 0;
  line-height: 21px;
`;
const TermsConditions = styled.p`
  /* Terms and conditions: */
  font-family: Campton-ExtraLight;
  font-size: 12px;
  color: #ffffff;
  letter-spacing: 0;
  line-height: 21px;
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
const SkipAdContianer = styled.div`
  display: grid;
  grid-template-columns: 1fr 51px;
`;
const Next = styled.img``;
const NextContainer = styled.div`
  align-self: center;
  margin-top: 13px;
`;

const AdImage = styled.img``;
const BonusPointsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 30%;
`;

const TextContainer = styled.div`
  align-self: center;
`;
const BadgeContainer = styled.div`
  align-self: center;
  justify-self: end
  margin-bottom: 4px;

`;

const AdvertCard = ({ onClick }) => (
  <CardContent>
    <CardLabel>
      <div>
        <SponsoredText>Sponsored Ad</SponsoredText>
      </div>
      <SkipAdContianer>
        <SkipText onClick={onClick}>Skip to free Lotto</SkipText>
        <NextContainer>
          <Next src={require("./images/next.svg")} />
        </NextContainer>
      </SkipAdContianer>
    </CardLabel>
    <ConentContainer>
      <div>
        <div>
          <AdImage src={require("./images/img.svg")} />
        </div>
      </div>
      <AdTextContianer>
        <BonusPointsContainer>
          <TextContainer>
            <AdBonusText>Play this sponsord ad and earn</AdBonusText>
          </TextContainer>
          <BadgeContainer>
            <BonusBadge>
              <BonusFigure>+ N 50</BonusFigure>
            </BonusBadge>
          </BadgeContainer>
        </BonusPointsContainer>
        <div>
          <AdText>
            Like what you see dont wait For more information please vist Learn
            more.
          </AdText>
        </div>
        <div>
          <TermsConditions>Terms and conditions apply</TermsConditions>
        </div>
      </AdTextContianer>
    </ConentContainer>
  </CardContent>
);

export default AdvertCard;
