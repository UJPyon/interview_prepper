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
      this.props.updateSub(sub).then(() => this.props.history.push(`/learn/${this.props.submissionId}`));
    } else if (this.props.formType === "new") {
      this.props.createSub(sub).then((sub) => this.props.history.push(`/learn/${sub.id}`));
    }
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  render() {

    return (
      <>
        <Link to={`/learn/${this.props.submissionId}`}>Back to Submission</Link>
        <form onSubmit={this.handleSubmit}>
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
          <input type="submit" value="Submit"/>
        </form>
      </>
    );
  }
}

export default withRouter(SubmissionForm);