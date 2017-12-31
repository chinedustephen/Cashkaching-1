import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div``;
const Header = styled.div`
  font-family: Campton-Bold;
  font-size: 20px;
  color: #ffffff;
`;

const SectionHeader = props => (
  <HeaderContainer>
    <Header>{props.header}</Header>
  </HeaderContainer>
);

export default SectionHeader;
