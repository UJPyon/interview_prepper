import { receiveAllUsers } from "../../actions/user_actions";
import {
  receiveAllSubs,
  receiveSub,
  deleteSub
} from "../../actions/submission_actions";
import { receiveAllBoxes } from "../../actions/box_actions";
import { connect } from "react-redux";

import Submission from "./submission";

const msp = (state, ownProps) => {
  const submissionId = ownProps.match.params.submissionId;
  const submission = state.entities.submissions[submissionId];
  const currentUserId = state.session.id;
  debugger
  return {
    errors: state.errors.session,
    submissionId,
    submission,
    currentUserId,
  };
};

const mdp = dispatch => {
  return {
    fetchAllUsers: () => dispatch(receiveAllUsers()),
    fetchAllSubs: () => dispatch(receiveAllSubs()),
    fetchAllBoxes: () => dispatch(receiveAllBoxes()),
    receiveSub: id => dispatch(receiveSub(id)),
    deleteSub: ({ submissionId, currentUserId }) => dispatch(deleteSub({ submissionId, currentUserId })),
  };
};

export default connect(msp, mdp)(Submission);
