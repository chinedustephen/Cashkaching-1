import React from "react";
import styled from "styled-components";

const ButtonLanding = styled.button`
  display: block;
  border: 0px;
  background: #f25500;
  border-radius: 8px;
  border-bottom: 3px solid #c44500;
  color: #ffffff;
  font-family: Campton-Bold;
  font-size: 12px;
  letter-spacing: 1.37px;
  width: 108px;
  height: 35px;
`;

const Button = props => <ButtonLanding>{props.name}</ButtonLanding>;

export default Button;
