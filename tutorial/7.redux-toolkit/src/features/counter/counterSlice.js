import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counterValue: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increase: (state) => {
      state.counterValue++;
    },
    decrease: (state) => {
      state.counterValue--;
    },
    increaseByAmount: (state, action) => {
      state.counterValue += action.payload;
    },
  },
});

export default counterSlice.reducer;
export const { increase, decrease, increaseByAmount } = counterSlice.actions;
export const selectCounter = (state) => state.counter.counterValue;
