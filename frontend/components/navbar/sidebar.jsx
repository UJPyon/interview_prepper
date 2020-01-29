import React from "react";
import { Link, withRouter } from "react-router-dom";
import Box from "../box/box_container";

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
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
                <ul>
                    {boxSubs}
                </ul>
            </div>
        );
    }
}

export default withRouter(Sidebar);