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

    let boxSubs;
    if (this.props.box) {
      boxSubs = this.props.box.map(sub => {
        return <li key={sub.id}>{sub.title}</li>
      });
    }

    return (
      <>
        <ul>
          {boxSubs}
        </ul>
      </>
    );
  }
}
 
export default withRouter(Box);