import { applyMiddleware, legacy_createStore } from "redux";
import rootReducer from "./rootReducer";

//middlewares
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension'

const store = legacy_createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
