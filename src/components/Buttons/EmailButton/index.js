import React, { Component } from "react";
import styled, { css } from "styled-components";

const ButtonLanding = styled.button`
  display: block;
  border: 0px;
  border-radius: 8px;
  border-bottom: 3px solid #6f6d6f;
  color: #ffffff;
  font-family: Campton-BoldDEMO;
  font-size: 12px;
  letter-spacing: 1.37px;
  width: 237px;
  height: 45px;
  ${props =>
    props.primary &&
    css`
      background: #4a4a4a;
    `};
`;

class EmailButton extends Component {
  render() {
    return <ButtonLanding primary>{this.props.buttonType}</ButtonLanding>;
  }
}

export default EmailButton;
