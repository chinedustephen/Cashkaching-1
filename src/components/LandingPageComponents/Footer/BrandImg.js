import React from "react";
import styled from "styled-components";
import FooterBrand from "./images/FooterLogo.svg";

const BrandContainer = styled.div`
  align-self: center;
`;

const BrandImg = styled.img``;

const FooterBrandImg = () => (
  <BrandContainer>
    <BrandImg src={FooterBrand} />
  </BrandContainer>
);

export default FooterBrandImg;
