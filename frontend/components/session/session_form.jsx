import React from "react";
import { Link, withRouter } from "react-router-dom";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginUsername: "",
      loginPassword: "",
      loginError: "Sorry, we do not recognize your credentials.",
      signupUsername: "",
      signupPassword: "",
      signupError1: "An account with this username already exists",
      signupError2: "Password must be at least 6 characters",
      signupError3: "Please enter a username",
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
    this.update = this.update.bind(this);
    this.errorDoesExist = this.errorDoesExist.bind(this);
    this.inputBorderType = this.inputBorderType.bind(this);
  }

  handleLogin(e) {
    e.preventDefault();
    const user = {
      username: this.state.loginUsername,
      password: this.state.loginPassword,
    };
    this.props.processLoginForm(user).then(() => this.props.history.push('/learn'));
  }
  
  handleSignup(e) {
    e.preventDefault();
    const user = {
      username: this.state.signupUsername,
      password: this.state.signupPassword,
    };
    this.props.processSignupForm(user).then(() => this.props.history.push('/learn'));
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  // --Method for displaying errors if it exists, or an empty placeholder if it doesn't
  errorDoesExist(errorMsg, additErrorMsg = null) {
    if (this.props.errors.includes(errorMsg)) {
      return errorMsg;
    } else if (this.props.errors.includes(additErrorMsg)) {
      return additErrorMsg;
    } else {
      return null;
    }
  }

  // --Method to display form input classes with or without errors
  inputBorderType(errorMsg, additErrorMsg = null) {
    if (this.props.errors.includes(errorMsg) || this.props.errors.includes(additErrorMsg)) {
      return "error-";
    } else {
      return "";
    }
  }

  render() {

    const loginInputClass = this.inputBorderType(this.state.loginError) + "session-input";
    const loginErrorMsg = this.errorDoesExist(this.state.loginError);
    const signupUsernameInputClass = this.inputBorderType(this.state.signupError1, this.state.signupError3) + "session-input";
    const signupPasswordInputClass = this.inputBorderType(this.state.signupError2) + "session-input";
    const signupUsernameErrorMsg = this.errorDoesExist(this.state.signupError1, this.state.signupError3);
    const signupPasswordErrorMsg = this.errorDoesExist(this.state.signupError2);

    return (
      <section className="session">
        <h2>Let's Get Back to Studying</h2>
        <p>{loginErrorMsg}</p>
        <form 
          className="session-form"
          onSubmit={this.handleLogin}>
            
          <input
            className={loginInputClass}
            type="text"
            onChange={this.update("loginUsername")}
            placeholder="Username"
            />

          <input
            className={loginInputClass}
            type="password"
            onChange={this.update("loginPassword")}
            placeholder="Password"
          />

          <input
            type="submit"
            value="Login"
          />
        </form>

        <h3>Sign Up for Free</h3>
        <p>{signupUsernameErrorMsg}</p>
        <form 
          className="session-form"
          onSubmit={this.handleSignup}>
          <input
            className={signupUsernameInputClass}
            type="text"
            onChange={this.update("signupUsername")}
            placeholder="Enter a New Username"
            />

          <p>{signupPasswordErrorMsg}</p>
          <input
            className={signupPasswordInputClass}
            type="password"
            onChange={this.update("signupPassword")}
            placeholder="Create a New Password"
          />

          <input
            className="session-button"
            type="submit"
            value="Sign Up"
          />
        </form>
      </section>
    );
  }
}

export default withRouter(SessionForm);