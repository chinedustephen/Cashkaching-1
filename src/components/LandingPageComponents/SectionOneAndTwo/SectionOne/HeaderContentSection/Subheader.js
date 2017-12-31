import React from "react";
import styled from "styled-components";

const SubText = styled.p`
  font-family: Roboto-Medium;
  font-size: 16px;
  color: #f3f3f3;
  letter-spacing: 0;
  line-height: 24px;
  margin-right: 77px;
  margin-bottom: 50px;
`;

const SubHeader = props => <SubText>{props.subHeader}</SubText>;

export default SubHeader;
