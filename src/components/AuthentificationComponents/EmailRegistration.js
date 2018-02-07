import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TextField from "material-ui/TextField";
import BrandLogo from "../BrandImg";
import Button from "../Buttons/Button";
import Logo from "../Icons/Cancel.svg";

const AuthenticationContianer = styled.div`
  display: grid;

  justify-items: center;
  background-color: #6ca516;
  min-height: 768px;
  max-height: auto;
`;

const Header = styled.p`
  font-family: Campton-Bold;
  font-size: 24px;
  color: #ffffff;
`;

const BrandContianer = styled.div`
  align-self: end;
`;

const CancelContainer = styled.div`
  display: grid;
  justify-self: left;
  align-self: center;
  margin-left: 100px;
`;
const Cancel = styled.div``;
const CancelImg = styled.img``;
const FormControl = styled.div`
  display: grid;
  justify-items: center;
`;

const SubFormText = styled.p`
  font-family: Campton-Book;
  font-size: 13px;
  color: #ffffff;
  letter-spacing: 0;
  text-align: center;
`;
const LabelStyle = {
  fontFamily: "Campton-Book",
  fontSize: "12px",
  color: "#ffffff"
};

const InputStyle = {
  fontFamily: "Campton-Medium",
  color: "#ffffff",
  fontSize: "16px"
};

const UnderlineFocusStyle = {
  borderColor: "#ffffff"
};

const HintStyle = {
  fontFamily: "Campton-Book"
};

const RegisterForm = ({ onSubmit, onChange, errors, user }) => (
  <MuiThemeProvider>
    <AuthenticationContianer>
      <CancelContainer>
        <Cancel>
          <a href="/register">
            <CancelImg src={Logo} />
          </a>
        </Cancel>
      </CancelContainer>
      <BrandContianer>
        <BrandLogo />
      </BrandContianer>
      <div>
        <Header>Register</Header>
      </div>
      <form action="/" onSubmit={onSubmit}>
        <FormControl>
          {errors.summary && <p className="error-message">{errors.summary}</p>}
          <TextField
            hintText="Confirm your password"
            floatingLabelText="Name"
            name="name"
            errorText={errors.name}
            onChange={onChange}
            value={user.name}
            hintStyle={HintStyle}
            floatingLabelStyle={LabelStyle}
            inputStyle={InputStyle}
            underlineFocusStyle={UnderlineFocusStyle}
          />
          <TextField
            hintText="Confirm your password"
            floatingLabelText="Email"
            name="email"
            errorText={errors.email}
            onChange={onChange}
            value={user.email}
            hintStyle={HintStyle}
            floatingLabelStyle={LabelStyle}
            inputStyle={InputStyle}
            underlineFocusStyle={UnderlineFocusStyle}
          />
          <TextField
            hintText="Confirm your password"
            floatingLabelText="Password"
            type="password"
            name="password"
            onChange={onChange}
            errorText={errors.password}
            value={user.password}
            hintStyle={HintStyle}
            floatingLabelStyle={LabelStyle}
            inputStyle={InputStyle}
            underlineFocusStyle={UnderlineFocusStyle}
          />
        </FormControl>
        <div>
          <Link to="/personalaccount">
            <Button type="submit" name="REGISTER" />
          </Link>
        </div>
        <div>
          <SubFormText>
            Aready registered? <Link to={"/login"}>Log in</Link>
          </SubFormText>
        </div>
      </form>
    </AuthenticationContianer>
  </MuiThemeProvider>
);

RegisterForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default RegisterForm;
