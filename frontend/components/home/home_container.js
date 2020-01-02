import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import { receiveAllUsers, receiveUser } from "../../actions/user_actions";
import { receiveAllSubs, receiveSub } from "../../actions/submission_actions";
import { receiveAllBoxes, receiveBox } from "../../actions/box_actions";
import Home from "./home";

const msp = state => {
  const users = state.entities.users;
  const currentUserId = state.session.id;
  const currentUserSubIds = state.entities.users[currentUserId].submissionIds;
  const submissions = currentUserSubIds.map(id => {
    return state.entities.submissions[id];
  });
  const boxes = state.entities.boxes;
  return {
    users,
    currentUserSubIds,
    submissions,
    boxes,
  };
};

const mdp = dispatch => {
  return {
    fetchAllUsers: () => dispatch(receiveAllUsers()),
    fetchAllSubs: () => dispatch(receiveAllSubs()),
    fetchAllBoxes: () => dispatch(receiveAllBoxes()),
    fetchUser: (id) => dispatch(receiveUser(id)),
    fetchSub: (id) => dispatch(receiveSub(id)),
    fetchBox: (id) => dispatch(receiveBox(id)),
  };
};

export default connect(msp, mdp)(Home);
