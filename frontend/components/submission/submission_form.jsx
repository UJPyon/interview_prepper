import React from "react";
import { Link, withRouter } from "react-router-dom";
import NavbarContainer from "../navbar/navbar_container";

class Submission extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.submissionId,
      title: this.props.submission.title,
      body: this.props.submission.body,
      answer: this.props.submission.answer,
      box_id: this.props.boxId,
      submittor_id: this.props.currentUserId,
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
    this.props.updateSub(sub).then(() => this.props.history.push(`/learn/${this.props.submissionId}`));
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
          <input type="submit" value="Submit Changes"/>
        </form>
      </>
    );
  }
}

export default withRouter(Submission);