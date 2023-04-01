/**
 * @author Brixter
 * @returns {configureStore} the global state configuration
 * store.js is the global store configuration
 * calls all the reducers from features
 * calls the api reducer of services/api
 * adds middleware

 * TODO: add more comment here to make sense
*/

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
import auth from "../features/auth/authSlice";
import todos from "../features/todos/todosSlice";
import users from "../features/users/usersSlice";
import { api } from "./services/api";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth,
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
