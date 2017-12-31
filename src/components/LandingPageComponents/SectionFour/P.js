import React from "react";
import styled from "styled-components";

const P = styled.p`
  font-family: Campton-Book;
  font-size: 16px;
  color: #ffffff;
  letter-spacing: 0;
`;
const Paragraph = props => <P>{props.paragraphFour}</P>;

export default Paragraph;
