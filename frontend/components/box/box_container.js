import { connect } from "react-redux";
import { receiveAllUsers, receiveUser } from "../../actions/user_actions";
import { receiveAllSubs, receiveSub } from "../../actions/submission_actions";
import { receiveAllBoxes, receiveBox } from "../../actions/box_actions";
import Box from "./box";

const msp = state => {

  return {

  };
};

const mdp = dispatch => {
  return {
    fetchAllUsers: () => dispatch(receiveAllUsers()),
    fetchAllSubs: () => dispatch(receiveAllSubs()),
    fetchAllBoxes: () => dispatch(receiveAllBoxes()),
    fetchUser: id => dispatch(receiveUser(id)),
    fetchSub: id => dispatch(receiveSub(id)),
    fetchBox: id => dispatch(receiveBox(id))
  };
};

export default connect(msp, mdp)(Box);
