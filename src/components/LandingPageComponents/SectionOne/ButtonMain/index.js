import React from "react";
import styled from "styled-components";

const ButtonLanding = styled.button`
  background-color: red;
  display: block;

  border: 0px;
  background: #f25500;
  border-radius: 8px;
  border-bottom: 3px solid #c44500;
  color: #ffffff;
  font-family: Campton-BoldDEMO;
  font-size: 12px;
  letter-spacing: 1.37px;
  width: 184px;
  height: 45px;
  grid-column-start: 1;
  grid-column-end: 4;
  @media only screen and (max-width: 500px) {
    width: 120px;
    height: 45px;
    margin-bottom: 24px;
    margin-right: 27px;
  }
`;
const ButtonMain = () => <ButtonLanding>GET STARTED</ButtonLanding>;

export default ButtonMain;
