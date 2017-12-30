import React from "react";
import styled from "styled-components";
import LogoSVG from "./images/logo.svg";

const Logo = styled.img`
  margin-left: 128px;
  margin-top: 18px;
`;

const BrandLogo = () => <Logo src={LogoSVG} />;

export default BrandLogo;

