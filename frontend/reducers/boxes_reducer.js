import { FETCH_BOX, FETCH_ALL_BOXES, DELETE_BOX } from "../actions/box_actions";
import { merge } from "lodash";

const boxesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  
  switch (action.type) {
    case FETCH_BOX:
      return merge({}, state, { [action.box.id]: action.box });
    case FETCH_ALL_BOXES:
      return merge({}, action.boxes);
    case DELETE_BOX:
      newState = merge({}, state);
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
}

export default boxesReducer;