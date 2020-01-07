import React from "react";
import { Link, withRouter } from "react-router-dom";

class Box extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllUsers();
    this.props.fetchAllSubs();
    this.props.fetchAllBoxes();
  }

  render() {

    return (
      <>

      </>
    );
  }
}

export default withRouter(Box);