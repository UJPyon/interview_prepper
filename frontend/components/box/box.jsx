import React from "react";
import { Link, withRouter } from "react-router-dom";

class Box extends React.Component {
  constructor(props) {
    super(props);
    this.openSubmission = this.openSubmission.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllUsers();
    this.props.fetchAllSubs();
    this.props.fetchAllBoxes();
  }

  openSubmission(e) {
    e.preventDefault();
    this.props.history.push("/home");
  }

  render() {

    let boxSubs;
    if (this.props.box) {
      boxSubs = this.props.box.map(sub => {
        return <li onClick={this.openSubmission} key={sub.id}>{sub.title}</li>
      });
    }

    return (
      <>
        <h2>Here's a Look at What's in Your Boxes:</h2>
        <ul>
          {boxSubs}
        </ul>
      </>
    );
  }
}
 
export default withRouter(Box);