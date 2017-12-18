import React from "react";
import styled from "styled-components";

const ImgContainer = styled.div``;
const BrandImg = styled.img``;

const BrandLogo = () => (
  <ImgContainer>
    <BrandImg src={require("./images/BrandLogo.svg")} />
  </ImgContainer>
);

export default BrandLogo;
