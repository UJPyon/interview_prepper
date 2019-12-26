import React from "react";
import { Link, withRouter } from "react-router-dom";
import NavbarContainer from "../navbar/navbar_container";

class Submission extends React.Component {
  constructor(props) {
    super(props);
    
  }

  componentDidMount() {
    this.props.fetchAllUsers();
    this.props.fetchAllSubs();
    this.props.fetchAllBoxes();
  }

  handleLogout() {
    this.props.logout().then(() => this.props.history.push('/'));
  }

  render() {

    this.props.submissions;

    return (
      <>
        <h1></h1>
        <button onClick={this.handleLogout}>Log Out</button>
      </>
    );
  }
}

export default withRouter(Submission);