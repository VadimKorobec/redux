import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "../store/counterSlice";
import authReducer from "../store/authSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});
