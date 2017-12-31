import React from "react";
import styled from "styled-components";

const Number = styled.p`
  font-family: Campton-Bold;
  font-size: 64px;
  color: #212121;
  letter-spacing: 0;
  margin: 0px;
  text-align: center;
`;

const Stat = props => <Number>{props.number}</Number>;

export default Stat;
