import React from "react";
import { Link, withRouter } from "react-router-dom";
import NavbarContainer from "../navbar/navbar_container";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllUsers();
    this.props.fetchAllSubs();
    this.props.fetchAllBoxes();
  }

  render() {
    let submissions;
    if (this.props.submissions[0] !== undefined) {
      submissions = this.props.submissions.map(sub => {
        return (
          <Link key={sub.id} to={`/learn/submission/${sub.id}`}>{sub.title}</Link>
        );
      });
    }

    return (
      <>
        <h2>Your Submitted Problems</h2>
        <ul>
          {submissions}
        </ul>
        <Link to={'/learn/new'}>Create new Submission</Link>
      </>
    );
  }
}

export default withRouter(Home);