import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/authSlice";
import counterSlice from "./features/counterSlice";
import usersSlice from "./features/usersSlice";
import todosSlice from "./features/todosSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    counter: counterSlice,
    users: usersSlice,
    todos: todosSlice,
  },
});
