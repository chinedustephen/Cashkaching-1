/**
 *
 * App - Lotto Main
 */
import React from "react";
import styled from "styled-components";
import VoucherImg from "./images/VoucherImg.png";

const Cardcontainer = styled.div`
  background: #fafafa;
  border-radius: 4px;
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
  background-color: #eee6e6;
  display: grid;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;

const AdTextContianer = styled.div`
  display: grid;
`;

const ConentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 50%;
`;

const TermsConditions = styled.p`
  font-family: Campton-ExtraLight;
  font-size: 13px;
  color: #000000;
  line-height: 24px;
  margin: 0;
  justify-self: end;
  margin-right: 24px;
`;

const CodeContainer = styled.div`
  background-color: #f95800;
`;

const CodeHeader = styled.p`
  font-family: Campton-Bold;
  font-size: 12px;
  color: #fdfdfd;
  letter-spacing: 0.87px;
  margin-left: 14px;
  margin-top: 38px;
`;

const CodeBox = styled.div`
  /* Rectangle 17: */

  border: 1px dashed #fafafa;
  border-radius: 4px;
  display: inline-block;
  margin-left: 14px;
  padding-left: 30px;
  padding-right: 30px;
  margin-bottom: 14px;
  margin-top: 14px;
  margin-right: 10px;
`;
const Code = styled.p`
  font-family: Campton-Bold;
  font-size: 32px;
  color: #323232;
  margin: 0;
  margin-top: 3px;
  margin-right: 24px;
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
const LinksContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  align-items: center;
  padding-left: 14px;
  padding-right: 14px;
`;
const DetailsContainer = styled.div`
  padding-left: 14px;
  padding-right: 14px;
`;
const WebLinkContianer = styled.div`
  justify-self: center;
`;

const RedeemVoucherCard = () => (
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
            <DetailsContainer>
              <HeaderText>Can't wait? Get a Free £12 Takeaway Now</HeaderText>
              <VoucherInfo>
                Located two hours south of Lagos in the Southern Highlands of
                Kula region...
              </VoucherInfo>
            </DetailsContainer>
            <LinksContainer>
              <Expiry>Expires in 30 days</Expiry>
              <WebLinkContianer>
                <WebLink>GO TO WEBSITE</WebLink>
              </WebLinkContianer>
            </LinksContainer>
          </AdTextContianer>
        </ConentContainer>
        <CardLabel>
          <TermsConditions>Terms and conditions apply</TermsConditions>
        </CardLabel>
      </CardContent>
    </Cardcontainer>
  </Cardlayout>
);

export default RedeemVoucherCard;
