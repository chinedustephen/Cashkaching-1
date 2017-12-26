import React, { Component } from "react";
import styled from "styled-components";

const ButtonLanding = styled.button`
  display: block;
  border: 0px;
  background: #f25500;
  border-radius: 8px;
  border-bottom: 3px solid #c44500;
  color: #ffffff;
  font-family: Campton-BoldDEMO;
  font-size: 12px;
  letter-spacing: 1.37px;
  width: 237px;
  height: 45px;
`;

class Button extends Component {
  render() {
    return <ButtonLanding>{this.props.name}</ButtonLanding>;
  }
}

export default Button;
