import React from "react";
import styled from "styled-components";
import Description from "./ProfileDescription";
import ProPic from "./ProfileImg";
import Form from "./Form";
import Button from "./SettingsButton";

const ButtonContainer = styled.div`
  display: grid;
  justify-items: end;
  margin-top: 36px;
`;

const GeneralInformation = () => (
  <div>
    <Description />
    <ProPic />
    <Form />
    <Form />
    <Form />
    <Form />
    <Form />
    <ButtonContainer>
      <Button name="UPDATE" />
    </ButtonContainer>
  </div>
);

export default GeneralInformation;
