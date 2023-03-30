import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import auth from "../features/authSlice";
import counter from "../features/counterSlice";
import todos from "../features/todosSlice";
import users from "../features/usersSlice";
import api from "./services/api";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth,
    counter,
    users,
    todos,
  },
  // Add api middleware here if there is a backend
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER,
        ],
      },
    })
      .concat(api.middleware)
      .concat(logger),
});
