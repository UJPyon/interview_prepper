import React from "react";
import { Link, withRouter } from "react-router-dom";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginUsername: "",
      loginPassword: "",
      signupUsername: "",
      signupPassword: "",
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
    this.update = this.update.bind(this);
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

  render() {
    debugger
    return (
      <div className="session-form">
        <h2>Login to your account</h2>
        <form onSubmit={this.handleLogin}>
          <label htmlFor="login-username">Username</label>
          <input
            id="login-username"
            type="text"
            onChange={this.update("loginUsername")}
          />
          <label htmlFor="login-password">Password</label>
          <input
            id="login-password"
            type="password"
            onChange={this.update("loginPassword")}
          />
          <input
            type="submit"
            value="Login"
          />
        </form>

        <form onSubmit={this.handleSignup}>
          <label htmlFor="signup-username">Username</label>
          <input
            id="signup-username"
            type="text"
            onChange={this.update("signupUsername")}
          />
          <label htmlFor="signup-password">Password</label>
          <input
            id="signup-password"
            type="password"
            onChange={this.update("signupPassword")}
          />
          <input
            type="submit"
            value="Sign Up"
          />
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);