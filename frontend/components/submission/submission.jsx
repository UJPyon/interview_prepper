import React from "react";
import { Link, withRouter } from "react-router-dom";
import NavbarContainer from "../navbar/navbar_container";

class Submission extends React.Component {
  constructor(props) {
    super(props);
    
  }

  componentDidMount() {
    this.props.fetchAllUsers();
    this.props.fetchAllSubs();
    this.props.fetchAllBoxes();
  }

  render() {

    const submissions = this.props.submissions.map(sub => {
      return (
        <Link to={`/learn/${sub.id}`}>{sub.title}</Link>
      );
    });

    return (
      <>
        <h1></h1>
        <ul>
          {submissions}
        </ul>
      </>
    );
  }
}

export default withRouter(Submission);