import { legacy_createStore, applyMiddleware } from "redux";
import Logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'

//one reducer
// import { counterReducer } from "./simple counter/counterReducer";
// const store = legacy_createStore(counterReducer);

//multiple reduce
import rootReducer from "./rootReducer";

const store = legacy_createStore(rootReducer, composeWithDevTools(applyMiddleware(Logger)));

export default store;
