import React from "react";
import { Link, withRouter } from "react-router-dom";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => this.props.history.push('/dash'));
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  render() {
    return (
      <div className="session-form">
        <h2>{this.props.formType}</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">Username</label>
          <input 
            id="username"
            type="text"
            onChange={this.update("username")}
          />
          <label htmlFor="password">Password</label>
          <input 
            id="password"
            type="password"
            onChange={this.update("password")}
          />
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);