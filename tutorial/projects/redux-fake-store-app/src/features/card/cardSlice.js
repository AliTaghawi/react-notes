import { createSlice } from "@reduxjs/toolkit";

import { sumCounter, sumTotal } from "../../helpers/helpers";

const initialState = {
  selectedItems: [],
  itemsCounter: 0,
  total: 0,
  checkout: false,
};

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addItem: (state, action) => {
      if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
        state.selectedItems.push({ ...action.payload, quantity: 1 });
      }
      state.itemsCounter = sumCounter(state.selectedItems);
      state.total = sumTotal(state.selectedItems);
      state.checkout = false;
    },
    removeItem: (state, action) => {
      const newSelectedItems = state.selectedItems.filter(
        (item) => item.id !== action.payload.id,
      );
      state.selectedItems = [...newSelectedItems];
      state.itemsCounter = sumCounter(state.selectedItems);
      state.total = sumTotal(state.selectedItems);
    },
    increaseItem: (state, action) => {
      const index = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id,
      );
      state.selectedItems[index].quantity++;
      state.itemsCounter = sumCounter(state.selectedItems);
      state.total = sumTotal(state.selectedItems);
    },
    decreaseItem: (state, action) => {
      const index = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id,
      );
      state.selectedItems[index].quantity--;
      state.itemsCounter = sumCounter(state.selectedItems);
      state.total = sumTotal(state.selectedItems);
    },
    checkout: (state) => {
      state.selectedItems = [];
      state.itemsCounter = 0;
      state.total = 0;
      state.checkout = true;
    },
  },
});

export default cardSlice.reducer;
export const { addItem, removeItem, increaseItem, decreaseItem, checkout } = cardSlice.actions;
