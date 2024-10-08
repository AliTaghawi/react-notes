import { combineReducers } from "redux";

//reducers
import productsDataReducer from "./productsData/storeDataReducer";
import cartContextReducer from "./cartContext/cartContextReducer";

const rootReducer = combineReducers({
  productsData: productsDataReducer,
  cartContext: cartContextReducer,
});

export default rootReducer;
