import React from "react";
import { Link, withRouter } from "react-router-dom";
import NavbarContainer from "../navbar/navbar_container";

class Submission extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answerButton: "Show Solution",
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAnswer = this.handleAnswer.bind(this);
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

  handleAnswer(e) {
    e.preventDefault();
    // Add additional function that will change the display class of the answer <p> tag to visible or hidden
    if (this.state.answerButton === "Show Solution") {
      this.setState({ answerButton: "Hide Solution" });
    } else {
      this.setState({ answerButton: "Show Solution" });
    }
  }

  render() {
    let title, body, answer;
    if (this.props.submission) {
      title = this.props.submission.title;
      body = this.props.submission.body;
      answer = this.props.submission.answer;
    }

    return (
      <>
        <Link to='/learn'>Back to Index Page</Link>
        <h2>{title}</h2>
        <p>{body}</p>
        <p>{answer}</p>
        <button onClick={this.handleAnswer}>{this.state.answerButton}</button>
        <Link to={`/learn/submission/${this.props.submissionId}/edit`}>Edit Submission</Link>
        <button onClick={this.handleDelete}>Delete Submission</button>
      </>
    );
  }
}

export default withRouter(Submission);