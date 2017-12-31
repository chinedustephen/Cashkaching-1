import React from "react";
import styled from "styled-components";

const P = styled.p`
  opacity: 0.34;
  font-family: Campton-Bold;
  font-size: 116px;
  color: #ffffff;
  margin: 0;
  margin-left: 65px;
`;

const BackgroundTextContainer = styled.div`
  grid-column-end: span 3;
`;

const Congratulations = () => (
  <BackgroundTextContainer>
    <P>Congratulations</P>
  </BackgroundTextContainer>
);

export default Congratulations;
