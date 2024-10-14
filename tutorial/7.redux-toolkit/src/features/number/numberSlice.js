import { createSlice } from "@reduxjs/toolkit";

import { increaseByAmount as increaseCounterByAmount } from "../counter/counterSlice";

const initialState = {
  numberValue: 0,
};

const numberSlice = createSlice({
  name: "number",
  initialState,
  reducers: {
    increase: (state) => {
      state.numberValue++;
    },
    decrease: (state) => {
      state.numberValue--;
    },
    increaseByAmount: (state, action) => {
      state.numberValue += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(increaseCounterByAmount, (state, action) => {
      state.numberValue += action.payload;
    });
  },
});

export default numberSlice.reducer;
export const { increase, decrease, increaseByAmount } = numberSlice.actions;
export const selectNumber = (state) => state.number.numberValue;
