import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./reducers";

// Configures and creates the Redux store with the todoReducer
const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

export default store;
