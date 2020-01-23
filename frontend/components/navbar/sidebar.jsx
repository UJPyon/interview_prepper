import React from "react";
import { Link, withRouter } from "react-router-dom";
import Box from "../box/box_container";

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        debugger
        return (
            <Box box={this.props}/>
        );
    }
}

export default withRouter(Sidebar);