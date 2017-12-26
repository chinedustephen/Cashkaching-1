import React, { Component } from "react";
import styled from "styled-components";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Step, Stepper, StepLabel } from "material-ui/Stepper";
import RaisedButton from "material-ui/RaisedButton";
import FlatButton from "material-ui/FlatButton";
import TextField from "material-ui/TextField";
import BrandLogo from "../../components/BrandImg";
import Button from "../../components/Buttons/Button";

const AuthenticationContianer = styled.div`
  display: grid;
  grid-template-rows: 80px 200px 100px 300px;
  justify-items: center;
  background-color: #6ca516;
  height: 100vh;
`;

const Header = styled.p`
  font-family: Campton-Bold;
  font-size: 24px;
  color: #ffffff;
`;

const BrandContianer = styled.div`
  align-self: end;
`;

const ButtonContainer = styled.div`
  display: grid;
  justify-items: center;
  grid-template-rows: 80px 80px 40px 40px;
`;

const CancelContainer = styled.div`
  display: grid;
  justify-self: end;
  align-self: center;
  margin-right: 100px;
`;
const Cancel = styled.div``;
const CancelImg = styled.img``;
const FormControl = styled.div`
  display: grid;
  justify-items: center;
`;

class EmailRegisterPage extends Component {
  state = {
    finished: false,
    stepIndex: 0
  };

