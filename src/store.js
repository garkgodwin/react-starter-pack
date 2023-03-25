import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counterSlice";
import usersSlice from "./features/usersSlice";
import todosSlice from "./features/todosSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    users: usersSlice,
    todos: todosSlice,
  },
});
