import React from "react";
import { Link, withRouter } from "react-router-dom";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    this.props.logout().then(() => this.props.history.push("/"));
  }

  render() {
    return (
      <div className="navbar">
        <button>TEMP</button>
        <h1>Profile</h1>
        <button onClick={this.handleLogout}>Log Out</button>
      </div>
    );
  }
}

export default withRouter(Navbar);