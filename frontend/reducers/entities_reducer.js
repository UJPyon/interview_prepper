import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import submissionsReducer from "./submissions_reducer";
import boxesReducer from "./boxes_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  submissions: submissionsReducer,
  boxes: boxesReducer,
});

export default entitiesReducer;