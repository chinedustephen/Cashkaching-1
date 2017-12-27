/**
 *
 * App - Lotto Main
 */
import React, { Component } from "react";
import styled from "styled-components";
import VoucherImg from "./images/VoucherImg.png";

const Cardcontainer = styled.div`
  background: #fafafa;
  border-radius: 4px;
  border-bottom: 8px solid #eee6e6;
  box-shadow: 0 9px 16px 0 rgba(5, 2, 7, 0.35);
  margin-bottom: 8px;
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
  background-color: #eee6e6;
`;

const AdTextContianer = styled.div`
  display: grid;
`;

const ConentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 50%;
`;

const TermsConditions = styled.p`
  font-family: Campton-Book;
  font-size: 14px;
  color: #000000;
  line-height: 24px;
  margin: 0;
`;

const CodeContainer = styled.div`
  background-color: #f95800;
`;

const CodeHeader = styled.p`
  font-family: Campton-Bold;
  font-size: 12px;
  color: #fdfdfd;
  letter-spacing: 0.87px;
`;

const CodeBox = styled.div`
  /* Rectangle 17: */

  border: 1px dashed #fafafa;
  border-radius: 4px;
  display: inline-block;
`;
const Code = styled.p`
  font-family: Campton-Bold;
  font-size: 32px;
  color: #323232;
  margin: 0;
`;

const CopyImg = styled.img``;
const HeaderText = styled.p`
  font-family: Campton-Book;
  font-size: 24px;
  color: #323232;
`;
const VoucherInfo = styled.p`
  /* ty somti: */
  font-family: Campton-Book;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.87);
`;
const Expiry = styled.p`
  /* Expires in 30 days Copy: */
  font-family: Campton-Book;
  font-size: 14px;
  color: #666666;
  line-height: 24px;
`;

const WebLink = styled.a`
  /* GO TO WEBSITE: */
  font-family: Campton-Medium;
  font-size: 14px;
  color: #009688;
`;
const ImgContainer = styled.div`
  background-image: url(${VoucherImg});
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
`;

class RedeemVoucherCard extends Component {
  render() {
    return (
      <Cardlayout>
        <Cardcontainer>
          <CardContent>
            <ConentContainer>
              <div>
                <ImgContainer />
              </div>
              <AdTextContianer>
                <CodeContainer>
                  <CodeHeader>YOUR VOUCHER CODE</CodeHeader>
                  <CodeBox>
                    <Code>113FSS52</Code>
                  </CodeBox>
                  <CopyImg src={require("./images/copy.svg")} />
                </CodeContainer>
                <div>
                  <HeaderText>
                    Can't wait? Get a Free £12 Takeaway Now
                  </HeaderText>
                  <VoucherInfo>
                    Located two hours south of Lagos in the Southern Highlands
                    of Kula region...
                  </VoucherInfo>
                </div>
                <div>
                  <Expiry>Expires in 30 days</Expiry>
                  <WebLink>GO TO WEBSITE</WebLink>
                </div>
              </AdTextContianer>
            </ConentContainer>
            <CardLabel>
              <TermsConditions>Terms and conditions apply</TermsConditions>
            </CardLabel>
          </CardContent>
        </Cardcontainer>
      </Cardlayout>
    );
  }
}

export default RedeemVoucherCard;
