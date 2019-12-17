import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import Home from "./home";

const msp = state => {
  const users = state.entities.users;
  // const categories = state.entities.categories;
  return {
    users,
    // categories,
  };
};

const mdp = dispatch => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default connect(msp, mdp)(Home);
