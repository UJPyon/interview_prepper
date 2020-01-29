import React from "react";
import { Link, withRouter } from "react-router-dom";

class Box extends React.Component {
  constructor(props) {
    super(props);
    // this.openSubmission = this.openSubmission.bind(this);
    this.showSubmissions = this.showSubmissions.bind(this);
  }

  openSubmission(subId) {
    this.props.history.push(`/learn/submission/${subId}`);
  }

  showSubmissions(id) {
    this.props.boxes[id].submissionIds.map(id => {
      return (
        <li key={id} onClick={this.openSubmission(id)}>
          {this.props.submissions[id].title}
        </li>
      );
    });
  }

  render() {
    let boxSubs;
    let boxes = this.props.boxes;
    let boxIds = Object.keys(boxes);
    if (boxIds.length) {
      boxSubs = boxIds.map(id => {
        return (
          <li key={id} onClick={this.showSubmissions(id)}>
            <h3>{boxes[id].name}</h3>
            <p>{boxes[id].description}</p>
          </li>
        );
      });
    }

    return (
      <div id="sidebar">
        <h2>Submission Boxes</h2>
        <ul>
          {boxSubs}
        </ul>
      </div>
    );
  }
}
 
export default withRouter(Box);