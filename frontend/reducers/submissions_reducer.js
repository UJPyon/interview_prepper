import { FETCH_SUBMISSION, FETCH_ALL_SUBMISSIONS, DELETE_SUBMISSION } from "../actions/submission_actions";
import { merge } from "lodash";

const submissionsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  
  switch (action.type) {
    case FETCH_SUBMISSION:
      return merge({}, state, { [action.sub.id]: action.sub });
    case FETCH_ALL_SUBMISSIONS:
      return merge({}, action.subs);
    case DELETE_SUBMISSION:
      newState = merge({}, state);
      debugger
      delete newState[action.curentUserId];
      return newState;
    default:
      return state;
  }
};

export default submissionsReducer;
