import { createStore } from "redux";
import { createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

createSlice({
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

const counterReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "increment":
      return {
        ...state,
        counter: state.counter + action.value,
      };
    case "decrement":
      return {
        ...state,
        counter: state.counter - action.value,
      };
    case "toggle":
      return {
        ...state,
        showCounter: !state.showCounter,
      };
    default:
      return state;
  }
};

export const store = createStore(counterReducer);
