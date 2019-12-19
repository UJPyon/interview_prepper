import { logout } from "../../actions/session_actions";
import { receiveAllUsers, receiveUser } from "../../actions/user_actions";
import { receiveAllSubs, receiveSub } from "../../actions/submission_actions";
import { receiveAllBoxes, receiveBox } from "../../actions/box_actions";
import Navbar from "./navbar";

const msp = state => {
  const users = state.entities.users;
  const submissions = state.entities.submissions;
  const boxes = state.entities.boxes;
  return {
    users,
    submissions,
    boxes
  };
};

const mdp = dispatch => {
  return {
    logout: () => dispatch(logout()),
    fetchAllUsers: () => dispatch(receiveAllUsers()),
    fetchAllSubs: () => dispatch(receiveAllSubs()),
    fetchAllBoxes: () => dispatch(receiveAllBoxes()),
    fetchUser: id => dispatch(receiveUser(id)),
    fetchSub: id => dispatch(receiveSub(id)),
    fetchBox: id => dispatch(receiveBox(id))
  };
};

export default connect(msp, mdp)(Navbar);
