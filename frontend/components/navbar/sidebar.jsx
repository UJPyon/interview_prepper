import React from "react";
import { withRouter } from "react-router-dom";
import Box from "../box/box_container";

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let content = Object.keys(this.props.boxes).map(id => {
            return <Box key={id} box={this.props.boxes[id]} submissions={this.props.submissions}/>
        });

        return (
            <div id="sidebar">
                <h2 className="sidebar-header">Submission Boxes</h2>
                <ul className="sidebar-ul">
                    {content}
                </ul>
            </div>
        );
    }
}

export default withRouter(Sidebar);