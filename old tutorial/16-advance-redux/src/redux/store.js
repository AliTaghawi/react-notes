import { legacy_createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";

//middlewares
import thunk from "redux-thunk";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

const stor = legacy_createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

export default stor;
