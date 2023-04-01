/**
 * @author Brixter
 * @returns {resetAuthState} initialize the token
 * @returns {tokenReceived} sets the token
 * TODO: add/update comments
 */

import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { login, logout } from "../../app/services/authServices";

const initialState = {
  token: null,
  user: null,
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetAuthState: () => initialState,
    tokenReceived: (state, { p }) => {
      state.token = p.token;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(login.matchFulfilled, (state, action) => {
      state.token = action.payload.accessToken;
    });
    builder.addMatcher(logout.matchFulfilled, () => initialState);
  },
});

export const { resetAuthState, tokenReceived } = slice.actions;

export default persistReducer(
  {
    key: slice.name,
    storage,
    whitelist: ["token"],
  },
  slice.reducer
);

export const authState = (state) => state.auth;
