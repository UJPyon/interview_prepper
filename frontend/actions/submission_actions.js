import { 
  getAllSubmissions, 
  findSubmission,
  createSubmission,
  updateSubmission,
  deleteSubmission
} from "../util/submission_api_util";

export const FETCH_SUBMISSION = "FETCH_SUBMISSION";
export const FETCH_ALL_SUBMISSIONS = "FETCH_ALL_SUBMISSIONS";
export const DELETE_SUBMISSION = "DELETE_SUBMISSION";

export const fetchSubmission = sub => {
  return {
    type: FETCH_SUBMISSION,
    sub
  };
};
export const fetchAllSubmissions = subs => {
  return {
    type: FETCH_ALL_SUBMISSIONS,
    subs
  };
};

export const removeSubmission = id => {
  return {
    type: DELETE_SUBMISSION,
    id
  };
};

export const receiveSub = id => dispatch => {
  return findSubmission(id).then(sub => dispatch(fetchSubmission(sub)));
};

export const receiveAllSubs = () => dispatch => {
  return getAllSubmissions().then(subs => dispatch(fetchAllSubmissions(subs)));
};

export const createSub = sub => dispatch => {
  return createSubmission(sub).then(sub => dispatch(fetchSubmission(sub)));
};

export const updateSub = sub => dispatch => {
  return updateSubmission(sub).then(sub => dispatch(fetchSubmission(sub)));
};

export const deleteSub = id => dispatch => {
  debugger
  return deleteSubmission(id).then(() => dispatch(removeSubmission(id)));
};
