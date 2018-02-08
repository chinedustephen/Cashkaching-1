import React from "react";
import styled from "styled-components";

const CardLabelContainer = styled.div`
  grid-column-start: 1;
  grid-column-end: 4;
`;

const LabelText = styled.div.attrs({
  // we can define static props

  // or we can define dynamic ones
  background: props => props.bglabel
})`
  display: inline-block;
  font-family: Campton-BoldDEMO;
  font-size: 11px;
  color: #ffffff;
  letter-spacing: 0.8px;
  height: 15px;
  padding-top: 6px;
  padding-left: 20px;
  padding-right: 20px;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
  margin-left: 40px;

  /* here we use the dynamically computed props */
  background: ${props => props.background};
`;

const Share = styled.img`
  float: right;
  padding-top: 16px;
  padding-right: 24px;
`;

const CardLabel = props => (
  <CardLabelContainer>
    <LabelText bglabel={props.bglabel}>{props.cardLabel}</LabelText>
    <Share src={require("./images/share.svg")} />
  </CardLabelContainer>
);

export default CardLabel;
