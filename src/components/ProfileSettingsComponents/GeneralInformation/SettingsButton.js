import React from "react";
import styled from "styled-components";

const ButtonLanding = styled.button`
  display: block;
  border: 0px;
  background: #f25500;
  border-radius: 5px;
  border-bottom: 3px solid #c44500;
  color: #ffffff;
  font-family: Campton-BoldDEMO;
  font-size: 9px;
  letter-spacing: 1.37px;
  width: 72px;
  height: 26px;
`;

const Button = props => <ButtonLanding>{props.name}</ButtonLanding>;

export default Button;
