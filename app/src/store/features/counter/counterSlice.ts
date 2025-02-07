import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    counter: 1,
  },
  reducers: {
    initializeCount(state, action) {
      state.counter = action.payload;
    },
    increaseCounter(state) {
      state.counter = state.counter + 1;
    },
    decreaseCounter(state) {
      state.counter = state.counter - 1;
    },
  },
});

export const { initializeCount, increaseCounter, decreaseCounter } =
  counterSlice.actions;
export const counterReducer = counterSlice.reducer;
