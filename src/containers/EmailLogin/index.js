import React from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import LoginForm from "../../components/AuthentificationComponents/LoginForm";
import { login } from "../../utils/Apis/Authentiaction.js";

class EmailLoginPage extends React.Component {
  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);

    // set the initial component state
    this.state = {
      errors: {},
      redirect: false,
      user: {
        email: "",
        password: ""
      }
    };

    this.processForm = this.processForm.bind(this);
    this.changeUser = this.changeUser.bind(this);
  }

  /**
   * Process the form.
   *
   * @param {object} event - the JavaScript event object
   */
  processForm(event) {
    // prevent default action. in this case, action is the form submission event
    event.preventDefault();

    const { email, password } = this.state.user;

    // create an AJAX request
    login(email, password).then(resp => {
      // pass in error response
      console.log(resp.data);
      if (resp.data.error) {
        this.setState({
          errors: resp.data.error
        });
        console.log(this.state.errors);
      }
      if (resp.data.success) {
        this.setState({
          redirect: true
        });
      }
    });
  }

  /**
   * Change the user object.
   *
   * @param {object} event - the JavaScript event object
   */
  changeUser(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user
    });
  }

  /**
   * Render the component.
   */
  render() {
    if (this.state.redirect) {
      return <Redirect to="/personalaccount" />;
    }
    return (
      <LoginForm
        onSubmit={this.processForm}
        onChange={this.changeUser}
        errors={this.state.errors}
        user={this.state.user}
      />
    );
  }
}

export default EmailLoginPage;
