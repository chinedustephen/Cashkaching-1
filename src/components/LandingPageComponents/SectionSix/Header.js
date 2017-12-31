import React from "react";
import styled from "styled-components";

const P = styled.p`
  font-family: Campton-Bold;
  font-size: 20px;
  color: #ffffff;
  margin-left: 75px;
`;

const HeaderContainer = styled.div`
  grid-column-end: span 3;
`;

const Header = props => (
  <HeaderContainer>
    <P>{props.sectionheader} </P>
  </HeaderContainer>
);

export default Header;
