import { combineReducers } from "redux";
import counterReducer from "./multiple reducer/counter/counterReducer";
import numberReducer from "./multiple reducer/number/numberReducer";

const rootReducer = combineReducers({
  counterState: counterReducer,
  numberState: numberReducer,
})

export default rootReducer;