import React from "react";
import styled from "styled-components";

const Text = styled.p`
  opacity: 0.56;
  font-family: Campton-Book;
  font-size: 12px;
  color: #000000;
  letter-spacing: 0;
  line-height: 19px;
`;
const Description = () => (
  <div>
    <Text>
      Input all your details and recieve full account information bonus
    </Text>
  </div>
);

export default Description;
