import { createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state, action) {
      return {
        ...state,
        counter: state.counter + action.payload,
      };
    },
    decrement(state, action) {
      return {
        ...state,
        counter: state.counter - action.payload,
      };
    },
    increase(state, action) {
      return {
        ...state,
        counter: state.counter + action.payload,
      };
    },
    toggleCounter(state) {
      return {
        ...state,
        showCounter: !state.showCounter,
      };
    },
  },
});

export const { increment, decrement, increase, toggleCounter } =
  counterSlice.actions;

export default counterSlice.reducer;
