import React from "react";
import styled from "styled-components";
import PersonalAccountAppRoutes from "./containers/App";

const Wrapper = styled.div`
  position: relative;
  top: 0;
  height: 100vh;
`;

const App = () => (
  <Wrapper>
    <PersonalAccountAppRoutes />
  </Wrapper>
);

export default App;
