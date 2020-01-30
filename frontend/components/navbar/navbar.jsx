import React from "react";
import { Link, withRouter } from "react-router-dom";
import Sidebar from "./sidebar";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarShow: false
    };
    this.handleLogout = this.handleLogout.bind(this);
    this.showSidebar = this.showSidebar.bind(this);
    this.hideSidebar = this.hideSidebar.bind(this);
  }

  handleLogout() {
    const main = document.getElementsByClassName("main-page");
    main[0].style.zIndex = "-1";
    main[0].style.background = "none";
    this.props.logout().then(() => this.props.history.push("/"));
  }

  showSidebar(e) {
    let ele = document.getElementById("sidebar");
    ele.style.visibility = "visible";
    ele.style.transition = ".3s";
    ele.style.width = "300px";
    this.setState({sidebarShow: true});
  }
  
  hideSidebar(e) {
    let ele = document.getElementById("sidebar");
    ele.style.visibility = "hidden";
    ele.style.transition = ".3s";
    ele.style.width = "0";
    this.setState({sidebarShow: false});
  }

  render() {
    return (
        <div className="navbar">
          <button onClick={this.state.sidebarShow 
            ? this.hideSidebar 
            : this.showSidebar}>
            Sidebar
          </button>
          <h1>Profile</h1>
          <button onClick={this.handleLogout}>Log Out</button>
        </div>
    );
  }
}

export default withRouter(Navbar);