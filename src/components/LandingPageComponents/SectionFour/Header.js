import React from "react";
import styled from "styled-components";

const P = styled.p`
  font-family: Campton-Bold;
  font-size: 32px;
  color: #ffffff;
  letter-spacing: 0;
`;
const Header = props => <P>{props.header}</P>;

export default Header;
