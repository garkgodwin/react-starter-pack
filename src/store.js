import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counterSlice";
import tableSlice from "./features/tableSlice";
import usersSlice from "./features/usersSlice";
import todosSlice from "./features/todosSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    tables: tableSlice,
    users: usersSlice,
    todos: todosSlice,
  },
});
