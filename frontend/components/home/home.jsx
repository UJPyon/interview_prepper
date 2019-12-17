import React from "react";
import { Link, withRouter } from "react-router-dom";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    this.props.logout().then(() => this.props.history.push('/'));
  }

  render() {
    return (
      <>
        <h1>You are logged in.</h1>
        <button onClick={this.handleLogout}></button>
      </>
    );
  }
}

export default withRouter(Home);