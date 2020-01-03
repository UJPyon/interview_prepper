import React from "react";
import { Link, withRouter } from "react-router-dom";
import NavbarContainer from "../navbar/navbar_container";

class Submission extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllUsers();
    this.props.fetchAllSubs();
    this.props.fetchAllBoxes();
  }

  handleDelete(e) {
    e.preventDefault();
    const submissionId = this.props.submissionId;
    const currentUserId = this.props.currentUserId;
    this.props.deleteSub({ submissionId, currentUserId }).then(() => this.props.history.push('/learn'));
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
        <Link to={`/learn/submission/${this.props.submissionId}/edit`}>Edit Submission</Link>
        <button onClick={this.handleDelete}>Delete Submission</button>
      </>
    );
  }
}

export default withRouter(Submission);