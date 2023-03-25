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
  token: null,
};

export const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, payload) => {},
    logout: (state) => {
      localStorage.clear();
      state.user = null;
      state.token = null;
    },
    authenticate: (state, action) => {
      const p = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout, authenticate } = slice.actions;

export default slice.reducer;
