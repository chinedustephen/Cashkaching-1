import React from "react";
import styled from "styled-components";
import ButtonMain from "./Button";
import Header from "./Header";
import Subheader from "./Subheader";

const HeaderTextContainer = styled.div``;

const Content = {
  header: "test",
  subheader:
    "Just enter your phone number and email address to enter today's draw. IT'S FREE Register now!",
  button: "GET STARTED"
};

const HeaderContent = () => (
  <div>
    <HeaderTextContainer>
      <Header landingheader={Content.header} />
      <Subheader subHeader={Content.subheader} />
      <ButtonMain buttonName={Content.button} />
    </HeaderTextContainer>
  </div>
);

export default HeaderContent;
