import React from "react";
import PropTypes from "prop-types";
import RegisterForm from "../../components/AuthentificationComponents/EmailRegistration";
import { register } from "../../utils/Apis/Authentiaction.js";

class EmailRegisterPage extends React.Component {
  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);

    // set the initial component state
    this.state = {
      errors: {},
      user: {
        email: "",
        name: "",
        password: "",
        confirmPassword: ""
      }
    };

    this.processForm = this.processForm.bind(this);
    this.changeUser = this.changeUser.bind(this);
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
   * Process the form.
   *
   * @param {object} event - the JavaScript event object
   */
  processForm(event) {
    // prevent default action. in this case, action is the form submission event
    event.preventDefault();

    // create a string for an HTTP body message

    const { name, email, password, confirmPassword } = this.state.user;

    // create an AJAX request
    register(name, email, password, confirmPassword).then(resp => {
      // pass in error response
      console.log(resp.data);
      if (resp.data.error) {
        this.setState({
          errors: resp.data.error
        });
      }

      if (resp.data.success) {
        this.context.router.push({ pathname: "/" });
      }
    });
  }
  /**
   * Render the component.
   */
  render() {
    return (
      <RegisterForm
        onSubmit={this.processForm}
        onChange={this.changeUser}
        errors={this.state.errors}
        user={this.state.user}
      />
    );
  }
}

export default EmailRegisterPage;
