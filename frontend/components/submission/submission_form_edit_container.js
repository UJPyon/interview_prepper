import { receiveAllUsers } from "../../actions/user_actions";
import {
  receiveAllSubs,
  receiveSub,
  updateSub
} from "../../actions/submission_actions";
import { receiveAllBoxes } from "../../actions/box_actions";
import { connect } from "react-redux";

import SubmissionForm from "./submission_form";

const msp = (state, ownProps) => {
  const submissionId = ownProps.match.params.submissionId;
  const submission = state.entities.submissions[submissionId] || {};
  let boxId, box;
  if (submission) {
    boxId = submission.boxId;
    box = state.entities.boxes[boxId];
  }
  const currentUserId = state.session.id;
  return {
    errors: state.errors.session,
    submissionId,
    submission,
    boxId,
    box,
    currentUserId,
    formType: "edit",
  };
};

const mdp = dispatch => {
  return {
    fetchAllUsers: () => dispatch(receiveAllUsers()),
    fetchAllSubs: () => dispatch(receiveAllSubs()),
    fetchAllBoxes: () => dispatch(receiveAllBoxes()),
    receiveSub: id => dispatch(receiveSub(id)),
    updateSub: sub => dispatch(updateSub(sub)),
  };
};

export default connect(msp, mdp)(SubmissionForm);