  handleNext = () => {
    const { stepIndex } = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2
    });
  };

  handlePrev = () => {
    const { stepIndex } = this.state;
    if (stepIndex > 0) {
      this.setState({ stepIndex: stepIndex - 1 });
    }
  };

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (
          <FormControl>
            <TextField
              hintText="Type your firstname"
              hintStyle={{ fontFamily: "Campton-Book" }}
              floatingLabelText="First name"
              floatingLabelStyle={{
                fontFamily: "Campton-Book",
                fontSize: "12px",
                color: "#ffffff"
              }}
              inputStyle={{
                fontFamily: "Campton-Medium",
                color: "#ffffff",
                fontSize: "16px"
              }}
              underlineFocusStyle={{ borderColor: "#ffffff" }}
            />
            <TextField
              hintText="Type your lastname"
              hintStyle={{ fontFamily: "Campton-Book" }}
              floatingLabelText="Last name"
              floatingLabelStyle={{
                fontFamily: "Campton-Book",
                fontSize: "12px",
                color: "#ffffff"
              }}
              inputStyle={{
                fontFamily: "Campton-Medium",
                color: "#ffffff",
                fontSize: "16px"
              }}
              underlineFocusStyle={{ borderColor: "#ffffff" }}
            />
            <TextField
              hintText="Type your Email"
              hintStyle={{ fontFamily: "Campton-Book" }}
              floatingLabelText="Email address"
              floatingLabelStyle={{
                fontFamily: "Campton-Book",
                fontSize: "12px",
                color: "#ffffff"
              }}
              inputStyle={{
                fontFamily: "Campton-Medium",
                color: "#ffffff",
                fontSize: "16px"
              }}
              underlineFocusStyle={{ borderColor: "#ffffff" }}
            />
          </FormControl>
        );
      case 1:
        return (
          <FormControl>
            <TextField
              hintText="Type your age"
              hintStyle={{ fontFamily: "Campton-Book" }}
              floatingLabelText="Age"
              floatingLabelStyle={{
                fontFamily: "Campton-Book",
                fontSize: "12px",
                color: "#ffffff"
              }}
              inputStyle={{
                fontFamily: "Campton-Medium",
                color: "#ffffff",
                fontSize: "16px"
              }}
              underlineFocusStyle={{ borderColor: "#ffffff" }}
            />
            <TextField
              hintText="Type your location"
              hintStyle={{ fontFamily: "Campton-Book" }}
              floatingLabelText="Location"
              floatingLabelStyle={{
                fontFamily: "Campton-Book",
                fontSize: "12px",
                color: "#ffffff"
              }}
              inputStyle={{
                fontFamily: "Campton-Medium",
                color: "#ffffff",
                fontSize: "16px"
              }}
              underlineFocusStyle={{ borderColor: "#ffffff" }}
            />
            <TextField
              hintText="Type your phone number"
              hintStyle={{ fontFamily: "Campton-Book" }}
              floatingLabelText="Number"
              floatingLabelStyle={{
                fontFamily: "Campton-Book",
                fontSize: "12px",
                color: "#ffffff"
              }}
              inputStyle={{
                fontFamily: "Campton-Medium",
                color: "#ffffff",
                fontSize: "16px"
              }}
              underlineFocusStyle={{ borderColor: "#ffffff" }}
            />
          </FormControl>
        );
      case 2:
        return (
          <FormControl>
            <TextField
              hintText="Create password"
              hintStyle={{ fontFamily: "Campton-Book" }}
              floatingLabelText="Password"
              floatingLabelStyle={{
                fontFamily: "Campton-Book",
                fontSize: "12px",
                color: "#ffffff"
              }}
              inputStyle={{
                fontFamily: "Campton-Medium",
                color: "#ffffff",
                fontSize: "16px"
              }}
              underlineFocusStyle={{ borderColor: "#ffffff" }}
            />
            <TextField
              hintText="Confirm your password"
              hintStyle={{ fontFamily: "Campton-Book" }}
              floatingLabelText="Confirm password"
              floatingLabelStyle={{
                fontFamily: "Campton-Book",
                fontSize: "12px",
                color: "#ffffff"
              }}
              inputStyle={{
                fontFamily: "Campton-Medium",
                color: "#ffffff",
                fontSize: "16px"
              }}
              underlineFocusStyle={{ borderColor: "#ffffff" }}
            />
            <TextField
              hintText="Type your Email"
              hintStyle={{ fontFamily: "Campton-Book" }}
              floatingLabelText="Email address"
              floatingLabelStyle={{
                fontFamily: "Campton-Book",
                fontSize: "12px",
                color: "#ffffff"
              }}
              inputStyle={{
                fontFamily: "Campton-Medium",
                color: "#ffffff",
                fontSize: "16px"
              }}
              underlineFocusStyle={{ borderColor: "#ffffff" }}
            />
          </FormControl>
        );
      default:
        return "You're a long way from home sonny jim!";
    }
  }
  render() {
    const { finished, stepIndex } = this.state;
    const contentStyle = { margin: "0 16px" };
    return (
      <MuiThemeProvider>
        <AuthenticationContianer>
          <CancelContainer>
            <Cancel>
              <CancelImg src={require("../../components/Icons/Cancel.svg")} />
            </Cancel>
          </CancelContainer>
          <BrandContianer>
            <BrandLogo />
          </BrandContianer>
          <div>
            <Header>Register</Header>
          </div>
          <ButtonContainer>
            <div style={{ width: "100%", maxWidth: 700, margin: "auto" }}>
              <Stepper activeStep={stepIndex}>
                <Step>
                  <StepLabel>General</StepLabel>
                </Step>
                <Step>
                  <StepLabel>Personal</StepLabel>
                </Step>
                <Step>
                  <StepLabel>Account</StepLabel>
                </Step>
              </Stepper>
              <div style={contentStyle}>
                {finished ? (
                  <di>
                    <Button name="GET ME STARTED" />
                    <p>
                      <a
                        href=""
                        onClick={event => {
                          event.preventDefault();
                          this.setState({ stepIndex: 0, finished: false });
                        }}
                      >
                        Click here
                      </a>
                      to reset the example.
                    </p>
                  </di>
                ) : (
                  <div>
                    <p>{this.getStepContent(stepIndex)}</p>
                    <div style={{ marginTop: 12 }}>
                      <FlatButton
                        label="Back"
                        disabled={stepIndex === 0}
                        onClick={this.handlePrev}
                        style={{ marginRight: 12 }}
                      />
                      <RaisedButton
                        label={stepIndex === 2 ? "Finish" : "Next"}
                        primary={true}
                        onClick={this.handleNext}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </ButtonContainer>
        </AuthenticationContianer>
      </MuiThemeProvider>
    );
  }
}
export default EmailRegisterPage;
