import React from "react";
import styled from "styled-components";

const ExtraContainer = styled.div``;

const ExtraText = styled.p`
  font-family: Campton-ExtraLight;
  font-size: 16px;
  color: #fafafa;
  letter-spacing: 0;
`;

const FooterNote = () => (
  <ExtraContainer>
    <ExtraText>@ NaijaFreeLotto, LLC. All Rights Reserved</ExtraText>
  </ExtraContainer>
);

export default FooterNote;
