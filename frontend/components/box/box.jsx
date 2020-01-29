import React from "react";
import { Link, withRouter } from "react-router-dom";

class Box extends React.Component {
  constructor(props) {
    super(props);
    this.openSubmission = this.openSubmission.bind(this);
  }

  // componentDidMount() {
  //   this.props.fetchAllUsers();
  //   this.props.fetchAllSubs();
  //   this.props.fetchAllBoxes();
  // }

  openSubmission(subId) {
    this.props.history.push(`/learn/submission/${subId}`);
  }

  render() {
    let boxSubs;
    debugger
    if (this.props.boxes[1]) {
      debugger
      boxSubs = this.props.boxes[1].submissionIds.map(sub => {
        return <li onClick={this.openSubmission(sub.id)} key={sub.id}>{sub.title}</li>
      });
    }
 
    return (
      <div id="sidebar">
        <h2>Here's a Look at What's in Your Boxes:</h2>
        <ul>
          {boxSubs}
        </ul>
      </div>
    );
  }
}
 
export default withRouter(Box);