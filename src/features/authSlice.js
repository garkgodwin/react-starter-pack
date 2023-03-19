/*
  This slice will contain the authentication needed for this application
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
