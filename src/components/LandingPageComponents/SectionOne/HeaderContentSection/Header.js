import React from "react";
import styled from "styled-components";

const MainHeaderText = styled.h1`
  /* The first free lotto: */
  font-family: Campton-BoldDEMO;
  font-size: 44px;
  color: #f3f3f3;
  letter-spacing: 0.8px;
  line-height: 48px;
  margin-right: 77px;
  margin-top: 88px;
`;

const Header = props => <MainHeaderText>{props.landingheader}</MainHeaderText>;

export default Header;
