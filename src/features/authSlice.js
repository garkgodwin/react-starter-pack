/*
  This slice will contain the authentication needed for this application
  reducers:
    1. login: gets the payload with user details and token, saves the token to local storage and details to state
    2. logout: removes the state from auth and clears local storage.
    3. authenticate: called by async authenticate
*/
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

export const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, payload) => {},
    logout: (state) => {
      localStorage.clear();
      state.user = null;
    },
    authenticate: (state) => {
      const token = localStorage.getItem("token");
      console.log(token);
      if (token) {
        if (typeof token === "string") {
          if (token.length > 20) {
            state.user = {}; // fetch user if token is not null
          } else {
            state.user = null;
          }
        } else {
          state.user = null;
        }
      } else {
        state.user = null;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout, authenticate } = slice.actions;

export default slice.reducer;
