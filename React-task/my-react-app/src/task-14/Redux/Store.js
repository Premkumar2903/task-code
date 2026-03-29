// Redux is:

// A global state management library for React.
// It stores your app's data (state) in one central place called the store.

// Instead of passing data through many components (prop drilling),
// Redux lets all components read and update data from one shared store.


import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./CounterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer
  }
});