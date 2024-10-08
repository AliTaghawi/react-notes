import React, { createContext, useReducer } from "react";

const initialState = {
  selectedItems: [],
  totalcount: 0,
  total: 0,
  checkout: false,
};

const counters = (items) => {
  const totalcount = items.reduce((total, item) => total = total + item.countity , 0);
  const total = +items.reduce((total, item) => total + (item.countity * item.price), 0).toFixed(2)
  return {totalcount , total}
}

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
        state.selectedItems.push({
          ...action.payload,
          countity: 1,
        });
      }
      return {
        ...state,
        selectedItems: [...state.selectedItems],
        checkout: false,
        ...counters(state.selectedItems)
      };
    case "REMOVE_ITEM":
      const newSelectedItems = state.selectedItems.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        selectedItems: [...newSelectedItems],
        ...counters(newSelectedItems)
      };
    case "INCREASE":
      const indexI = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[indexI].countity++;
      return {
        ...state,
        ...counters(state.selectedItems)
      };
    case "DECREASE":
      const indexD = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[indexD].countity--;
      return {
        ...state,
        ...counters(state.selectedItems)
      };
    case "CHECKOUT":
      return {
        selectedItems: [],
        totalcount: 0,
        total: 0,
        checkout: true,
      };
    case "CLEAR":
      return {
        selectedItems: [],
        totalcount: 0,
        total: 0,
        checkout: false,
      };
    default:
      return state;
  }
};

export const cartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartData, dispatch] = useReducer(cartReducer, initialState);
  return (
    <cartContext.Provider value={{ cartData, dispatch }}>
      {children}
    </cartContext.Provider>
  );
};

export default CartContextProvider;
