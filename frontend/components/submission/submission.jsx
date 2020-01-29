import React from "react";
import { Link, withRouter } from "react-router-dom";
import NavbarContainer from "../navbar/navbar_container";

class Submission extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answerButton: "Show Solution",
      class: "hide"
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
      this.setState({ answerButton: "Hide Solution", class: "show" });
    } else {
      this.setState({ answerButton: "Show Solution", class: "hide" });
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
      <section className="submission">
        <h2>{title}</h2>
        <div>
          <Link
            to={`/learn/submission/${this.props.submissionId}/edit`}
            className="sub-button">
            Edit Submission
          </Link>
          <button
            onClick={this.handleDelete}
            className="sub-button">
            Delete Submission
          </button>
        </div>
        <p>{body}</p>
        <p className={"answer" + this.state.class}>{answer}</p>
        <button 
          onClick={this.handleAnswer} 
          className="sub-button">
          {this.state.answerButton}
        </button>
        <Link to='/learn' className="back-link">Back to Index Page</Link>
      </section>
    );
  }
}

export default withRouter(Submission);