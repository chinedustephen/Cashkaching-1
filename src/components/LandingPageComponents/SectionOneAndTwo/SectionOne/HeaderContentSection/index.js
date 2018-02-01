import React from "react";
import ButtonMain from "./Button";
import Header from "./Header";
import Subheader from "./Subheader";

// Landingpage header section content

const Content = {
  header: "The first free lotto in Africa.",
  subheader:
    "Just enter your phone number and email address to enter today's draw. IT'S FREE Register now!",
  button: "GET STARTED"
};

const HeaderContentSection = () => (
  <div>
    <Header landingheader={Content.header} />
    <Subheader subHeader={Content.subheader} />
    <ButtonMain buttonName={Content.button} />
  </div>
);

export default HeaderContentSection;
