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

  render() {
    let title, body;
    if (this.props.submission) {
      title = this.props.submission.title;
      body = this.props.submission.body;
    }

    return (
      <>
        <Link to='/learn'>Back to Index Page</Link>
        <h2>{title}</h2>
        <p>{body}</p>
        <Link to={`/learn/${this.props.submissionId}/edit`}>Edit Submission</Link>
      </>
    );
  }
}

export default withRouter(Submission);