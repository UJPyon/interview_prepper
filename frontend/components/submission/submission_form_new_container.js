import { receiveAllUsers } from "../../actions/user_actions";
import {
  receiveAllSubs,
  createSub,
  deleteSub
} from "../../actions/submission_actions";
import { receiveAllBoxes } from "../../actions/box_actions";
import { connect } from "react-redux";

import SubmissionForm from "./submission";

const msp = (state) => {
  return {
    errors: state.errors.session,
    formType: "new",
  };
};

const mdp = dispatch => {
  return {
    fetchAllUsers: () => dispatch(receiveAllUsers()),
    fetchAllSubs: () => dispatch(receiveAllSubs()),
    fetchAllBoxes: () => dispatch(receiveAllBoxes()),
    createSub: (sub) =>dispatch(createSub(sub)),
    deleteSub: id => dispatch(deleteSub(id)),
  };
};

export default connect(msp, mdp)(SubmissionForm);
