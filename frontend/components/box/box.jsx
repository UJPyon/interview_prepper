import React from "react";
import { Link, withRouter } from "react-router-dom";

class Box extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boxSubs: "hide"
    }
    this.openSubmission = this.openSubmission.bind(this);
    this.toggleSubmissions = this.toggleSubmissions.bind(this);
  }

  openSubmission(e) {
    this.props.history.push(`/learn/submission/${e.target.id}`);
  }

  toggleSubmissions() {
    this.state.boxSubs === "hide"
      ? this.setState({ boxSubs: "show" })
      : this.setState({ boxSubs: "hide" });
  }

  render() {
    let subs = this.props.box.submissionIds.map(subId => {
      debugger
      return (
        <li 
          key={subId} 
          id={subId}
          onClick={(e) => this.openSubmission(e)}>
          {this.props.submissions[subId].title}
        </li>
      );
    });

    return (
      <li className="sidebar-box" onClick={this.toggleSubmissions}>
        <h4>{this.props.box.name}</h4>
        <p>{this.props.box.description}</p>
        <ul className={this.state.boxSubs === "show" ? "subs-show" : "subs-hide"}>
          {subs}
        </ul>
      </li>
    );
  }
}
 
export default withRouter(Box);