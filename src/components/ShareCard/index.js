import React, { Component } from "react";
import styled from "styled-components";

const Cardcontainer = styled.div`
  display: grid;
  background: #ef8a17;
  border-radius: 4px;
  border-bottom: 8px solid #cd740e;
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

const ContentContianer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
`;

const BonusEarnings = styled.p`
  /* One time sharing bon: */
  font-family: Campton-Light;
  font-size: 16px;
  color: #ffffff;
  letter-spacing: 0;
  line-height: 21px;
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
  background: #e99c45;
  border: 1px dashed #fafafa;
  border-radius: 4px;
`;
const ShareLink = styled.p`
  font-family: Roboto-Regular;
  font-size: 12px;
  color: #fafafa;
  letter-spacing: 0.16px;
`;

const Terms = styled.p`
  font-family: Campton-light;
  font-size: 12px;
  color: #ffffff;
  line-height: 24px;
`;

const ShareImg = styled.img``;

class ShareCard extends Component {
  render() {
    return (
      <Cardlayout>
        <Cardcontainer>
          <CardContent>
            <ContentContianer>
              <div>
                <ShareImg src={require("./images/ShareImg.svg")} />
              </div>
              <div>
                <div>
                  <BonusEarnings>One time share bonus</BonusEarnings>
                </div>
                <div>
                  <Header>Share the fun</Header>
                </div>
                <div>
                  <Txt>
                    By sharing with your friends you get a one time sharing and
                    a life time bonus points on any bonus they make.What are you
                    waiting for, Lets get sharing.
                  </Txt>
                </div>
                <div>
                  <CopyText>
                    Copy link below or go share using the links below
                  </CopyText>
                  <ShareContainer>
                    <ShareLink>http://nftletsshare.com/gideon</ShareLink>
                  </ShareContainer>
                </div>
              </div>
            </ContentContianer>
            <div>
              <div>
                <Terms>terms conditions</Terms>
              </div>
              <div>arrow img</div>
            </div>
          </CardContent>
        </Cardcontainer>
      </Cardlayout>
    );
  }
}

export default ShareCard;
