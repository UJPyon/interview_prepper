import React from "react";
import { Link, withRouter } from "react-router-dom";
import Box from "../box/box_container";

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebar: "hide"
        };
        this.expandBox = this.expandBox.bind(this);
        this.expandSubmissions = this.expandSubmissions.bind(this);
    }

    handleClick(e) {
        this.state.sidebar === "show"
            ? this.setState({ button: "hide" })
            : this.setState({ button: "show" });
    }

    expandBox(id) {
        this.props.boxes[id].submissionIds.map(id => {
            return (
                <li key={id} onClick={this.expandSubmissions}>
                    {this.props.submissions[id].title}
                </li>
            );
        });
    }
    
    expandSubmissions() {

    }

    render() {
        let boxes = this.props.boxes;
        let boxSubs;
        debugger
        if (Object.keys(this.props.boxes).length > 0) {
            debugger
            let boxIds = Object.keys(this.props.boxes);
            boxSubs = boxIds.map(id => {
                debugger
                return (
                    <li onClick={this.expandBox(id)}>
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

export default withRouter(Sidebar);