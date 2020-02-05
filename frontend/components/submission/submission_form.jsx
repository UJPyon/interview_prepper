import React from "react";
import { Link, withRouter } from "react-router-dom";
import RichTextEditor from "react-rte";

class SubmissionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.submissionId || "",
      title: this.props.submission.title || "",
      body: RichTextEditor.createEmptyValue(),
      answer: RichTextEditor.createEmptyValue(),
      box_id: this.props.boxId || 1,
      submittor_id: this.props.currentUserId || "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.updateBody = this.updateBody.bind(this);
    this.updateAnswer = this.updateAnswer.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllUsers();
    this.props.fetchAllSubs();
    this.props.fetchAllBoxes();
    if (this.props.formType === "edit") {
      const submission = this.props.submission;
      const body = RichTextEditor.createValueFromString(submission.body, 'html');
      const answer = RichTextEditor.createValueFromString(submission.answer, 'html');
      this.setState({ body: body, answer: answer });
    }
    // const that = this;
    // if (this.props.formType === "edit") {
    //   this.props.receiveSub(this.props.submissionId).then(res => {
    //     debugger
    //     const title = res.sub.title;
    //     const body = RichTextEditor.createValueFromString(res.sub.body, 'html');
    //     const answer = RichTextEditor.createValueFromString(res.sub.answer, 'html');
    //     debugger
    //     that.setState({ 
    //       title: title, 
    //       body: body, 
    //       answer: answer
    //     });
    //   });
    // }
  }

  handleSubmit(e) {
    e.preventDefault();
    let sub = Object.assign({}, this.state);
    sub.body = this.state.body.toString("html");
    sub.answer = this.state.answer.toString("html");
    if (this.props.formType === "edit") {
      this.props.updateSub(sub).then(() => this.props.history.push(`/learn/submission/${this.props.submissionId}`));
    } else if (this.props.formType === "new") {
      this.props.createSub(sub).then((result) => this.props.history.push(`/learn/submission/${result.sub.id}`));
    }
  }

  update(e) {
    const field = e.target.id;
    this.setState({ [field]: e.target.value });
  }

  updateBody(value) {
    this.setState({ body: value });
  }

  updateAnswer(value) {
    this.setState({ answer: value });
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
            onChange={this.update}
            value={this.state.title}
          />
          <label htmlFor="body">Problem</label>
          {/* <input 
            id="body"
            type="textarea"
            onChange={this.update}
            value={this.state.body}
          /> */}
          <RichTextEditor
            name="body"
            value={this.state.body}
            onChange={this.updateBody}>
          </RichTextEditor>
          <label htmlFor="answer">Solution</label>
          {/* <input 
            id="answer"
            type="textarea"
            onChange={this.update}
            value={this.state.answer}
          /> */}
          <RichTextEditor
            name="answer"
            value={this.state.answer}
            onChange={this.updateAnswer}>
          </RichTextEditor>
          <input type="submit" value="Submit" className="sub-button"/>
        </form>

        {returnLink}

      </section>
    );
  }
}

export default withRouter(SubmissionForm);