import React from "react";
import styled from "styled-components";
import GeneralInformation from "../../components/ProfileSettingsComponents/GeneralInformation";

const Settingscontainer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-column-gap: 19px;
`;
const Container = styled.div`
  background-color: red;
  /* Rectangle 30: */
  background: rgba(102, 102, 102, 0.08);
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.35);
  border-radius: 4px;
  padding: 38px 24px 38px 24px;
`;

const Settings = () => (
  <Settingscontainer>
    <Container>
      <GeneralInformation />
    </Container>
    <Container>2</Container>
  </Settingscontainer>
);

export default Settings;
