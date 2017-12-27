/**
 *
 * App - Lotto Main
 */
import React, { Component } from "react";
import styled from "styled-components";
import Ad from "./images/AdImg.png";

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
  grid-column-start: 1;
  grid-column-end: 4;
`;

const AdTextContianer = styled.div`
  display: grid;
`;

const ConentContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
`;

const SponsoredText = styled.p`
  font-family: Campton-Book;
  font-size: 12px;
  color: #fafafa;
`;

const SkipText = styled.p`
  /* Skip to Free lotto: */
  font-family: Campton-medium;
  font-size: 12px;
  color: #ffffff;
  letter-spacing: 0;
  line-height: 17px;
`;
const AdCounter = styled.p`
  font-family: Campton-Book;
  font-size: 12px;
  color: #fafafa;
  letter-spacing: 0.16px;
`;

const AdImgTest = styled.div`
  width: 281px;
  height: 221px;
  background: #6ca516;
  background-image: url(${Ad});
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
`;

class AdvertCard extends Component {
  render() {
    return (
      <Cardlayout>
        <Cardcontainer>
          <CardContent>
            <CardLabel>
              <div>
                <SponsoredText>Sponsored Ad</SponsoredText>
              </div>
              <div>
                <SkipText>Skip to free Lotto</SkipText>
              </div>
            </CardLabel>
            <ConentContainer>
              <div>
                <div>
                  counter
                  <AdCounter>0:15</AdCounter>
                </div>
                <div>
                  <AdImgTest />
                </div>
              </div>
              <AdTextContianer>
                <div>
                  <AdBonusText>Play this sponsord ad and earn</AdBonusText>
                  <BonusBadge>
                    <BonusFigure>+ N 50</BonusFigure>
                  </BonusBadge>
                </div>
                <div>
                  <AdText>
                    Like what you see dont wait For more information please vist
                    Learn more.
                  </AdText>
                </div>
                <div>
                  <TermsConditions>Terms and conditions apply</TermsConditions>
                </div>
              </AdTextContianer>
            </ConentContainer>
          </CardContent>
        </Cardcontainer>
      </Cardlayout>
    );
  }
}

export default AdvertCard;
