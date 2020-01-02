import { receiveAllUsers } from "../../actions/user_actions";
import {
  receiveAllSubs,
  receiveSub,
  updateSub,
  deleteSub
} from "../../actions/submission_actions";
import { receiveAllBoxes } from "../../actions/box_actions";
import { connect } from "react-redux";

import Submission from "./submission";

const msp = (state, ownProps) => {
  const submissionId = ownProps.submissionId;
  const submission = state.entities.submissions[submissionId];
  return {
    errors: state.errors.session,
    submissionId,
    submission,
  };
};

const mdp = dispatch => {
  return {
    fetchAllUsers: () => dispatch(receiveAllUsers()),
    fetchAllSubs: () => dispatch(receiveAllSubs()),
    fetchAllBoxes: () => dispatch(receiveAllBoxes()),
    receiveSub: id => dispatch(receiveSub(id)),
    updateSub: sub => dispatch(updateSub(sub)),
    deleteSub: id => dispatch(deleteSub(id))
  };
};

export default connect(msp, mdp)(Submission);
