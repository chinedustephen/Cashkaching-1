import React from "react";
import styled from "styled-components";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TextField from "material-ui/TextField";
import Points from "./Points";

const Theme = styled.div`
  display: grid;
  grid-template-columns: 80% 1fr;
`;

const PointContainer = styled.div`
  display: grid;
`;

const Form = () => (
  <Theme>
    <div>
      <MuiThemeProvider>
        <TextField
          hintText="Type your Email"
          hintStyle={{ fontFamily: "Campton-Book" }}
          floatingLabelText="Email address"
          floatingLabelStyle={{
            fontFamily: "Campton-Book",
            fontSize: "12px",
            color: "#8E8E8E"
          }}
          inputStyle={{
            fontFamily: "Campton-Medium",
            color: "#666666",
            fontSize: "16px"
          }}
          underlineFocusStyle={{ borderColor: "#8E8E8E" }}
        />
      </MuiThemeProvider>
    </div>
    <PointContainer>
      <Points />
    </PointContainer>
  </Theme>
);

export default Form;
