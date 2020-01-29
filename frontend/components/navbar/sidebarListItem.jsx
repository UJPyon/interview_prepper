import React from "react";

class SidebarListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <li key={this.props.key} onClick={this.props.handleClick}>
                {this.props.itemTitle}
            </li>
        );
    }
}

export default withRouter(SidebarListItem);