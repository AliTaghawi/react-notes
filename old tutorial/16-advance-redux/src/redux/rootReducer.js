import { combineReducers } from "redux";

// reducers
import usersReducer from "./users/usersReducer";

const rootReducer = combineReducers({
  usersState: usersReducer,
});

export default rootReducer;
