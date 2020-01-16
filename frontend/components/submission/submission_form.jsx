import React from "react";
import { Link, withRouter } from "react-router-dom";

class SubmissionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.submissionId || "",
      title: this.props.submission.title || "",
      body: this.props.submission.body || "",
      answer: this.props.submission.answer || "",
      box_id: this.props.boxId || 1,
      submittor_id: this.props.currentUserId || "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBoxMove = this.handleBoxMove.bind(this);
    this.update = this.update.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllUsers();
    this.props.fetchAllSubs();
    this.props.fetchAllBoxes();
  }

  handleSubmit(e) {
    e.preventDefault();
    const sub = Object.assign({}, this.state);
    if (this.props.formType === "edit") {
      this.props.updateSub(sub).then(() => this.props.history.push(`/learn/submission/${this.props.submissionId}`));
    } else if (this.props.formType === "new") {
      this.props.createSub(sub).then((result) => this.props.history.push(`/learn/submission/${result.sub.id}`));
    }
  }

  handleBoxMove(move) {
    if (move === "forward") {
      console.log("correct"); 
    } else if (move === "backward") {
      console.log("incorrect");
    }
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  render() {
    let returnLink;
    if (this.props.formType === "edit") {
      returnLink = <Link to={`/learn/submission/${this.props.submissionId}`} className="back-link">Back to Submission</Link>;
    } else if (this.props.formType === "new") {
      returnLink = <Link to={'/learn'} className="back-link">Back to Index Page</Link>;
    }

    return (
      <section className="submission">
        <form onSubmit={this.handleSubmit} className="sub-form">
          <label htmlFor="title">Title</label>
          <input 
            id="title"
            type="text"
            onChange={this.update("title")}
            value={this.state.title}
          />
          <label htmlFor="body">Problem</label>
          <input 
            id="body"
            type="textarea"
            onChange={this.update("body")}
            value={this.state.body}
          />
          <label htmlFor="answer">Solution</label>
          <input 
            id="answer"
            type="textarea"
            onChange={this.update("answer")}
            value={this.state.answer}
          />
          <input type="submit" value="Submit" className="sub-button"/>
        </form>
      
        <button 
          onClick={this.handleBoxMove("forward")}
          className="sub-button">
          I got it Correctly!
        </button>
        <button 
          onClick={this.handleBoxMove("backward")}
          className="sub-button">
          I was Incorrect.
        </button>

        {returnLink}
      </section>
    );
  }
}

export default withRouter(SubmissionForm);