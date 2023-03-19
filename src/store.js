import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counterSlice";
import tableSlice from "./features/tableSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    tables: tableSlice,
  },
});
