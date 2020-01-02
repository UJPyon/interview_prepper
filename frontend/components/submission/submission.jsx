import React from "react";
import { Link, withRouter } from "react-router-dom";
import NavbarContainer from "../navbar/navbar_container";

class Submission extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.submission;
  }

  componentDidMount() {
    this.props.fetchAllUsers();
    this.props.fetchAllSubs();
    this.props.fetchAllBoxes();
  }

  render() {
    debugger
    let title, body;
    if (this.state !== null) {
      title = this.state.title;
      body = this.state.body;
    }

    return (
      <>
      <Link to='/learn'>Back to Index Page</Link>
        <h2>{title}</h2>
        <p>{body}</p>
      </>
    );
  }
}

export default withRouter(Submission);