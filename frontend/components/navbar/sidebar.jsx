import React from "react";
import { Link, withRouter } from "react-router-dom";
import Box from "../box/box_container";

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     sidebarContent: "boxes",
        // };
        this.showBox = this.showBox.bind(this);
        this.showSubmissions = this.showSubmissions.bind(this);
        this.openSubmission = this.openSubmission.bind(this);
    }

    // sidebarContentClick(e) {
    //     this.state.sidebarContent === "boxes"
    //         ? this.setState({ sidebarContent: "subs" })
    //         : this.setState({ sidebarContent: "boxes" });
    // }

    showBox() {
        let content;
        let boxes = this.props.boxes;
        let boxIds = Object.keys(boxes);
        if (boxIds.length) {
            content = boxIds.map(id => {
                return (
                    <li key={id} onClick={this.showSubmissions(id)}>
                        <h3>{boxes[id].name}</h3>
                        <p>{boxes[id].description}</p>
                    </li>
                );
            });
        }
        return content;
    }
    
    showSubmissions(id) {
        this.props.boxes[id].submissionIds.map(id => {
            return (
                <li key={id} onClick={this.openSubmission(id)}>
                    {this.props.submissions[id].title}
                </li>
            );
        });
    }

    openSubmission(subId) {
        this.props.history.push(`/learn/submission/${subId}`);
    }

    render() {
        // let content = this.showBox();
        // this.state.sidebarContent === "boxes"
        //     ? content = <Boxes />
        //     : content = <Submissions id={}/>;
        return (
            <div id="sidebar">
                <h2>Submission Boxes</h2>
                <ul>
                    {/* <Boxes /> */}
                </ul>
            </div>
        );
    }
}

export default withRouter(Sidebar);