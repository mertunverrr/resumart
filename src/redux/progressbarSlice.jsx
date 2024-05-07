import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const progressbarSlice = createSlice({
  name: "progressBar",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    changeValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { increment, decrement, changeValue } = progressbarSlice.actions;
export default progressbarSlice.reducer;
